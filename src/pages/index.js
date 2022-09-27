import * as React from "react"
import Header from "../components/header/header"
import "./global.css"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"


const IndexPage = () => {

  return (
    <main>
      <Navbar />
      <Header />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Jan Wermeckes | Portfolio</title>

/**
 * import React from "react";
import ReactDOM from "react-dom";
import HorizontalScroll from "react-scroll-horizontal";

import "./styles.css";

const cards = [...new Array(10)].map((x, i) => ({
  name: `card ${i}`,
  img: "https://source.unsplash.com/random"
}));

function App() {
  return (
    <HorizontalScroll
      pageLock={true}
      reverseScroll={true}
      style={{ width: `60em`, height: `1000px` }}
      //config        = {{ stiffness: int, damping: int }}
      //className     = { string }
      //animValues    = { int }
    >
      {cards.map(card => (
        <div style={{ width: "500px", height: "500px", background: "red" }}>
          <img src={card.img} alt="" />
          <p>{card.name}</p>
        </div>
      ))}
    </HorizontalScroll>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

 */