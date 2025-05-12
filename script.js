document.addEventListener('DOMContentLoaded', function() {
    // Channel data
    const channels = [
        {
            id: 1,
            name: "News 24",
            logo: "https://via.placeholder.com/80/3498db/ffffff?text=News24",
            streamUrl: "https://example.com/stream1.m3u8",
            description: "24/7 News coverage from around the world"
        },
        {
            id: 2,
            name: "Sports HD",
            logo: "https://via.placeholder.com/80/e74c3c/ffffff?text=Sports",
            streamUrl: "https://example.com/stream2.m3u8",
            description: "Live sports events and highlights"
        },
        {
            id: 3,
            name: "Movie Channel",
            logo: "https://via.placeholder.com/80/2ecc71/ffffff?text=Movies",
            streamUrl: "https://example.com/stream3.m3u8",
            description: "Latest blockbuster movies 24/7"
        },
        {
            id: 4,
            name: "Music TV",
            logo: "https://via.placeholder.com/80/9b59b6/ffffff?text=Music",
            streamUrl: "https://example.com/stream4.m3u8",
            description: "Non-stop music videos and concerts"
        },
        {
            id: 5,
            name: "Kids Zone",
            logo: "https://via.placeholder.com/80/f1c40f/ffffff?text=Kids",
            streamUrl: "https://example.com/stream5.m3u8",
            description: "Cartoons and educational programs"
        },
        {
            id: 6,
            name: "Documentary",
            logo: "https://via.placeholder.com/80/1abc9c/ffffff?text=Docu",
            streamUrl: "https://example.com/stream6.m3u8",
            description: "Nature, science and history documentaries"
        },
        {
            id: 7,
            name: "Fashion TV",
            logo: "https://via.placeholder.com/80/e67e22/ffffff?text=Fashion",
            streamUrl: "https://example.com/stream7.m3u8",
            description: "Latest fashion trends and shows"
        },
        {
            id: 8,
            name: "Cooking Channel",
            logo: "https://via.placeholder.com/80/d35400/ffffff?text=Cooking",
            streamUrl: "https://example.com/stream8.m3u8",
            description: "Culinary shows and recipes"
        }
    ];

    // News ticker data
    const newsItems = [
        "Breaking: New channels added to our lineup! Check them out now.",
        "Special offer: Subscribe now and get 30 days free trial.",
        "Live sports: Championship finals streaming this weekend.",
        "System update: Improved streaming quality for all users."
    ];

    // Initialize player variable
    let player;

    // Populate channel list
    const channelList = document.querySelector('.channel-list');
    channels.forEach(channel => {
        const channelItem = document.createElement('div');
        channelItem.className = 'channel-item';
        channelItem.innerHTML = `
            <img src="${channel.logo}" alt="${channel.name}">
            <span class="channel-name">${channel.name}</span>
        `;
        channelItem.addEventListener('click', () => loadChannel(channel));
        channelList.appendChild(channelItem);
    });

    // Initialize news ticker
    const newsTicker = document.getElementById('news-ticker');
    let currentNewsIndex = 0;
    
    function updateNewsTicker() {
        newsTicker.textContent = newsItems[currentNewsIndex];
        currentNewsIndex = (currentNewsIndex + 1) % newsItems.length;
    }
    
    updateNewsTicker();
    setInterval(updateNewsTicker, 10000);

    // Load channel function
    function loadChannel(channel) {
        // Update channel info
        document.getElementById('channel-logo').src = channel.logo;
        document.getElementById('channel-name').textContent = channel.name;
        document.getElementById('channel-desc').textContent = channel.description;
        
        // Add animation class
        const channelInfo = document.querySelector('.channel-info');
        channelInfo.classList.add('animate-text');
        setTimeout(() => channelInfo.classList.remove('animate-text'), 500);
        
        // Highlight selected channel
        document.querySelectorAll('.channel-item').forEach(item => {
            item.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
        
        // Initialize or update player
        if (player) {
            player.destroy();
        }
        
        player = new Clappr.Player({
            source: channel.streamUrl,
            parentId: "#player",
            width: '100%',
            height: '100%',
            autoPlay: true,
            mute: false,
            poster: channel.logo,
            plugins: [Clappr.FlasHLS],
            watermark: 'https://via.placeholder.com/100x30/000000/ffffff?text=LiveTV',
            position: 'top-right',
            events: {
                onError: function() {
                    document.getElementById('channel-name').textContent = "Error loading channel";
                    document.getElementById('channel-desc').textContent = "Please try another channel or check your connection";
                }
            }
        });
    }

    // Load first channel by default
    if (channels.length > 0) {
        loadChannel(channels[0]);
    }

    // Search functionality
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        document.querySelectorAll('.channel-item').forEach(item => {
            const channelName = item.querySelector('.channel-name').textContent.toLowerCase();
            if (channelName.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Add pulse animation to logo on hover
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', function() {
        this.classList.add('pulse');
    });
    logo.addEventListener('mouseleave', function() {
        this.classList.remove('pulse');
    });
});