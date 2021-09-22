// Firefox user.js

// -----------------------------------------------------------------------------
// Startup
// -----------------------------------------------------------------------------

// Show a blank page when opening homepage and new window.
user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.startup.homepage_override.mstone", "ignore");

// Show a blank page when opening new tab.
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);

// Disable Activity Stream.
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

// Set preferred language for displaying pages.
user_pref("intl.accept_languages", "en-US, en");

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
user_pref("media.autoplay.blocking_policy", 0);

// Block new requests asking for permissions.
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.xr", 2);
user_pref("permissions.default.shortcuts", 2);

// Block pop-up windows.
user_pref("dom.disable_open_during_load", true);
user_pref("dom.popup_allowed_events", "click dblclick mousedown mouseup pointerdown pointerup");

// Enforce all links to be opened in new tabs.
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);

// Disallow JavaScript to move and resize windows.
user_pref("dom.disable_window_move_resize", true);

// -----------------------------------------------------------------------------
// Network
// -----------------------------------------------------------------------------

// Disable prefetching.
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

// Disable making speculative connections when mouseover.
user_pref("network.http.speculative-parallel-limit", 0);

// Disable sending additional analytics to web servers.
user_pref("beacon.enabled", false);

// Disable HTTP authentication credentials dialogs triggered by cross-origin
// sub-resources.
user_pref("network.auth.subresource-http-auth-allow", 1);

// Disable Captive Portal detection.
user_pref("network.captive-portal-service.enabled", false);
user_pref("captivedetect.canonicalURL", "");

// Disable Network Connectivity checks.
user_pref("network.connectivity-service.enabled", false);

// Disable automatic Work Offline mode.
user_pref("network.manage-offline-status", false);

// Enable proxying DNS when using SOCKS v5.
user_pref("network.proxy.socks_remote_dns", true);

// -----------------------------------------------------------------------------
// Privacy
// -----------------------------------------------------------------------------

// Block all third-party cookies.
user_pref("network.cookie.cookieBehavior", 1);
user_pref("browser.contentblocking.category", "custom");

// Enable FPI (First Party Isolation).
user_pref("privacy.firstparty.isolate", true);

// Enable Enhanced Tracking Protection.
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);

// Enable DNT (Do Not Track) HTTP header.
user_pref("privacy.donottrackheader.enabled", true);

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

// Disable Health Report.
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Disable Shield Studies.
user_pref("app.shield.optoutstudies.enabled", false);

// Disable Normandy Telemetry.
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// Disable sending file information to Google Safe Browsing service.
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");

// Disable sending browser crash reports.
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// -----------------------------------------------------------------------------
// Security
// -----------------------------------------------------------------------------

// Disable saving logins and passwords.
user_pref("signon.rememberSignons", false);

// Enforce OCSP (Online Certificate Status Protocol) stapling.
user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.OCSP.enabled", 1);
user_pref("security.OCSP.require", true);

// Enforce CSP (Content Security Policy).
user_pref("security.csp.enable", true);

// Enforce no insecure content on HTTPS pages.
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content", true);

// Enable HTTPS-Only Mode in all windows.
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_pbm", true);

// -----------------------------------------------------------------------------
// Search
// -----------------------------------------------------------------------------

// Disable search engine updates.
user_pref("browser.search.update", false);

// Enable search suggestions in all windows.
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.search.suggest.enabled.private", true);
user_pref("browser.urlbar.suggest.searches", true);

// Show search suggestions behind other suggestions.
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);

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

// Enable all extensions in Private Windows by default.
user_pref("extensions.allowPrivateBrowsingByDefault", true);

// Disable enforced extension signing in Developer Edition, Nightly and ESR.
user_pref("xpinstall.signatures.required", false);

// Disable extension recommendations in about:addons.
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Disable extension recommendations when browsing.
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Disable third-party extension install prompts.
user_pref("extensions.postDownloadThirdPartyPrompt", false);

// Disable system add-on updates.
user_pref("extensions.systemAddon.update.enabled", false);
user_pref("extensions.systemAddon.update.url", "");

// Disable Form Autofill.
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);

// Disable Pocket.
user_pref("extensions.pocket.enabled", false);

// Disable Web Compatibility Reporter.
user_pref("extensions.webcompat-reporter.enabled", false);

// Disable Gecko Media Plugins.
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);

// Disable DRM-controlled content.
user_pref("media.eme.enabled", false);

// -----------------------------------------------------------------------------
// System
// -----------------------------------------------------------------------------

// Disable automatic Firefox updates.
user_pref("app.update.auto", false);

// Disable accessibility services.
user_pref("accessibility.force_disabled", 1);

// Disable disk cache.
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.offline.storage.enable", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("media.memory_cache_max_size", 65536);

// Disable saving page thumbnails.
user_pref("browser.pagethumbnails.capturing_disabled", true);

// Disable saving shortcut favicons.
user_pref("browser.shell.shortcutFavicons", false);

// Set the maximum number of bookmark backups to keep.
user_pref("browser.bookmarks.max_backups", 5);

// Set the minimum interval between session save operations.
user_pref("browser.sessionstore.interval", 60000);

// Always ask where to save files.
user_pref("browser.download.useDownloadDir", false);

// Disable adding downloads to Recent Documents.
user_pref("browser.download.manager.addToRecentDocs", false);

// Disable automatic start and session restore after Windows reboot.
user_pref("toolkit.winRegisterApplicationRestart", false);

// -----------------------------------------------------------------------------
// Appearance
// -----------------------------------------------------------------------------

// Enable userChrome.css and userContent.css customizations.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Disable browser animations.
user_pref("ui.prefersReducedMotion", 1);

// Disable site-specific zoom level.
user_pref("browser.zoom.siteSpecific", false);

// Show the full URL in address bar.
user_pref("browser.urlbar.trimURLs", false);

// Show the Punycode for IDNs (Internationalized Domain Names) in address bar.
user_pref("network.IDN_show_punycode", true);

// Show weak encryption warning in address bar.
user_pref("security.ssl.require_safe_negotiation", false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// Show advanced information in insecure connection warning pages.
user_pref("browser.xul.error_pages.expert_bad_cert", true);

// -----------------------------------------------------------------------------
// Miscellaneous
// -----------------------------------------------------------------------------

// Disable about:config warning.
user_pref("general.warnOnAboutConfig", false);
user_pref("browser.aboutConfig.showWarning", false);

// Disable form and search history.
user_pref("browser.formfill.enable", false);

// Disable address bar guessing domain.
user_pref("browser.fixup.alternate.enabled", false);

// Disable address bar encoding Unicode characters when copying the URL.
user_pref("browser.urlbar.decodeURLsOnCopy", true);

// Disable address bar making speculative connections.
user_pref("browser.urlbar.speculativeConnect.enabled", false);

// Disable address bar sending search term to DNS server.
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);

// Set the suggestion types in address bar.
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.quicksuggest", true);
user_pref("browser.urlbar.suggest.calculator", true);

// Set the security delay on some confirmation dialogs.
user_pref("security.dialog_enable_delay", 500);

// Disable closing window with last tab.
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Disable Backspace key navigation.
user_pref("browser.backspace_action", 2);

// Disable Ctrl+Q as quit shortcut.
user_pref("browser.quitShortcut.disabled", true);

// Disable Alt as menu access key.
user_pref("ui.key.menuAccessKey", 0);

// Disable selecting any extra spaces when double-clicking text.
user_pref("layout.word_select.eat_space_to_next_word", false);

// -----------------------------------------------------------------------------
// ESR
// -----------------------------------------------------------------------------

// ESR 78.* still uses the following preferences.
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.urlbar.matchBuckets", "general:5,suggestion:Infinity");
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("security.mixed_content.block_object_subrequest", true);
