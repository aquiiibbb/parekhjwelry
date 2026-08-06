import React, { useState } from 'react';
import './customservice.css';

export default function CustomService() {
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ description, email, phone });
  };

  return (
    <div className="custom-service-container">
      {/* Google Fonts link */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,500&family=Montserrat:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <header className="custom-service-header">
        <h1 className="main-title">
          Custom jewelry design and fabrication
        </h1>
        <p className="subtitle">
          Describe your project — custom design, complex repair, multi-service work, or anything not
          covered by our standard catalog. Attach photos, sketches, or reference images. We review
          and respond with a scope and quote within one business day.
        </p>
      </header>

      <form className="custom-service-form" onSubmit={handleSubmit}>
        {/* Describe Request Section */}
        <div className="form-card">
          <label className="card-label" htmlFor="request-description">
            Describe your request
          </label>
          <textarea
            id="request-description"
            className="request-textarea"
            rows={7}
            placeholder="What kind of work does your piece need? Include any details about the jewelry type, condition, material, or specific outcome you're looking for..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Attachments Section */}
        <div className="form-card">
          <h2 className="card-title">Attachments</h2>
          <p className="card-description">
            Capture or upload images, video, or audio to help us assess your piece accurately.
          </p>

          <div className="attachments-grid">
            <button type="button" className="attachment-tile">
              <svg className="attachment-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2v11z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              <span>Take photo</span>
            </button>

            <button type="button" className="attachment-tile">
              <svg className="attachment-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span>Upload images</span>
            </button>

            <button type="button" className="attachment-tile">
              <svg className="attachment-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
              <span>Record / upload video</span>
            </button>

            <button type="button" className="attachment-tile">
              <svg className="attachment-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </svg>
              <span>Record audio</span>
            </button>

            <button type="button" className="attachment-tile">
              <svg className="attachment-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
              <span>Upload audio</span>
            </button>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="form-card">
          <h2 className="card-title">Contact information</h2>
          <p className="card-description">
            Provide at least one so we can reach you about your request.
          </p>

          <div className="contact-fields">
            <div className="input-group">
              <label htmlFor="email-input">Email</label>
              <input
                id="email-input"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="phone-input">Phone</label>
              <input
                id="phone-input"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Submit Section */}
        <div className="submit-section">
          <button type="submit" className="submit-button">
            Send request
          </button>
          <span className="submit-note">
            Our team will review your request and respond within one business day.
          </span>
        </div>
      </form>
    </div>
  );
}