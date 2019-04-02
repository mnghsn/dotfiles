// Mozilla Firefox User Preferences

// -----------------------------------------------------------------------------
// Startup
// -----------------------------------------------------------------------------

// Show a blank page when Firefox starts.
user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");

// Show a blank page when opening new tab.
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);

// Disable Activity Stream.
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("browser.newtabpage.activity-stream.disableSnippets", true);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");

// -----------------------------------------------------------------------------
// Localization
// -----------------------------------------------------------------------------

// Choose preferred languages for displaying pages.
user_pref("intl.accept_languages", "ja, zh-tw, zh, en-us, en");

// Disable GeoIP-based search results.
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

// Disable Geolocation.
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.provider.use_corelocation", false);
user_pref("geo.provider.use_gpsd", false);
user_pref("permissions.default.geo", 2);

// Disable WebRTC.
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.navigator.enabled", false);

// Disable screensharing.
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);

// Disable Notifications API.
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);
user_pref("permissions.default.desktop-notification", 2);

// Disable Push API.
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");

// Disable shaking the screen.
user_pref("dom.vibrator.enabled", false);

// Block camera and microphone permissions.
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);

// Disable links opening in a new window.
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);

// Limit pop-up window events.
user_pref("dom.disable_open_during_load", true);
user_pref("dom.popup_maximum", 2);
user_pref("dom.popup_allowed_events", "click dblclick mouseup");

// Prevent websites from disabling new window features.
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.location", true);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true);
user_pref("dom.disable_window_open_feature.resizable", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_open_feature.toolbar", true);

// Disallow JavaScript to move or resize window.
user_pref("dom.disable_window_move_resize", true);

// Enable window.opener protection.
user_pref("dom.targetBlankNoOpener.enabled", true);

// Disable audio auto-play.
user_pref("media.autoplay.default", 1);
user_pref("media.block-autoplay-until-in-foreground", true);

// -----------------------------------------------------------------------------
// Privacy
// -----------------------------------------------------------------------------

// Block all third-party cookies.
user_pref("network.cookie.cookieBehavior", 1);

// Set third-party cookies to session-only.
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);

// Enable DNT HTTP header.
user_pref("privacy.donottrackheader.enabled", true);

// Enable Tracking Protection.
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.trackingprotection.introCount", 20);

// Disable Content Blocking notification.
user_pref("browser.contentblocking.introCount", 20);

// Enable First Party Isolation.
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.firstparty.isolate.restrict_opener_access", true);

// Disable Health Report.
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Disable Crash Reporter.
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
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

// Disable Telemetry Coverage.
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");

// Disable Normandy and Shield (telemetry system).
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("app.shield.optoutstudies.enabled", false);

// Disable Ping-centre telemetry.
user_pref("browser.ping-centre.telemetry", false);

// Disable prefetching.
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.predictor.enable-prefetch", false);

// Disable Seer/Necko.
user_pref("network.predictor.enabled", false);
user_pref("network.captive-portal-service.enabled", false);
user_pref("captivedetect.canonicalURL", "");

// Disable Network Connectivity Services.
user_pref("network.connectivity-service.enabled", false);

// Disable opening connection to links when mouseover.
user_pref("network.http.speculative-parallel-limit", 0);

// Disable pings but enforce same host in case.
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);

// Disable Web Beacon.
user_pref("beacon.enabled", false);

// -----------------------------------------------------------------------------
// Security
// -----------------------------------------------------------------------------

// Enable Safe Browsing.
user_pref("browser.safebrowsing.phishing.enabled", true);
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("browser.safebrowsing.downloads.enabled", true);

// Disable saving passwords.
user_pref("signon.rememberSignons", false);

// Enable OCSP stapling.
user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.OCSP.enabled", 1);
user_pref("security.OCSP.require", true);

// Enable CSP (Content Security Policy).
user_pref("security.csp.enable", true);
user_pref("security.csp.experimentalEnabled", true);

// Skip the security delay on "Install" and "Open/Save" dialogs.
user_pref("security.dialog_enable_delay", 0);

// Disable Windows Family Safety Mode.
user_pref("security.family_safety.mode", 0);

// Disable insecure active content on HTTPS pages.
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.block_object_subrequest", true);

// Disallow cross-origin sub-resources to open HTTP authentication dialogs.
user_pref("network.auth.subresource-http-auth-allow", 1);

// -----------------------------------------------------------------------------
// Features
// -----------------------------------------------------------------------------

// Disable Firefox Accounts and Sync.
user_pref("identity.fxaccounts.enabled", false);

// Disable UITour backend.
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");

// Disable Reader View.
user_pref("reader.parse-on-load.enabled", false);

// Disable various developer tools.
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.autoinstallADBExtension", false);

// -----------------------------------------------------------------------------
// Add-ons
// -----------------------------------------------------------------------------

// Disable "Get Add-ons" pane.
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.webservice.discoverURL", "");

// Lock down allowed extension directories.
user_pref("extensions.enabledScopes", 4);
user_pref("extensions.autoDisableScopes", 15);

// Disable Mozilla permission to silently opt you into tests.
user_pref("network.allow-experiments", false);

// Disable personalized extension recommendations.
user_pref("browser.discovery.enabled", false);

// Disable Contextual Feature Recommendation (CFR).
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", false);

// Disable Form Autofill.
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);

// Disable Pocket.
user_pref("extensions.pocket.enabled", false);

// Disable uploading screenshots to the Screenshots server.
user_pref("extensions.screenshots.upload-disabled", true);

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
user_pref("media.gmp-manager.updateEnabled", false);
user_pref("media.gmp-manager.url", "data:text/plain,");
user_pref("media.gmp-manager.url.override", "data:text/plain,");
user_pref("media.gmp.trial-create.enabled", false);

// Disable widevine CDM.
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("media.gmp-widevinecdm.autoupdate", false);

// Disable all DRM content.
user_pref("media.eme.enabled", false);

// Disable OpenH264 Video Codec by Cisco.
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-gmpopenh264.autoupdate", false);

// Disable signature enforcement for Nightly and ESR.
user_pref("xpinstall.signatures.required", false);

// -----------------------------------------------------------------------------
// Others
// -----------------------------------------------------------------------------

// Disable `about:config` warning.
user_pref("general.warnOnAboutConfig", false);

// Let me choose to install Firefox updates.
user_pref("app.update.auto", false);
user_pref("app.update.service.enabled", false);
user_pref("app.update.staging.enabled", false);
user_pref("app.update.silent", false);

// Prevent accessibility services from accessing my browser.
user_pref("accessibility.force_disabled", 1);

// Always ask me where to save download files.
user_pref("browser.download.useDownloadDir", false);

// Disable downloading on desktop.
user_pref("browser.download.folderList", 2);

// Always display download button on toolbar.
user_pref("browser.download.autohideButton", false);

// Disable "Open with" in download dialog.
user_pref("browser.download.forbid_open_with", true);

// Disable disk cache.
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk_cache_ssl", false);

// Disable offline cache.
user_pref("browser.cache.offline.enable", false);
user_pref("browser.cache.offline.insecure.enable", false);

// Set the minimum interval between session save operations.
user_pref("browser.sessionstore.interval", 60000);

// Disable location bar domain guessing.
user_pref("browser.fixup.alternate.enabled", false);

// Display all parts of the URL in the location bar.
user_pref("browser.urlbar.trimURLs", false);

// Disable search suggestions in the location bar.
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
user_pref("browser.urlbar.oneOffSearches", false);

// Disable location bar making speculative connections.
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);

// Display the raw Punycode in the location bar.
user_pref("network.IDN_show_punycode", true);

// Disable closing browser with last tab.
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Disable privacy items in Windows Taskbar Jump List.
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);

// Disable capturing page thumbnails.
user_pref("browser.pagethumbnails.capturing_disabled", true);

// Disable site specific zoom.
user_pref("browser.zoom.siteSpecific", false);

// Disable UI animation.
user_pref("toolkit.cosmeticAnimations.enabled", false);

// Disable automatic start and session restore after Windows reboot.
user_pref("toolkit.winRegisterApplicationRestart", false);

// Disable Alt key toggling the menu bar.
user_pref("ui.key.menuAccessKey", 0);

// -----------------------------------------------------------------------------
// ESR
// -----------------------------------------------------------------------------

// Disable experiments.
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("experiments.activeExperiment", false);
user_pref("network.allow-experiments", false);

// Disable GeoIP-based search results.
user_pref("browser.search.countryCode", "JP");

// Disable auto-update checks for Firefox.
user_pref("app.update.enabled", false);

// Disable "Savant" Shield study.
user_pref("shield.savant.enabled", false);

// Disable Onboarding
user_pref("browser.onboarding.enabled", false);

// Disable WebIDE ADB extension downloads.
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.adbAddonURL", "");

// Disable Browser Error Reporter.
user_pref("browser.chrome.errorReporter.enabled", false);
user_pref("browser.chrome.errorReporter.submitUrl", "");
