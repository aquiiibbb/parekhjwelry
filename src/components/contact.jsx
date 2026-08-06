import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Camera as Instagram, 
  PlaySquare as Youtube, 
  MessageSquare 
} from 'lucide-react';
import './contact.css';

const contactFaqs = [
  {
    question: "What is your response time?",
    answer: "We respond to emails, messages, and WhatsApp within one business day. Phone calls are answered during business hours, Monday through Friday, 9 AM – 5 PM Pacific."
  },
  {
    question: "How do I get a quote for my repair?",
    answer: "Select your repair services online or send us a message with images of your item to receive an initial estimate."
  },
  {
    question: "Can I visit your location?",
    answer: "Our studio operates primarily via insured mail-in service, but in-person consultations are available by appointment only."
  },
  {
    question: "How do I check the status of my order?",
    answer: "You can track the progress of your repair live anytime by logging into your account dashboard."
  },
  {
    question: "I have a question about my quote. What should I do?",
    answer: "Simply reply to your quote notification email or reach out to us via WhatsApp with your order number."
  }
];

function Contact() {
  const [openFaq, setOpenFaq] = useState(0); // First item open initially
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        
        {/* SECTION 1: Header & Info Cards */}
        <header className="contact-header">
          <h1 className="contact-title">Contact Parekh Jewelers</h1>
          <p className="contact-subtitle">
            Questions about jewelry repair, shipping, pricing, or your order? Reach us by phone, email,<br className="desktop-br" /> 
            or WhatsApp. We respond within one business day.
          </p>
        </header>

        <div className="info-cards-grid">
          {/* Card 1: Phone */}
          <div className="info-card">
            <div className="icon-box">
              <Phone className="card-icon" />
            </div>
            <div className="card-content">
              <span className="card-label">PHONE</span>
              <p className="card-val">+1 (213) 274-4258</p>
            </div>
          </div>

          {/* Card 2: Address */}
          <div className="info-card">
            <div className="icon-box">
              <MapPin className="card-icon" />
            </div>
            <div className="card-content">
              <span className="card-label">ADDRESS</span>
              <p className="card-val font-medium">Parekh Jewelers</p>
              <p className="card-address-text">
                700 S Flower Street<br />
                Suite 1000<br />
                Los Angeles, California 90017<br />
                United States
              </p>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="info-card">
            <div className="icon-box">
              <Mail className="card-icon" />
            </div>
            <div className="card-content">
              <span className="card-label">EMAIL</span>
              <p className="card-val">care@parekhjewelers.com</p>
            </div>
          </div>

          {/* Card 4: Instagram */}
          <div className="info-card">
            <div className="icon-box">
              <Instagram className="card-icon" />
            </div>
            <div className="card-content">
              <span className="card-label">INSTAGRAM</span>
              <p className="card-val">@parekhjewelersusa</p>
            </div>
          </div>

          {/* Card 5: YouTube */}
          <div className="info-card">
            <div className="icon-box">
              <Youtube className="card-icon" />
            </div>
            <div className="card-content">
              <span className="card-label">YOUTUBE</span>
              <p className="card-val">YouTube</p>
            </div>
          </div>

          {/* Card 6: WhatsApp */}
          <div className="info-card">
            <div className="icon-box">
              <MessageSquare className="card-icon" />
            </div>
            <div className="card-content">
              <span className="card-label">WHATSAPP</span>
              <p className="card-val">Chat on WhatsApp</p>
            </div>
          </div>
        </div>

        {/* SECTION 2: Send a Message Form */}
        <div className="message-form-card">
          <h2 className="form-title">Send a message</h2>
          <p className="form-subtitle">Prefer to write? We typically respond within one business day.</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full name</label>
                <input 
                  type="text" 
                  name="fullName"
                  placeholder="Your name" 
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="you@example.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input 
                type="text" 
                name="subject"
                placeholder="How can we help?" 
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea 
                name="message"
                rows="5"
                placeholder="Your message..." 
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="form-action">
              <button type="submit" className="btn-send-message">Send message</button>
            </div>
          </form>
        </div>

        {/* SECTION 3: FAQs Section */}
        <div className="contact-faq-section">
          <span className="faq-badge">FAQS</span>
          <h2 className="faq-section-title">Common questions</h2>

          <div className="faq-list">
            {contactFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className={`faq-card ${isOpen ? 'open' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-question">
                    <h3>{faq.question}</h3>
                  </div>
                  <div className="faq-answer-wrapper">
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;