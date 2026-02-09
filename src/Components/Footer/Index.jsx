import React from "react";
import { Link } from "react-router-dom";
import IconLogo from "../../assets/Gallery/Icon/RasdLogo.png";

const MainFooter = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="section-container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row px-5">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <img
              src={IconLogo}
              alt="RASD Logo"
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-lg font-semibold text-foreground">RASD</span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>

            <Link
              to="/about"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 RASD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
