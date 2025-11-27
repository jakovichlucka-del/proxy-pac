function FindProxyForURL(url, host) {
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

    // All other traffic goes directly
    return "DIRECT";
}
