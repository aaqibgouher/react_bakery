import React from "react";
import Header from "./components/Header";
import First from "./components/First";
import IconComponent from "./components/IconComponent";
import AboutComponent from "./components/AboutComponent";
import ProductsComponent from "./components/ProductsComponent";
import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";
import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <First></First>
      <IconComponent></IconComponent>
      <AboutComponent></AboutComponent>
      <ProductsComponent></ProductsComponent>
      <ContactComponent></ContactComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
