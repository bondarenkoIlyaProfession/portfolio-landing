import React from "react";

import portrait from "../../assets/images/portrait.png";

export const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="home__text">
          <h1 className="home__title">
            Hi, I'm James Mirro & I'm a photographer.
          </h1>
          <div className="home__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
          </div>
          <a href="#top" className="home__link">Read more</a>
        </div>

        <div className="home__image">
          <img src={portrait} alt="Portrait" />
        </div>
      </div>
    </section>
  )
}