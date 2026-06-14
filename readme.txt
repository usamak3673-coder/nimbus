==================================================
 NIMBUS - SAAS LANDING PAGE TEMPLATE
 README
==================================================

Thank you for downloading the Nimbus SaaS Landing Page Template!
This file gives you a quick start guide. For full details, open
"documentation.pdf".

--------------------------------------------------
1. HOW TO OPEN THE TEMPLATE
--------------------------------------------------
- Locate the file "index.html" in the main folder.
- Double-click it to open in your default web browser
  (Chrome, Firefox, Edge, or Safari recommended).
- No installation, build tools, or server is required.
  It is plain HTML, CSS, and JavaScript.

--------------------------------------------------
2. FOLDER STRUCTURE
--------------------------------------------------
saas-template/
  index.html          -> Main landing page
  css/style.css        -> All styles (colors, layout, responsive design)
  js/script.js         -> Interactivity (menu, smooth scroll, form, animations)
  images/               -> All image assets (replace with your own)
  documentation.pdf     -> Full setup & customization guide
  readme.txt            -> This file

--------------------------------------------------
3. HOW TO EDIT CONTENT
--------------------------------------------------
- Open "index.html" in any code editor (VS Code, Sublime, Notepad++).
- Each section is clearly labeled with comments, e.g.:
    <!-- ===================== HERO ===================== -->
    <!-- ===================== PRICING ===================== -->
- Simply edit the text between HTML tags:
    <h1 class="hero-title">Build Your SaaS Faster</h1>
  becomes:
    <h1 class="hero-title">Your New Headline</h1>
- Save the file and refresh your browser to see changes.

--------------------------------------------------
4. HOW TO REPLACE IMAGES
--------------------------------------------------
- All images are stored in the "images" folder.
- To replace an image, add your new file to the "images" folder
  and either:
    a) Rename your new image to match the existing filename
       (e.g. hero.png), OR
    b) Update the "src" path in index.html, e.g.:
       <img src="images/hero.png" ...>
       change to:
       <img src="images/your-new-image.png" ...>
- Recommended sizes:
    hero.png        -> 1000 x 760px
    about.png        -> 900 x 760px
    dashboard.png    -> 1200 x 800px
    avatar1-4.png    -> 120 x 120px (square)
    logo-brand1-5.png -> 160 x 50px
    logo.svg          -> 34 x 34px (vector logo)

--------------------------------------------------
5. CHANGING COLORS
--------------------------------------------------
- Open "css/style.css"
- At the very top, find the ":root" section with CSS variables:
    --color-primary: #5b5bf6;
    --color-secondary: #8b5cf6;
- Change these hex values to update the entire color scheme
  across the whole site automatically.

--------------------------------------------------
6. BASIC USAGE TIPS
--------------------------------------------------
- The mobile menu icon (3 lines) appears automatically on small screens.
- All navigation links scroll smoothly to their matching section.
- The contact form and newsletter form are front-end demos only.
  Connect them to your backend or a form service (e.g. Formspree,
  Getform, EmailJS) to receive real submissions.
- The page is fully responsive - test it by resizing your browser
  or using your browser's device toolbar (F12 -> Toggle device).

--------------------------------------------------
NEED MORE HELP?
--------------------------------------------------
Please refer to "documentation.pdf" for:
- Full file structure explanation
- Technologies used
- Detailed customization instructions

Enjoy building with Nimbus!
