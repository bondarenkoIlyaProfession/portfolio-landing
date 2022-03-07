import React from "react";

import curvedLine from "../../assets/images/curved-line.png";
import vol01 from "../../assets/images/preset-store/vol01.png";
import vol02 from "../../assets/images/preset-store/vol02.png";
import vol03 from "../../assets/images/preset-store/vol03.png";

export const PresetStore = () => {
  return (
    <section className="preset-store">
      <div className="container">
        <div className="preset-store__info">
          <div className="preset-store__info-inner">
            <div className="curved-line">
              <img src={curvedLine} alt="curved line" />
            </div>
            <h3 className="preset-store__title">
              Preset Store
            </h3>
            <div className="preset-store__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </div>
          </div>
        </div>

        <ul className="preset-store__list">
          <li className="preset-store__item">
            <img src={vol01} alt="Pack Vol. 01" className="preset-store__item_img" />
            <div className="preset-store__item_title">Mirro Preset Pack Vol. 01</div>
            <p className="preset-store__item_description">
              The first volume is my go-to presets when shooting action sports. Just the right amount of contrast and highlights to make your photo (literally) pop!
            </p>
          </li>
          <li className="preset-store__item">
            <img src={vol02} alt="Pack Vol. 02" className="preset-store__item_img" />
            <div className="preset-store__item_title">Mirro Preset Pack Vol. 02</div>
            <p className="preset-store__item_description">
              Vol. 02 is dedicated solely to landscape photography. Pay attention to your exposure while out there and these presets will make your photos look great.
            </p>
          </li>
          <li className="preset-store__item">
            <img src={vol03} alt="Pack Vol. 03" className="preset-store__item_img" />
            <div className="preset-store__item_title">Mirro Preset Pack Vol. 03</div>
            <p className="preset-store__item_description">
              These are a collection of my most used wedding presets — use with caution as you'll end up loving wedding photography.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}