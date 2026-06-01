# 🌌 Futuristic Interactive Developer Portfolio

A premium, high-performance, and visually stunning developer portfolio website built using **React 19**, **Vite 8**, and **Vanilla CSS**. This portfolio incorporates modern design patterns such as dark mode glassmorphism, glowing accent gradients, micro-animations, a custom canvas-based particle network background, and a live contact form integrated with **EmailJS**.

Designed for developers, engineers, and creatives looking for a professional and highly engaging web presence.

---

## 🚀 Live Demo & Personalization

This portfolio is configured for **Faheem Nazir**, an aspiring Computer Science Engineer and Full-Stack Developer. 

* **GitHub:** [FaheemNazir1](https://github.com/FaheemNazir1)
* **LinkedIn:** [faheemnazir5050](https://www.linkedin.com/in/faheemnazir5050/)

---

## ✨ Features

- **🌀 Interactive Canvas Particle Network:** A lightweight, vanilla HTML5 Canvas particle system that dynamically tracks mouse coordinates, connecting particles and generating reactive webs under the cursor.
- **💎 Premium Glassmorphic UI:** Built using modern styling tokens, semi-transparent backdrops (`backdrop-filter`), glowing radial blobs, and smooth CSS transitions.
- **✍️ Dynamic Typewriter Effect:** A smooth, interactive typewriter component in the Hero section displaying rotating professional roles.
- **♾️ Infinite SVG Marquee:** A customized, infinite-scrolling logo showcase for core programming languages and technologies, complete with high-quality inline SVGs.
- **📂 Filterable Projects Showcase:** Categorized grid view (All, AI & ML, Web Dev) showing custom visual cards, tech stack tags, source code access, and live preview integrations.
- **⏳ Loading Screen:** A sleek logo loader showing `<FN/>` that mimics application initialization before fading out.
- **✉️ Direct Mail via EmailJS:** Complete production-ready integration with the `@emailjs/browser` SDK. Includes a beautiful contact form with real-time status cues (Sending, Success, Error) and clipboard copy tools.
- **📱 Fully Responsive Design:** Handcrafted layouts designed to scale beautifully from ultra-wide monitors down to standard smartphones.

---

## 🛠️ Technology Stack

- **Core Library:** [React 19](https://react.dev/)
- **Bundler & Build Tool:** [Vite 8](https://vite.dev/)
- **Styling:** Vanilla CSS (CSS Variables, Flexbox/Grid, Keyframes, Custom Scrollbars)
- **Icons:** [Lucide React](https://lucide.dev/)
- **API Messaging:** [EmailJS Browser SDK](https://www.emailjs.com/)
- **Code Linter:** ESLint (Flat Config style)

---

## 💻 Getting Started

Follow these steps to set up and run the project locally on your machine.

### 📋 Prerequisites

Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed. You can verify this by running:
```bash
node -v
npm -v
```

### ⚙️ Step-by-Step Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/FaheemNazir1/Portfolio.git
   cd Portfolio
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory by duplicating the `.env.example` file:
   - On Windows (PowerShell):
     ```powershell
     Copy-Item .env.example .env
     ```
   - On macOS/Linux (Terminal):
     ```bash
     cp .env.example .env
     ```
   
   Open the `.env` file and replace the placeholder values with your own EmailJS credentials (see the **EmailJS Configuration** section below):
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

4. **Launch the Local Development Server:**
   ```bash
   npm run dev
   ```
   Vite will start the server, typically at `http://localhost:5173`. Open this URL in your web browser.

5. **Build for Production:**
   To bundle the project for production deployment:
   ```bash
   npm run build
   ```
   This will generate optimized build files in a `/dist` directory.

6. **Preview the Production Build Locally:**
   ```bash
   npm run preview
   ```

---

## 📧 EmailJS Configuration

This application features a fully functional contact form that sends messages directly to your inbox without requiring a backend server.

### How to set it up:
1. Sign up/Log in at [EmailJS](https://www.emailjs.com/).
2. **Create a Email Service:** Link your email address (e.g., Gmail) in the dashboard. Copy the generated **Service ID**.
3. **Create an Email Template:** Set up the template layout for incoming messages. For example:
   * **Subject:** `{{subject}}` (or any text)
   * **Content:**
     ```text
     You received a new message from {{from_name}} ({{from_email}}):
     
     {{message}}
     ```
   * Save the template and copy the **Template ID**.
4. **Get Public Key:** Go to the **Account** tab, select **API Keys**, and copy the **Public Key**.
5. Put these IDs in your `.env` file.
6. *Note: If no env credentials are provided, the contact form will automatically fallback to **Demo Mode**, displaying mock browser alerts and console warnings instead of failing.*

---

## 📁 Codebase Structure

Here is a quick directory walkthrough to help you navigate:

```text
Portfolio/
├── public/                 # Static assets (Resume, images, icons)
│   ├── developer_portrait.png
│   └── Faheem_Nazir_Resume.pdf
├── src/
│   ├── assets/             # Brand logos & imagery
│   ├── components/         # Modular React components
│   │   ├── About.jsx       # Biography & coding philosophy
│   │   ├── BrandIcons.jsx  # Customized inline SVG logos
│   │   ├── Contact.jsx     # Contact coordinates & EmailJS Form
│   │   ├── Education.jsx   # Interactive Academic Timeline
│   │   ├── Experience.jsx  # fresh-graduate roadmap & milestones
│   │   ├── Footer.jsx      # Credits and footer links
│   │   ├── Hero.jsx        # Landing card, typewriter, social buttons
│   │   ├── Navbar.jsx      # Floating glass header & mobile toggles
│   │   ├── ParticleBackground.jsx # HTML5 Canvas animated network
│   │   ├── Projects.jsx    # Projects filter-tabs & grid list
│   │   ├── Services.jsx    # Service cards grid
│   │   └── Skills.jsx      # Skills categories & scrolling marquee
│   ├── App.css             # Main stylesheet (37 bytes)
│   ├── App.jsx             # Root layout controller & loading screen
│   ├── index.css           # Global typography, color tokens, and layout styles
│   └── main.jsx            # React root mount point
├── .env.example            # Environment variables sample configuration
├── vite.config.js          # Vite configuration settings
└── package.json            # Scripts and dependencies
```

---

## 🛠️ Personalization & Customization Guide

Want to adjust the template for yourself? Follow this breakdown of files containing personal details:

| Section | Target File | What to Customize |
| :--- | :--- | :--- |
| **Branding/Logo** | [App.jsx](file:///d:/Project/Portfolio/src/App.jsx) | Adjust `<span className="loader-logo">` text from `FN` to your initials. |
| **Hero / Landing** | [Hero.jsx](file:///d:/Project/Portfolio/src/components/Hero.jsx) | Update name highlight, typewriter titles array (`titles`), biography, resume file link path, and links to GitHub/LinkedIn. |
| **About Section** | [About.jsx](file:///d:/Project/Portfolio/src/components/About.jsx) | Modify paragraph descriptions, hobby list, academic timeline summary, stats values (e.g. projects completed), and your coding philosophy quote. |
| **Education** | [Education.jsx](file:///d:/Project/Portfolio/src/components/Education.jsx) | Edit the `educationList` array containing objects for B.Tech, Schooling, dates, institutions, locations, and key highlights. |
| **Skills & Tech** | [Skills.jsx](file:///d:/Project/Portfolio/src/components/Skills.jsx) | Adjust `skillCategories` names/items, and edit the `marqueeSkills` array to add/remove your custom SVG technology badges. |
| **Services Offered**| [Services.jsx](file:///d:/Project/Portfolio/src/components/Services.jsx)| Customize titles, descriptions, and Lucide icons in the `services` array. |
| **Projects** | [Projects.jsx](file:///d:/Project/Portfolio/src/components/Projects.jsx) | Edit the `projects` array objects with titles, tech arrays, short descriptions, categories (`ai-ml`, `web-dev`), custom gradient colors, and repository/live URLs. |
| **Career Roadmap**| [Experience.jsx](file:///d:/Project/Portfolio/src/components/Experience.jsx)| Rewrite the milestones list (`milestones`), goals checklist, and summary highlights. |
| **Contact Info** | [Contact.jsx](file:///d:/Project/Portfolio/src/components/Contact.jsx) | Update direct email addresses, phone coordinates, copy clipboard targets, and location names. |
| **Footer** | [Footer.jsx](file:///d:/Project/Portfolio/src/components/Footer.jsx) | Update copyright notice text and quick links. |
| **Resume & Avatar**| [public/](file:///d:/Project/Portfolio/public) | Swap out `developer_portrait.png` and `Faheem_Nazir_Resume.pdf` with your custom portrait image and resume PDF. |

---

## 📜 Available NPM Scripts

In the project directory, you can run:

- `npm run dev`: Starts the local dev server with Hot Module Replacement (HMR).
- `npm run build`: Bundles production-ready assets into the `/dist` directory.
- `npm run preview`: Previews your production build locally for QA.
- `npm run lint`: Performs lint checks on JavaScript and React files using ESLint.

---

## ⚖️ License

Distributed under the MIT License. See the repository documentation for licensing permissions.
