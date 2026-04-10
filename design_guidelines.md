# WELTMANN Capital Landing Page - Design Guidelines

## Design Approach
Reference-based approach following webild.io's structure, layout rhythm, and spacing logic. Modern, minimal, institutional aesthetic with clarity and simplicity.

## Color Palette
### Light Sections (Default)
- Background: White (#ffffff)
- Foreground: Dark text (#171717)
- Muted: Light gray (#f5f5f5)
- Cards: White with subtle border

### Dark Sections (Hero, Domain, Brand, Footer)
- Background: Near-black (#0a0a0a to #111111)
- Text: White and gray-400
- Cards: Subtle white/[0.02] overlays
- Gradient text for headlines

### Special Utilities
- `.dark-section`: Applies dark gradient background
- `.gradient-text`: Dark gradient text for light sections
- `.gradient-text-light`: Light gradient text for dark sections
- `.text-glow-light`: White text glow for dark sections

## Typography
- Logo: Text-based "WELTMANN Capital"
- Headlines: Bold with gradient effect, clear hierarchy
- Body: Professional, readable fonts (Inter)
- Use generous line-height for breathing room

## Layout System
- Tailwind spacing: Generous whitespace throughout
- Mobile-first responsive design
- Max-width containers for content sections
- Consistent vertical rhythm between sections

## Section Themes
### Dark Sections
- Hero (dark-section class)
- Domain Section (dark-section class)
- Brand Section (dark-section class)
- Footer (dark-section class)

### Light Sections
- How It Works (bg-background)
- Business Tabs (bg-background)
- Intelligence Section (bg-background)
- FAQ Section (bg-background)
- Mid-Page CTA (bg-muted/30)
- Early Access Section (bg-muted/30)

## Core Components

### Header
- Fixed positioning with backdrop blur
- Left: Text logo "WELTMANN Capital"
- Right: LinkedIn + Twitter + WhatsApp icons, "Get Early Access" button (outline variant)
- Light background with subtle border

### Hero Section
- Dark gradient background (dark-section)
- Large headline: "Mandate to signed contract" with gradient-text-light
- Subheadline: "Source it. Structure it. Close it."
- Email input + "Get Early Access" CTA (white button on dark)
- Pipeline preview card with animated word cycling
- Featured image below (real estate team photo)

### How It Works
- Light background
- Three horizontal feature cards
- Icons in centered boxes with muted backgrounds
- gradient-text for headline

### Domain Section
- Dark background (dark-section)
- Animated word highlighting (cycling through words)
- gradient-text-light for headline
- White button CTA

### Mid-Page CTA Block
- Light muted background (bg-muted/30)
- Bold headline with gradient-text
- Two action buttons: primary + outline

### Business Tabs Interface
- Light background
- Four tabs: Source, Underwrite, Structure, Close
- Active tab: foreground bg, background text
- Inactive tabs: muted bg with border
- Tab content cards with muted backgrounds

### Brand Section
- Dark background (dark-section)
- Two feature cards with white text
- gradient-text-light headline
- White button CTA

### Intelligence Section
- Light background
- Two cards with muted backgrounds
- gradient-text headline

### FAQ Section
- Light background
- Shadcn accordion with muted backgrounds
- Subtle hover and open states

### Early Access Form
- Light muted background (bg-muted/30)
- Email input with icon
- Submit button

### Footer
- Dark background (dark-section)
- Logo and description in white
- Social icons: LinkedIn, Twitter, WhatsApp
- Navigation links in gray-400

## Component Styling
- Rounded cards (rounded-2xl)
- Subtle borders and shadows
- Hover states with increased opacity
- Consistent padding (p-6 to p-8)

## Images
- Real estate team hero image in Hero section
- Imported from: @assets/eeef14bd-368e-42dc-a040-e81e44ce78e0_1768216563366.png

## Interactions
- Smooth scroll to sections on CTA clicks
- Tab switching with AnimatePresence animations
- Accordion expand/collapse
- Toast notifications for form submission (5 second duration)
- Minimal motion, professional feel

## Spacing Philosophy
Follow webild.io rhythm: generous section padding (py-24 sm:py-32), clear separation between content blocks, breathing room around text and CTAs.
