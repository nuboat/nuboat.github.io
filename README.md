Here is a `README.md` template specifically structured to help an AI agent (like GitHub Copilot, Cursor, or myself) quickly understand your project's architecture, purpose, and rules for modification. 

You can copy and paste this directly into your repository.

***

```markdown
# Personal Resume & Blog - Static Site

## 🤖 AI Agent Context
**Role:** You are assisting with the maintenance and expansion of a static HTML/CSS/JS website. 
**Purpose:** This repository serves as a personal resume portfolio and a simple blog. 
**Architecture:** It is a purely static site with no build steps, bundlers, or frameworks (No React, Vue, etc.). All routing is handled via direct file paths.

## 📂 Project Structure
Below is the directory structure. Please adhere to this organization when creating or modifying files.

```text
ROOT/
│
├── index.html       # Main entry point. Contains the personal resume/portfolio.
├── assets/          # Global styles, scripts, and fonts.
│   ├── css/         # CSS stylesheets (e.g., style.css)
│   └── js/          # Vanilla JavaScript files (e.g., main.js)
├── images/          # All static image assets.
│   ├── resume/      # Profile pictures, company logos, etc.
│   └── blog/        # Images specific to blog posts.
└── blogs/           # Contains individual blog posts.
    ├── index.html   # (Optional) The blog listing page.
    └── post-1.html  # Individual static HTML blog posts.
```

## 📄 File & Directory Guidelines

### `index.html` (Resume)
* **Content:** This is a single-page layout containing resume details (experience, education, skills, contact info).
* **Styling:** Relies on CSS found in `assets/css/`. Keep the HTML semantic.

### `blogs/` (Blog Posts)
* **Structure:** Each new blog post should be a separate `.html` file inside this directory (e.g., `my-new-post.html`).
* **Links:** When linking back to the home page from a blog post, use relative paths (e.g., `<a href="../index.html">Home</a>`).
* **Media:** Any images used in blog posts should be saved in `images/blog/` and referenced via relative paths (e.g., `<img src="../images/blog/diagram.png" />`).

### `assets/` & `images/`
* **CSS/JS:** Keep styles and scripts modular if they get too large, but a single `style.css` and `main.js` is preferred for simplicity.
* **Images:** Compress images before adding them to keep the repository lightweight. Use descriptive filenames (e.g., `profile-pic-2024.jpg` instead of `img1.jpg`).

## 🛠️ Instructions for AI Agent Tasks

* **When asked to update the resume:** Only modify `index.html`. Ensure semantic HTML tags (like `<section>`, `<article>`, `<header>`) are maintained.
* **When asked to create a new blog post:** 1. Create a new `.html` file in the `blogs/` directory.
    2. Use the existing CSS from `assets/css/` to ensure visual consistency.
    3. Update the blog listing (if it exists) to include a link to the new post.
* **When writing code:** Prioritize modern, vanilla HTML5, CSS3, and ES6+ JavaScript. Ensure the design remains responsive for mobile devices.
```

***

### Why this structure works for AI:
* **Explicit Constraints:** It tells the AI exactly what technologies are being used (and specifically what *isn't* being used, like React or bundlers), preventing it from hallucinating complex build steps.
* **Pathing Rules:** AI tools often struggle with relative paths in static sites. Explicitly telling it how to link back to the `index.html` from the `blogs/` folder reduces broken links.
* **Clear Task Triggers:** The "Instructions for AI Agent Tasks" section maps typical prompts (e.g., "Add a new blog post") to an exact sequence of file operations.