// Firefox user.js

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

// Disable Firefox Home.
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "{}");
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// -----------------------------------------------------------------------------
// Localization
// -----------------------------------------------------------------------------

// Set preferred languages for displaying pages.
user_pref("intl.accept_languages", "ja,zh-tw,zh,en-us,en");

// Disable geographically specific search engines and results.
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");

// Disable region updates.
user_pref("browser.region.update.enabled", false);
user_pref("browser.region.network.url", "");

// -----------------------------------------------------------------------------
// Content
// -----------------------------------------------------------------------------

// Set the minimum font size.
user_pref("font.minimum-size.ja", 10);
user_pref("font.minimum-size.ko", 10);
user_pref("font.minimum-size.zh-CN", 10);
user_pref("font.minimum-size.zh-HK", 10);
user_pref("font.minimum-size.zh-TW", 10);

// Disable WebRTC.
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

// Disable media device enumeration.
user_pref("media.navigator.enabled", false);

// Block all audio and video autoplay.
user_pref("media.autoplay.default", 5);

// Block new requests asking for permissions.
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.xr", 2);
user_pref("permissions.default.shortcuts", 2);

// Disallow JavaScript to change new window appearance.
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

// Make all links targeting new window open in a new tab.
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);

// Block pop-up windows.
user_pref("dom.disable_open_during_load", true);
user_pref("dom.popup_allowed_events", "click dblclick mouseup");

// Enable reverse tabnabbing protection.
user_pref("dom.targetBlankNoOpener.enabled", true);

// -----------------------------------------------------------------------------
// Network
// -----------------------------------------------------------------------------

// Disable prefetching.
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

// Disable opening connection to links when mouseover.
user_pref("network.http.speculative-parallel-limit", 0);

// Disable click tracking and enforce same host in case.
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);

// Disable sending additional analytics to websites.
user_pref("beacon.enabled", false);

// Set the maximum number of redirects to follow per request.
user_pref("network.http.redirection-limit", 10);

// Disallow cross-origin sub-resources to open HTTP authentication credentials
// dialogs.
user_pref("network.auth.subresource-http-auth-allow", 1);

// -----------------------------------------------------------------------------
// Privacy
// -----------------------------------------------------------------------------

// Block all third-party cookies and site data.
user_pref("network.cookie.cookieBehavior", 1);
user_pref("browser.contentblocking.category", "custom");

// Enable first-party isolation.
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.partition.network_state", true);

// Enable enhanced tracking protection in all windows.
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);

// Disable Telemetry.
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

// Disable Telemetry Coverage.
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");

// Disable Normandy and Shield.
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// Disable sending technical and interaction data.
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Disable installing and running studies.
user_pref("app.shield.optoutstudies.enabled", false);

// Disable sending browser crash reports.
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// Disable sending plugin crash reports.
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);

// -----------------------------------------------------------------------------
// Security
// -----------------------------------------------------------------------------

// Disable saving logins and passwords for websites.
user_pref("signon.rememberSignons", false);

// Enable OCSP (Online Certificate Status Protocol) stapling.
user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.OCSP.enabled", 1);
user_pref("security.OCSP.require", true);

// Enable CSP (Content Security Policy).
user_pref("security.csp.enable", true);

// -----------------------------------------------------------------------------
// Features
// -----------------------------------------------------------------------------

// Disable Firefox Accounts and Sync.
user_pref("identity.fxaccounts.enabled", false);

// Disable Reader View.
user_pref("reader.parse-on-load.enabled", false);

// Disable UITour backend.
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");

// Disable various developer tools.
user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.remote-enabled", false);

// -----------------------------------------------------------------------------
// Add-ons
// -----------------------------------------------------------------------------

// Disable enforced extension signing for ESR and Nightly.
user_pref("xpinstall.signatures.required", false);

// Enable all extensions running in private window by default.
user_pref("extensions.allowPrivateBrowsingByDefault", true);

// Disable extension recommendations in about:addons.
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Disable extension recommendations when browsing.
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Disable Form Autofill.
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);

// Disable Pocket.
user_pref("extensions.pocket.enabled", false);

// Disable WebCompat Reporter.
user_pref("extensions.webcompat-reporter.enabled", false);

// Disable Gecko Media Plugins.
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.gmp-widevinecdm.visible", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-gmpopenh264.autoupdate", false);

// Disable Encrypted Media Extension (DRM-controlled content).
user_pref("media.eme.enabled", false);

// -----------------------------------------------------------------------------
// Appearance
// -----------------------------------------------------------------------------

// Enable userChrome.css and userContent.css customizations.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Disable UI animation.
user_pref("ui.prefersReducedMotion", 1);

// Disable site-specific zoom level.
user_pref("browser.zoom.siteSpecific", false);

// Disable revamped address bar.
user_pref("browser.urlbar.openViewOnFocus", false);
user_pref("browser.urlbar.update1", false);
user_pref("browser.urlbar.update1.interventions", false);
user_pref("browser.urlbar.update1.searchTips", false);
user_pref("browser.urlbar.update1.view.stripHttps", false);

// Show download button on toolbar.
user_pref("browser.download.autohideButton", false);

// Hide “What's New” icon and panel.
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

// Hide “Recent Highlights” in Library.
user_pref("browser.library.activity-stream.enabled", false);

// Hide “Frequent” and “Recent” in Windows taskbar.
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);

// Show weak encryption warning on address bar.
user_pref("security.ssl.require_safe_negotiation", false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// Show advanced information on insecure connection warning pages.
user_pref("browser.xul.error_pages.expert_bad_cert", true);

// -----------------------------------------------------------------------------
// Miscellaneous
// -----------------------------------------------------------------------------

// Disable about:config warning.
user_pref("general.warnOnAboutConfig", false);
user_pref("browser.aboutConfig.showWarning", false);

// Disable automatic Firefox updates.
user_pref("app.update.auto", false);

// Disable accessibility services.
user_pref("accessibility.force_disabled", 1);

// Disable saving files into the download directory automatically.
user_pref("browser.download.useDownloadDir", false);

// Disable adding downloads to recent documents list.
user_pref("browser.download.manager.addToRecentDocs", false);

// Disable address bar guessing domain.
user_pref("browser.fixup.alternate.enabled", false);

// Disable address bar hiding protocol and trailing slash behind domain.
user_pref("browser.urlbar.trimURLs", false);

// Disable address bar showing internationalized domain name in Unicode.
user_pref("network.IDN_show_punycode", true);

// Disable address bar encoding Unicode characters when copying URL.
user_pref("browser.urlbar.decodeURLsOnCopy", true);

// Disable address bar making speculative connections.
user_pref("browser.urlbar.speculativeConnect.enabled", false);

// Disable address bar leaking single words to DNS provider after searching.
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);

// Enable search suggestions in all windows.
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.search.suggest.enabled.private", true);
user_pref("browser.urlbar.suggest.searches", true);

// Show search suggestions after other suggestions.
user_pref("browser.urlbar.matchBuckets", "general:5,suggestion:Infinity");

// Disable saving form and search history.
user_pref("browser.formfill.enable", false);

// Disable closing window when closing last tab.
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Disable disk cache.
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.offline.enable", false);

// Disable capturing page thumbnails.
user_pref("browser.pagethumbnails.capturing_disabled", true);

// Set the minimum interval between session save operations.
user_pref("browser.sessionstore.interval", 60000);

// Set the security delay on some confirmation dialogs.
user_pref("security.dialog_enable_delay", 500);

// Disable automatic start and session restore after Windows reboot.
user_pref("toolkit.winRegisterApplicationRestart", false);

// Disable Alt key toggling menu bar.
user_pref("ui.key.menuAccessKey", 0);
