import re

with open('template-article.html', 'r', encoding='utf-8') as f:
    content = f.read()

template = """		<header class="major">
			<div class="header-nav">
				<a href="../[category].html" class="header-back-link"><i class="fa fa-arrow-left"></i> [Category]</a>
				<a id="theme-toggle" style="cursor: pointer; border-bottom: none; font-size: 1.2em;" class="fa fa-moon" title="Toggle dark mode" aria-label="Toggle theme"></a>
			</div>

			<h2>[Article Title]</h2>
			<p class="article-meta"><em>[Month Year] &nbsp;·&nbsp; [Author Name]</em></p>

			<nav class="lang-switcher" aria-label="Language selector">
				<a href="#lang-en" class="lang-icon" title="English">
					<svg viewBox="0 0 60 30" width="20" height="13" class="flag-icon"><clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="t"><path d="M30,15 h30 v15 z v-15 h-30 z h-30 v-15 z v15 h30 z"/></clipPath><g clip-path="url(#s)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg>
					<span class="lang-code">EN</span>
				</a>

				<a href="#lang-th" class="lang-icon active" title="ภาษาไทย">
					<svg viewBox="0 0 36 24" width="20" height="13" class="flag-icon"><rect width="36" height="24" fill="#A51931"/><rect width="36" height="16" y="4" fill="#F4F5F8"/><rect width="36" height="8" y="8" fill="#2D2A4A"/></svg>
					<span class="lang-code">TH</span>
				</a>
				
				<a href="#lang-zh" class="lang-icon" title="中文">
					<svg viewBox="0 0 30 20" width="20" height="13" class="flag-icon"><rect width="30" height="20" fill="#ee1c25"/><g transform="translate(5,5) scale(2)"><polygon fill="#ffce00" points="0,-1.5 0.88,1.2 -1.43,-0.48 1.43,-0.48 -0.88,1.2"/></g><g transform="translate(10,2) scale(0.6)"><polygon fill="#ffce00" points="0,-1.5 0.88,1.2 -1.43,-0.48 1.43,-0.48 -0.88,1.2" transform="rotate(23)"/></g><g transform="translate(12,4) scale(0.6)"><polygon fill="#ffce00" points="0,-1.5 0.88,1.2 -1.43,-0.48 1.43,-0.48 -0.88,1.2" transform="rotate(46)"/></g><g transform="translate(12,7) scale(0.6)"><polygon fill="#ffce00" points="0,-1.5 0.88,1.2 -1.43,-0.48 1.43,-0.48 -0.88,1.2" transform="rotate(70)"/></g><g transform="translate(10,9) scale(0.6)"><polygon fill="#ffce00" points="0,-1.5 0.88,1.2 -1.43,-0.48 1.43,-0.48 -0.88,1.2" transform="rotate(90)"/></g></svg>
					<span class="lang-code">ZH</span>
				</a>
				
				<a href="#lang-ja" class="lang-icon" title="日本語">
					<svg viewBox="0 0 900 600" width="20" height="13" class="flag-icon"><rect width="900" height="600" fill="#fff"/><circle cx="450" cy="300" r="180" fill="#bc002d"/></svg>
					<span class="lang-code">JA</span>
				</a>
				
				<a href="#lang-de" class="lang-icon" title="Deutsch">
					<svg viewBox="0 0 5 3" width="20" height="13" class="flag-icon"><rect width="5" height="3" fill="#000"/><rect width="5" height="2" y="1" fill="#D00"/><rect width="5" height="1" y="2" fill="#FFCE00"/></svg>
					<span class="lang-code">DE</span>
				</a>
			</nav>
		</header>

		<div id="main">
			<section id="one">"""
