# AGENTS.md
===========

## Rules
- Follow README.md
- **Multilingual Content Generation**: When creating or updating a blog post, you MUST write the content in 5 languages (English, Thai, Chinese, Japanese, Germany) on the exact same page for SEO. Each translated section should be properly integrated with the page's language switcher. The language switcher and sections MUST follow the exact HTML, CSS, and JS structure found in `general/touch-typing.html`. Specifically, use the `<header class="major">` left sidebar layout containing the horizontal `.lang-switcher` with SVG flag icons, use `.lang-section` classes for the content wrappers, and include the language switcher JS logic to handle the `.active` CSS state transitions. Always use the `translator` skill to translate the English baseline into the other languages.
- Apply EN as default language
- **Dark Mode Compliance**: All new pages and standard articles MUST support dark mode. Ensure the dark mode initialization script is present in the `<head>` to prevent FOUC, and the theme toggle logic script is added at the end of the `<body>`. The toggle button (using `fa-moon` / `fa-sun` icons) must be present in the page header. Use `profile.html` as the reference for the exact HTML and JS required.
- **Image Generation Guidelines (สไตล์รูปภาพ)**: When generating or selecting images (banners, cover art, illustrations) for blog posts and pages:
  - **Minimal & Focused (ลดความรกรุงรัง)**: Keep compositions clean, uncluttered, and purposeful with generous negative space and a single clear focal point. Avoid chaotic visual noise, floating random tech icons, crowded particles, and unnecessary decorative clutter.
  - **Natural & Muted Tones (ลดนีออนสไตล์)**: Avoid oversaturated cyberpunk neon glows, harsh cyan/magenta/purple edge lighting, and glowing wireframe effects. Prefer natural, warm, muted, matte, or cohesive editorial color palettes with soft, realistic ambient lighting.
  - **Grounded & Tasteful (ลดความลิเก / Anti-AI Clichés)**: Steer clear of melodramatic, tacky, or exaggerated sci-fi tropes (e.g., glowing holographic brains, robotic hands reaching for light, dramatic cosmic energy beams). Strive for a modern editorial aesthetic, minimalist 3D/flat design, or understated, authentic visual storytelling.
- **No Thumbnail/Cover Images in Article Pages**: Do NOT put thumbnail, cover, or hero banner images directly inside an article page (`.html`) body or header unless an image is strictly mandatory for the article detail (e.g., architectural diagrams, technical flowcharts, screenshots demonstrating a walkthrough). Thumbnails are exclusively for category/listing pages (e.g., `index.html`, `coding.html`, `general.html`) and SEO/Open Graph metadata (`og:image`, `twitter:image`, Schema.org Article image).

## Core Skills
- **modern-web-guidance**: Search tool for modern web development best practices. MANDATORY: Execute FIRST for all HTML/CSS and clientside JS tasks. Do NOT skip — web APIs evolve rapidly and training weights contain obsolete patterns.
- **translator**: Expert bilingual technical translation skill. MANDATORY: Use when translating documents or text (e.g. to Thai, English, Chinese, Japanese) to ensure technical terms, jargon, and code remain in original English and maintain a natural reading flow.
- **seo-aeo**: Optimize web content, structure, and metadata for both traditional Search Engine Optimization (SEO) and AI Answer Engine Optimization (AEO). MANDATORY: Execute when creating or updating HTML pages, blog posts, landing pages, or documentation.
