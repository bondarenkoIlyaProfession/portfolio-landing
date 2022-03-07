import React from "react";

import curvedLine from "../../assets/images/curved-line.png";
import wedding from "../../assets/images/services/wedding.png";
import sports from "../../assets/images/services/sports.png";
import portrait from "../../assets/images/services/portrait.png";
import architecture from "../../assets/images/services/architecture.png";
import animal from "../../assets/images/services/animal.png";
import food from "../../assets/images/services/food.png";
import nature from "../../assets/images/services/nature.png";

export const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services__info">
          <div className="services__info-inner">
            <div className="curved-line">
              <img src={curvedLine} alt="curved line" />
            </div>
            <h3 className="services__title">
              Services
            </h3>
            <div className="services__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </div>
          </div>
        </div>

        <ul className="services__list">
          <li className="services__list_item">
            <img src={wedding} alt="Icon" className="services__list_img" />
            <div className="services__list_title">Wedding Photography</div>
            <p className="services__list_description">
              Wedding photography is often called the bread and butter of photographers — but that doesn't mean it has to be boring. Quite the opposite!
            </p>
            <a href="#top" className="services__list_link">Read more</a>
          </li>
          <li className="services__list_item">
            <img src={sports} alt="Icon" className="services__list_img" />
            <div className="services__list_title">Sports Photography</div>
            <p className="services__list_description">
              Sports photography is awesome. Sitting on the sidelines with a massive telephoto allows me to get right into the action — I love shooting sports where there's a lot of explosive movement.
            </p>
            <a href="#top" className="services__list_link">Read more</a>
          </li>
          <li className="services__list_item">
            <img src={portrait} alt="Icon" className="services__list_img" />
            <div className="services__list_title">Portrait Photography</div>
            <p className="services__list_description">
              Who doesn't love portrait photography? I love being able to capture that expression, quirk, smile or whatever, that sort of defines a person.
            </p>
            <a href="#top" className="services__list_link">Read more</a>
          </li>
          <li className="services__list_item">
            <img src={architecture} alt="Icon" className="services__list_img" />
            <div className="services__list_title">Architecture Photography</div>
            <p className="services__list_description">
              The nice thing about shooting architecture (in my opinion) is that it's so easy to do. Seriously, just pick up your camera and get out there.
            </p>
            <a href="#top" className="services__list_link">Read more</a>
          </li>
          <li className="services__list_item">
            <img src={animal} alt="Icon" className="services__list_img" />
            <div className="services__list_title">Animal Photography</div>
            <p className="services__list_description">
              Whenever I'm travelling I always make sure to pack gear that allows me to capture the local wildlife. The eagle that takes flight in this picture is probably my most prized image.
            </p>
            <a href="#top" className="services__list_link">Read more</a>
          </li>
          <li className="services__list_item">
            <img src={food} alt="Icon" className="services__list_img" />
            <div className="services__list_title">Food Photography</div>
            <p className="services__list_description">
              I do food photography for blogs, restaurants, influencers, YouTube channels — but most importantly (if I manage to cook something that looks good) — I do food photography for myself.
            </p>
            <a href="#top" className="services__list_link">Read more</a>
          </li>
          <li className="services__list_item">
            <img src={nature} alt="Icon" className="services__list_img" />
            <div className="services__list_title">Nature Photography</div>
            <p className="services__list_description">
              Landscape photography just never gets old. Someone told me that those are the kinds of pictures you never look. Well, I don't agree.
            </p>
            <a href="#top" className="services__list_link">Read more</a>
          </li>
        </ul>
      </div>
    </section>
  )
}