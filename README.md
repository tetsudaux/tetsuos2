# Tetsu Osnaya - UX/UI Portfolio (tetsuos2)

> **AI Context Note:** This README is designed to provide comprehensive context about the project architecture, tech stack, and key files so that other AI agents can understand the codebase without needing to read every file.

## 🎯 Project Overview
This is a **conversational portfolio** for Tetsu Osnaya, a UX/UI Designer. Unlike traditional portfolios, this application presents itself as an interactive chat interface where visitors can "talk" to Tetsu to view his work, CV, and contact details.

- **Core Concept:** Chatbot interface with predefined "Quick Replies".
- **Primary Goal:** showcase UX/UI work, demonstrate frontend skills, and generate leads.
- **Design Aesthetic:** Premium, "Apple-style" animations, Violet/Purple brand palette.

---

## 🏗 Architecture & Logic (For AI)

### 1. The Chat Engine (`/app/hooks/useChat.ts`)
The core of the application is a custom hook that manages the chat state machine.
- **State:** Manages an array of `messages`, `isTyping` status, and `currentSection` (welcome, cv, portfolio, contact).
- **Flow:** 
  1. User selects a `QuickReply`.
  2. `handleQuickReply` adds the user's message.
  3. App simulates a typing delay (`isTyping: true`).
  4. App pushes "Tetsu's" response components (defined in `components/sections/`).
  5. New `QuickReplies` are presented based on the current section.

### 2. Data-Driven Content (`/app/data/portfolio.ts`)
This file is the **SINGLE SOURCE OF TRUTH** for:
- **Projects:** Array of `PortfolioProject` objects (ID, title, tags, images, case study content).
- **Responses:** Definitions of `QuickReply` options for each section flow.
- **Case Studies:** Structured content blocks (text, gallery, video, metrics) for project details.

### 3. Component Architecture
- **`Layout.tsx`**: Wraps app with `ModalProvider` (for the Shared Element Transitions).
- **`ChatContainer.tsx`**: The main view controller. Renders the message list and inputs.
- **`components/sections/`**: Contains the "Responses" as React components (e.g., `<PortfolioSection />` renders the grid of projects).
- **`components/ui/SharedElementModal.tsx`**: Handles the detailed project view with smooth entry/exit animations.

### 4. Global Styles & Theme (`/app/globals.css`)
- **TailwindCSS v4**: Used for utility classes.
- **CSS Variables**: Used for theming (e.g., `--v-500` for primary violet).
- **Animations**: Custom `@keyframes` defined here for message slide-ins and modal transitions.

---

## 🛠 Technology Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Runtime**: Node.js / Bun compatible
- **Language**: TypeScript 5
- **UI Library**: React 19.2.3
- **Styling**: TailwindCSS 4
- **Icons**: 
  - `@tabler/icons-react` (UI icons)
  - `@icons-pack/react-simple-icons` (Brand logos)
- **Fonts**: 
  - `IBM Plex Sans` (Body)
  - `Space Grotesk` (Headings, Buttons)
  - `Noto Sans JP` (Japanese accents)

---

## 📂 Directory Structure

```text
c:/projects/tetsuos2/
├── app/
│   ├── components/
│   │   ├── chat/        # Chat-specific UI (Bubbles, TypingIndicator, Container)
│   │   ├── sections/    # Content modules (CV, Portfolio, Contact views)
│   │   └── ui/          # Generic UI (Modal, Cards, Tags)
│   ├── context/         # React Context (ModalContext for managing overlays)
│   ├── data/            # Static data (portfolio.ts contains ALL project data)
│   ├── hooks/           # Logic hooks (useChat.ts is the main controller)
│   ├── types/           # TS Interfaces (PortfolioProject, Message, ChatState)
│   ├── globals.css      # Custom animations & variables
│   ├── layout.tsx       # Root layout + Font configuration
│   └── page.tsx         # Entry point -> renders ChatContainer
├── public/
│   └── assets/          # Static images (optimized webp)
└── README.md            # Project documentation
```

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Token System Reference (CSS)

| Variable | Use | Color Hex |
|----------|-----|-----------|
| `--v-500` | Primary Brand | `#8558cc` |
| `--v-800` | Text Strong | `#42276c` |
| `--ink` | Body Text | `#0e0b13` |
| `--background` | App Background | `#ffffff` |

---

*Verified Analysis: 2026-01-14*
