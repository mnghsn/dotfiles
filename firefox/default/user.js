// Mozilla Firefox User Preferences

// -----------------------------------------------------------------------------
// Startup
// -----------------------------------------------------------------------------

// Show a blank page when Firefox starts.
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.startup.page", 0);
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");
user_pref("browser.rights.3.shown", true);
user_pref("browser.laterrun.enabled", false);

// Show a blank page when opening new tab.
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
user_pref("browser.newtabpage.directory.source", "data:text/plain,");
user_pref("browser.newtabpage.activity-stream.enabled", false);
user_pref("browser.library.activity-stream.enabled", false);

// Disable Slow Startup notifications.
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.slowStartup.maxSamples", 0);

// -----------------------------------------------------------------------------
// Localization
// -----------------------------------------------------------------------------

// Choose preferred languages for displaying pages.
user_pref("intl.accept_languages", "ja, zh-tw, zh, en-us, en");

// Disable GeoIP-based search results.
user_pref("browser.search.countryCode", "JP");
user_pref("browser.search.region", "JP");
user_pref("browser.search.geoip.url", "");

// Disable geographically specific results/search engines.
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");

// -----------------------------------------------------------------------------
// Content
// -----------------------------------------------------------------------------

// Set minimum font size.
user_pref("font.minimum-size.ja", 10);
user_pref("font.minimum-size.ko", 10);
user_pref("font.minimum-size.zh-CN", 10);
user_pref("font.minimum-size.zh-HK", 10);
user_pref("font.minimum-size.zh-TW", 10);

// Disable Beacon.
user_pref("beacon.enabled", false);

// Disable pings.
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);

// Disable camera image capture.
user_pref("dom.imagecapture.enabled", false);

// Disable canvas capture stream.
user_pref("canvas.capturestream.enabled", false);

// Disallow JavaScript to move or resize window.
user_pref("dom.disable_window_move_resize", true);

// Limit events that can cause a popup.
user_pref("dom.popup_allowed_events", "click dblclick mouseup");

// Decrease the maximum number of popups from a single non-click event.
user_pref("dom.popup_maximum", 2);

// Disable links opening in a new window.
user_pref("browser.link.open_newwindow.restriction", 0);

// Disable Notifications API.
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);
user_pref("permissions.default.desktop-notification", 2);

// Disable Push API.
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");

// Disable Geolocation.
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("geo.wifi.logging.enabled", false);
user_pref("permissions.default.geo", 2);

// Disable audio auto-play in non-active tabs.
user_pref("media.block-autoplay-until-in-foreground", true);

// Disable WebRTC.
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.tcp", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);

// Limit WebRTC IP leaks.
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);

// Disable WebRTC screen sharing.
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);

// Disable WebGL.
user_pref("webgl.disabled", true);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
user_pref("webgl.enable-debug-renderer-info", false);
user_pref("webgl.enable-webgl2", false);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.dxgl.enabled", false);
user_pref("pdfjs.enableWebGL", false);

// Block camera and microphone permissions.
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);

// -----------------------------------------------------------------------------
// Privacy
// -----------------------------------------------------------------------------

// Enable DNT HTTP header.
user_pref("privacy.donottrackheader.enabled", true);

// Enable Tracking Protection.
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.trackingprotection.ui.enabled", true);
user_pref("privacy.trackingprotection.introCount", 20);

// Enable First Party Isolation.
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.firstparty.isolate.restrict_opener_access", true);

// Never accept third-party cookies.
user_pref("network.cookie.cookieBehavior", 1);

// Disable prefetching.
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.predictor.enable-prefetch", false);

// Disable opening connection to links when mouseover.
user_pref("network.http.speculative-parallel-limit", 0);

// Disable Seer/Necko.
user_pref("network.predictor.enabled", false);
user_pref("network.captive-portal-service.enabled", false);
user_pref("captivedetect.canonicalURL", "");

// -----------------------------------------------------------------------------
// Security
// -----------------------------------------------------------------------------

// Enable Safe Browsing.
user_pref("browser.safebrowsing.phishing.enabled", true);
user_pref("browser.safebrowsing.malware.enabled", true);

// Disable saving passwords.
user_pref("signon.rememberSignons", false);

// Enable OCSP stapling.
user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.OCSP.enabled", 1);
user_pref("security.OCSP.require", true);

// -----------------------------------------------------------------------------
// Features and Components
// -----------------------------------------------------------------------------

// Disable Health Report.
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Disable Crash Reporter.
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// Disable Telemetry.
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);

// Disable Telemetry Experiments.
user_pref("experiments.enabled", false);
user_pref("experiments.supported", false);
user_pref("experiments.activeExperiment", false);
user_pref("experiments.manifest.uri", "");
user_pref("network.allow-experiments", false);

// Disable Onboarding.
user_pref("browser.onboarding.enabled", false);

// Disable Ping-centre telemetry.
user_pref("browser.ping-centre.telemetry", false);

// Disable UITour backend.
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");

// Disable remote debugging.
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.debugger.force-local", true);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.chrome.enabled", false);

// Disable Reader View.
user_pref("reader.parse-on-load.enabled", false);

// -----------------------------------------------------------------------------
// Add-ons and Plugins
// -----------------------------------------------------------------------------

// Disable extension metadata updating.
user_pref("extensions.getAddons.cache.enabled", false);

// Disable Personas (themes) updating.
user_pref("lightweightThemes.update.enabled", false);

// Disable "Get Add-ons" pane.
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.webservice.discoverURL", "");

// Lock down allowed extension directories.
user_pref("extensions.enabledScopes", 1);

// Clear localStorage and UUID when an extension is uninstalled.
user_pref("extensions.webextensions.keepStorageOnUninstall", false);
user_pref("extensions.webextensions.keepUuidOnUninstall", false);

// Disable Form Autofill.
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);

// Disable Pocket.
user_pref("extensions.pocket.enabled", false);

// Disable Shield and Normandy (telemetry system).
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("extensions.shield-recipe-client.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("app.shield.optoutstudies.enabled", false);

// Disable Web Compatibility Reporter.
user_pref("extensions.webcompat-reporter.enabled", false);

// Disable all plugins by default.
user_pref("plugin.default.state", 0);
user_pref("plugin.defaultXpi.state", 0);

// Enable click-to-play and set the session permission.
user_pref("plugins.click_to_play", true);
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);

// Disable scanning plugins on Windows.
user_pref("plugin.scan.plid.all", false);

// Disable all GMP (Gecko Media Plugins).
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-manager.url", "data:text/plain,");
user_pref("media.gmp-manager.url.override", "data:text/plain,");
user_pref("media.gmp-manager.updateEnabled", false);
user_pref("media.gmp.trial-create.enabled", false);

// Disable widevine CDM.
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-widevinecdm.autoupdate", false);

// Disable all DRM content.
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);

// Disable OpenH264 Video Codec by Cisco.
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-gmpopenh264.autoupdate", false);

// Skip the installation delay.
user_pref("security.dialog_enable_delay", 0);

// -----------------------------------------------------------------------------
// Others
// -----------------------------------------------------------------------------

// Prevent accessibility services from accessing browser.
user_pref("accessibility.force_disabled", 1);

// Always ask me where to save download files.
user_pref("browser.download.useDownloadDir", false);

// Disable downloading on desktop.
user_pref("browser.download.folderList", 2);

// Always display download button on toolbar.
user_pref("browser.download.autohideButton", false);

// Disable URL bar domain guessing.
user_pref("browser.fixup.alternate.enabled", false);

// Strip password from URL.
user_pref("browser.fixup.hide_user_pass", true);

// Disable capturing page thumbnails.
user_pref("browser.pagethumbnails.capturing_disabled", false);

// Display search bar by default.
user_pref("browser.search.widget.inNavBar", true);

// Disable closing browser with last tab.
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Disable Windows Taskbar Jump List.
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);

// Disable URL bar autofill.
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.autoFill.typed", false);

// Disable search suggestions in the URL bar.
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
user_pref("browser.urlbar.oneOffSearches", false);

// Disable URL bar making speculative connections.
user_pref("browser.urlbar.speculativeConnect.enabled", false);

// Display all parts of the URL in the URL bar.
user_pref("browser.urlbar.trimURLs", false);

// Disable preloading top websites in the URL bar.
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);

// Disable site specific zoom.
user_pref("browser.zoom.siteSpecific", false);

// Disable `about:config` warnings.
user_pref("general.warnOnAboutConfig", false);

// Display the raw Punycode in the URL bar.
user_pref("network.IDN_show_punycode", true);

// Disable links launching Windows Store.
user_pref("network.protocol-handler.external.ms-windows-store", false);

// Disable Windows Family Safety Mode.
user_pref("security.family_safety.mode", 0);

// Disable UI animation.
user_pref("toolkit.cosmeticAnimations.enabled", false);
user_pref("browser.stopReloadAnimation.enabled", false);

// Disable disk cache.
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);
user_pref("browser.cache.disk_cache_ssl", false);

// Set the minimum interval between session save operations.
user_pref("browser.sessionstore.interval", 600000);
user_pref("browser.sessionstore.interval.idle", 3600000);
