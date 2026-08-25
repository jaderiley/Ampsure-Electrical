/* ============================================================
   CONFIG — edit ONLY this file per client
   REBUILT FROM THE CLIENT'S OWN SITE: https://ampsure.co.za
   scraped 2026-08-25 by rebuild_from_existing.py
   placeholder (Pexels stock) image slots: band.jpg, work-1.jpg, work-2.jpg, work-3.jpg, work-4.jpg, work-5.jpg
   ============================================================ */

const CONFIG = {

  // ─── BUSINESS INFO ───────────────────────────────────────
  business: {
    name:      "Ampsure Electrical",
    phone:     "+27825419553",
    whatsapp:  "+27825419553",
    address:   "Johannesburg",
    hours:     "Call us for hours",
    region:    "Gauteng",
    priceRange:"$$",
    suburbs: [
      "Halfway House",
      "Midrand",
      "Sandton"
    ]
  },

  // ─── PAGE META / SEO ─────────────────────────────────────
  meta: {
    title:       "Ampsure Electrical — Electrician in Johannesburg",
    description: "Ampsure Electrical: electrician in Johannesburg. Rated 4.9 from 67 Google reviews.",
    url:         ""  // Live domain — they already own ampsure.co.za
  },

  // ─── BRANDING ────────────────────────────────────────────
  branding: {
    palette:  "volt",   // ember | security | forest | volt | tide
    ogImage:  "images/og.jpg"
  },

  // ─── CONTENT ─────────────────────────────────────────────
  content: {
    eyebrow:    "Electrician · Johannesburg & surrounds",
    heroTitle:  "Electrical faults, installations — <em>fixed properly.</em>",
    heroLead:   "Ampsure Electrical provides reliable electrical services for commercial, retail and residential properties. Since 2015, our team has delivered professional installations, repairs and maintenance with a strong focus on quality workmanship and dependable…",

    googleRating: "4.9",
    reviewsCount: "67",
    featuredQuote: "Residential and Commercial Electrical Services You Can Trust Our experienced team is ready to assist with efficient solutions and quality…",
    featuredQuoteAuthor: "— customer testimonial, their website",

    trustSignals: ["Reliable Electrical…", "Service Built on Quality…", "Our Electrical Services", "Install / Change / Repair"],

    // ─── SERVICES (scraped from their own site) ────────────
    servicesTitle: "Electrical work done safely and correctly.",
    servicesLead:  "From a tripping breaker to a full rewire — we diagnose, repair and certify.",
    services: [
      {
        icon:  "bolt",
        title: "Reliable Electrical Solutions You Can Trust",
        desc:  "Professional electrical installations, maintenance and repairs for commercial, retail and residential environments. Ampsure Electrical delivers efficient, cost effective service backed by experience, attention to detail…"
      },
      {
        icon:  "wrench",
        title: "Service Built on Quality and Reliability",
        desc:  "Ask us about service built on quality and reliability — call or WhatsApp for a quote."
      },
      {
        icon:  "circuit",
        title: "Our Electrical Services",
        desc:  "Ampsure Electrical provides a full range of professional electrical services for commercial, residential and specialised clients. Our experienced team delivers reliable installations, repairs and maintenance with a…"
      },
      {
        icon:  "gauge",
        title: "Install / Change / Repair",
        desc:  "New Electrical Installations Electrical Alterations Electrical Renovations Lighting and Designer Lighting Fault Finding and Repairs Distribution Boards Installation and Servicing Geyser Electrical Repairs Stove and Oven…"
      },
      {
        icon:  "shield",
        title: "Maintenance / Backup / Protection",
        desc:  "Commercial Tenant Installations Commercial Tenant Separation Electrical Maintenance Preventative Maintenance Scheduled Maintenance (SLA) Surge Protection Inverter Installations Generator Installations"
      },
      {
        icon:  "hardhat",
        title: "Compliance & Specialised",
        desc:  "Certificates of Compliance Compliance Reports Insurance Reports High Profile Individuals"
      },
    ],

    // ─── WORK GALLERY ──────────────────────────────────────
    galleryTitle: "The work, up close.",
    galleryLead:  "A look at the kind of work we handle every week.",
    gallery: [
      {
        image:   "images/work-1.jpg",
        art:     "lockCylinderPick",
        fig:     "01 — Fault finding",
        title:   "Traced and repaired",
        caption: "Electrical faults traced systematically from the symptom to the source — then fixed rather than just reset."
      },
      {
        image:   "images/work-2.jpg",
        art:     "lockCylinderPick",
        fig:     "02 — DB board work",
        title:   "Upgraded and compliant",
        caption: "Old or overloaded distribution boards replaced with correctly sized breakers and proper labelling."
      },
      {
        image:   "images/work-3.jpg",
        art:     "lockCylinderPick",
        fig:     "03 — CoC inspection",
        title:   "Inspected and certified",
        caption: "Full wiring inspection against SANS 10142 standards. Faults repaired and a certificate of compliance issued."
      },
      {
        image:   "images/work-4.jpg",
        art:     "lockCylinderPick",
        fig:     "04 — New installation",
        title:   "Installed clean",
        caption: "New circuits, sockets and light fittings installed neatly — concealed cable runs where possible."
      },
      {
        image:   "images/work-5.jpg",
        art:     "lockCylinderPick",
        fig:     "05 — Geyser wiring",
        title:   "Correctly wired",
        caption: "Geyser connections installed to standard with the correct breaker size, isolator and earth bonding."
      },
    ],

    // ─── PHOTO BAND ────────────────────────────────────────
    band: {
      image: "images/band.jpg",
      alt:   "Ampsure Electrical at work in Johannesburg",
      text:  "Join Our Mailing List"
    },

    // ─── AREAS BLURB ───────────────────────────────────────
    areasTitle: "Based in Johannesburg. Serving the wider area.",
    areasLead:  "We cover Halfway House, Midrand, Sandton and surrounds.",  // areas as named on their own site
    areasNote:  "Not sure if your area is covered? Send us a message and we'll confirm.",

    // ─── WHY US (built from real, public facts) ────────────
    whyTitle: "Why people call us for electrical work.",
    why: [
      {
        title: "Local to Johannesburg",
        desc:  "Working across Halfway House, Midrand, Sandton and the surrounding areas."
      },
      {
        title: "4.9★ on Google",
        desc:  "Rated 4.9 stars across 67 Google reviews — real customers, public record."
      },
      {
        title: "One team, full scope",
        desc:  "From reliable electrical solutions you can trust to our electrical services — one call covers it."
      },
    ],

    // ─── REVIEWS (only what their own site carries) ────────
    reviewsTitle: "What customers have said.",
    reviews: [
      {
        body:   "Residential and Commercial Electrical Services You Can Trust Our experienced team is ready to assist with efficient solutions and quality workmanship you can depend on for your home or business.",
        name:   "Customer testimonial",
        stars:  5,
        source: "their website"
      },
      {
        body:   "Need Professional Electrical Services? All our work carries a 90 day workmanship warranty, giving our clients confidence in the quality and reliability of our services.",
        name:   "Customer testimonial",
        stars:  5,
        source: "their website"
      },
    ],

    // ─── FAQ (derived from their scraped services) ─────────
    faqTitle: "Common questions.",
    faqLead:  "What most people ask before booking.",
    faq: [
      {
        q: "Do you handle reliable electrical solutions you can trust?",
        a: "Yes — reliable electrical solutions you can trust is one of our core services. Get in touch and we'll advise on your job."
      },
      {
        q: "Do you handle service built on quality and reliability?",
        a: "Yes — service built on quality and reliability is one of our core services. Get in touch and we'll advise on your job."
      },
      {
        q: "Do you handle our electrical services?",
        a: "Yes — our electrical services is one of our core services. Get in touch and we'll advise on your job."
      },
      {
        q: "Which areas do you cover?",
        a: "We work across Halfway House, Midrand, Sandton and the surrounding areas."
      },
      {
        q: "How do I get a quote?",
        a: "Call us on +27825419553 or send a WhatsApp message with the details and we'll come back to you with a quote."
      },
    ],

    // ─── CONTACT ───────────────────────────────────────────
    contactTitle: "Tell us what needs to be done.",
    contactLead:  "Describe what is happening and we will advise on the work and cost.",
    contactPlaceholder: "e.g. breaker tripping, need extra sockets, geyser not heating"
  }
};
