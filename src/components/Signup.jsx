import React, { useState } from "react";
import "./signup.css";

function Signup() {
  const [accountType, setAccountType] = useState("personal");

  // Location Auto-fill States
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [country, setCountry] = useState("");
  const [isFetchingPin, setIsFetchingPin] = useState(false);
  const [pinError, setPinError] = useState("");

  // Pincode Handle Function
  const handlePincodeChange = async (e) => {
    // Sirf numbers allow karne ke liye
    const value = e.target.value.replace(/\D/g, "");
    setZipCode(value);

    // Jab 6 digits pure ho jayein, tab API call hogi
    if (value.length === 6) {
      setIsFetchingPin(true);
      setPinError("");
      try {
        const response = await fetch(`https://api.postalpincode.in/pincode/${value}`);
        const data = await response.json();

        if (data && data[0].Status === "Success") {
          const postOffice = data[0].PostOffice[0];
          setCity(postOffice.District);
          setStateName(postOffice.State);
          setCountry(postOffice.Country);
        } else {
          setPinError("Invalid Pincode. Please check again.");
          setCity("");
          setStateName("");
          setCountry("");
        }
      } catch (error) {
        setPinError("Failed to fetch location data.");
      } finally {
        setIsFetchingPin(false);
      }
    } else {
      // Agar user digits delete karta hai toh purana data clear ho jaye
      setCity("");
      setStateName("");
      setCountry("");
      setPinError("");
    }
  };

  return (
    <>
      {/* Yahan aapka existing Header component aayega */}
      <header className="placeholder-header">
        {/* <YourHeaderComponent /> */}
      </header>

      <div className="signup-wrapper">
        <div className={`signup-container ${accountType === "business" ? "business-mode" : ""}`}>
          
          {/* Top Notice (Only for Personal) */}
          {accountType === "personal" && (
            <div className="security-notice">
              <svg
                className="heart-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span>Your cart is securely reserved while you create your account.</span>
            </div>
          )}

          {/* Account Type Toggle */}
          <div className="account-toggle">
            <button
              className={`toggle-btn ${accountType === "personal" ? "active" : ""}`}
              onClick={() => setAccountType("personal")}
              type="button"
            >
              Personal
            </button>
            <button
              className={`toggle-btn ${accountType === "business" ? "active" : ""}`}
              onClick={() => setAccountType("business")}
              type="button"
            >
              Business
            </button>
          </div>

          {/* ================= PERSONAL FORM ================= */}
          {accountType === "personal" && (
            <>
              {/* Social Signup Buttons */}
              <div className="social-buttons">
                <button className="btn-social" type="button">
                  <svg className="social-icon" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Continue with Google
                </button>
                <button className="btn-social" type="button">
                  <svg className="social-icon" viewBox="0 0 21 21">
                    <path fill="#f25022" d="M1 1h9v9H1z" />
                    <path fill="#7fba00" d="M11 1h9v9h-9z" />
                    <path fill="#00a4ef" d="M1 11h9v9H1z" />
                    <path fill="#ffb900" d="M11 11h9v9h-9z" />
                  </svg>
                  Continue with Microsoft
                </button>
              </div>

              {/* Divider */}
              <div className="divider">
                <span>or</span>
              </div>

              {/* Personal Signup Form */}
              <form className="signup-form">
                <div className="input-grid grid-2">
                  <div className="input-group">
                    <label htmlFor="firstName">Legal First Name *</label>
                    <input type="text" id="firstName" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="lastName">Legal Last Name *</label>
                    <input type="text" id="lastName" required />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="preferredName">Preferred Name</label>
                  <input type="text" id="preferredName" />
                </div>

                <div className="input-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" required />
                </div>

                <div className="input-group">
                  <label htmlFor="password">Password *</label>
                  <input type="password" id="password" required />
                </div>

                <button type="submit" className="btn-submit">
                  Create account
                </button>
              </form>
            </>
          )}

          {/* ================= BUSINESS FORM ================= */}
          {accountType === "business" && (
            <>
              <p className="business-subtext">
                Use a company email address. After email confirmation you'll verify your phone and upload business documents.
              </p>

              <form className="signup-form">
                {/* Row 1 */}
                <div className="input-grid grid-3">
                  <div className="input-group">
                    <label htmlFor="busName">Legal Business Name *</label>
                    <input type="text" id="busName" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="tradeName">Trade Name (if applicable)</label>
                    <input type="text" id="tradeName" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="roleTitle">Role / Title *</label>
                    <input type="text" id="roleTitle" required />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="input-grid grid-3">
                  <div className="input-group">
                    <label htmlFor="busFirstName">Legal First Name *</label>
                    <input type="text" id="busFirstName" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="busLastName">Legal Last Name *</label>
                    <input type="text" id="busLastName" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="busEmail">Business Email *</label>
                    <input type="email" id="busEmail" required />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="input-grid grid-3">
                  <div className="input-group">
                    <label htmlFor="busPassword">Create Password *</label>
                    <input type="password" id="busPassword" required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="fax">Fax (optional)</label>
                    <input type="text" id="fax" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="ein">Federal Tax ID (EIN) *</label>
                    <input type="text" id="ein" required />
                  </div>
                </div>

                {/* Row 4 - Full Width Address */}
                <div className="input-group">
                  <label htmlFor="address">Street Address *</label>
                  <input type="text" id="address" required />
                </div>

                {/* Row 5 - Location Auto Fill Section */}
                <div className="input-grid grid-2">
                  <div className="input-group">
                    <label htmlFor="zip">ZIP / Pincode *</label>
                    <input 
                      type="text" 
                      id="zip" 
                      value={zipCode}
                      onChange={handlePincodeChange}
                      maxLength="6"
                      placeholder="Enter 6-digit Pincode"
                      required 
                    />
                    {isFetchingPin && <span style={{ fontSize: "11px", color: "#a26c58", marginTop: "4px" }}>Fetching location...</span>}
                    {pinError && <span style={{ fontSize: "11px", color: "#c53030", marginTop: "4px" }}>{pinError}</span>}
                  </div>
                  <div className="input-group">
                    <label htmlFor="country">Country *</label>
                    <input 
                      type="text" 
                      id="country" 
                      value={country} 
                      onChange={(e) => setCountry(e.target.value)} 
                      placeholder="Auto-filled"
                      readOnly={!!country} 
                      required 
                      style={{ opacity: country ? 0.8 : 1 }}
                    />
                  </div>
                </div>

                <div className="input-grid grid-2">
                  <div className="input-group">
                    <label htmlFor="city">City *</label>
                    <input 
                      type="text" 
                      id="city" 
                      value={city} 
                      onChange={(e) => setCity(e.target.value)} 
                      placeholder="Auto-filled"
                      readOnly={!!city} 
                      required 
                      style={{ opacity: city ? 0.8 : 1 }}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="state">State *</label>
                    <input 
                      type="text" 
                      id="state" 
                      value={stateName} 
                      onChange={(e) => setStateName(e.target.value)} 
                      placeholder="Auto-filled"
                      readOnly={!!stateName} 
                      required 
                      style={{ opacity: stateName ? 0.8 : 1 }}
                    />
                  </div>
                </div>

                {/* Row 6 */}
                <div className="input-group">
                  <label htmlFor="website">Company Website (optional)</label>
                  <input type="url" id="website" />
                </div>

                <button type="submit" className="btn-submit">
                  Create business account
                </button>
              </form>
            </>
          )}

          {/* ================= BACK TO LOGIN LINK ================= */}
          <p className="login-prompt">
            Already have an account? <a href="/login">Log in</a>
          </p>

        </div>
      </div>

      {/* Yahan aapka existing Footer component aayega */}
      <footer className="placeholder-footer">
        {/* <YourFooterComponent /> */}
      </footer>
    </>
  );
}

export default Signup;