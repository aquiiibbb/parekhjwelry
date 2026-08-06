import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      {/* Yahan aapka existing Header component aayega */}
      <header className="placeholder-header">
        {/* <YourHeaderComponent /> */}
      </header>

      <div className="login-wrapper">
        <div className="login-container">
          
          {/* Top Notice */}
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
            <span>Your cart is securely saved while you sign in.</span>
          </div>

          <h2 className="login-title">Your jewelry care journey continues here.</h2>

          {/* Social Login Buttons */}
          <div className="social-buttons">
            <button className="btn-social">
              <svg className="social-icon" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
            <button className="btn-social">
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
            <span>or sign in with email</span>
          </div>

          {/* Login Form */}
          <form className="login-form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
              />
            </div>
            
            <div className="input-group">
              {/* Flex container for Label and Forgot Password link */}
              <div className="password-header">
                <label htmlFor="password">Password</label>
                <a href="/forgot-password" className="forgot-password">Forgot password?</a>
              </div>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="btn-submit">
              Sign In
            </button>
          </form>

          {/* Footer Link */}
          <p className="signup-prompt">
            New to Carat Works? <a href="/signup">Create an account</a>
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

export default Login;