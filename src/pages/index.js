import * as React from "react"
import Header from "../components/header/header"
import "./global.css"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import { useRef, useEffect, useState } from 'react'


const IndexPage = () => {

  const mainStyle = {
    overflowX: "auto",
    display: "flex",
    top: "0",
  };


  const sectionStyle = {
    minWidth: "50vw",
    maxWidth: "50vw",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4ch",
  };

  const sectionStyleEven = {
    minWidth: "50vw",
    maxWidth: "50vw",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4ch",
    backgroundColor: "teal",
    color: "white",
  };

  const ref = useRef();
  const refYPosition = useRefYPosition(ref);
  const refYOffset = useRefYOffset(ref);

  console.log(refYOffset);

  function useRefYOffset(ref) {
    const [yOffset, setYOffset] = useState(-1);

    useEffect(() => {
      if (ref.current) {
        setYOffset(ref.current.getBoundingClientRect().top + window.scrollY);
      }
      return;
    }, []);

    return yOffset;
  }


  useEffect(() => {
    if (refYPosition <= 0) {


    }
    return;
  }, [refYPosition]);

  function useRefYPosition(ref) {
    const [topPosition, setTopPosition] = useState(1);


    useEffect(() => {
      if (ref.current) {
        setTopPosition(ref.current.getBoundingClientRect().top);
      }

      const wheelHandler = e => {
        setTopPosition(ref.current.getBoundingClientRect().top);
      }

      window.addEventListener("wheel", wheelHandler)

      return () => {
        window.removeEventListener("wheel", wheelHandler)
      }
    }, [ref]);

    return topPosition;
  }


  useEffect(() => {
    if (ref.current) {


      /*const wheelHandler = e => {
        const containerInViewPort = () => {
          const rect = el.getBoundingClientRect();
          var r = rect.top <= 0;
          console.log(r);
          return r;
        };
  
        
  
        if (!containerInViewPort()) {
          return;
        }
  
  
        window.scrollTo({
          top: window.scrollTop,
          left: 0,
        });
  
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
        });
      }
  
      el.addEventListener("wheel", wheelHandler);
      return () => el.removeEventListener("wheel", wheelHandler);*/
    }
  }, []);


  return (
    <main>
      <Navbar />
      <Header />
      <Footer />

      <div style={mainStyle} ref={ref}>
        <section style={sectionStyle}>
          <h1>Beep</h1>
        </section>
        <section style={sectionStyleEven}>
          <h1>Boop</h1>
        </section>
        <section style={sectionStyle}>
          <h1>The End</h1>
        </section>
      </div>

      <Footer />
      <Footer />
      <Footer />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Jan Wermeckes | Software-Entwickler</title>


/**
* By Alvaro Trigo 
* Follow me on Twitter: https://twitter.com/imac2
*/
function lol() {
  document.querySelectorAll('.sticky-container').forEach(function (container) {
    const stikyContainerHeight = container.querySelector('main').scrollWidth;
    container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
  });

  window.addEventListener("wheel", wheelHandler);


  function wheelHandler(evt) {
    const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function (container) {
      const rect = container.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    })[0];

    if (!containerInViewPort) {
      return;
    }

    var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
    var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
    let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

    if (g_canScrollHorizontally) {
      containerInViewPort.querySelector('main').scrollLeft += evt.deltaY;
    }
  }
}