import React from "react";
import { StyledFooter } from "./style";
import Icons from "../Icons";
import facebookIcon from "@/assets/images/icons/facebook.png";
import instagramIcon from "@/assets/images/icons/instagram.png";
import yelp from "@/assets/images/yelp-brands-solid.svg";

import settings from "content/settings/settings.json";
import Typography from "../Typography";
const Footer = () => {
  const { footer_text = "© Himalayan Sherpa Kitchen 2024" } = settings || {};
  return (
    <StyledFooter id="footer">
      <ul className="social-icons-list">
        <li>
          <a
            href="https://www.facebook.com/HimalayanSherpaKitchen/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon alt fa-facebook"
          >
            <Icons icon={facebookIcon} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/sthelenasherpa"
            target="_blank"
            rel="noopener noreferrer"
            className="icon alt fa-instagram"
          >
            <Icons icon={instagramIcon} />
          </a>
        </li>
        <li>
          <a
            href="https://www.yelp.com/biz/st-helena-sherpa-kitchen-st-helena"
            target="_blank"
            rel="noopener noreferrer"
            className="icon alt fa-yelp"
          >
            <Icons icon={yelp} />
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>
          <Typography as="subtitle2">{footer_text}</Typography>
        </li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;
