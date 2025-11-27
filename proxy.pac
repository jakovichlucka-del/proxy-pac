function FindProxyForURL(url, host) {
    // Exclude streaming services (always DIRECT)
    var noProxyStreaming = [
        "netflix.com", "nflxvideo.net", "nflximg.net", "nflxext.com",
        "youtube.com", "ytimg.com", "googlevideo.com", "youtube-nocookie.com",
        "hulu.com", "huluim.com",
        "disneyplus.com", "dssott.com",
        "amazonvideo.com", "primevideo.com", "media-amazon.com",
        "hbomax.com", "max.com", "hbo.com",
        "paramountplus.com", "cbsi.com", "cbs.com",
        "peacocktv.com",
        "apple.com", "apple-tv.com", "tv.apple.com",
        "crunchyroll.com", "vrv.co",
        "funimation.com",
        "tubi.tv",
        "pluto.tv",
        "rokutv.com", "roku.com",
        "sling.com",
        "fubo.tv",
        "showtime.com",
        "starz.com",
        "amcplus.com", "amc.com",

        // Music streaming
        "spotify.com", "scdn.co",
        "soundcloud.com",
        "applemusic.com",
        "tidal.com",
        "deezer.com",
        "pandora.com",
        "iheartradio.com",
        "mixcloud.com",

        // Sports
        "espn.com", "espncdn.com",
        "dazn.com",
        "mlb.com", "mlb.tv",
        "nba.com", "nbatv.com",
        "nfl.com", "nflx.com", "nflplus.com",
        "nhl.com", "nhl.tv",
        "f1tv.com",
        "motogp.com",
        "ufc.com", "ufcfightpass.com",
        "wwe.com", "wwenetwork.com",

        // European streaming
        "bbc.co.uk", "bbc.com", "bbcfmt.hs.llnwd.net",
        "itv.com",
        "channel4.com", "c4assets.com",
        "my5.tv",
        "skysports.com", "sky.com", "skygo.co.nz",
        "nowtv.com",
        "rtve.es",
        "atresplayer.com",
        "mediaset.es",
        "canalplus.com",
        "tf1.fr",
        "m6.fr",
        "arte.tv",
        "rtl.de", "rtlplus.com",
        "zdf.de",
        "orf.at", "orf-tvthek.at",
        "viasat.com",

        // Asia streaming
        "hotstar.com",
        "jiocinema.com",
        "zee5.com",
        "sonyliv.com",
        "voot.com",
        "iq.com", "iqiyi.com",
        "youku.com",
        "tencentvideo.com", "v.qq.com",
        "bilibili.com", "bilibili.tv",
        "line.tv",
        "viu.com",
        "wetv.vip",
        "kocowa.com",

        // LATAM streaming
        "globoplay.com",
        "clarovideo.com",
        "blim.com",
        "starzplay.com",

        // Middle East & Africa
        "shahid.net",
        "osn.com",
        "showmax.com",

        // Social video platforms (large streaming bandwidth)
        "twitch.tv", "ttvnw.net",
        "facebook.com", "fbcdn.net",
        "instagram.com",
        "tiktok.com", "tiktokcdn.com",
        "vk.com", "vkuservideo.net"
    ];

    for (var i = 0; i < noProxyStreaming.length; i++) {
        if (dnsDomainIs(host, noProxyStreaming[i])) {
            return "DIRECT";
        }
    }

    // Domains to route through proxy
    var proxyDomains = [
        "ipaddress.my",
        "whoer.net"
    ];

    for (var i = 0; i < proxyDomains.length; i++) {
        if (dnsDomainIs(host, proxyDomains[i])) {
            return "SOCKS5 127.0.0.1:1080";
        }
    }

    // Everything else goes direct
    return "DIRECT";
}
