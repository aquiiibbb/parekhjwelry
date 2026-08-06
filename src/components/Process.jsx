import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Process.css";

/* ------------------------------------------------------------------ */
/*  Animation Variants                                                */
/* ------------------------------------------------------------------ */

// Basic Fade & Slide Up Animation
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Container to stagger children animations
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Left Step Slide In
const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Right Step Slide In
const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const chapters = [
  {
    chapter: "CHAPTER 01",
    title: "Configure & ship",
    subtitle:
      "You choose the care your piece needs. We prepare the path it will travel.",
    steps: [
      {
        number: "01",
        title: "Service selection",
        body: "Browse our catalog and choose the services your piece needs. Every service carries a transparent starting price — no hidden fees, no guesswork.",
        bullets: [
          "Filter by category, metal type, or turnaround speed",
          "See starting prices before you begin",
          "Rush options available for select services",
        ],
      },
      {
        number: "02",
        title: "Intake & shipping",
        body: "Pack your piece with care and send it on its way with our prepaid, insured label. From the moment it leaves your hands, it travels under our protection.",
        bullets: [
          "Prepaid insured shipping label provided",
          "Clear packing instructions for safe transit",
          "Declared value required for insurance coverage",
        ],
      },
    ],
  },
  {
    chapter: "CHAPTER 02",
    title: "Inspect & approve",
    subtitle:
      "We see everything before we touch anything. Your approval opens the bench.",
    steps: [
      {
        number: "03",
        title: "Inspection & documentation",
        body: "On arrival, every piece is photographed, weighed, and examined. A condition report captures its state before a single tool touches it.",
        bullets: [
          "High-resolution intake photography",
          "Weight and measurement recording",
          "Condition notes shared with you digitally",
        ],
      },
      {
        number: "04",
        title: "Quote & approval",
        body: "We prepare an itemized quote with exact cost and estimated turnaround. Bench work waits until you review and approve — always.",
        bullets: [
          "Itemized quote with estimated turnaround",
          "Approve or adjust via dashboard or email",
          "No surprises — what you see is what you pay",
        ],
      },
    ],
  },
  {
    chapter: "CHAPTER 03",
    title: "Restore & verify",
    subtitle:
      "Skilled hands, steady checkpoints — craft refined until it meets the standard.",
    steps: [
      {
        number: "05",
        title: "Bench work & status updates",
        body: "Your piece moves to the bench, where skilled jewelers work through structured quality checkpoints. You follow along at every milestone.",
        bullets: [
          "Real-time status updates via dashboard",
          "Email or SMS notifications at key milestones",
          "Quality checkpoints at each stage",
        ],
      },
      {
        number: "06",
        title: "Quality control",
        body: "Before anything leaves the bench, a final inspection verifies stone security, structural integrity, and finish against the approved scope.",
        bullets: [
          "Final photography and measurement verification",
          "Stone security and structural integrity check",
          "Comparison against intake condition report",
        ],
      },
    ],
  },
  {
    chapter: "CHAPTER 04",
    title: "Return & record",
    subtitle: "Home again, insured and documented. The story of your piece, kept forever.",
    steps: [
      {
        number: "07",
        title: "Delivery & return",
        body: "Your piece is carefully packed in tamper-evident packaging and shipped back with full tracking — insured, traceable, and secure.",
        bullets: [
          "Insured return shipping with tracking",
          "Secure tamper-evident packaging",
          "Delivery confirmation notification",
        ],
      },
      {
        number: "08",
        title: "Records & care guidance",
        body: "A complete record of every service performed lives in your account — photography, invoices, reports, and personalized care guidance.",
        bullets: [
          "Before and after documentation stored digitally",
          "Service invoice and warranty information",
          "Personalized care tips for your piece",
        ],
      },
    ],
  },
];

const deliverables = [
  {
    title: "Before & after photos",
    body: "High-resolution photography at intake and after bench work, stored permanently in your account.",
  },
  {
    title: "Itemized service invoice",
    body: "A complete breakdown of every service, material, and cost — matching the quote you approved.",
  },
  {
    title: "Condition report",
    body: "Weight, measurements, stone security, structural integrity, and existing wear — documented at intake.",
  },
  {
    title: "Care guidance",
    body: "Personalized recommendations based on the services performed and the metals and stones in your piece.",
  },
];

/* ------------------------------------------------------------------ */
/*  Sub components                                                    */
/* ------------------------------------------------------------------ */

function Hero() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="cw-hero"
      id="top"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.p className="cw-eyebrow" variants={fadeInUp}>
        HOW IT WORKS
      </motion.p>
      <motion.h1 className="cw-hero__title" variants={fadeInUp}>
        Your piece, cared for
        <br />
        at every handoff.
      </motion.h1>
      <motion.p className="cw-hero__desc" variants={fadeInUp}>
        Eight deliberate steps from service selection to insured return.
        Photographed, inspected, quoted, and approved before bench work
        begins — with full documentation woven through every stage.
      </motion.p>
      <motion.p className="cw-hero__tags" variants={fadeInUp}>
        Insured both ways&nbsp;&middot;&nbsp;Quote before work&nbsp;&middot;&nbsp;Full
        documentation
      </motion.p>
      <motion.div className="cw-hero__actions" variants={fadeInUp}>
        <button
          className="cw-btn-start"
          onClick={() => navigate("/start")}
        >
          Start my Service
        </button>
         <button
          className="cw-btn cw-btn--ghost"
          onClick={() => navigate("/Services")}
        >
          Browse services
        </button>
        
      </motion.div>
    </motion.section>
  );
}

function Step({ step, align }) {
  const stepVariant = align === "left" ? slideFromLeft : slideFromRight;

  return (
    <motion.div
      className={`cw-step cw-step--${align}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stepVariant}
    >
      <div className="cw-step__dot" />
      <div className="cw-step__content">
        <span className="cw-step__ghost-number" aria-hidden="true">
          {step.number}
        </span>
        <span className="cw-step__number">{step.number}</span>
        <h3 className="cw-step__title">{step.title}</h3>
        <p className="cw-step__body">{step.body}</p>
        <ul className="cw-step__list">
          {step.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function Chapter({ data, index }) {
  return (
    <section className="cw-chapter" aria-labelledby={`chapter-${index}-title`}>
      <motion.div
        className="cw-chapter__intro"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.p className="cw-eyebrow" variants={fadeInUp}>
          {data.chapter}
        </motion.p>
        <motion.h2
          className="cw-chapter__title"
          id={`chapter-${index}-title`}
          variants={fadeInUp}
        >
          {data.title}
        </motion.h2>
        <motion.p className="cw-chapter__subtitle" variants={fadeInUp}>
          {data.subtitle}
        </motion.p>
      </motion.div>

      <div className="cw-timeline">
        <div className="cw-timeline__line" aria-hidden="true" />
        {data.steps.map((step, i) => (
          <Step
            key={step.number}
            step={step}
            align={i % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <motion.section
      className="cw-closing"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.h2 className="cw-closing__title" variants={fadeInUp}>
        Nothing begins without your
        <br />
        approval.
      </motion.h2>
      <motion.p className="cw-closing__desc" variants={fadeInUp}>
        Every piece is inspected and quoted before bench work starts. Prepaid
        labels protect your jewelry both ways. Photography, condition
        reports, and milestone updates are stored permanently in your
        account — structure that protects the piece, and your expectations.
      </motion.p>
    </motion.section>
  );
}

function Deliverables() {
  return (
    <section className="cw-deliverables">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.p className="cw-eyebrow" variants={fadeInUp}>
          WHAT YOU'LL RECEIVE
        </motion.p>
        <motion.h2 className="cw-deliverables__title" variants={fadeInUp}>
          Documentation with every repair
        </motion.h2>
      </motion.div>

      <motion.div
        className="cw-deliverables__grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {deliverables.map((d) => (
          <motion.div
            className="cw-deliverables__card"
            key={d.title}
            variants={fadeInUp}
          >
            <h3>{d.title}</h3>
            <p>{d.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function FinalCTA() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="cw-final"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.h2 className="cw-final__title" variants={fadeInUp}>
        Begin with confidence.
      </motion.h2>
      <motion.p className="cw-final__desc" variants={fadeInUp}>
        Select your services, ship with our insured label, and follow every
        milestone from intake to return.
      </motion.p>
      <motion.div className="cw-final__actions" variants={fadeInUp}>
        <button
          className="cw-btn cw-btn--accent"
          onClick={() => navigate("/start")}
        >
          Start my Service
        </button>
        <button
          className="cw-btn cw-btn--ghost"
          onClick={() => navigate("/faq")}
        >
          Read the FAQ
        </button>
      </motion.div>
    </motion.section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ProcessPage() {
  return (
    <div className="cw-page">
      <main>
        <Hero />
        {chapters.map((chapter, i) => (
          <Chapter data={chapter} index={i} key={chapter.chapter} />
        ))}
        <ClosingCTA />
        <Deliverables />
        <FinalCTA />
      </main>
    </div>
  );
}