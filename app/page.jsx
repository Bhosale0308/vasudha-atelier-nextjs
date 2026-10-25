"use client";
import Image from "next/image";
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
    name: "Dnyanesh Apartment",
    type: "RESIDENTIAL",
    location: "Tanaji Nagar, Chinchwad",
    year: "1990",
    floors: 3,
    flats: 12,
    shops: null,
    detail: "A thoughtfully planned residential community.",
    image: "/images/durvankur.jpeg",
    className: "project-large",
    tag: "COMPLETED",
  },
  {
    number: "02",
    name: "Sai Sundar Park",
    type: "RESIDENTIAL + RETAIL",
    location: "Keshav Nagar, Chinchwad",
    year: "2003",
    floors: 3,
    flats: 16,
    shops: 1,
    detail: "Comfortable living with everyday convenience.",
    image: "/images/develop4.jpeg",
    className: "project-small",
    tag: "COMPLETED",
  },
  {
    number: "03",
    name: "Manganga",
    type: "RESIDENTIAL",
    location: "Keshav Nagar, Chinchwad",
    year: "2002",
    floors: 4,
    flats: 16,
    shops: null,
    detail: "A residential development built for everyday life.",
    image: "/images/manganga.jpeg",
    className: "project-small",
    tag: "COMPLETED",
  },
  {
    number: "04",
    name: "Shiv Tirth",
    type: "RESIDENTIAL + COMMERCIAL",
    location: "Chinchwad",
    year: "2007",
    floors: 6,
    flats: 50,
    shops: 6,
    detail: "A well-established residential and commercial address.",
    image: "/images/shiv-tirth.jpeg",
    className: "project-small",
    tag: "COMPLETED",
  },
  {
    number: "05",
    name: "Hari Prasad",
    type: "RESIDENTIAL",
    location: "Chinchwad Gaon",
    year: "2009",
    floors: 6,
    flats: 24,
    shops: null,
    detail: "Designed around practical, comfortable living.",
    image: "/images/hari-prasad.jpeg",
    className: "project-small",
    tag: "COMPLETED",
  },
  {
    number: "06",
    name: "Anand Sagar",
    type: "RESIDENTIAL",
    location: "Akurdi",
    year: "2007",
    floors: 4,
    flats: 16,
    shops: null,
    detail: "A residential address in the heart of Akurdi.",
    image: "/images/anand-sagar.jpeg",
    className: "project-small",
    tag: "COMPLETED",
  },
  {
    number: "07",
    name: "Durvankur",
    type: "RESIDENTIAL",
    location: "Bhosari",
    year: "2015",
    floors: 5,
    flats: 24,
    shops: null,
    detail: "A considered approach to residential development.",
    image: "/images/durvankur.jpeg",
    className: "project-small",
    tag: "COMPLETED",
  },
  {
    number: "08",
    name: "Ram Tirth",
    type: "RESIDENTIAL",
    location: "Chinchwad",
    year: "2021",
    floors: 6,
    flats: 42,
    shops: null,
    detail: "Thoughtful residential spaces for modern living.",
    image: "/images/trust.jpeg",
    className: "project-small",
    tag: "COMPLETED",
  },
  {
    number: "09",
    name: "Moraya Tirth",
    type: "RESIDENTIAL",
    location: "Opp. Moraya Gosavi Samadhi Mandir, Chinchwad",
    year: null,
    floors: null,
    flats: null,
    shops: null,
    detail: "A recent completed development by Vasudha Group.",
    image: "/images/moraya-tirth.jpeg",
    className: "project-small",
    tag: "RECENTLY COMPLETED",
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
    <a href="/" className="navbar-logo">
  <Image
    src="/vasudha-logo.png"
    alt="Vasudha Group"
    width={180}
    height={70}
    priority
    className="navbar-logo-image"
  />
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
    className={`site-nav ${menuOpen ? "nav-open" : ""}`}
    aria-label="Main navigation"
  >
    <a href="#philosophy" onClick={closeMenu}>
      <span className="nav-number">01</span>
      <span className="nav-label">Our philosophy</span>
    </a>

    <a href="#developments" onClick={closeMenu}>
      <span className="nav-number">02</span>
      <span className="nav-label">Developments</span>
    </a>

    <a href="#legacy" onClick={closeMenu}>
      <span className="nav-number">03</span>
      <span className="nav-label">Our legacy</span>
    </a>

    <a href="#contact" onClick={closeMenu}>
      <span className="nav-number">04</span>
      <span className="nav-label">Contact</span>
    </a>
  </nav>

  <a className="header-cta" href="#contact" onClick={closeMenu}>
    <span>Let's talk</span>
    <span className="header-cta-icon">
      <ArrowUpRight size={19} />
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
    <span>VASUDHA GROUP</span>
    <span>40 YEARS · A LEGACY OF QUALITY &amp; TRUST</span>
  </div>

  <div className="signature-layout">
    <div className="signature-copy">
      <motion.div
        className="signature-eyebrow"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <span className="signature-eyebrow-dot" />
        ESTABLISHED 1985
        <span className="signature-eyebrow-divider">/</span>
        BUILT ON TRUST
      </motion.div>

      <motion.h1
        className="signature-title"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        A legacy,
        <br />
        <span>built on</span>
        <br />
        <em>trust.</em>
      </motion.h1>

      <motion.p
        className="signature-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Four decades of quality, thoughtful construction
        <br className="signature-desktop-break" />
        and spaces made for generations.
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
          <ArrowUpRight size={21} />
        </span>
      </motion.a>

      <div className="signature-copy-note">
        <span>40+ YEARS OF EXPERIENCE</span>
        <span>17+ COMPLETED PROJECTS</span>
      </div>
    </div>

    <div className="signature-visual">
      <motion.div
        className="signature-photo-frame"
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{
          duration: 1.25,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="signature-photo" />
        <div className="signature-photo-overlay" />
      </motion.div>

      <motion.div
        className="signature-photo-tag"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.95, duration: 0.7 }}
      >
        <span className="signature-tag-number">V / 01</span>
        <span>
          MORAYA TIRTH
          <br />
          RESIDENTIAL · CHINCHWAD
        </span>
      </motion.div>

      <div className="signature-photo-caption">
        <span className="signature-caption-line" />
        <span>QUALITY THAT STANDS THE TEST OF TIME</span>
      </div>

      <div className="signature-vertical-text">
        BUILT ON TRUST · MADE TO LAST
      </div>
    </div>
  </div>

  <div className="signature-bottom">
    <span>VASUDHA GROUP</span>
    <span className="signature-bottom-center">
      7 LAKH+ SQ. FT. DEVELOPED
    </span>
    <a href="#philosophy">
      OUR LEGACY <ArrowDownRight size={15} />
    </a>
  </div>
</section>


<section className="philosophy-luxury" id="philosophy">
  <div className="philosophy-luxury-inner">

    {/* Section introduction */}
    <div className="luxury-section-topline">
      <span className="luxury-kicker">
        <span className="luxury-kicker-number">01</span>
        <span className="luxury-kicker-line" />
        <span>THE VASUDHA WAY</span>
      </span>

      <span className="luxury-top-note">
        A family legacy, moving forward
      </span>
    </div>

    {/* Main philosophy content */}
    <div className="luxury-intro-grid">

      <Reveal className="luxury-heading">
        <p className="luxury-eyebrow">MORE THAN REAL ESTATE</p>

        <h2>
          Grounded in values.
          <br />
          <em>Open to possibility.</em>
        </h2>

        <div className="luxury-heading-mark">
          <span className="luxury-monogram">V.</span>
          <span className="luxury-mark-divider" />
          <span className="luxury-established">EST. 1985</span>
        </div>
      </Reveal>

      <Reveal className="luxury-intro-copy" delay={0.15}>
        <span className="luxury-copy-index">
          01 / OUR PHILOSOPHY
        </span>

        <p className="luxury-copy-lead">
          We don&apos;t just build spaces. We shape the backdrop
          to life&apos;s most meaningful moments.
        </p>

        <p className="luxury-copy-body">
          Since 1985, Vasudha Group has brought together
          generations of hands-on expertise and forward-looking
          design. Every detail begins with a simple belief:
          places should make life feel better, today and for
          years to come.
        </p>

        <a className="luxury-story-link" href="#legacy">
          <span>Discover our story</span>
          <span className="luxury-story-icon">
            <ArrowUpRight size={18} />
          </span>
        </a>
      </Reveal>

    </div>

    {/* Architectural image feature */}
   {/* Architectural image feature */}
<Reveal className="luxury-visual" delay={0.1}>
  <div
    className="luxury-visual-image"
    role="img"
    aria-label="Vasudha Group residential architecture"
  />

  <div className="luxury-visual-caption">
    <span className="luxury-caption-line" />
    <span>QUALITY THAT STANDS THE TEST OF TIME</span>
  </div>

  <div className="luxury-visual-card">
    <span className="luxury-visual-card-label">OUR BELIEF</span>
    <p>
      Better spaces.
      <br />
      Brighter
      <br />
      tomorrows.
    </p>
    <span className="luxury-visual-card-line" />
  </div>
</Reveal>

    {/* Principles heading */}
    <div className="luxury-principles-heading">
      <span>WHAT GUIDES US</span>
      <span className="luxury-principles-rule" />
      <span>OUR PRINCIPLES — 01 / 03</span>
    </div>

    {/* Three principle cards */}
    <div className="luxury-principles">

      {[
        {
          n: "01",
          title: "Considered by design",
          body: "Purposeful planning, honest materials and details that earn their place.",
          tag: "DESIGN WITH INTENTION",
          image: "/images/commercial-building.jpg",
          alt: "Architectural details of a thoughtfully designed building",
        },
        {
          n: "02",
          title: "Trust that lasts",
          body: "Relationships built with transparency, care and consistency.",
          tag: "BUILT ON TRUST",
          image: "/images/trust.jpeg",
          alt: "Vasudha Group residential development",
        },
        {
          n: "03",
          title: "A lighter footprint",
          body: "Thoughtful features that help communities live more responsibly.",
          tag: "MINDFUL LIVING",
          image: "/images/develop4.jpeg",
          alt: "Green foliage representing mindful living",
        },
      ].map((item, i) => (
        <Reveal
          className="luxury-principle"
          delay={i * 0.12}
          key={item.n}
        >
          <div className="luxury-principle-image-wrap">
            <img
              className="luxury-principle-image"
              src={item.image}
              alt={item.alt}
              loading="lazy"
            />
          </div>

          <div className="luxury-principle-details">
            <div className="luxury-principle-top">
              <span className="luxury-principle-number">
                {item.n}
              </span>

              <ArrowUpRight
                className="luxury-principle-arrow"
                size={20}
                strokeWidth={1.4}
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
          </div>
        </Reveal>
      ))}

    </div>

  </div>
</section>




<section className="developments-luxe" id="developments">
  <div className="developments-inner">

    {/* Section header */}
    <div className="developments-topline">
      <div className="developments-label">
        <span>02</span>
        <i />
        SELECTED DEVELOPMENTS
      </div>

      <p>40 Years, A Legacy of Quality &amp; Trust</p>
    </div>

    {/* Introduction */}
    <div className="developments-intro">
      <Reveal className="developments-title">
        <span className="developments-eyebrow">
          OUR PROJECTS IN PUNE
        </span>

        <h2>
          Places with purpose.
          <br />
          <em>Built on trust.</em>
        </h2>
      </Reveal>

      
<Reveal className="developments-description" delay={0.15}>
  <div className="developments-description-header">
    <span className="developments-description-mark">V.</span>
    <span className="developments-description-since">
      EST. 1985
    </span>
  </div>

  <span className="developments-description-line" />

  <p>
    Since 1985, Vasudha Group has created spaces for
    living, working and growing. Discover developments
    shaped by thoughtful planning, enduring quality
    and a commitment to better everyday living.
  </p>

  <a href="#contact" className="developments-discover">
    <span>Enquire about a project</span>
    <ArrowUpRight size={17} />
  </a>
</Reveal>

    </div>

    
{/* Project gallery */}
<div className="developments-gallery">
  {projects.map((project, i) => (
    <Reveal
      className={`development-card ${
        i === 0 ? "development-card-1" : ""
      }`}
      delay={(i % 3) * 0.12}
      key={project.number ?? project.name}
    >
      <a
        href="#contact"
        className="development-visual"
        aria-label={`Enquire about ${project.name}`}
      >
        <img
          src={project.image}
          alt={`${project.name} development by Vasudha Group`}
          loading="lazy"
        />

        <span className="development-image-overlay" />

        <span className="development-category">
          {project.tag ?? "COMPLETED"}
        </span>

        <span className="development-number">
          {project.number ?? String(i + 1).padStart(2, "0")}
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
            {project.number ?? String(i + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="development-features">
          {project.year && (
            <span>COMPLETED {project.year}</span>
          )}
          {project.floors != null && (
            <span>{project.floors} FLOORS</span>
          )}
          {project.flats != null && (
            <span>{project.flats} FLATS</span>
          )}
          {project.shops != null && (
            <span>{project.shops} SHOPS</span>
          )}

          {(project.features ?? []).map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
      </div>
    </Reveal>
  ))}
</div>


    {/* Company credentials */}
    <div className="developments-bottom">
      <div className="developments-bottom-left">
        <span className="developments-bottom-dot" />
        <span>ESTABLISHED 1985</span>
      </div>

      <span className="developments-bottom-right">
        17+ COMPLETED PROJECTS &nbsp;·&nbsp; 7 LAKH+ SQ. FT. DEVELOPED
      </span>
    </div>

  </div>
</section>


<section className="testimonials-luxe" id="testimonials">
  <div className="testimonials-inner">

    <div className="testimonials-heading">
      <span>04 / HOMEOWNER EXPERIENCES</span>

      <h2>
        Built on trust.
        <br />
        <em>Remembered for life.</em>
      </h2>

      <p>
        Every development becomes part of someone's story.
        We value the relationships that continue long after
        a home is built.
      </p>

      <a href="#developments">
        Explore our developments <ArrowUpRight size={18} />
      </a>
    </div>

   <div className="testimonials-note">
  <Brand />

  <p>Spaces for life. A legacy built on trust.</p>

  <span>VASUDHA GROUP · EST. 1985</span>
</div>

  </div>
</section>

<section className="journey-luxe" id="journey">
  <div className="journey-inner">

    <div className="journey-topline">
      <span>05 / OUR JOURNEY</span>
      <span>ROOTED IN CHINCHWAD · GROWING ACROSS PUNE</span>
    </div>

    <div className="journey-heading">
      <Reveal className="journey-title">
        <span className="journey-eyebrow">
          A FOUNDATION BUILT ON TRUST
        </span>

        <h2>
          Four decades<br />
          of <em>building better.</em>
        </h2>
      </Reveal>

      <Reveal className="journey-description" delay={0.15}>
        <p>
          From a family-led vision under Late Shri. Damodar
          (Anna) Bhagwant Sole to residential developments
          across Pune, our journey has always been shaped
          by experience, quality and trust.
        </p>

        <a href="#developments">
          Explore our projects
          <ArrowUpRight size={18} />
        </a>
      </Reveal>
    </div>

    <div className="journey-stats">
      <Reveal className="journey-stat">
        <span className="journey-stat-number">40+</span>
        <span className="journey-stat-label">
          YEARS OF EXPERIENCE
        </span>
      </Reveal>

      <Reveal className="journey-stat" delay={0.1}>
        <span className="journey-stat-number">300+</span>
        <span className="journey-stat-label">
          UNITS DELIVERED*
        </span>
      </Reveal>

      <Reveal className="journey-stat" delay={0.2}>
        <span className="journey-stat-number">12</span>
        <span className="journey-stat-label">
          BUILDINGS IN THE PROVIDED PORTFOLIO
        </span>
      </Reveal>
    </div>

    <div className="journey-projects-heading">
      <span>SELECTED MILESTONES</span>
      <span className="journey-rule" />
      <span>1990 — PRESENT</span>
    </div>

    <div className="journey-timeline">

      <Reveal className="journey-item">
        <span className="journey-year">1990</span>
        <div className="journey-marker" />
        <div className="journey-item-content">
          <span>01 / EARLY FOUNDATIONS</span>
          <h3>Dnyanesh Apartment</h3>
          <p>
            Tanaji Nagar, Chinchwad · 12 flats · 3 floors
          </p>
        </div>
      </Reveal>

      <Reveal className="journey-item" delay={0.1}>
        <span className="journey-year">2003</span>
        <div className="journey-marker" />
        <div className="journey-item-content">
          <span>02 / GROWING COMMUNITIES</span>
          <h3>Sai Sundar Park</h3>
          <p>
            Keshav Nagar, Chinchwad · Residential and retail
          </p>
        </div>
      </Reveal>

      <Reveal className="journey-item" delay={0.2}>
        <span className="journey-year">2007</span>
        <div className="journey-marker" />
        <div className="journey-item-content">
          <span>03 / EXPANDING OUR FOOTPRINT</span>
          <h3>Shiv Tirth &amp; Anand Sagar</h3>
          <p>
            Developments in Chinchwad and Akurdi
          </p>
        </div>
      </Reveal>

      <Reveal className="journey-item" delay={0.3}>
        <span className="journey-year">2021</span>
        <div className="journey-marker" />
        <div className="journey-item-content">
          <span>04 / RECENT MILESTONE</span>
          <h3>Ram Tirth</h3>
          <p>
            Chinchwad · 42 flats · 6 floors
          </p>
        </div>
      </Reveal>

      <Reveal className="journey-item" delay={0.4}>
        <span className="journey-year">TODAY</span>
        <div className="journey-marker" />
        <div className="journey-item-content">
          <span>05 / LOOKING AHEAD</span>
          <h3>Vishnu Tirth &amp; Harmony Heritage</h3>
          <p>
            Vishnu Tirth, Link Road, Tanaji Nagar, Chinchwad;
            Harmony Heritage, opposite D-Mart, Ravet, Pradhikaran.
          </p>
        </div>
      </Reveal>

    </div>

    <div className="journey-footer">
      <span>*Unit delivery figure supplied in the company profile.</span>
      <a href="#contact">
        Connect with Vasudha Group
        <ArrowUpRight size={18} />
      </a>
    </div>

  </div>
</section>


{/* =========================================
    ONGOING DEVELOPMENTS
========================================= */}

<section className="ongoing-section" id="ongoing">
  <div className="ongoing-container">

    <div className="ongoing-eyebrow">
      <span className="ongoing-eyebrow-line" />
      THE NEXT CHAPTER
    </div>

    <div className="ongoing-heading-row">
      <div className="ongoing-heading">
        <h2>
          Ongoing
          <br />
          <em>Developments.</em>
        </h2>
      </div>

      <p className="ongoing-intro">
        Continuing our legacy through thoughtful planning,
        quality construction and spaces designed for modern living.
      </p>
    </div>

    <div className="ongoing-grid">

      {/* Vishnu Tirth */}
      <article className="ongoing-card">
        <div className="ongoing-image-wrap">
          <img
               src="/images/trust.jpeg"
            alt="Contemporary residential architecture"
            className="ongoing-image"
          />

          <span className="ongoing-number">01</span>

          <span className="ongoing-status">
            <span className="ongoing-status-dot" />
            Under Construction
          </span>

          <span className="ongoing-image-caption">
            VASUDHA GROUP
          </span>
        </div>

        <div className="ongoing-card-content">
          <span className="ongoing-project-type">
            RESIDENTIAL DEVELOPMENT
          </span>

          <h3>Vishnu Tirth</h3>

          <p className="ongoing-location">
            Link Road, Tanaji Nagar, Chinchwad
          </p>

          <p className="ongoing-description">
            A residential development continuing our commitment
            to thoughtful design and quality construction.
          </p>

          <a href="#contact" className="ongoing-link">
            Enquire about this project
            <span>↗</span>
          </a>
        </div>
      </article>

      {/* Harmony Heritage */}
      <article className="ongoing-card">
        <div className="ongoing-image-wrap">
          <img
            src="/images/develop4.jpeg"
            alt="Modern residential building design"
            className="ongoing-image"
          />

          <span className="ongoing-number">02</span>

          <span className="ongoing-status">
            <span className="ongoing-status-dot" />
            Under Construction
          </span>

          <span className="ongoing-image-caption">
            VASUDHA GROUP
          </span>
        </div>

        <div className="ongoing-card-content">
          <span className="ongoing-project-type">
            RESIDENTIAL DEVELOPMENT
          </span>

          <h3>Harmony Heritage</h3>

          <p className="ongoing-location">
            Opposite D-Mart, Ravet, Pradhikaran
          </p>

          <p className="ongoing-description">
            A new chapter in our journey, guided by experience,
            careful planning and a focus on everyday comfort.
          </p>

          <a href="#contact" className="ongoing-link">
            Enquire about this project
            <span>↗</span>
          </a>
        </div>
      </article>

    </div>

    <div className="ongoing-bottom">
      <span>DESIGNED WITH PURPOSE. BUILT ON TRUST.</span>

      <a href="#developments">
        Explore completed projects <span>↗</span>
      </a>
    </div>

  </div>
</section>



{/* WHY CHOOSE VASUDHA GROUP */}

<section className="why-vasudha" id="why-vasudha">
  <div className="why-vasudha-inner">

    <div className="why-vasudha-top">
      <span className="why-vasudha-eyebrow">
        <span className="why-vasudha-line" />
        THE VASUDHA DIFFERENCE
      </span>
      <span className="why-vasudha-est">EST. 1985</span>
    </div>

    <div className="why-vasudha-heading">
      <div className="why-vasudha-title">
        <h2>
          Why families
          <br />
          <em>choose Vasudha.</em>
        </h2>
      </div>

      <div className="why-vasudha-intro">
        <span className="why-vasudha-side-label">
          A LEGACY THAT CONTINUES
        </span>
        <p>
          Four decades of experience. A commitment to quality.
          Relationships built on trust. Our journey is defined
          by the people and communities we serve.
        </p>
      </div>
    </div>

    <div className="why-vasudha-list">

      <article className="why-vasudha-item">
        <span className="why-vasudha-number">01</span>
        <div className="why-vasudha-item-main">
          <h3>Experience That Matters</h3>
          <p>
            Over four decades of experience in real estate
            and residential construction.
          </p>
        </div>
        <span className="why-vasudha-arrow">↗</span>
      </article>

      <article className="why-vasudha-item">
        <span className="why-vasudha-number">02</span>
        <div className="why-vasudha-item-main">
          <h3>Thoughtful Design</h3>
          <p>
            A focus on practical planning, functional spaces
            and comfortable everyday living.
          </p>
        </div>
        <span className="why-vasudha-arrow">↗</span>
      </article>

      <article className="why-vasudha-item">
        <span className="why-vasudha-number">03</span>
        <div className="why-vasudha-item-main">
          <h3>A Legacy of Trust</h3>
          <p>
            Building lasting relationships through a
            people-first approach to our work.
          </p>
        </div>
        <span className="why-vasudha-arrow">↗</span>
      </article>

      <article className="why-vasudha-item">
        <span className="why-vasudha-number">04</span>
        <div className="why-vasudha-item-main">
          <h3>A Growing Portfolio</h3>
          <p>
            Residential developments across Chinchwad
            and the wider Pune area.
          </p>
        </div>
        <span className="why-vasudha-arrow">↗</span>
      </article>

    </div>

    <div className="why-vasudha-footer">
      <span>BUILT WITH PURPOSE. BUILT ON TRUST.</span>
      <a href="#contact">
        Let’s connect <span>↗</span>
      </a>
    </div>

  </div>
</section>


      {/* FOUR DECADES OF TRUST */}
      <section className="trust-legacy" id="legacy">
        <div className="trust-legacy-inner">
          <motion.div
            className="trust-legacy-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <span className="trust-eyebrow">
              <span className="trust-eyebrow-line" />
              FOUR DECADES OF TRUST
            </span>

            <h2>
              A legacy built on
              <br />
              <span>quality.</span>
            </h2>

            <p className="trust-intro">
              From a family-led vision to a growing portfolio of
              residential and commercial developments across Pune.
            </p>
          </motion.div>

          <div className="trust-stats-grid">
            {[
              {
                number: "40+",
                label: "Years of experience",
                detail: "A foundation built on trust",
              },
              {
                number: "17+",
                label: "Completed projects",
                detail: "Thoughtfully developed spaces",
              },
              {
                number: "7L+",
                label: "Sq. ft. developed",
                detail: "Space shaped for living",
              },
              {
                number: "300+",
                label: "Units delivered*",
                detail: "Homes and spaces for people",
              },
            ].map((stat, index) => (
              <motion.div
                className="trust-stat"
                key={stat.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >
                <span className="trust-stat-index">
                  0{index + 1}
                </span>

                <div className="trust-stat-number">
                  {stat.number}
                </div>

                <h3>{stat.label}</h3>

                <p>{stat.detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="trust-bottom">
            <span className="trust-bottom-mark">V.</span>
            <p>
              Building more than structures.
              <span> Building lasting relationships.</span>
            </p>
            <span className="trust-bottom-note">
              *Units delivered figure to be confirmed.
            </span>
          </div>
        </div>
      </section>

{/* =========================================
    CONTACT — VASUDHA GROUP
========================================= */}

<section className="contact-luxe" id="contact">
  <div className="contact-luxe-inner">

    {/* Topline */}
    <div className="contact-luxe-topline">
      <span className="contact-luxe-eyebrow">
        <span className="contact-luxe-dot" />
        LET'S BUILD SOMETHING MEANINGFUL
      </span>

      <span className="contact-luxe-top-note">
        VASUDHA GROUP · EST. 1985
      </span>
    </div>

    {/* Main heading */}
    <div className="contact-luxe-heading">
      <Reveal className="contact-luxe-title">
        <span className="contact-luxe-index">08 / GET IN TOUCH</span>

        <h2>
          Your next chapter
          <br />
          <em>starts here.</em>
        </h2>
      </Reveal>

      <Reveal className="contact-luxe-intro" delay={0.15}>
        <p>
          Looking for a place to call home or exploring a property
          opportunity? We would be glad to hear from you.
        </p>

        <span className="contact-luxe-promise">
          <span />
          QUALITY · TRUST · EXPERIENCE
        </span>
      </Reveal>
    </div>

    {/* Contact layout */}
    <div className="contact-luxe-grid">

      {/* Left: Contact details */}
      <Reveal className="contact-luxe-details">
        <span className="contact-luxe-small-label">
          CONNECT WITH OUR TEAM
        </span>

        <h3>
          Let’s start
          <br />
          a conversation.
        </h3>

        <p className="contact-luxe-description">
          Whether you have a question about a development,
          would like to arrange a visit, or simply want to know
          more about Vasudha Group, we’re here to help.
        </p>

        <a
          className="contact-luxe-detail"
          href="tel:+919607340999"
        >
          <span className="contact-luxe-detail-icon">
            <Phone size={19} strokeWidth={1.5} />
          </span>

          <span className="contact-luxe-detail-copy">
            <span>CALL OUR TEAM</span>
            <strong>+91 96073 40999</strong>
          </span>

          <ArrowUpRight
            className="contact-luxe-detail-arrow"
            size={18}
          />
        </a>

        <a
          className="contact-luxe-detail"
          href="https://wa.me/919607340999"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-luxe-detail-icon">
            <Phone size={19} strokeWidth={1.5} />
          </span>

          <span className="contact-luxe-detail-copy">
            <span>WHATSAPP ENQUIRIES</span>
            <strong>Chat with our team</strong>
          </span>

          <ArrowUpRight
            className="contact-luxe-detail-arrow"
            size={18}
          />
        </a>

        <a
          className="contact-luxe-detail"
          href="mailto:vasudhagroup24@gmail.com"
        >
          <span className="contact-luxe-detail-icon">
            <Mail size={19} strokeWidth={1.5} />
          </span>

          <span className="contact-luxe-detail-copy">
            <span>EMAIL US</span>
            <strong>vasudhagroup24@gmail.com</strong>
          </span>

          <ArrowUpRight
            className="contact-luxe-detail-arrow"
            size={18}
          />
        </a>

        <a
          className="contact-luxe-detail contact-luxe-address"
          href="https://maps.app.goo.gl/DLddiJgVAkWrHWF3A"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-luxe-detail-icon">
            <MapPin size={19} strokeWidth={1.5} />
          </span>

          <span className="contact-luxe-detail-copy">
            <span>VISIT OUR OFFICE</span>
            <strong>
              Shop 03, Shivtirth, Near Dhaneshwar Mandir,
              Behind Chintamani Wada, Chinchwad Gaon,
              Pune – 411033
            </strong>
            <span className="contact-luxe-map-link">
              GET DIRECTIONS <ArrowUpRight size={13} />
            </span>
          </span>
        </a>

        <div className="contact-luxe-quote">
          <span>“</span>
          <p>
            Good buildings come from good people and all
            problems are solved by good design.
          </p>
        </div>
      </Reveal>

      {/* Right: Enquiry form */}
      <Reveal className="contact-luxe-form-wrap" delay={0.12}>
        <div className="contact-luxe-form-heading">
          <div>
            <span className="contact-luxe-form-label">
              PROPERTY ENQUIRY
            </span>
            <h3>How can we help you?</h3>
          </div>

          <span className="contact-luxe-form-mark">V.</span>
        </div>

        <form
          className="contact-luxe-form"
          action="https://formsubmit.co/vasudhagroup24@gmail.com"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Website Enquiry — Vasudha Group"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <input
            type="hidden"
            name="_captcha"
            value="true"
          />

          <input
            type="text"
            name="_honey"
            className="contact-luxe-honeypot"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="contact-luxe-field-row">
            <label className="contact-luxe-field">
              <span>YOUR NAME *</span>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </label>

            <label className="contact-luxe-field">
              <span>PHONE NUMBER *</span>
              <input
                type="tel"
                name="phone"
                placeholder="+91"
                autoComplete="tel"
                inputMode="tel"
                pattern="[+]?[0-9 ()-]{10,18}"
                title="Enter a valid phone number."
                required
              />
            </label>
          </div>

          <label className="contact-luxe-field">
            <span>EMAIL ADDRESS *</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </label>

          <label className="contact-luxe-field">
            <span>PROJECT OF INTEREST</span>
            <select name="project" defaultValue="">
              <option value="" disabled>
                Select a development
              </option>
              <option value="Moraya Tirth">Moraya Tirth</option>
              <option value="Vishnu Tirth">Vishnu Tirth</option>
              <option value="Harmony Heritage">Harmony Heritage</option>
              <option value="Other Enquiry">Other / General Enquiry</option>
            </select>
          </label>

          <label className="contact-luxe-field">
            <span>YOUR MESSAGE *</span>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us what you're looking for..."
              required
            />
          </label>

          <button className="contact-luxe-submit" type="submit">
            <span>SUBMIT ENQUIRY</span>
            <span className="contact-luxe-submit-icon">
              <ArrowUpRight size={20} />
            </span>
          </button>

          <p className="contact-luxe-form-note">
            By submitting this form, you agree to be contacted
            by the Vasudha Group team regarding your enquiry.
          </p>
        </form>
      </Reveal>

    </div>

    {/* Bottom CTA strip */}
    <div className="contact-luxe-bottom">
      <div>
        <span className="contact-luxe-bottom-label">
          A LEGACY OF QUALITY &amp; TRUST
        </span>
        <p>Let’s find the right space for your next chapter.</p>
      </div>

      <a
        href="https://maps.app.goo.gl/DLddiJgVAkWrHWF3A"
        target="_blank"
        rel="noreferrer"
        className="contact-luxe-directions"
      >
        <MapPin size={17} />
        <span>VISIT VASUDHA GROUP</span>
        <ArrowUpRight size={17} />
      </a>
    </div>

  </div>
</section>


      {/* VASUDHA GROUP FOOTER */}
      <footer className="vasudha-footer" id="site-footer">
        <div className="vasudha-footer-inner">
          <div className="vasudha-footer-main">
            {/* Brand */}
            <div className="vasudha-footer-brand">
              <a href="#top" className="vasudha-footer-logo">
                <img
                  src="/vasudha-logo.png"
                  alt="Vasudha Group"
                />
              </a>

              <p className="vasudha-footer-tagline">
                A legacy built on quality and trust.
              </p>

              <p className="vasudha-footer-description">
                Creating thoughtfully designed residential and
                commercial spaces across Pune, built on a
                foundation of experience, quality and trust.
              </p>

              <span className="vasudha-footer-since">
                EST. 1985 · PUNE, INDIA
              </span>
            </div>

            {/* Quick Links */}
            <div className="vasudha-footer-column">
              <h3>Explore</h3>
              <a href="#philosophy">About Us</a>
              <a href="#developments">Our Projects</a>
              <a href="#legacy">Our Legacy</a>
              <a href="#why-vasudha">Why Vasudha</a>
              <a href="#contact">Contact Us</a>
            </div>

            {/* Projects */}
            <div className="vasudha-footer-column">
              <h3>Our Developments</h3>
              <a href="#ongoing">Ongoing Projects</a>
              <a href="#developments">Completed Projects</a>
              <a href="#developments">Moraya Tirth</a>
              <a href="#developments">Vishnu Tirth</a>
              <a href="#developments">Harmony Heritage</a>
            </div>

            {/* Contact */}
            <div className="vasudha-footer-column vasudha-footer-contact">
              <h3>Get in Touch</h3>

              <a href="tel:+919607340999">
                <Phone size={15} />
                <span>+91 96073 40999</span>
              </a>

              <a href="mailto:vasudhagroup24@gmail.com">
                <Mail size={15} />
                <span>vasudhagroup24@gmail.com</span>
              </a>

              <a
                href="https://maps.app.goo.gl/DLddiJgVAkWrHWF3A"
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={15} />
                <span>
                  Shivtirth, Near Dhaneshwar Mandir,
                  Chinchwad Gaon, Pune – 411033
                </span>
              </a>

              <a
                className="vasudha-footer-whatsapp"
                href="https://wa.me/919607340999"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="vasudha-footer-bottom">
            <p>
              © {new Date().getFullYear()} Vasudha Group.
              All rights reserved.
            </p>

            <p className="vasudha-footer-bottom-note">
              Building lasting relationships.
            </p>

            <a href="#top" className="vasudha-footer-top">
              Back to top <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </footer>

    </main>
    
  );
}
