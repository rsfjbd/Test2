const channels = [
  {
      "name": "WWE",
      "group-title": "SPORTS",
      "logo": "https://i.postimg.cc/0jv7Xbqz/wwe.jpg",
      "url": "https://smart.bengaldigital.live/WWE/index.m3u8"
    },
    {
      "name": "T Sports 1",
      "group-title": "SPORTS",
      "logo": "https://i.postimg.cc/L6VyzMM9/tsports.jpg",
      "url": "https://tvsen5.aynaott.com/tsports/index.m3u8?e=1753741223&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=286a45e3006c0b412ce19722499f2126"
    },
    {
      "name": "Star Sports 1",
      "group-title": "SPORTS",
      "logo": "https://i.postimg.cc/HWXvkyZ7/stars1.jpg",
      "url": "https://live20.bozztv.com/akamaissh101/ssh101/starsports/chunks.m3u8"
    },
    {
      "name": "Zee Bangla",
      "group-title": "Kolkata",
      "logo": "https://i.postimg.cc/ZRjjSzFd/20250403-190441.png",
      "tvg-id": "2",
      "url": "https://catchup.yuppcdn.net/amazonv2/36/preview/zeebangla/master/chunklist.m3u8"
    },
    {
      "name": "NTV",
      "group-title": "Akash Go",
      "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735560841094.png",
      "tvg-id": "99",
      "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8"
    },
    {
      "name": "Bangla Vision",
      "group-title": "Akash Go",
      "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735561344354.png",
      "tvg-id": "100",
      "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1715/output/index.m3u8"
    },
    {
      "name": "Somoy",
      "group-title": "Akash Go",
      "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735560559088.png",
      "tvg-id": "98",
      "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8"
    },
    {
      "name": "Jamuna TV",
      "group-title": "Akash Go",
      "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735560213832.png",
      "tvg-id": "97",
      "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8"
    },
    {
      "name": "Independent TV",
      "group-title": "Akash Go",
      "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1739964387847.png",
      "tvg-id": "96",
      "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8"
    }
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

// প্রাথমিক অবস্থায় কোনো চ্যানেল না থাকলে প্রথম চ্যানেলে লোড করার প্রয়োজন নেই।
if (channels.length > 0) {
  loadChannel(channels[currentChannel]);
}
