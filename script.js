const channels = [
  {
    "name": "N TV",
    "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735560841094.png",
    "url": "https://ythls-v3.onrender.com/channel/UC0V3IJCnr6ZNjB9t_GLhFFA.m3u8"
  },
  {
    "name": "Channel i",
    "logo": "https://upload.wikimedia.org/wikipedia/en/2/20/Channel-i.svg",
    "url": "https://ythls-v3.onrender.com/channel/UCdKuS9EjfeLCzv2nhwaGqag.m3u8"
  },
  {
    "name": "ATN News",
    "logo": "https://upload.wikimedia.org/wikipedia/en/1/1a/ATN_News_logo.png",
    "url": "https://ythls-v3.onrender.com/channel/UCi74OQxG_6qVt7zE7shwq5Q.m3u8"
  },
  {
    "name": "Somoy TV",
    "logo": "https://upload.wikimedia.org/wikipedia/en/1/17/Somoy_TV_logo.png",
    "url": "https://ythls-v3.onrender.com/channel/UCxHoBXkY88Tb8z1Ssj6CWsQ.m3u8"
  },
  {
    "name": "RTV",
    "logo": "https://upload.wikimedia.org/wikipedia/en/f/f9/Rtv_bangladesh_logo.png",
    "url": "https://ythls-v3.onrender.com/channel/UCUlH4G7c1zG0uO7AqS0XISA.m3u8"
  },
  {
    "name": "Maasranga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/2/23/Maasranga_Television_Logo.png",
    "url": "https://ythls-v3.onrender.com/channel/UCdq4pJ7E3lU10hG_Aw5z1-Q.m3u8"
  },
  {
    "name": "Independent TV",
    "logo": "https://upload.wikimedia.org/wikipedia/en/5/54/Independent_TV_logo.png",
    "url": "https://ythls-v3.onrender.com/channel/UCpL8xJ9sZHY4fhx7ZEdnYxQ.m3u8"
  },
  {
    "name": "DBC News",
    "logo": "https://upload.wikimedia.org/wikipedia/en/e/e7/DBC_News_Logo.png",
    "url": "https://ythls-v3.onrender.com/channel/UCN2vO1xG2xAq7npOTQY3g6g.m3u8"
  },
  {
    "name": "Ekattor TV",
    "logo": "https://upload.wikimedia.org/wikipedia/en/1/15/Ekattor_TV_logo.png",
    "url": "https://ythls-v3.onrender.com/channel/UCqfQnx1i-J5knQ4K-bYrj9Q.m3u8"
  },
  {
    "name": "Bangla Vision",
    "logo": "https://upload.wikimedia.org/wikipedia/en/7/7d/Banglavision_logo.png",
    "url": "https://ythls-v3.onrender.com/channel/UCVXsZpJ6w8oyd2X2gYdExMw.m3u8"
  }
];

let currentChannel = 0;
let player = null;

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

// ফুলস্ক্রিন বাটন
document.getElementById('fullscreenButton').addEventListener('click', () => {
  if (player) {
    player.requestFullscreen();
  }
});

renderChannelList();

// প্রাথমিক অবস্থায় প্রথম চ্যানেল চালু করা
if (channels.length > 0) {
  loadChannel(channels[currentChannel]);
}
