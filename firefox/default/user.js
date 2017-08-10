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
user_pref("browser.laterrun.enabled", false);

// Show a blank page when opening new tab
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.introShown", true);
user_pref("browser.newtabpage.directory.source", "data:text/plain,");
user_pref("browser.newtabpage.activity-stream.enabled", false);

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

// Disable geographically specific results/search engines
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");

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
user_pref("geo.wifi.uri", "");
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.wifi.xhr.timeout", 1);
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.geoip.timeout", 1);

// Disable WebRTC
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.ice.tcp", false);
user_pref("media.navigator.video.enabled", false);

// Improve WebRTC IP leak issue
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);

// Disable audio auto-play in non-active tabs
user_pref("media.block-autoplay-until-in-foreground", true);

// Disable link prefetching
user_pref("network.prefetch-next", false);

// Disable DNS prefetching
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

// Disable opening connection to links when mouseover
user_pref("network.http.speculative-parallel-limit", 0);

// Disable Beacon
user_pref("beacon.enabled", false);

// Ignore the `ping` attribute for `<a>` elements
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);

// Disable camera controlling
user_pref("camera.control.face_detection.enabled", false);

// Decrease the maximum number of popups from a single non-click event (Default is 20)
user_pref("dom.popup_maximum", 2);

// Disallow JavaScript to raise or lower windows
user_pref("dom.disable_window_flip", true);

// Disallow JavaScript to move or resize existing windows
user_pref("dom.disable_window_move_resize", true);

// Disable web notifications
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

// Disable Flyweb
user_pref("dom.flyweb.enabled", false);

// Disable SPDY (SPDY would be deprecated in 2016)
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.deps", false);

// -----------------------------------------------------------------------------
// Privacy
// -----------------------------------------------------------------------------

// Request that sites not track me
user_pref("privacy.donottrackheader.enabled", true);

// Use Tracking Protection in Private Windows
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.trackingprotection.introCount", 20);
user_pref("privacy.trackingprotection.ui.enabled", true);

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
user_pref("datareporting.healthreport.about.reportUrl", "data:text/plain,");
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Disable Crash Reporter
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);

// Disable Telemetry
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);

// Disable Telemetry Experiments
user_pref("experiments.enabled", false);
user_pref("experiments.supported", false);
user_pref("experiments.activeExperiment", false);
user_pref("experiments.manifest.uri", "");
user_pref("network.allow-experiments", false);

// Enable OCSP stapling
user_pref("security.ssl.enable_ocsp_stapling", true);

// Query OCSP responder servers to confirm current validity of certificates
user_pref("security.OCSP.enabled", 1);

// -----------------------------------------------------------------------------
// Add-ons and Plugins
// -----------------------------------------------------------------------------

// Disable enforced add-on signing since Firefox 43
user_pref("xpinstall.signatures.required", false);

// Hide the "Get Add-ons" pane in the Add-ons page
user_pref("extensions.getAddons.showPane", false);

// Disable extension discovery
user_pref("extensions.webservice.discoverURL", "http://127.0.0.1");

// Lock down allowed extension directories
user_pref("extensions.enabledScopes", 1);

// Clear localStorage and UUID when a WebExtension is uninstalled
user_pref("extensions.webextensions.keepStorageOnUninstall", false);
user_pref("extensions.webextensions.keepUuidOnUninstall", false);

// Ask me to activate plugins by default
user_pref("plugin.default.state", 1);
user_pref("plugin.defaultXpi.state", 1);

// Enable click-to-play and set the session permission
user_pref("plugins.click_to_play", true);
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);

// Click to play Adobe Flash
user_pref("plugin.state.flash", 1);

// Disable all GMP (Gecko Media Plugins)
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp.trial-create.enabled", false);
user_pref("media.gmp-manager.url", "data:text/plain,");
user_pref("media.gmp-manager.url.override", "data:text/plain,");
user_pref("media.gmp-manager.updateEnabled", false);

// Disable widevine CDM
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-widevinecdm.autoupdate", false);

// Disable all DRM content
user_pref("media.eme.enabled", false);
user_pref("media.eme.chromium-api.enabled", false);
user_pref("browser.eme.ui.enabled", false);

// Disable OpenH264 Video Codec by Cisco
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-gmpopenh264.autoupdate", false);

// -----------------------------------------------------------------------------
// Others
// -----------------------------------------------------------------------------

// Disable Shield (Telemetry system)
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("extensions.shield-recipe-client.api_url", "");

// Disable Pocket
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");

// Disable Reader View
user_pref("reader.parse-on-load.enabled", false);

// Disable capturing page thumbnails
user_pref("browser.pagethumbnails.capturing_disabled", true);

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
user_pref("toolkit.cosmeticAnimations.enabled", false);

// Disable site specific zoom
user_pref("browser.zoom.siteSpecific", false);

// Disable search suggestions in URL bar
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
user_pref("browser.urlbar.oneOffSearches", false);

// Disable preloading top websites in URL bar (Firefox 54+)
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);

// Display the raw Punycode in URL bar.
user_pref("network.IDN_show_punycode", true);

// Disable WebIDE to prevent remote debugging and addon downloads
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.debugger.remote-enabled", false);

// Disable Onboarding
user_pref("browser.onboarding.enabled", false);

// Disable UI tour
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");

// Prevent links from launching Windows Store (Windows 8+)
user_pref("network.protocol-handler.external.ms-windows-store", false);

// Disable Microsoft Family Safety cert (Winodws 8+)
user_pref("security.family_safety.mode", 0);
