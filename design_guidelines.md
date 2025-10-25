# ChristmasNW.com Design Guidelines

## Design Approach

**Reference-Based Strategy**: Drawing inspiration from premium service providers (Airbnb's experiential presentation, high-end portfolio sites) combined with festive e-commerce visual richness. This approach emphasizes emotional connection through stunning imagery while maintaining professional credibility.

**Core Principle**: Create an immersive, premium experience that immediately communicates quality craftsmanship and transforms mundane installation services into magical holiday experiences.

## Typography System

**Font Families** (via Google Fonts):
- Headlines: Playfair Display (serif, elegant, premium feel) - 600-700 weights
- Body/UI: Inter (clean, modern, highly readable) - 400-600 weights
- Accent/CTAs: Montserrat (bold, attention-grabbing) - 500-700 weights

**Hierarchy**:
- Hero Headlines: 4xl to 6xl (responsive), bold weight, tight letter spacing
- Section Headings: 3xl to 4xl, semi-bold
- Feature Titles: xl to 2xl, medium weight
- Body Text: base to lg, regular weight, relaxed line height (1.7)
- Micro Copy: sm, medium weight for labels/captions

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, and 32 for consistent rhythm
- Section padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-8 to gap-12
- Card padding: p-8 to p-12
- Micro spacing: p-4, m-4 for tight elements

**Container Strategy**:
- Full-width hero and showcase sections
- Content sections: max-w-7xl with px-6
- Text-heavy areas: max-w-4xl for readability
- Grid systems: 2-3 columns on desktop, single column mobile

## Component Library

**Navigation**:
- Fixed transparent header on scroll with blur backdrop
- Logo left, navigation center, "Get Free Quote" CTA right
- Mobile: Hamburger menu with full-screen overlay
- Include phone number prominently in header

**Hero Section** (80vh):
- Full-bleed background image with subtle overlay
- Centered content with large headline, supporting tagline, dual CTAs
- Trust indicators below fold: "Licensed & Insured • 15+ Years • 500+ Installations"
- Buttons with backdrop blur when over imagery

**Services Grid** (3-column desktop, stacked mobile):
- Large imagery cards with overlay text on hover
- Service categories: Residential Premium, Commercial, Custom Design, Maintenance
- Icon + title + brief description + "Learn More" link
- Generous padding (p-12) and gap-8 spacing

**Portfolio Gallery**:
- Masonry grid layout showcasing installation diversity
- Filter tabs: All, Residential, Commercial, Roof Lines, Trees, Custom
- Lightbox functionality for detailed views
- Before/After slider component for transformation showcase
- 2-column on tablet, 3-column on desktop

**Quote Request Section**:
- Two-column layout: Form left (60%), Info/Visual right (40%)
- Multi-step form feel without actual steps for simplicity
- Fields: Name, Email, Phone, Address, Property Type (dropdown), Service Interest (checkboxes), Special Requests (textarea)
- Right column: Service hours, response time expectation, small gallery of recent work
- Prominent "Request Free Quote" submit button

**Testimonials**:
- 3-column card grid with customer photos, star ratings, quote, name/location
- Rotate through 6-9 testimonials
- Include specific details ("250ft of roofline", "3-story home") for credibility

**Service Area Map**:
- Interactive or static map showing coverage area in Pacific Northwest
- List of cities/regions served in grid format below map
- "Not in our area? Contact us anyway" message

**About/Trust Section**:
- Two-column: Team photo left, credentials/story right
- Certifications, insurance badges, years of experience
- Brief company story emphasizing craftsmanship and safety

**Footer**:
- Four-column layout: Company info, Services, Resources, Contact
- Newsletter signup: "Holiday Lighting Tips & Inspiration"
- Social media links (Instagram, Facebook for showcasing work)
- BBB rating, payment methods accepted, license numbers

## Images

**Hero Image**: 
Full-width, high-quality photograph of a beautifully illuminated home at dusk/night. Show warm glowing lights across roofline, trees, and walkway with snow or festive elements. Professional photography quality essential. Image should evoke warmth, luxury, and holiday magic.

**Service Category Images**:
- 4 distinct professional photos showing different installation types
- Each should be landscape orientation, high-resolution
- Capture both daytime installation (showing professionalism) and nighttime results (showing magic)

**Portfolio Grid**: 
15-20 images minimum showing variety:
- Close-ups of light details
- Wide shots of complete installations
- Commercial properties lit up
- Custom designs (wreaths, displays, specialty)
- Mix of architectural styles

**Before/After Pairs**:
3-5 compelling transformations showing the dramatic impact of professional installation

**Testimonial Photos**:
Customer headshots or photos of their homes (with permission) - authentic, not stock

**Team/About Image**:
Professional photo of installation crew or owner with equipment, conveying expertise and approachability

## Interaction Patterns

**Minimal Animation**:
- Smooth scroll behavior
- Fade-in on scroll for section reveals (subtle, once)
- Hover scale (1.05) on portfolio images
- Button hover states: slight lift with shadow
- NO continuous animations or festive falling snow effects

**Micro-interactions**:
- Form field focus states with subtle border transitions
- Gallery image hover: slight overlay with "View Details" appearing
- Service card hover: image slight zoom, text overlay appears

**Mobile Considerations**:
- Sticky "Call Now" button on mobile
- Touch-friendly tap targets (min 44px)
- Simplified navigation for small screens
- Gallery switches to single column with swipe

## Accessibility Standards

- Semantic HTML structure throughout
- ARIA labels for interactive elements
- Keyboard navigation support for gallery and forms
- Focus indicators on all interactive elements
- Proper heading hierarchy (h1 → h6)
- Form labels and error states clearly defined
- Sufficient contrast for all text (maintain readability over images using overlays)
- Alt text for all images describing installation scenes