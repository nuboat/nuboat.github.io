/* =========================================================================
   PEERAPAT.CC — Cookie Consent controller
   - Renders a terminal-styled banner with Accept / Reject.
   - Google Analytics only runs after explicit Accept.
   - On Reject (or while undecided) GA is disabled via the official
     `ga-disable-<ID>` flag, so no analytics hits are sent on any page.
   - Reject is NOT remembered: the banner is shown again on every visit
     until the visitor accepts.
   ========================================================================= */
(function () {
	"use strict";

	var GA_ID = "G-TKCX2DN0ZT";
	var STORAGE_KEY = "cookie-consent";

	function readConsent() {
		try { return localStorage.getItem(STORAGE_KEY); }
		catch (e) { return null; }
	}

	function saveConsent(value) {
		try { localStorage.setItem(STORAGE_KEY, value); }
		catch (e) { /* storage blocked — fall through, GA stays disabled */ }
	}

	function enableAnalytics() {
		window["ga-disable-" + GA_ID] = false;
		if (typeof window.gtag === "function") {
			window.gtag("consent", "update", { analytics_storage: "granted" });
			window.gtag("config", GA_ID);
		}
	}

	function disableAnalytics() {
		window["ga-disable-" + GA_ID] = true;
		if (typeof window.gtag === "function") {
			window.gtag("consent", "update", { analytics_storage: "denied" });
		}
	}

	function buildBanner() {
		var el = document.createElement("section");
		el.className = "cc-terminal";
		el.setAttribute("role", "dialog");
		el.setAttribute("aria-live", "polite");
		el.setAttribute("aria-label", "Cookie consent");

		// Policy link is at site root regardless of current page depth.
		var policyHref = "/policy.html";

		el.innerHTML =
			'<div class="cc-bar">' +
				'<span class="cc-dot r"></span>' +
				'<span class="cc-dot y"></span>' +
				'<span class="cc-dot g"></span>' +
				'<span class="cc-title">peerapat@cc: ~/consent</span>' +
			'</div>' +
			'<div class="cc-body">' +
				'<pre>' +
					'<span class="cc-line"><span class="cc-prompt">$</span> <span class="cc-msg">cat cookies.txt</span></span>' +
					'<span class="cc-line cc-comment"># This site serves Google Analytics cookies</span>' +
					'<span class="cc-line cc-comment"># to understand traffic. Nothing else.</span>' +
					'<span class="cc-line"><span class="cc-prompt">$</span> <span class="cc-cursor"></span></span>' +
				'</pre>' +
				'<div class="cc-actions">' +
					'<button type="button" class="cc-btn cc-btn-accept" data-cc="accept">[ Accept ]</button>' +
					'<button type="button" class="cc-btn cc-btn-reject" data-cc="reject">[ Reject ]</button>' +
				'</div>' +
			'</div>';

		el.querySelector('[data-cc="accept"]').addEventListener("click", function () {
			saveConsent("accepted");
			enableAnalytics();
			dismiss(el);
		});
		el.querySelector('[data-cc="reject"]').addEventListener("click", function () {
			// Reject is not persisted — the banner returns on the next visit.
			disableAnalytics();
			dismiss(el);
		});

		return el;
	}

	function dismiss(el) {
		el.style.transition = "opacity .25s ease, transform .25s ease";
		el.style.opacity = "0";
		el.style.transform = "translateY(18px)";
		setTimeout(function () { el.remove(); }, 260);
	}

	function init() {
		if (readConsent() === "accepted") {
			enableAnalytics();
			return;
		}
		// Not accepted -> keep GA off and ask again on every visit.
		disableAnalytics();
		document.body.appendChild(buildBanner());
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})();
