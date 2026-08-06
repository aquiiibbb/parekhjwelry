import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Added this import
import './faq.css';

const faqData = [
  {
    question: "What jewelry repair services does Parekh Jewelers offer?",
    answer: "Ring resizing, prong repair and retipping, rhodium plating, gold plating, stone setting, stone tightening, engraving, engraving removal, soldering, clasp replacement, polishing and refinishing, deep cleaning and restoration, chain detangling, bail resize, ring rounding, ring band renewal, earring backing conversion, jewelry appraisal, stone replacement, and 3D CAD/CAM design. Over 20 mail-in jewelry repair services for rings, necklaces, bracelets, earrings, pendants, and watches."
  },
  {
    question: "How does mail-in jewelry repair work?",
    answer: "Select your services on the Parekh Jewelers website and ship your piece using the prepaid insured label we provide. We photograph, weigh, and inspect your piece on arrival. You receive an itemized quote with the exact cost and estimated turnaround. No work begins until you approve. After bench work and final quality inspection, your piece ships back with insured return delivery, before-and-after photos, and full documentation stored in your account."
  },
  {
    question: "Is it safe to mail jewelry for repair?",
    answer: "Yes. Parekh Jewelers provides a prepaid insured shipping label with every order. A declared value is required, and insurance covers your piece from the moment it ships to us through return delivery. Returns use secure, tamper-evident packaging with full tracking. Every piece is photographed and documented on arrival."
  },
  {
    question: "How much does jewelry repair cost?",
    answer: "Repair costs depend on the specific service, metal type, and complexity of the item. Detailed quotes are provided after item inspection."
  },
  {
    question: "How long does jewelry repair take?",
    answer: "Most standard repairs are completed within 3 to 7 business days after approval, plus shipping time."
  },
  {
    question: "How do I know if my ring needs resizing?",
    answer: "If your ring slides off too easily, spins constantly, or feels uncomfortably tight, it likely needs to be resized for a safer and better fit."
  },
  {
    question: "What is rhodium plating and how long does it last?",
    answer: "Rhodium plating adds a bright white layer to white gold jewelry to restore its shine. It typically lasts between 12 to 24 months depending on wear."
  },
  {
    question: "How do I know if my prongs need repair?",
    answer: "If your stone feels loose, catches on clothing, or the prongs look flat or worn down, they need retipping or repair to prevent losing the stone."
  },
  {
    question: "Can Parekh Jewelers repair engagement rings and wedding bands?",
    answer: "Yes, we specialize in repairing, resizing, and restoring all types of engagement rings and wedding bands."
  },
  {
    question: "Do you work on gold, platinum, and silver jewelry?",
    answer: "Yes, our expert jewelers work with gold, platinum, sterling silver, and various gemstone settings."
  },
  {
    question: "What happens when my jewelry arrives at Parekh Jewelers?",
    answer: "Your package is logged, opened under video inspection, weighed, photographed, and thoroughly examined before sending you a final quote."
  },
  {
    question: "What documentation do I receive after jewelry repair?",
    answer: "You receive before-and-after photos, a detailed work report, and updated care instructions stored directly in your online account."
  },
  {
    question: "Can I track my jewelry repair order?",
    answer: "Yes, you can track every step of the process—from transit to bench repair—live through your customer dashboard."
  },
  {
    question: "How much does it cost to fix a broken chain?",
    answer: "Chain repair costs depend on the metal and style of the chain. Base soldering starts at a standard rate after inspection."
  },
  {
    question: "What if I need to cancel or change my jewelry repair order?",
    answer: "You can cancel or modify your order at any time before approving the final work estimate."
  },
  {
    question: "Does Parekh Jewelers offer jewelry repair for businesses and retailers?",
    answer: "Yes, we offer wholesale repair and CAD design services for retail partners and jewelry businesses."
  }
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(0); 
  const navigate = useNavigate(); // Initialized the navigate hook here

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <div className="faq-container">
        <header className="faq-header">
          <h1 className="faq-title">Common questions</h1>
          <p className="faq-subtitle">Everything you need to know before you start.</p>
        </header>

        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-card ${isOpen ? 'open' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="faq-question">
                  <h3>{item.question}</h3>
                </div>
                
                <div className="faq-answer-container">
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-footer">
           <button
             className="btn-start-service"
             onClick={() => navigate("/start")} // This will now work correctly
           >
             Start my Service
           </button>
        </div>
      </div>
    </div>
  );
}

export default Faq;