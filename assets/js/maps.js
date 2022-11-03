open_map() {
	// Check device type.  Checks whether it's an IPhone, IPad or IPod.
	if ((navigator.platform.indexOf('iPhone') != -1) || (navigator.platform.indexOf('iPad') != -1) || (navigator.platform.indexOf('iPod') != -1)) {
			// This is for the IOS version
		window.open('maps://maps.google.com/');
	} else {
			// This is for the android version
		window.open('https://maps.google.com/');
	}
}
