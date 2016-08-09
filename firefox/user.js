// Mozilla Firefox User Preferences

// -----------------------------------------------------------------------------
// General
// -----------------------------------------------------------------------------

// Show a blank page when Firefox starts
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.startup.page", 0);
user_pref("browser.rights.3.shown", true);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");
user_pref("browser.usedOnWindows10.introURL", "");

// Show a blank page when opening new tab
user_pref("browser.newtab.url", "about:blank");   // Deprecated since Firefox 41
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.introShown", true);
user_pref("browser.newtabpage.directory.ping", "data:text/plain,");
user_pref("browser.newtabpage.directory.source", "data:text/plain,");

// Always ask me where to save download files
user_pref("browser.download.useDownloadDir", false);

// Disable downloading on desktop
user_pref("browser.download.folderList", 2);

// -----------------------------------------------------------------------------
// Search
// -----------------------------------------------------------------------------

// Set default region for search engines
user_pref("browser.search.region", "JP");
user_pref("browser.search.countryCode", "JP");
user_pref("browser.search.isUS", false);

// -----------------------------------------------------------------------------
// Content
// -----------------------------------------------------------------------------

// Set minimum font size
user_pref("font.minimum-size.ja", 10);
user_pref("font.minimum-size.ko", 10);
user_pref("font.minimum-size.zh-CN", 10);
user_pref("font.minimum-size.zh-HK", 10);
user_pref("font.minimum-size.zh-TW", 10);

// Choose preferred language for displaying pages
user_pref("intl.accept_languages", "ja, zh-tw, zh, en-us, en");

// Disable Geolocation
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "http://127.0.0.1");
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.wifi.xhr.timeout", 1);
user_pref("browser.search.geoip.url", "");

// Disable WebRTC
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.ice.default_address_only", true);

// Disable Beacon
user_pref("beacon.enabled", false);

// Ignore the `ping` attribute for `<a>` elements
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);

// Disable camera controlling
user_pref("camera.control.autofocus_moving_callback.enabled", false);
user_pref("camera.control.face_detection.enabled", false);

// Decrease the maximum number of popups from a single non-click event (Default is 20)
user_pref("dom.popup_maximum", 2);

// Disallow JavaScript to raise or lower windows
user_pref("dom.disable_window_flip", true);

// Disallow JavaScript to move or resize existing windows
user_pref("dom.disable_window_move_resize", true);

// Disable SPDY (SPDY would be deprecated in 2016)
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.v3-1", false);

// -----------------------------------------------------------------------------
// Privacy
// -----------------------------------------------------------------------------

// Request that sites not track me
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.donottrackheader.value", 1);

// Use Tracking Protection in Private Windows
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.trackingprotection.introCount", 20);

// Never accept third-party cookies
user_pref("network.cookie.cookieBehavior", 1);

// Set the maximum number of pages to be retained in the history database
user_pref("places.history.expiration.max_pages", 10000);
user_pref("places.history.expiration.transient_current_max_pages", 10000);

// -----------------------------------------------------------------------------
// Security
// -----------------------------------------------------------------------------

// Block reported attack sites
user_pref("browser.safebrowsing.malware.enabled", true);

// Block reported web forgeries
user_pref("browser.safebrowsing.enabled", true);

// Do not remember passwords for sites
user_pref("signon.rememberSignons", false);

// -----------------------------------------------------------------------------
// Advanced
// -----------------------------------------------------------------------------

// Disable Firefox Health Report
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.documentServerURI", "");
user_pref("datareporting.healthreport.about.reportUrl", "");
user_pref("datareporting.healthreport.about.reportUrlInified", "");
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);

// Disable Crash Reporter
user_pref("breakpad.reportURL", "");

// Disable Telemetry
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", true);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.server", "");

// Disable Telemetry Experiments
user_pref("experiments.enabled", false);
user_pref("experiments.supported", false);
user_pref("experiments.activeExperiment", false);
user_pref("experiments.manifest.uri", "");

// -----------------------------------------------------------------------------
// Add-ons and Plugins
// -----------------------------------------------------------------------------

// Disable enforced add-on signing since Firefox 43
user_pref("xpinstall.signatures.required", false);

// Hide the "Get Add-ons" pane in the Add-ons page
user_pref("extensions.getAddons.showPane", false);

// Ask me to activate plugins by default
user_pref("plugin.default.state", 1);
user_pref("plugin.defaultXpi.state", 1);

// Enable click-to-play and set the session permission
user_pref("plugins.click_to_play", true);
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);

// Click to play Adobe Flash
user_pref("plugin.state.flash", 1);

// -----------------------------------------------------------------------------
// Others
// -----------------------------------------------------------------------------

// Disable Heartbeat
user_pref("browser.selfsupport.url", "");

// Disable Firefox Hello
user_pref("loop.enabled", false);
user_pref("loop.server", "");

// Disable Pocket
user_pref("browser.pocket.enabled", false);
user_pref("browser.pocket.api", "");
user_pref("browser.pocket.site", "");
user_pref("browser.pocket.oAuthConsumerKey", "");
user_pref("reader.parse-on-load.enabled", false);

// Disable capturing page thumbnails
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("pageThumbs.enabled", false);

// Disable Taskbar Jump List in Windows 7 and above
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);

// Disable "Slow startup" warnings
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);

// Disable `about:config` warnings
user_pref("general.warnOnAboutConfig", false);

// Skip the installation delay
user_pref("security.dialog_enable_delay", 0);

// Disable closing browser with last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Disable UI animation
user_pref("browser.fullscreen.animate", false);
user_pref("browser.tabs.animate", false);

// Disable UnifiedComplete
user_pref("browser.urlbar.unifiedcomplete", false);

// Disable search suggestions in URL bar
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);

// Set the cache directory location
// user_pref("browser.cache.disk.parent_directory", "");
