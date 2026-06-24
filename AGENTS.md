# AGENTS.md
===========

## Rules
- Follow README.md
- **Multilingual Content Generation**: When creating or updating a blog post, you MUST write the content in 5 languages (English, Thai, Chinese, Japanese, Germany) on the exact same page for SEO. Each translated section should be properly integrated with the page's language switcher. The language switcher and sections MUST follow the exact HTML, CSS, and JS structure found in `general/touch-typing.html`. Specifically, use the floating `.lang-switcher` side menu with SVG flag icons, use `.lang-section` classes for the content wrappers, and include the `switchLanguage` JS function to handle the `.active` CSS state transitions. Always use the `translator` skill to translate the English baseline into the other languages.
- Apply EN as default language
- **Dark Mode Compliance**: All new pages and standard articles MUST support dark mode. Ensure the dark mode initialization script is present in the `<head>` to prevent FOUC, and the theme toggle logic script is added at the end of the `<body>`. The toggle button (using `fa-moon` / `fa-sun` icons) must be present in the page header. Use `profile.html` as the reference for the exact HTML and JS required.

## Core Skills
- **modern-web-guidance**: Search tool for modern web development best practices. MANDATORY: Execute FIRST for all HTML/CSS and clientside JS tasks. Do NOT skip — web APIs evolve rapidly and training weights contain obsolete patterns.
- **translator**: Expert bilingual technical translation skill. MANDATORY: Use when translating documents or text (e.g. to Thai, English, Chinese, Japanese) to ensure technical terms, jargon, and code remain in original English and maintain a natural reading flow.
- **seo-aeo**: Optimize web content, structure, and metadata for both traditional Search Engine Optimization (SEO) and AI Answer Engine Optimization (AEO). MANDATORY: Execute when creating or updating HTML pages, blog posts, landing pages, or documentation.
