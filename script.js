const channels = [
  // এখানে আপনার চ্যানেলগুলোর তথ্য যোগ করুন
  // উদাহরণ:
  // {
  //   "name": "N TV",
  //   "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735560841094.png",
  //   "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8"
  // }
];

let currentChannel = 0;
let player = null;
let hideTimeout;

function loadChannel(channel) {
  if (player) player.destroy();

  document.getElementById("player").style.opacity = 0;

  setTimeout(() => {
    player = new Clappr.Player({
      source: channel.url,
      parentId: "#player",
      width: "100%",
      height: "100%",
      autoPlay: true,
      mute: false,
    });
    document.getElementById("player").style.opacity = 1;
  }, 300);
}

function searchChannels() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const filteredChannels = channels.filter(channel => 
    channel.name.toLowerCase().includes(searchTerm)
  );
  renderChannelList(filteredChannels);
}

function renderChannelList(channelArray = channels) {
  const list = document.getElementById("channelList");
  list.innerHTML = '';
  if (channelArray.length === 0) {
    list.innerHTML = '<p style="text-align: center; color: #888;">কোনো চ্যানেল নেই।</p>';
    return;
  }
  channelArray.forEach((channel) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${channel.logo}" alt=""> ${channel.name}`;
    li.onclick = () => {
      currentChannel = channels.findIndex(c => c.name === channel.name);
      loadChannel(channel);
    };
    list.appendChild(li);
  });
}

function nextChannel() {
  if (channels.length === 0) return;
  currentChannel = (currentChannel + 1) % channels.length;
  loadChannel(channels[currentChannel]);
}

function prevChannel() {
  if (channels.length === 0) return;
  currentChannel = (currentChannel - 1 + channels.length) % channels.length;
  loadChannel(channels[currentChannel]);
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('visible');
  
  if (sidebar.classList.contains('visible')) {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      sidebar.classList.remove('visible');
    }, 3000); // 3 সেকেন্ড পর হাইড হবে
  }
}

// ফুলস্ক্রিন বাটন
document.getElementById('fullscreenButton').addEventListener('click', () => {
  if (player) {
    player.requestFullscreen();
  }
});

renderChannelList();

// প্রাথমিক অবস্থায় কোনো চ্যানেল না থাকলে প্রথম চ্যানেলে লোড করার প্রয়োজন নেই।
if (channels.length > 0) {
  loadChannel(channels[currentChannel]);
}
