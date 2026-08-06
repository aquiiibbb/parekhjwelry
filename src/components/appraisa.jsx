import React, { useState } from 'react';
import './appraisa.css';
import work from '../assest/work.png';

export default function Appraisal() {
  const [provider, setProvider] = useState('gia');
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'Why should jewelry be appraised?',
      a: 'A jewelry appraisal documents identity, condition, and replacement value for insurance, estate planning, resale, or personal records. Without a current appraisal, replacing a lost or damaged piece through insurance is difficult.',
    },
    {
      q: 'Is a jewelry appraisal required for insurance?',
      a: 'Most insurance companies require a formal written appraisal for high-value items before issuing a specific jewelry schedule or rider.',
    },
    {
      q: 'How often should jewelry be reappraised?',
      a: 'We recommend updating appraisals every 3 to 5 years to account for fluctuations in precious metal and gemstone market values.',
    },
    {
      q: 'What does the Parekh Jewelers appraisal report include?',
      a: 'It includes detailed gemstone grading (carat, cut, color, clarity), metal identification via XRF, high-resolution photography, and estimated replacement value.',
    },
    {
      q: 'Is my piece insured during shipping for appraisal?',
      a: 'Yes, all shipments sent using our prepaid shipping label are fully insured up to $50,000 during transit and while in our care.',
    },
    {
      q: 'How long does a jewelry appraisal take?',
      a: 'Our standard estimated turnaround time is 5–7 business days once the item arrives at our facility.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="appraisal-container">
      {/* Import Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,500&family=Montserrat:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Top Header / Back Link */}
      <nav className="back-nav">
        <a href="#services" className="back-link">
          ‹ All services
        </a>
      </nav>

      {/* Main Hero Form Section */}
      <div className="appraisal-hero-grid">
        {/* Left Side: Image Showcase */}
        <div className="image-card">
          <img
        src={work}
            alt="Appraisal Documentation and Watch"
            className="showcase-img"
          />
        </div>

        {/* Right Side: Configuration Form */}
        <div className="form-card">
          {/* Provider Selection */}
          <div className="form-field">
            <label className="field-label">
              Appraisal Provider<span className="required">*</span>
            </label>
            <div className="provider-options">
              <button
                type="button"
                className={`provider-btn ${provider === 'gia' ? 'active' : ''}`}
                onClick={() => setProvider('gia')}
              >
                <span className="btn-title">GIA Certified Appraisal</span>
                <span className="btn-subtitle">Appraised by GIA Certified Individual</span>
              </button>

              <button
                type="button"
                className={`provider-btn ${provider === 'egl' ? 'active' : ''}`}
                onClick={() => setProvider('egl')}
              >
                <span className="btn-title">EGL USA Gemology Lab</span>
                <span className="btn-subtitle">Appraised by Private Lab</span>
              </button>
            </div>
          </div>

          {/* Jewelry Type Select */}
          <div className="form-field">
            <label className="field-label">
              Jewelry Type<span className="required">*</span>
            </label>
            <div className="select-wrapper">
              <select defaultValue="">
                <option value="" disabled>
                  Select...
                </option>
                <option value="engagement-ring">Engagement Ring</option>
                <option value="diamond-jewelry">Diamond Jewelry</option>
                <option value="gemstone-jewelry">Gemstone Jewelry</option>
                <option value="watch">Luxury Watch</option>
              </select>
            </div>
          </div>

          {/* Name Field */}
          <div className="form-field">
            <label className="field-label">
              Name on Appraisal (Full Legal Name)<span className="required">*</span>
            </label>
            <input
              type="text"
              className="text-input"
              placeholder=""
            />
          </div>

          {/* Additional Details Box */}
          <div className="form-field">
            <label className="field-label">
              Additional Details<span className="required">*</span>
            </label>
            <div className="textarea-card">
              <textarea
                rows={5}
                placeholder="Describe any special requests, details, or instructions..."
              />
              <div className="textarea-actions">
                <button type="button" className="icon-btn" title="Attach File">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                  </svg>
                </button>
                <button type="button" className="icon-btn" title="Take Photo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2v11z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </button>
                <button type="button" className="icon-btn" title="Record Audio">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Title, Pricing & Action Buttons */}
      <div className="product-info-bar">
        <div className="product-title-group">
          <div className="title-row">
            <h1 className="product-title">Appraisal</h1>
            <span className="price-tag">$200</span>
          </div>
          <p className="turnaround-time">Estimated turnaround: 5–7 business days</p>
        </div>

        <div className="action-buttons">
          <button className="btn-cart">
            <svg className="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            Add to Cart
          </button>
          <button className="btn-save">
            <svg className="heart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            Save for later
          </button>
        </div>
      </div>

      {/* Description Paragraphs */}
      <div className="description-section">
        <p>
          Mail-in jewelry appraisal for insurance coverage, estate valuation, resale documentation, and personal records.
          Written appraisal report with high-resolution photography, gemstone grading, and replacement value accepted by
          major insurance companies. Insured shipping with an upfront quote.
        </p>
        <p>
          Ship your piece with our prepaid insured label. We examine, photograph, and document your piece, then send an
          itemized quote. You approve before the formal appraisal is prepared. Your piece and appraisal report ship back insured.
        </p>
        <p>
          Each piece is examined under gemological microscope. Diamonds are graded for the four Cs: carat weight (precision scale),
          cut (proportions and symmetry), color (compared against master stones under controlled lighting), and clarity (inclusion
          mapping under magnification). Colored gemstones are evaluated for species, color saturation, treatments, and carat weight.
          Metal type and karat are confirmed by X-ray fluorescence (XRF). The final report includes a detailed description and
          the appraised replacement value. Updated appraisals are recommended every 3–5 years to reflect current market values.
        </p>
      </div>

      {/* Feature Tags Sections */}
      <div className="tags-section">
        <h2 className="section-title">What This Service Includes</h2>
        <div className="tags-flex">
          <span className="pill-tag">Examination under gemological microscope</span>
          <span className="pill-tag">Diamond grading: carat, cut, color, clarity</span>
          <span className="pill-tag">Metal testing by XRF</span>
          <span className="pill-tag">High-resolution photography from multiple angles</span>
          <span className="pill-tag">Written appraisal report with replacement value</span>
        </div>
      </div>

      <div className="tags-section">
        <h2 className="section-title">Signs This Service May Be Needed</h2>
        <div className="tags-flex">
          <span className="pill-tag">Insurance coverage for jewelry</span>
          <span className="pill-tag">Estate planning or settlement</span>
          <span className="pill-tag">Jewelry resale documentation</span>
          <span className="pill-tag">Inherited piece without paperwork</span>
          <span className="pill-tag">Divorce or legal proceedings</span>
          <span className="pill-tag">Updated valuation (over 3 years since last appraisal)</span>
          <span className="pill-tag">Personal asset documentation</span>
        </div>
      </div>

      <div className="tags-section">
        <h2 className="section-title">Common Jewelry Types</h2>
        <div className="tags-flex">
          <span className="pill-tag">Engagement Rings</span>
          <span className="pill-tag">Diamond Jewelry</span>
          <span className="pill-tag">Gemstone Jewelry</span>
          <span className="pill-tag">Wedding Bands</span>
          <span className="pill-tag">Luxury Watches</span>
          <span className="pill-tag">Antique Jewelry</span>
          <span className="pill-tag">Heirloom Jewelry</span>
          <span className="pill-tag">Estate Jewelry</span>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="accordion">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`accordion-item ${openFaq === index ? 'expanded' : ''}`}
            >
              <button
                type="button"
                className="accordion-header"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.q}</span>
                <svg
                  className={`chevron ${openFaq === index ? 'rotate' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openFaq === index && (
                <div className="accordion-body">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}