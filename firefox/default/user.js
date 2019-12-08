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
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
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

// Set preferred languages for displaying pages.
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

// Disable Location-Aware Browsing.
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.provider.use_corelocation", false);
user_pref("geo.provider.use_gpsd", false);
user_pref("permissions.default.geo", 2);

// Disable Notifications API.
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

// Disable Push API.
user_pref("dom.push.enabled", false);
user_pref("dom.push.userAgentID", "");

// Block notification permission.
user_pref("permissions.default.desktop-notification", 2);

// Disable Beacon API.
user_pref("beacon.enabled", false);

// Disable Gamepad API.
user_pref("dom.gamepad.enabled", false);

// Disable Sensor API.
user_pref("device.sensors.enabled", false);

// Disable Vibration API.
user_pref("dom.vibrator.enabled", false);

// Disable Web Audio API.
user_pref("dom.webaudio.enabled", false);

// Disable Text-to-Speech part of the Web Speech API.
user_pref("media.webspeech.synth.enabled", false);

// Disable WebRTC.
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);

// Disable media device enumeration.
user_pref("media.navigator.enabled", false);

// Disable media device change detection.
user_pref("media.ondevicechange.enabled", false);

// Block camera and microphone permissions.
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);

// Disable autoplaying non-muted media unless the user has interacted with the
// page.
user_pref("media.autoplay.default", 1);
user_pref("media.autoplay.enabled.user-gestures-needed", true);
user_pref("media.block-autoplay-until-in-foreground", true);

// Disable video statistics.
user_pref("media.video_stats.enabled", false);

// Disallow JavaScript to change the new window.
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.location", true);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true);
user_pref("dom.disable_window_open_feature.resizable", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_open_feature.toolbar", true);

// Disable links opening in a new window.
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);

// Limit pop-up window events.
user_pref("dom.disable_open_during_load", true);
user_pref("dom.popup_allowed_events", "click dblclick mouseup");

// Enable `window.opener` protection.
user_pref("dom.targetBlankNoOpener.enabled", true);

// -----------------------------------------------------------------------------
// Network
// -----------------------------------------------------------------------------

// Disable prefetching.
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

// Disable opening connection to links when mouseover.
user_pref("network.http.speculative-parallel-limit", 0);

// Disable cross-origin sub-resources to open HTTP authentication dialogs.
user_pref("network.auth.subresource-http-auth-allow", 1);

// Set the maximum number of redirects to follow per request.
user_pref("network.http.redirection-limit", 10);

// Disable pings but enforce same host in case.
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);

// Enforce the proxy server to do any DNS lookups when using SOCKS.
user_pref("network.proxy.socks_remote_dns", true);

// Disable GIO as a potential proxy bypass vector.
user_pref("network.gio.supported-protocols", "");

// Disable Captive Portal detection.
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);

// Disable Network Connectivity checks.
user_pref("network.connectivity-service.enabled", false);

// -----------------------------------------------------------------------------
// Privacy
// -----------------------------------------------------------------------------

// Block all third-party cookies.
user_pref("network.cookie.cookieBehavior", 1);

// Set third-party cookies to session-only.
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);

// Enable DNT (Do Not Track) HTTP header.
user_pref("privacy.donottrackheader.enabled", true);

// Enable First Party Isolation.
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.firstparty.isolate.restrict_opener_access", true);

// Enable Tracking Protection in all windows.
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.introCount", 20);

// Hide Content Blocking notification.
user_pref("browser.contentblocking.introCount", 20);

// Disable Telemetry.
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

// Disable Telemetry Coverage.
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");

// Disable Health Report.
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Disable Crash Reporting.
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// Disable SSL Error Reporting.
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");

// Disable Normandy/Shield (telemetry system).
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// -----------------------------------------------------------------------------
// Security
// -----------------------------------------------------------------------------

// Disable saving passwords.
user_pref("signon.rememberSignons", false);

// Enable OCSP (Online Certificate Status Protocol) stapling.
user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.OCSP.enabled", 1);

// Enable CSP (Content Security Policy).
user_pref("security.csp.enable", true);

// Disable Windows Family Safety cert.
user_pref("security.family_safety.mode", 0);

// Disable insecure content on HTTPS pages.
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.block_object_subrequest", true);

// -----------------------------------------------------------------------------
// Features
// -----------------------------------------------------------------------------

// Let me choose when to install Firefox updates.
user_pref("app.update.auto", false);

// Disable Firefox Accounts and Sync.
user_pref("identity.fxaccounts.enabled", false);

// Disable disk cache.
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk_cache_ssl", false);

// Disable offline cache.
user_pref("browser.cache.offline.enable", false);
user_pref("offline-apps.allow_by_default", false);

// Disable Reader View.
user_pref("reader.parse-on-load.enabled", false);

// Disable UITour backend.
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");

// Disable various developer tools.
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.autoinstallADBExtension", false);

// -----------------------------------------------------------------------------
// Add-ons
// -----------------------------------------------------------------------------

// Disable signature enforcement for Nightly and ESR.
user_pref("xpinstall.signatures.required", false);

// Allow all extensions to run in private browsing mode by default.
user_pref("extensions.allowPrivateBrowsingByDefault", true);

// Disable recommendations.
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("network.manage-offline-status", false);

// Disable CFR (Contextual Feature Recommender).
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Disable Form Autofill.
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);

// Disable Pocket.
user_pref("extensions.pocket.enabled", false);

// Disable Web Compatibility Reporter.
user_pref("extensions.webcompat-reporter.enabled", false);

// Disable sending plugins crash reports.
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);

// Disable GMP (Gecko Media Plugins).
user_pref("media.gmp-provider.enabled", false);

// Disable Widevine CDM (Content Decryption Module).
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("media.gmp-widevinecdm.enabled", false);

// Disable DRM-controlled content.
user_pref("media.eme.enabled", false);

// Disable OpenH264 Video Codec by Cisco.
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-gmpopenh264.autoupdate", false);

// -----------------------------------------------------------------------------
// Appearance
// -----------------------------------------------------------------------------

// Disable UI animation.
user_pref("toolkit.cosmeticAnimations.enabled", false);

// Display download button on toolbar.
user_pref("browser.download.autohideButton", false);

// Disable "What's New" icons.
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

// Display advanced information on insecure connection warning pages.
user_pref("browser.xul.error_pages.expert_bad_cert", true);

// Display insecure icon on HTTP sites.
user_pref("security.insecure_connection_icon.enabled", true);
user_pref("security.insecure_connection_text.enabled", false);
user_pref("security.insecure_connection_icon.pbmode.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", false);

// Disable site-specified zoom.
user_pref("browser.zoom.siteSpecific", false);

// -----------------------------------------------------------------------------
// Miscellaneous
// -----------------------------------------------------------------------------

// Disable `about:config` warning.
user_pref("general.warnOnAboutConfig", false);
user_pref("browser.aboutConfig.showWarning", false);

// Prevent accessibility services from accessing browser.
user_pref("accessibility.force_disabled", 1);

// Always ask me where to save download files.
user_pref("browser.download.useDownloadDir", false);

// Disable adding downloads to "Recent Documents" list.
user_pref("browser.download.manager.addToRecentDocs", false);

// Disable hiding MIME types not associated with a plugin.
user_pref("browser.download.hide_plugins_without_extensions", false);

// Disable location bar domain guessing.
user_pref("browser.fixup.alternate.enabled", false);

// Display all parts of the URL in the location bar.
user_pref("browser.urlbar.trimURLs", false);

// Display the raw Punycode in the location bar.
user_pref("network.IDN_show_punycode", true);

// Copy unicode characters from location bar as is.
user_pref("browser.urlbar.decodeURLsOnCopy", true);

// Disable search suggestions in the location bar.
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.oneOffSearches", false);

// Disable location bar making speculative connections.
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);

// Disable closing browser with last tab.
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Set items in Windows Taskbar Jump List.
user_pref("browser.taskbar.lists.enabled", true);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", true);

// Set the minimum interval between session save operations.
user_pref("browser.sessionstore.interval", 60000);

// Disable capturing page thumbnails.
user_pref("browser.pagethumbnails.capturing_disabled", true);

// Disable middlemouse paste leaking clipboard content on Linux.
user_pref("middlemouse.paste", false);

// Skip the security delay on "Install" and "Open/Save" dialogs.
user_pref("security.dialog_enable_delay", 0);

// Disable automatic start and session restore after Windows reboot.
user_pref("toolkit.winRegisterApplicationRestart", false);

// Disable Alt key toggling the menu bar.
user_pref("ui.key.menuAccessKey", 0);

// -----------------------------------------------------------------------------
// ESR
// -----------------------------------------------------------------------------

// ESR 68.x
user_pref("plugins.click_to_play", true);
