import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ServiceDetail.css';
import servicesData from '../data/servicesData';
import work from '../assest/work.png';

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData[slug];

  const [option, setOption] = useState('a');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  if (!service) {
    return (
      <div className="appraisal-container">
        <nav className="back-nav">
          <a href="#services" className="back-link" onClick={(e) => { e.preventDefault(); navigate('/services'); }}>
            &lsaquo; All services
          </a>
        </nav>
        <p>Sorry, we couldn't find that service.</p>
      </div>
    );
  }

  const {
    name,
    price,
    turnaround,
    image,
    optionA,
    optionB,
    description,
    includes,
    signs,
    types,
    faqs,
  } = service;

  return (
    <div className="appraisal-container">
      {/* Import Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,500&family=Montserrat:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Top Header / Back Link */}
      <nav className="back-nav">
        <a
          href="#services"
          className="back-link"
          onClick={(e) => {
            e.preventDefault();
            navigate('/services');
          }}
        >
          &lsaquo; All services
        </a>
      </nav>

      {/* Main Hero Form Section */}
      <div className="appraisal-hero-grid">
        {/* Left Side: Image Showcase */}
        <div className="image-card">
          <img
            src={image || work}
            alt={name}
            className="showcase-img"
          />
        </div>

        {/* Right Side: Configuration Form */}
        <div className="form-card">
          {/* Option Selection */}
          <div className="form-field">
            <label className="field-label">
              Service Option<span className="required">*</span>
            </label>
            <div className="provider-options">
              <button
                type="button"
                className={`provider-btn ${option === 'a' ? 'active' : ''}`}
                onClick={() => setOption('a')}
              >
                <span className="btn-title">{optionA.title}</span>
                <span className="btn-subtitle">{optionA.subtitle}</span>
              </button>

              <button
                type="button"
                className={`provider-btn ${option === 'b' ? 'active' : ''}`}
                onClick={() => setOption('b')}
              >
                <span className="btn-title">{optionB.title}</span>
                <span className="btn-subtitle">{optionB.subtitle}</span>
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
                {types.map((t) => (
                  <option key={t} value={t.toLowerCase().replace(/\s+/g, '-')}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Name Field */}
          <div className="form-field">
            <label className="field-label">
              Name (Full Legal Name)<span className="required">*</span>
            </label>
            <input type="text" className="text-input" placeholder="" />
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
            <h1 className="product-title">{name}</h1>
            <span className="price-tag">{price}</span>
          </div>
          <p className="turnaround-time">Estimated turnaround: {turnaround}</p>
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
        {description.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Feature Tags Sections */}
      <div className="tags-section">
        <h2 className="section-title">What This Service Includes</h2>
        <div className="tags-flex">
          {includes.map((tag) => (
            <span className="pill-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="tags-section">
        <h2 className="section-title">Signs This Service May Be Needed</h2>
        <div className="tags-flex">
          {signs.map((tag) => (
            <span className="pill-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="tags-section">
        <h2 className="section-title">Common Jewelry Types</h2>
        <div className="tags-flex">
          {types.map((tag) => (
            <span className="pill-tag" key={tag}>
              {tag}
            </span>
          ))}
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
