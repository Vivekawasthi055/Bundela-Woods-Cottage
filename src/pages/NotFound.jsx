import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-page">
      <Helmet>
        <title>Page Not Found | Bundela Woods Cottage</title>
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist. Return to Bundela Woods Cottage homepage."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* HERO */}
      <section className="notfound-hero">
        <div className="notfound-overlay"></div>
        <div className="notfound-content">
          <h1 className="fade-in-up">404</h1>
          <h2 className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            Page Not Found
          </h2>
          <p className="fade-in-up" style={{ animationDelay: "0.4s" }}>
            Oops! The page you’re looking for doesn’t exist or has been moved.
          </p>

          <div
            className="notfound-actions fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Link to="/" className="btn btn-gold">
              Go to Hotel Homepage
            </Link>

            <Link to="/contact" className="btn btn-primary">
              Contact Hotel
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
