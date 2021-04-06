// Firefox user.js

// -----------------------------------------------------------------------------
// Startup
// -----------------------------------------------------------------------------

// Show a blank page when opening homepage and new window.
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
user_pref("intl.accept_languages", "ja,zh-tw,zh,en-us,en");

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

// Disallow JavaScript to move and resize windows.
user_pref("dom.disable_window_move_resize", true);

// Open links in tabs instead of new windows.
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);

// Block pop-up windows.
user_pref("dom.disable_open_during_load", true);
user_pref("dom.popup_allowed_events", "click dblclick mousedown mouseup pointerdown pointerup");

// Enable window.target protection.
user_pref("dom.targetBlankNoOpener.enabled", true);

// Enable window.name protection.
user_pref("privacy.window.name.update.enabled", true);

// -----------------------------------------------------------------------------
// Network
// -----------------------------------------------------------------------------

// Disable prefetching.
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.dns.disablePrefetch", true);

// Disable opening connection to links when mouseover.
user_pref("network.http.speculative-parallel-limit", 0);

// Disable sending additional analytics to websites.
user_pref("beacon.enabled", false);

// Disallow cross-origin sub-resources to open HTTP authentication credentials
// dialogs.
user_pref("network.auth.subresource-http-auth-allow", 1);

// Disable Captive Portal detection.
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);

// Disable Network Connectivity checks.
user_pref("network.connectivity-service.enabled", false);

// Enable proxying DNS when using SOCKS v5.
user_pref("network.proxy.socks_remote_dns", true);

// -----------------------------------------------------------------------------
// Privacy
// -----------------------------------------------------------------------------

// Block all third-party cookies and site data.
user_pref("network.cookie.cookieBehavior", 1);
user_pref("browser.contentblocking.category", "custom");

// Enable First-Party Isolation.
user_pref("privacy.firstparty.isolate", true);

// Enable Enhanced Tracking Protection.
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);

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

// Disable Google Safe Browsing checks.
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");

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

// Enable HTTPS-Only mode.
user_pref("dom.security.https_only_mode", true);

// Enforce OCSP (Online Certificate Status Protocol) stapling.
user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.OCSP.enabled", 1);
user_pref("security.OCSP.require", true);

// Enforce CRLite.
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);

// Enforce CSP (Content Security Policy).
user_pref("security.csp.enable", true);

// Enforce Firefox blocklist.
user_pref("extensions.blocklist.enabled", true);

// -----------------------------------------------------------------------------
// Search
// -----------------------------------------------------------------------------

// Enable search suggestions in all windows.
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.search.suggest.enabled.private", true);
user_pref("browser.urlbar.suggest.searches", true);

// Show search suggestions after other suggestions.
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);

// Disable address bar leaking single words to DNS provider after searching.
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);

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

// -----------------------------------------------------------------------------
// Add-ons
// -----------------------------------------------------------------------------

// Disable enforced extension signing for ESR and Nightly.
user_pref("xpinstall.signatures.required", false);

// Enable all extensions in Private Browsing windows by default.
user_pref("extensions.allowPrivateBrowsingByDefault", true);

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
// Files
// -----------------------------------------------------------------------------

// Disable disk cache.
user_pref("browser.cache.disk.enable", false);

// Disable offline cache.
user_pref("browser.cache.offline.storage.enable", false);

// Disable media cache in Private Browsing windows.
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("media.memory_cache_max_size", 65536);

// Disable page thumbnail collection.
user_pref("browser.pagethumbnails.capturing_disabled", true);

// Disable favicons in shortcuts.
user_pref("browser.shell.shortcutFavicons", false);

// Set the maximum number of bookmark backups to keep.
user_pref("browser.bookmarks.max_backups", 5);

// Set the minimum interval between session save operations.
user_pref("browser.sessionstore.interval", 60000);

// Always ask where to save files.
user_pref("browser.download.useDownloadDir", false);

// Disable adding downloaded files to Recent Documents folder.
user_pref("browser.download.manager.addToRecentDocs", false);

// -----------------------------------------------------------------------------
// Appearance
// -----------------------------------------------------------------------------

// Enable userChrome/userContent.css customizations.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Disable site-specific zoom level.
user_pref("browser.zoom.siteSpecific", false);

// Show the full URL in address bar.
user_pref("browser.urlbar.trimURLs", false);

// Show Punycode for IDNs (Internationalized Domain Names) in address bar.
user_pref("network.IDN_show_punycode", true);

// Show "Downloads" button in toolbar.
user_pref("browser.download.autohideButton", false);

// Hide "What's New" button in toolbar.
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

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

// Disable automatic Firefox updates.
user_pref("app.update.auto", false);

// Disable accessibility services.
user_pref("accessibility.force_disabled", 1);

// Disable search and form history.
user_pref("browser.formfill.enable", false);

// Disable address bar guessing domain.
user_pref("browser.fixup.alternate.enabled", false);

// Disable address bar encoding Unicode characters when copying URL.
user_pref("browser.urlbar.decodeURLsOnCopy", true);

// Disable address bar making speculative connections.
user_pref("browser.urlbar.speculativeConnect.enabled", false);

// Set address bar suggestion types.
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.openpage", true);
user_pref("browser.urlbar.suggest.topsites", false);

// Set the security delay on some confirmation dialogs.
user_pref("security.dialog_enable_delay", 500);

// Disable closing window with last tab.
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Disable Backspace key navigation.
user_pref("browser.backspace_action", 2);

// Disable Alt key toggling menu bar.
user_pref("ui.key.menuAccessKey", 0);

// Disable selecting extra space when double-clicking text.
user_pref("layout.word_select.eat_space_to_next_word", false);

// Disable automatic start and session restore after Windows reboot.
user_pref("toolkit.winRegisterApplicationRestart", false);

// -----------------------------------------------------------------------------
// ESR
// -----------------------------------------------------------------------------

// ESR 78.* still uses the following preferences.
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("browser.download.hide_plugins_without_extensions", false);
user_pref("browser.library.activity-stream.enabled", false);
