function FindProxyForURL(url, host) {
	if (shExpMatch(url, "*.mihoyo.com") || shExpMatch(url, "*.yuanshen.com")|| shExpMatch(url, "*.hoyoverse.com")){
		return "PROXY 150.158.6.121:18080"
	}
	return "DIRECT"
}
