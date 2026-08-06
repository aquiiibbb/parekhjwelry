import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgetPassword.css";

function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); 
  
  const navigate = useNavigate();

  // ==========================================
  // Step 1: Send OTP (Strict Real Logic)
  // ==========================================
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError(""); 
    
    try {
      // REPLACE WITH YOUR ACTUAL API ENDPOINT
      const response = await fetch('https://your-api-domain.com/api/auth/send-otp', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }) 
      });
      
      const data = await response.json();
      
      // Strict Check: Agar API success degi tabhi Step 2 par jayega
      if (response.ok && data.success) {
        setStep(2); 
      } else {
        setError(data.message || "Failed to send OTP. Please check your email.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  // ==========================================
  // Step 2: Verify OTP (Strict Real Logic)
  // ==========================================
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      // REPLACE WITH YOUR ACTUAL API ENDPOINT
      const response = await fetch('https://your-api-domain.com/api/auth/verify-otp', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }) 
      });

      const data = await response.json();

      // STRICT CHECK: Jab tak backend success nahi dega, Step 3 nahi khulega!
      if (response.ok && data.success) {
        setStep(3); // Real OTP verified successfully
      } else {
        // Galat number dalne par yahi block ho jayega
        setError(data.message || "Invalid OTP. Please enter the correct code.");
        return; // Code aage badhne se rok dega
      }
    } catch (err) {
      setError("Network error. Failed to verify OTP.");
      return;
    }
  };

  // ==========================================
  // Step 3: Reset Password (Strict Real Logic)
  // ==========================================
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      // REPLACE WITH YOUR ACTUAL API ENDPOINT
      const response = await fetch('https://your-api-domain.com/api/auth/reset-password', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp, newPassword }) 
      });
      
      const data = await response.json();

      if (response.ok && data.success) {
        navigate("/login"); // Password change successful
      } else {
        setError(data.message || "Failed to reset password.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <>
      <header className="placeholder-header">
        {/* <YourHeaderComponent /> */}
      </header>

      <div className="forgot-password-wrapper">
        <div className="forgot-password-container">
          
          <div className="security-notice">
            <svg
              className="lock-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>Secure password reset process.</span>
          </div>

          {/* Error Message Display */}
          {error && <div className="error-message">{error}</div>}

          {/* ================= STEP 1 UI ================= */}
          {step === 1 && (
            <div className="step-content">
              <h2 className="form-title">Reset your password</h2>
              <p className="form-subtitle">Enter your email address and we'll send you a code to reset your password.</p>
              
              <form className="auth-form" onSubmit={handleSendOtp}>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn-submit">
                  Send OTP
                </button>
              </form>
            </div>
          )}

          {/* ================= STEP 2 UI ================= */}
          {step === 2 && (
            <div className="step-content">
              <h2 className="form-title">Verify OTP</h2>
              <p className="form-subtitle">We have sent a verification code to <strong>{email}</strong></p>
              
              <form className="auth-form" onSubmit={handleVerifyOtp}>
                <div className="input-group">
                  <label htmlFor="otp">Enter 6-digit OTP</label>
                  <input
                    type="text"
                    id="otp"
                    placeholder="123456"
                    maxLength="6"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn-submit">
                  Verify OTP
                </button>
              </form>
              <p className="resend-prompt">
                Didn't receive the code? <button type="button" className="btn-link" onClick={handleSendOtp}>Resend OTP</button>
              </p>
            </div>
          )}

          {/* ================= STEP 3 UI ================= */}
          {step === 3 && (
            <div className="step-content">
              <h2 className="form-title">Create new password</h2>
              <p className="form-subtitle">Your new password must be different from previous used passwords.</p>
              
              <form className="auth-form" onSubmit={handleResetPassword}>
                <div className="input-group">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn-submit">
                  Reset Password & Login
                </button>
              </form>
            </div>
          )}

          <div className="back-to-login">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <a href="/login">Back to log in</a>
          </div>

        </div>
      </div>

      <footer className="placeholder-footer">
        {/* <YourFooterComponent /> */}
      </footer>
    </>
  );
}

export default ForgotPassword;