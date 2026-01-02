import React from "react";
import '../assets/Footer.css';
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";

function Footer() {
  return (
    <footer className="footer">
      <p className="presentation">Jawad © Sara</p>

      <div className="social-icons">
        <a
          href="https://wa.me/+96181087161"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
        </a>

        <a
          href="https://instagram.com/ajami-jawad"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>

        <a
          href="mailto:jawadajami26@gmail.com"
          aria-label="Email"
        >
          <MailIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
