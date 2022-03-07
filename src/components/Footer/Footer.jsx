import React from "react";

import logoWhite from "../../assets/images/logo-white.png";
import linkedin from "../../assets/images/linkedin.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";

export const Footer = () => {
  const links = [
    {
      title: "Pages",
      data: ["Home", "Store", "About", "Contact"],
    },
    {
      title: "Preset Packs",
      data: ["Mirro Preset Pack Vol. 01", "Mirro Preset Pack Vol. 02", "Mirro Preset Pack Vol. 03", "Mirro Preset Pack Vol. 04"],
    },
    {
      title: "Utility Pages",
      data: ["Instruction", "Style guide", "Licenses", "Changelog", "404"],
    },
    {
      title: "Store Categories",
      data: ["Presets", "Prints"],
    },
    {
      title: "Business Areas",
      data: ["Wedding Photography", "Sports Photography", "Portrait Photography", "Architecture Photography", "Animal Photography", "Food Photography", "Nature Photography"],
    },
  ]



  return (
    <footer className="footer">
      <div className="container">
        <a href="#top" className="logo">
          <img src={logoWhite} alt="Logo" />
        </a>

        <div className="upper">
          <div className="footer__links">
            {links && links.map(({ title, data }, index) => {
              return (
                <div className="footer__link" key={index}>
                  <h4 className="link__title">{title}</h4>
                  <ul className="link__list">
                    {data && data.map((link, index2) =>
                      <li key={index2} className="list__item">
                        <a href="#top" className="list__link">{link}</a>
                      </li>
                    )}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="newsletter">
            <h4 className="link__title newsletter__title">Newsletter</h4>
            <p className=" newsletter__description">
              Subscribe to my newsletter where I share news about upcoming printings and preset sales.
            </p>
            <form className="form">
              <input type="email" placeholder="Email adress" className="subscribe__input" />
              <button className="subscribe__button">Submit</button>
            </form>
          </div>
        </div>

        <div className="lower">
          <div className="copyright">
            &copy; Mirro Photography, LLC. All rights reserved. Powered by Webflow
          </div>
          <ul className="social-media">
            <li className="social-media__item">
              <a href="#top" className="social-media__link">
                <img src={linkedin} alt="Linkedin" className="social-media__img" />
              </a>
            </li>
            <li className="social-media__item">
              <a href="#top" className="social-media__link">
                <img src={facebook} alt="Facebook" className="social-media__img" />
              </a>
            </li>
            <li className="social-media__item">
              <a href="#top" className="social-media__link">
                <img src={instagram} alt="Instagram" className="social-media__img" />
              </a>
            </li>
            <li className="social-media__item">
              <a href="#top" className="social-media__link">
                <img src={twitter} alt="Twitter" className="social-media__img" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}