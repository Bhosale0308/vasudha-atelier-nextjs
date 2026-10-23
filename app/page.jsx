"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Check,
  ChevronDown,
  Compass,
  Menu,
  MoveUpRight,
  Sparkles,
  X,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  MapPin,
} from "lucide-react";
const projects = [
  {
    number: "01",
    name: "Harmony Heritage",
    type: "RESIDENCES + RETAIL",
    location: "Ravet, Pune",
    detail: "A little more room to breathe.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=88",
    className: "project-large",
    tag: "FEATURED",
  },
  {
    number: "02",
    name: "Moraya Tirth",
    type: "RESIDENTIAL",
    location: "Chinchwad, Pune",
    detail: "Everyday life, thoughtfully elevated.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=88",
    className: "project-small",
    tag: "42 RESIDENCES",
  },
  {
    number: "03",
    name: "Vishnu Tirth",
    type: "MIXED-USE",
    location: "Tanaji Nagar, Chinchwad",
    detail: "Where business meets belonging.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=88",
    className: "project-small project-offset",
    tag: "COMMERCIAL + RESIDENTIAL",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Brand({ light = false }) {
  return (
    <a href="#top" className={`brand ${light ? "brand-light" : ""}`} aria-label="Vasudha Group home">
      <span className="brand-symbol">V<span>.</span></span>
      <span className="brand-copy">
        <strong>VASUDHA</strong>
        <small>GROUP · SPACES FOR LIFE</small>
      </span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 115]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0.25]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
   
<main id="top">
  

  <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="header-brand">
      <Brand />
    </div>

    <nav
      className={menuOpen ? "nav-open" : ""}
      aria-label="Main navigation"
    >
      <a href="#philosophy" onClick={closeMenu}>
        <span>01</span>
        Our philosophy
      </a>

      <a href="#developments" onClick={closeMenu}>
        <span>02</span>
        Developments
      </a>

      <a href="#legacy" onClick={closeMenu}>
        <span>03</span>
        Our legacy
      </a>

      <a href="#contact" onClick={closeMenu}>
        <span>04</span>
        Contact
      </a>
    </nav>

    <a className="header-cta" href="#contact" onClick={closeMenu}>
      <span>Let's talk</span>
      <span className="header-cta-icon">
        <ArrowUpRight size={18} />
      </span>
    </a>

    <button
      className="menu-toggle"
      type="button"
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X size={23} /> : <Menu size={23} />}
    </button>
  </header>

  {/* Keep the rest of your existing homepage sections here. */}



<section className="hero hero-signature" aria-label="Vasudha Group introduction">
  <div className="signature-topline">
    
   
  </div>

  <div className="signature-layout">
    <div className="signature-copy">
      <motion.div
        className="signature-eyebrow"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
      
      </motion.div>

      <motion.h1
        className="signature-title"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        Life,
        <br />
        <span>beautifully</span>
        <br />
        <em>considered.</em>
      </motion.h1>

      <motion.p
        className="signature-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
      >
        We create more than places to live.
        <br />
        We create room for life to unfold.
      </motion.p>

      <motion.a
        href="#developments"
        className="signature-cta"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <span>EXPLORE OUR DEVELOPMENTS</span>
        <span className="signature-cta-icon">
          <ArrowUpRight size={20} />
        </span>
      </motion.a>

      <div className="signature-copy-note">
        <span>THOUGHTFUL BY DESIGN</span>
        <span>TIMELESS BY NATURE</span>
      </div>
    </div>

    <div className="signature-visual">
      <motion.div
        className="signature-photo-frame"
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="signature-photo" />
        <div className="signature-photo-overlay" />
      </motion.div>

      <motion.div
        className="signature-photo-tag"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <span className="signature-tag-number">V / 01</span>
        <span>ARCHITECTURE THAT<br />FEELS LIKE HOME</span>
      </motion.div>

      <div className="signature-photo-caption">
        <span className="signature-caption-line" />
        <span>DESIGNED FOR THE WAY YOU LIVE</span>
      </div>

      <div className="signature-vertical-text">
        BUILT ON TRUST · MADE TO LAST
      </div>
    </div>
  </div>

  <div className="signature-bottom">
    <span>VASUDHA GROUP</span>
    <span className="signature-bottom-center">
      A LEGACY OF THOUGHTFUL SPACES
    </span>
    <a href="#philosophy">
      OUR PHILOSOPHY <ArrowDownRight size={15} />
    </a>
  </div>
</section>

<section className="ticker ticker-signature" aria-label="Our promise">
  <div className="ticker-signature-track">
    {Array.from({ length: 4 }).map((_, i) => (
      <div className="ticker-signature-item" key={i}>
        <span>SPACES FOR LIFE</span>
        <i>✳</i>
        <span>ROOTED IN TRUST</span>
        <i>✳</i>
        <span>MADE TO LAST</span>
        <i>✳</i>
      </div>
    ))}
  </div>
</section>

<section className="philosophy-luxury" id="philosophy">
  <div className="philosophy-luxury-inner">

    <div className="luxury-section-topline">
      <span className="luxury-kicker">
        <span className="luxury-kicker-number">01</span>
        <span className="luxury-kicker-line" />
        THE VASUDHA WAY
      </span>

      <span className="luxury-top-note">
        A family legacy, moving forward
      </span>
    </div>

    <div className="luxury-intro-grid">
      <Reveal className="luxury-heading">
        <p className="luxury-eyebrow">MORE THAN REAL ESTATE</p>

        <h2>
          Grounded in values.
          <br />
          <em>Open to possibility.</em>
        </h2>

        <div className="luxury-heading-mark">
          <span>V.</span>
          <span>EST. 1985</span>
        </div>
      </Reveal>

      <Reveal className="luxury-intro-copy" delay={0.15}>
        <span className="luxury-copy-index">01 / OUR PHILOSOPHY</span>

        <p className="luxury-copy-lead">
          We don&apos;t just build spaces.
          We shape the backdrop to life&apos;s most meaningful moments.
        </p>

        <p className="luxury-copy-body">
          Since 1985, Vasudha Group has brought together generations
          of hands-on expertise and forward-looking design. Every
          detail begins with a simple belief: places should make
          life feel better, today and for years to come.
        </p>

        <a className="luxury-story-link" href="#legacy">
          <span>Discover our story</span>
          <span className="luxury-story-icon">
            <ArrowUpRight size={18} />
          </span>
        </a>
      </Reveal>
    </div>

    <div className="luxury-principles-heading">
      <span>WHAT GUIDES US</span>
      <span>OUR PRINCIPLES — 01 / 03</span>
    </div>

    <div className="luxury-principles">
      {[
        {
          n: "01",
          title: "Considered by design",
          body: "Purposeful planning, honest materials and details that earn their place.",
          tag: "DESIGN WITH INTENTION",
        },
        {
          n: "02",
          title: "Trust that lasts",
          body: "Relationships built with transparency, care and consistency.",
          tag: "BUILT ON TRUST",
        },
        {
          n: "03",
          title: "A lighter footprint",
          body: "Thoughtful features that help communities live more responsibly.",
          tag: "MINDFUL LIVING",
        },
      ].map((item, i) => (
        <Reveal
          className="luxury-principle"
          delay={i * 0.12}
          key={item.n}
        >
          <div className="luxury-principle-top">
            <span className="luxury-principle-number">{item.n}</span>
            <ArrowUpRight
              className="luxury-principle-arrow"
              size={20}
            />
          </div>

          <div className="luxury-principle-content">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>

          <div className="luxury-principle-bottom">
            <span>{item.tag}</span>
            <span className="luxury-principle-dot" />
          </div>
        </Reveal>
      ))}
    </div>

  </div>
</section>


<section className="developments-luxe" id="developments">
  <div className="developments-inner">

    <div className="developments-topline">
      <div className="developments-label">
        <span>02</span>
        <i />
        SELECTED DEVELOPMENTS
      </div>
      <p>Spaces shaped around life.</p>
    </div>

    <div className="developments-intro">
      <Reveal className="developments-title">
        <span className="developments-eyebrow">
          THE ART OF BETTER LIVING
        </span>
        <h2>
          A sense of place.
          <br />
          <em>A life well lived.</em>
        </h2>
      </Reveal>

      <Reveal className="developments-description" delay={0.15}>
        <span className="developments-description-mark">V.</span>
        <p>
          Every address has a story. We create the setting
          for yours — with considered architecture, enduring
          quality and room for life to unfold.
        </p>
        <a href="#contact" className="developments-discover">
          <span>Find your place</span>
          <ArrowUpRight size={17} />
        </a>
      </Reveal>
    </div>

    <div className="developments-gallery">
      {projects.slice(0, 3).map((project, i) => (
        <Reveal
          className={`development-card development-card-${i + 1}`}
          delay={i * 0.12}
          key={project.name}
        >
          <a
            href="#contact"
            className="development-visual"
            aria-label={`Enquire about ${project.name}`}
          >
            <img
              src={project.image}
              alt={`Architecture and living spaces for ${project.name}`}
              loading="lazy"
            />

            <span className="development-image-overlay" />

            <span className="development-category">
              {project.tag}
            </span>

            <span className="development-number">
              0{i + 1}
            </span>

            <span className="development-view">
              <ArrowUpRight size={21} />
            </span>

            <span className="development-image-caption">
              {project.type}
            </span>
          </a>

          <div className="development-information">
            <div className="development-location">
              <MapPin size={13} />
              <span>{project.location}</span>
            </div>

            <div className="development-name-row">
              <div>
                <h3>{project.name}</h3>
                <p>{project.detail}</p>
              </div>
              <span className="development-index">
                0{i + 1}
              </span>
            </div>
          </div>
        </Reveal>
      ))}
    </div>

    <div className="developments-bottom">
      <div className="developments-bottom-left">
        <span className="developments-bottom-dot" />
        <span>BUILT WITH PURPOSE SINCE 1985</span>
      </div>

      <span className="developments-bottom-right">
        THOUGHTFULLY MADE. TIMELESSLY LIVED.
      </span>
    </div>

  </div>
</section>




<section className="legacy-premium" id="legacy">
  <div className="legacy-premium-inner">

    

    <div className="legacy-premium-main">
      <Reveal className="legacy-premium-heading">
        <span className="legacy-premium-eyebrow">
          A LEGACY THAT LIVES ON
        </span>

        <h2>
          Four decades.
          <br />
          <em>One promise.</em>
        </h2>

        <div className="legacy-premium-signature">
          <span className="legacy-signature-v">V.</span>
          <span className="legacy-signature-line" />
          <span>ESTABLISHED 1985</span>
        </div>
      </Reveal>

      <Reveal className="legacy-premium-story" delay={0.15}>
        <div className="legacy-story-image">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
            alt="Contemporary home surrounded by thoughtful architecture"
            loading="lazy"
          />
          <span className="legacy-image-label">
            BUILT TO BELONG
          </span>
        </div>

        <div className="legacy-story-copy">
          <span className="legacy-story-number">A FAMILY TRADITION</span>

          <p className="legacy-story-lead">
            Generations change.
            <br />
            <em>Our values remain.</em>
          </p>

          <p className="legacy-story-description">
            Now in our third generation of family leadership,
            we carry our experience forward with the same
            commitment to quality, trust and community.
            Every project reflects a promise made to the
            people who call it home.
          </p>

          <a className="legacy-premium-link" href="#contact">
            <span>Build the next chapter with us</span>
            <span className="legacy-link-circle">
              <ArrowUpRight size={18} />
            </span>
          </a>
        </div>
      </Reveal>
    </div>

    <div className="legacy-premium-stats">
      <div className="legacy-stat">
        <div className="legacy-stat-heading">
          <strong>40<span>+</span></strong>
          <span className="legacy-stat-dot" />
        </div>
        <div className="legacy-stat-bottom">
          <span>01 / EXPERIENCE</span>
          <small>YEARS OF LEGACY</small>
        </div>
      </div>

      <div className="legacy-stat">
        <div className="legacy-stat-heading">
          <strong>17<span>+</span></strong>
          <span className="legacy-stat-dot" />
        </div>
        <div className="legacy-stat-bottom">
          <span>02 / CRAFTSMANSHIP</span>
          <small>PROJECTS COMPLETED</small>
        </div>
      </div>

      <div className="legacy-stat">
        <div className="legacy-stat-heading">
          <strong>7L<span>+</span></strong>
          <span className="legacy-stat-dot" />
        </div>
        <div className="legacy-stat-bottom">
          <span>03 / OUR FOOTPRINT</span>
          <small>SQ. FT. DEVELOPED</small>
        </div>
      </div>
    </div>

    <div className="legacy-premium-footer">
      <span>ROOTED IN TRUST</span>
      <span className="legacy-footer-ornament">✳</span>
      <span>DESIGNED FOR GENERATIONS</span>
    </div>

  </div>
</section>


<section className="commitment-luxe" id="commitment">
  <div className="commitment-luxe-inner">

    {/* Top label */}
    <div className="commitment-luxe-top">
      <span className="commitment-eyebrow">
        <span className="commitment-gold-dot" />
        OUR DESIGN PHILOSOPHY
      </span>

      <span className="commitment-index">04 / THE WAY WE THINK</span>
    </div>

    {/* Main editorial layout */}
    <div className="commitment-luxe-grid">

      <div className="commitment-luxe-copy">
        <Reveal>
          <div className="commitment-compass">
            <Compass size={25} strokeWidth={1.1} />
          </div>

          <h2>
            Good spaces<br />
            make room for<br />
            <em>good things.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="commitment-luxe-description">
            A home is more than an address. It is the beginning of
            ordinary mornings, meaningful connections and memories
            that last for generations.
          </p>

          <a className="commitment-luxe-link" href="#contact">
            <span>Find your place with us</span>
            <span className="commitment-link-icon">
              <ArrowUpRight size={19} />
            </span>
          </a>
        </Reveal>
      </div>

      {/* Architectural image */}
      <Reveal className="commitment-luxe-visual" delay={0.15}>
        <div className="commitment-luxe-image">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
            alt="Warm, naturally lit contemporary living space"
          />

          <div className="commitment-image-shade" />

          <div className="commitment-image-caption">
            <span>01 — THE ART OF LIVING</span>
            <span>Thoughtfully considered, always.</span>
          </div>
        </div>

        <div className="commitment-image-note">
          <span className="commitment-note-dot" />
          <span>DESIGNED AROUND LIFE</span>
        </div>
      </Reveal>

    </div>

    {/* Three brand principles */}
    <div className="commitment-principles">
      <div className="commitment-principle">
        <span>01</span>
        <div>
          <h3>Made with purpose</h3>
          <p>Every detail begins with a reason.</p>
        </div>
      </div>

      <div className="commitment-principle">
        <span>02</span>
        <div>
          <h3>Built on trust</h3>
          <p>Honest relationships, lasting value.</p>
        </div>
      </div>

      <div className="commitment-principle">
        <span>03</span>
        <div>
          <h3>Made for generations</h3>
          <p>Spaces designed to stand the test of time.</p>
        </div>
      </div>
    </div>

  </div>
</section>


   
<section className="contact-luxe" id="contact">
  <div className="contact-luxe-glow" />
  <div className="contact-luxe-dots" />

  <div className="contact-luxe-inner">
    {/* Section heading */}
   

    {/* Main headline */}
    <div className="contact-luxe-main">
      <Reveal className="contact-luxe-heading">
        <p className="contact-luxe-pretitle">
          SOMETHING GOOD STARTS HERE
        </p>

        <h2>
          Let&apos;s create<br />
          something <em>meaningful.</em>
        </h2>
      </Reveal>

      <Reveal className="contact-luxe-aside" delay={0.15}>
        <span className="contact-luxe-aside-line" />

        <p>
          Looking for a place to call your own, exploring a
          development, or simply curious about what comes next?
          We&apos;re here to start the conversation.
        </p>

        <a
          className="contact-luxe-button"
          href="tel:+919607340999"
        >
          <span>Start a conversation</span>

          <span className="contact-luxe-button-icon">
            <ArrowUpRight size={20} />
          </span>
        </a>

        <span className="contact-luxe-response">
          PERSONAL CONNECTION. THOUGHTFUL GUIDANCE.
        </span>
      </Reveal>
    </div>

    {/* Decorative footer */}
    <div className="contact-luxe-footer">
      <span>BUILT ON TRUST SINCE 1985</span>

      <span className="contact-luxe-ornament">✳</span>

      <span>MADE FOR LIFE&apos;S NEXT CHAPTER</span>
    </div>
  </div>
</section>

      
<footer className="footer-luxe">
  <div className="footer-luxe-glow" />
  <div className="footer-luxe-dots" />

  <div className="footer-luxe-inner">
    {/* Brand statement */}
    <div className="footer-luxe-hero">
      <div className="footer-luxe-brand">
        <Brand light />

        <p>
          Spaces for life.<br />
          <em>A legacy built on trust.</em>
        </p>

        <span className="footer-luxe-since">
          <span className="footer-luxe-gold-dot" />
          BUILDING WITH PURPOSE SINCE 1985
        </span>
      </div>

      <div className="footer-luxe-message">
        <span className="footer-luxe-eyebrow">
          MORE THAN PLACES TO LIVE
        </span>

        <h2>
          A better life<br />
          starts with <em>space.</em>
        </h2>

        <a href="#contact" className="footer-luxe-cta">
          Let&apos;s talk about your next chapter
          <span><ArrowUpRight size={19} /></span>
        </a>
      </div>
    </div>

    {/* Footer navigation and contact */}
    <div className="footer-luxe-columns">
      <div className="footer-luxe-column">
        <span className="footer-luxe-label">EXPLORE</span>
        <a href="#philosophy">Our philosophy</a>
        <a href="#developments">Developments</a>
        <a href="#legacy">Our legacy</a>
        <a href="#commitment">Our commitment</a>
      </div>

      <div className="footer-luxe-column footer-luxe-contact">
        <span className="footer-luxe-label">COME SAY HELLO</span>

        <p>
          Shop 03, Shivtirth, near Dhaneshwar Mandir,
          Chinchwad Gaon, Pune – 411033
        </p>

        <a href="tel:+919607340999">
          <Phone size={15} />
          +91 96073 40999
          <ArrowUpRight size={14} />
        </a>

        <a href="https://maps.app.goo.gl/DLddiJgVAkWrHWF3A"
           target="_blank"
           rel="noreferrer">
          <MapPin size={15} />
          Get directions
          <ArrowUpRight size={14} />
        </a>

        <a href="mailto:">
          <Mail size={15} />
          Email our team
          <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="footer-luxe-column footer-luxe-social">
        <span className="footer-luxe-label">FOLLOW OUR JOURNEY</span>
        <p>Ideas, spaces and stories from Vasudha Group.</p>

        <div className="footer-luxe-socials">
          {/* Replace # with the official profile URLs */}
          <a href="#" aria-label="Instagram"
             title="Add your Instagram profile URL">
            <Instagram size={18} />
          </a>
          <a href="#" aria-label="LinkedIn"
             title="Add your LinkedIn profile URL">
            <Linkedin size={18} />
          </a>
          <a href="#" aria-label="Facebook"
             title="Add your Facebook profile URL">
            <Facebook size={18} />
          </a>
        </div>
      </div>

      <a className="footer-luxe-backtop" href="#top"
         aria-label="Back to top">
        <ArrowUp size={19} />
        <span>BACK TO TOP</span>
      </a>
    </div>

    {/* Copyright bar */}
    <div className="footer-luxe-bottom">
      <span>© 2026 VASUDHA GROUP. ALL RIGHTS RESERVED.</span>

      <span className="footer-luxe-bottom-center">
        <span className="footer-luxe-gold-dot" />
        BUILT ON TRUST. DESIGNED FOR LIFE.
      </span>

      <div>
        <a href="#privacy">PRIVACY</a>
        <a href="#terms">TERMS</a>
      </div>
    </div>
  </div>
</footer>

    </main>
  );
}
