const channels = [
  {
    name: "Colors Bangla",
    logo: "https://static.wikia.nocookie.net/etv-gspn-bangla/images/0/00/Colors_Bangla_HD_prelaunch_%282016%29.png/revision/latest?cb=20210507224847",
    url: "http://stvlive.net:8080/colorsbangla/index.m3u8/gazibdz.stream/playlist.m3u8",
    category: "Entertainment"
  },
  {
    name: "Gazi Tv",
    logo: "https://i.postimg.cc/CMrZ8hDz/Gtv.png",
    url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/gazibdz.stream/playlist.m3u8",
    category: "Sports"
  },
  {
    name: "Channel 9",
    logo: "https://i.postimg.cc/0yDrh74w/Channel-9.png",
    url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/channel9hd.stream/playlist.m3u8",
    category: "News"
  },
  {
    name: "Channel I",
    logo: "https://i.postimg.cc/52d256tN/Channel-i.png",
    url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/channeli-8-org.stream/playlist.m3u8",
    category: "Entertainment"
  },
  {
    name: "Nexus Television",
    logo: "https://www.jagobd.com/wp-content/uploads/2021/07/nexustv.png",
    url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDDEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFsaWRtaW51aiPhnPTI2/nexustv.stream/playlist.m3u8",
    category: "News"
  },
  {
    name: "All Time Movies",
    logo: "https://i.postimg.cc/nVNDJ5bd/20250522-024451.jpg",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209612/master.m3u8",
    category: "Movies"
  },
  {
    name: "Bangla Drams",
    logo: "https://i.postimg.cc/G20mh9Lj/20250522-025124.jpg",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209593/master.m3u8",
    category: "Movies"
  },
  {
    name: "Ahil Tv HD",
    logo: "https://i.postimg.cc/6qPT58m2/20250522-024115.jpg",
    url: "https://padmaonline.duckdns.org:8088/restream3/index.m3u8",
    category: "Religious"
  },
  {
    name: "Bangla Music",
    logo: "https://i.postimg.cc/XYc8gBhr/20250522-025321.jpg",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209587/master.m3u8",
    category: "Music"
  },
  {
    name: "Hindi Music",
    logo: "https://i.postimg.cc/mkS3kyGX/20250522-030456.jpg",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209592/master.m3u8",
    category: "Music"
  },
{
    name: "Gopal Bhar",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrBhuJjFmg5TZk7hVQEBtoOs7ejO-gwOOLLe9IAfZvsBblMLMLMZc0ZBsM&s=10",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209611/master.m3u8",
    category: "Animation"
  },
{
    name: "Bangla Waz",
    logo: "https://i.postimg.cc/26DBWLGP/20250522-030650.jpg",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209617/master.m3u8",
    category: "Religious"
},
  {
    name: "Bangla Kirtan",
    logo: "https://i.postimg.cc/HWJVL2TV/20250522-030919.jpg",
    url: "https://cloudfrontnet.vercel.app/tplay/playout/209618/master.m3u8",
    category: "Religious"
  }

];

// 🔁 এই URL টা হবে সব চ্যানেলের জন্য কমন লোগো (প্লে শুরুর আগে দেখা যাবে)
const defaultPoster = "https://i.postimg.cc/Gt7rd4zD/20250609-120504.jpg";

let currentChannel = 0;
let player = null;

function loadChannel(index) {
  const channel = channels[index];
  if (player) player.destroy();

  document.getElementById("player").style.opacity = 0;

  setTimeout(() => {
    player = new Clappr.Player({
      source: channel.url,
      parentId: "#player",
      poster: defaultPoster, // সব চ্যানেলের জন্য একই পোস্টার
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
  channelArray.forEach((channel) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${channel.logo}" alt=""> ${channel.name}`;
    li.onclick = () => {
      const originalIndex = channels.findIndex(c => c.name === channel.name);
      currentChannel = originalIndex;
      loadChannel(currentChannel);
    };
    list.appendChild(li);
  });
}

function renderCategories() {
  const categoryList = document.getElementById('categoryList');
  const categories = [...new Set(channels.map(channel => channel.category))];
  categoryList.innerHTML = '';
  
  categories.forEach(category => {
    const li = document.createElement("li");
    li.textContent = category;
    li.onclick = () => {
      const filtered = channels.filter(channel => channel.category === category);
      renderChannelList(filtered);
    };
    categoryList.appendChild(li);
  });
}

function toggleCategories() {
  const categoryList = document.getElementById('categoryList');
  if (categoryList.style.display === "none") {
    renderCategories();
    categoryList.style.display = "block";
  } else {
    categoryList.style.display = "none";
  }
}

function nextChannel() {
  currentChannel = (currentChannel + 1) % channels.length;
  loadChannel(currentChannel);
}

function prevChannel() {
  currentChannel = (currentChannel - 1 + channels.length) % channels.length;
  loadChannel(currentChannel);
}

renderChannelList();
loadChannel(currentChannel);