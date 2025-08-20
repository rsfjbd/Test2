const channels = [
  {
    "name": "WWE",
    "logo": "https://i.postimg.cc/0jv7Xbqz/wwe.jpg",
    "url": "https://smart.bengaldigital.live/WWE/index.m3u8"
  },
  {
    "name": "T Sports 1",
    "logo": "https://i.postimg.cc/L6VyzMM9/tsports.jpg",
    "url": "https://tvsen5.aynaott.com/tsports/index.m3u8?e=1753741223&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=286a45e3006c0b412ce19722499f2126"
  },
  {
    "name": "T Sports 2",
    "logo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrx9Vf2tgrr3jdgFPrpu1jEE_M7RGIgK56p02C9a1AzbWB4D63kX5GMoRsOiekjFbU46ObpSuKCJpgBFz9TtsX0aiGGeoqAq2Opc5VuC2UVwUR4a0l0gvv3-JkMxqwjtuUWc-D3ohVFYb5LVvHhZY4pqtVfeTO0PWmHryZWG2Ayjv8Zc8/s1600/t%20sports.png",
    "url": "https://live.tsports.com/mobile_hls/tsports_live_1/playlist.m3u8"
  },
  {
    "name": "A Sports",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn9GcSk9C68th1pite23d5vit1EI6d35XMuVbcuqhaPLKxTVoeSSktHCUA5rFdK&s=10",
    "url": "https://stream2.aryzap.com/v1/0185aab4885d1ea5578a03c0bfd5/0185aab4ab4e1ea540e60615c5d4/main.m3u8"
  },
  {
    "name": "Star Sports 1",
    "logo": "https://i.postimg.cc/HWXvkyZ7/stars1.jpg",
    "url": "https://live20.bozztv.com/akamaissh101/ssh101/starsports/chunks.m3u8"
  },
    {
    "name": "Ten Cricket",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo1clcgXKVu87qdMMczrTAGwcnEgTi6AUW0lncEdjGlNSgKIGQ3wXeJnE4&s=10",
    "url": "https://edge3-moblive.yuppcdn.net/drm/smil:tencricketdrm.smil/index.m3u8"
  },
  {
    "name": "Willow Sports",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaejQ5yYMfDTHbC8SP-Bgp6S2nM_QqaO_skQ&usqp=CAU",
    "url": "https://tvsen5.aynaott.com/willowhd/index.m3u8?e=1753741230&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=5fca30251e531337b5339bbba78bd449"
  },
  {
    "name": "Sony Ten 1",
    "logo": "https://i.ibb.co/bRbDrQgX/ea3358b9-2bec-4615-a889-daa2e396c74c.png",
    "url": "http://103.110.111.36:8081/live/ten1_720p/chunks.m3u8"
  },
  {
    "name": "Sony Ten 2",
    "logo": "https://i.ibb.co/GQx8hNbY/a664bf2a-af9c-4e79-89df-50a40a6e66.png",
    "url": "http://103.110.111.36:8081/live/spten2_720p/playlist.m3u8"
  },
  {
    "name": "Sony Ten 5",
    "logo": "https://i.ibb.co/N65GDCVZ/241705c1-06a9-4694-92c6-0013d1879e42.png",
    "url": "http://103.110.111.36:8081/live/spten5_720p/playlist.m3u8"
  },
  {
    "name": "RTA Sports",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwZU-ecqYXjJgAdwoHkoQBNVu3raFFsVD5SzB3Og2vNtaQwAwaGHG6Uw&s=10",
    "url": "https://rtatv.akamaized.net/Content/HLS/Live/channel(RTA3)/variant.m3u8"
  },
  {
    "name": "STAR JALSHA HD",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3W9qiYW7toPvoJs-jvG0zhxuFFp1EQq1OfHnMWGVQSzeH3bXz78Md696q&s=10",
    "url": "https://live.dinesh29.com.np/stream/jiotvplus/starjalshahd/master.m3u8"
  },
  {
    "name": "STAR JALSHA",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Star_Jalsha_logo_2023.png/640px-Star_Jalsha_logo_2023.png",
    "url": "https://catchup.yuppcdn.net/amazonv2/36/preview/starjalsha/master/chunklist.m3u8"
  },
  {
    "name": "JALSHA MOVIES HD",
    "logo": "https://banner2.cleanpng.com/20180623/qf/aazug0foc.webp",
    "url": "https://live.dinesh29.com.np/stream/jiotvplus/jalshamovieshd/master.m3u8"
  },
  {
    "name": "Zee Bangla",
    "logo": "https://i.postimg.cc/ZRjjSzFd/20250403-190441.png",
    "url": "https://catchup.yuppcdn.net/amazonv2/36/preview/zeebangla/master/chunklist.m3u8"
  },
  {
    "name": "Colors Bangla",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1AgHbp3MoXRBzQPjR1DcUj1hgC6e45uOl5-C9QI-0jpxoOUWUQdI8n4&s=10",
    "url": "https://smart.bengaldigital.live/Zee-Bangla-Cinema/index.m3u8"
  },
  {
    "name": "Colors Bangla",
    "logo": "https://i.postimg.cc/bJFbgy93/colorsbangla.png",
    "url": "https://tvsen5.aynaott.com/u3LkNQ7UHhFX/tracks-v1a1/mono.ts.m3u8"
  },
  {
    "name": "Eiter10 Bangla",
    "logo": "https://i.postimg.cc/fypczz3J/enter10bangla.png",
    "url": "https://live-bangla.akamaized.net/liveabr/pub-iobanglakp3sff/live_720p/chunks.m3u8"
  },
  {
    "name": "Sangeet Bangla",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYYLijjughYF51FVjWeUtGKFckDYqm8B1elAgERP4HIDMf8KpDYC7LpZ4&s=10",
    "url": "https://cdn-4.pishow.tv/live/1143/master.m3u8"
  },
  {
    "name": "SANANDA TV",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTylaokf1TCdYunrrVZdAbn9A1lolFbzxMEmLAOGipEbT9xQaqF4-eo27nn&s=10",
    "url": "https://live.sanonda.tv/sanonda/index.m3u8"
  },
  {
    "name": "SONY AATH HD",
    "logo": "https://upload.wikimedia.org/wikipedia/en/d/d4/Sony_Aath_new.png",
    "url": "http://stvlive.net:8080/sonyaath/tracks-v1a1/mono.m3u8"
  },
  {
    "name": "Tv9 Bangla",
    "logo": "https://i.postimg.cc/pXb0Nvjp/20250403-191930.png",
    "url": "https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/tv9-bangla/main.m3u8"
  },
  {
    "name": "Bangla Plus",
    "logo": "https://i.postimg.cc/4y7TM4dJ/Bangla-Plus.png",
    "url": "https://live-stream.utkalbongo.com/hls/livebanglatvstream.m3u8"
  },
  {
    "name": "Tara Cenema",
    "logo": "https://i.postimg.cc/8c2VV8JL/20241103-070341.png",
    "url": "http://103.145.48.150:90/laosat24/taratv/index.m3u8"
  },
  {
    "name": "Amar Digital",
    "logo": "https://i.postimg.cc/BnGGY0G0/Amar-Digital.png",
    "url": "https://live-stream.utkalbongo.com/utkalbongo/stream2/hls/amarbanglatwolivestream.m3u8"
  },
  {
    "name": "Amar Bangla",
    "logo": "https://i.postimg.cc/4dnC74pz/Amar-Bangla.png",
    "url": "https://live-stream.utkalbongo.com/utkalbongo/stream10/hls/amarbangla.m3u8"
  },
  {
    "name": "Moon TV",
    "logo": "https://i.postimg.cc/027N2Zk9/Mon.png",
    "url": "https://live-stream.utkalbongo.com/utkalbongo/stream7/hls/montvlivestream.m3u8"
  },
  {
    "name": "DD বাংলা",
    "logo": "https://i.postimg.cc/kM8sH9Jz/20250407-152000.png",
    "url": "https://d3eyhgoylams0m.cloudfront.net/v1/manifest/93ce20f0f52760bf38be911ff4c91ed02aa2fd92/ed7bd2c7-8d10-4051-b397-2f6b90f99acb/8fd382eb-7285-4e25-be5a-3e5795672ffe/2.m3u8"
  },
  {
    "name": "DD বাংলা",
    "logo": "https://i.postimg.cc/kM8sH9Jz/20250407-152000.png",
    "url": "http://103.122.252.100:8080/NAGORIK-TV/index.m3u84e25-be5a-3e5795672ffe/2.m3u8"
  },
  {
    "name": "Deepto TV HD",
    "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1742713000749.png",
    "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1711/output/index.m3u8"
  },
  {
    "name": "Bangla Vision",
    "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735561344354.png",
    "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1715/output/index.m3u8"
  },
  {
    "name": "BTV",
    "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735561595482.png",
    "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8"
  },
  {
    "name": "HUM TV",
    "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1739963480044.png",
    "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1721/output/index.m3u8"
  },
  {
    "name": "NTV",
    "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735560841094.png",
    "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8"
  },
  {
    "name": "ATN Bangla",
    "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1740553740665.png",
    "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/index.m3u8"
  },
  {
    "name": "Channel I HD",
    "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1740567626692.png",
    "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1723/output/index.m3u8"
  },
  {
    "name": "Jamuna TV",
    "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735560213832.png",
    "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8"
  },
  {
    "name": "ATN News",
    "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1739962961772.png",
    "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8"
  },
  {
    "name": "Channel 24 HD",
    "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735556516924.png",
    "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8"
  },
  {
    "name": "Ekattor HD",
    "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1739963327549.png",
    "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/index.m3u8"
  },
  {
    "name": "Independent TV",
    "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1739964387847.png",
    "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8"
  },
  {
    "name": "Somoy",
    "logo": "https://tstatic.akash-go.com/cms-ui/images/custom-content/1735560559088.png",
    "url": "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8"
  },
  {
    "name": "Channel I",
    "logo": "https://s3.aynaott.com/storage/28931315743beff50fc2c1312b1f8261",
    "url": "https://tvsen6.aynaott.com/channeli/index.m3u8?e=1753741199&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=29e9b3ff219922de66c032adb4d6cca5"
  },
  {
    "name": "NTV",
    "logo": "https://s3.aynaott.com/storage/73c39182782a201338070c2f4429e449",
    "url": "https://tvsen5.aynaott.com/xV4jEKf3D9zc/index.fmp4.m3u8?token=010d732ebd55578c294ad9b7a9378a4d38e1545e-5947172ad1840765129abbacfabd89c6-1753734599-1753733699&remote=no_check_ip"
  },
  {
    "name": "Bangla Vision",
    "logo": "https://s3.aynaott.com/storage/e86c14566b4d5b6dd68ac37dce4f6043",
    "url": "https://tvsen5.aynaott.com/banglavision/index.m3u8?e=1753741200&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=4dc66f272e2e0797c300f871ec29e7ac"
  },
  {
    "name": "RTV",
    "logo": "https://s3.aynaott.com/storage/fd634ca672c8294f109225ca42d20991",
    "url": "https://tvsen5.aynaott.com/RtvHD/index.m3u8?e=1753741200&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=8518bab8ef9355885a2e9c3fbbd55b47"
  },
  {
    "name": "ATN Bangla",
    "logo": "https://s3.aynaott.com/storage/a4d2bbdb65b4abc239eaddedda1e5d22",
    "url": "https://tvsen5.aynaott.com/atnbangla/index.m3u8?e=1753741200&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=3d1a0272a03dccbd358530e453306a0e"
  },
  {
    "name": "ETV",
    "logo": "https://s3.aynaott.com/storage/d805cf57543080b49de8a2621cd54da4",
    "url": "https://tvsen6.aynaott.com/etv/index.m3u8?e=1753741200&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=b2dcad848664a69ead35186027779c9b"
  },
  {
    "name": "Maasranga TV",
    "logo": "https://s3.aynaott.com/storage/5db4a54244a315684254b441e92539e2",
    "url": "https://tvsen5.aynaott.com/maasrangatv/index.m3u8?e=1753741201&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=de21479033f8c7cb7372ac9c67473834"
  },
  {
    "name": "Deepto TV",
    "logo": "https://s3.aynaott.com/storage/12462ef0383fa0e927215d56cd51acf8",
    "url": "https://tvsen5.aynaott.com/DeeptoTVHD/index.fmp4.m3u8?token=70082a598a794317d35c2236906d0ba0539298fe-010185cb44f858300084c6aefe087085-1753734601-1753733701&remote=no_check_ip"
  },
  {
    "name": "Somoy News TV",
    "logo": "https://s3.aynaott.com/storage/cbadf009eebf7506c7633b3a98a2f042",
    "url": "https://tvsen6.aynaott.com/somoytv/index.m3u8?e=1753741201&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=8f952f655c5a7cbcfac7872ccb7c18c7"
  },
  {
    "name": "T Sports HD",
    "logo": "https://s3.aynaott.com/storage/9fbf3e9ed22c8cc71c93f25d6cb9be32",
    "url": "https://tvsen5.aynaott.com/tsports/index.m3u8?e=1753741201&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=70d44f9122b66ba1a039b015b3d9ab6b"
  },
  {
    "name": "Gazi TV",
    "logo": "https://s3.aynaott.com/storage/0b4d83d0baf7513beae135e134fced2c",
    "url": "https://tvsen5.aynaott.com/Ravc7gPCZpxk/index.m3u8?e=1753741202&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=25899d937e0a887d71c3d543b8a6220e"
  },
  {
    "name": "Desh TV",
    "logo": "https://s3.aynaott.com/storage/9ef657aca7c0009e4f0675af3b5190d8",
    "url": "https://tvsen6.aynaott.com/deshtv/index.m3u8?e=1753741202&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=65ab91e6325bfae402d5e6c110664df7"
  },
  {
    "name": "Boishakhi TV",
    "logo": "https://s3.aynaott.com/storage/ec66cdf9538da75b08112f9ae2f151bc",
    "url": "https://tvsen6.aynaott.com/boishakhitv/index.m3u8?e=1753741202&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=dc76daf9531d10db035f1048615f2214"
  },
  {
    "name": "Channel 9",
    "logo": "https://s3.aynaott.com/storage/affd223f023a705e3a1c5df263d0a7ef",
    "url": "https://tvsen6.aynaott.com/channel9/index.m3u8?e=1753741202&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=fcef513d044b3117e5604d8d6223b025"
  },
  {
    "name": "Channel 24",
    "logo": "https://s3.aynaott.com/storage/502b8de24fcfc4443c376270a6e45527",
    "url": "https://tvsen6.aynaott.com/channel24/index.m3u8?e=1753741202&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=85169db4171f59cc700c2230da1474b0"
  },
  {
    "name": "Asian TV",
    "logo": "https://s3.aynaott.com/storage/8faf522ac37bfcd9c163145f77a9a024",
    "url": "https://tvsen6.aynaott.com/asiantv/index.m3u8?e=1753741203&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=61cdab06c09ecd648357cf4ac0679f74"
  },
  {
    "name": "ATN News",
    "logo": "https://s3.aynaott.com/storage/8e9db8284bf110dce597f48674d1968a",
    "url": "https://tvsen6.aynaott.com/atnnews/index.m3u8?e=1753741203&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=f7e658147dc39ae5e53920108161da10"
  },
  {
    "name": "Independent TV",
    "logo": "https://s3.aynaott.com/storage/ee4466e6b775bf83f4f5a90a1dc89234",
    "url": "https://tvsen6.aynaott.com/independenttv/index.m3u8?e=1753741203&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=45e2d11e90b3242b1167f69dcbae7861"
  },
  {
    "name": "SA TV",
    "logo": "https://s3.aynaott.com/storage/83796140b05a889d37c4c98ed8c43821",
    "url": "https://tvsen6.aynaott.com/satv/index.m3u8?e=1753741203&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=3bba4c56325c7ade12be44d6d003375b"
  },
  {
    "name": "DBC News",
    "logo": "https://s3.aynaott.com/storage/e8bb743022a2b6b0ee714bbdb2715cbe",
    "url": "https://tvsen6.aynaott.com/dbcnews/index.m3u8?e=1753741204&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=de6168e3320b292be83833132d83ade8"
  },
  {
    "name": "Ekhon TV",
    "logo": "https://s3.aynaott.com/storage/94ff4123b6c533d0332d63944ccf5868",
    "url": "https://tvsen6.aynaott.com/ekhontv/index.m3u8?e=1753741204&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=5d53d11d328153c8c0ebbe56bf6de37e"
  },
  {
    "name": "News 24 BD",
    "logo": "https://s3.aynaott.com/storage/b102f206ea73dfdbc591e9cf6c8c478d",
    "url": "https://tvsen6.aynaott.com/news24/index.m3u8?e=1753741204&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=0e298e2f9e3a55bb4a903008493653ec"
  },
  {
    "name": "Duronto TV",
    "logo": "https://s3.aynaott.com/storage/1d3d06e02fc9ba45a990b65aebd04ebc",
    "url": "https://tvsen4.aynaott.com/durontotv/index.m3u8?e=1753820404&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=67a2ed7a277714726ccd76d662959055"
  },
  {
    "name": "Bangla TV",
    "logo": "https://s3.aynaott.com/storage/5b22893ae4e816ef2cf87e63c96e9e08",
    "url": "https://tvsen6.aynaott.com/banglatv/index.m3u8?e=1753741205&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=f12df6b329a0ee4ea22ef2c0634a39c6"
  },
  {
    "name": "Ekattor TV",
    "logo": "https://s3.aynaott.com/storage/c69d4851784c5fefa6d0117653d227c3",
    "url": "https://tvsen6.aynaott.com/ekattorbdtv/index.m3u8?e=1753741205&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=8464bbbc9450c5e5935bca44a76de9c1"
  },
  {
    "name": "Jamuna TV",
    "logo": "https://s3.aynaott.com/storage/18c65f48bb15b1e59a8d91b8d1675122",
    "url": "https://tvsen6.aynaott.com/jamunatv/index.m3u8?e=1753741205&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=51b90e88fcf722380246847daaf2ba24"
  },
  {
    "name": "Mohona TV",
    "logo": "https://s3.aynaott.com/storage/663c8079982ff6a45fc99e78c865a63d",
    "url": "https://tvsen6.aynaott.com/mohonatv/index.m3u8?e=1753741205&u=9a031201-22d8-4f7e-9516-7d246a8fedc3&token=7747ffeca756c12cc69dcb4b3c9312e8"
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


renderChannelList();

// প্রাথমিক অবস্থায় প্রথম চ্যানেল চালু করা
if (channels.length > 0) {
  loadChannel(channels[currentChannel]);
}

// Add keyboard event listener for arrow keys
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
    prevChannel();
  } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
    nextChannel();
  }
});
