import React from "react";

import "./scss/styles.scss";

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Services } from "./components/Services/Services";
import { PresetStore } from "./components/PresetStore/PresetStore";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <PresetStore />
      <Contact />
      <Footer />
    </>
  )
}