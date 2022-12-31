import { useState, useEffect } from "react";
import "./ScrollToTop.scss";

const ScrollToTop = ({ ScrollRef, BackgroundRef }: any) => {
  const [butTop, setButTop] = useState(false);

  useEffect(() => {
    let localRef = BackgroundRef.current;
    const func = () => {
      const rect = ScrollRef.current.getBoundingClientRect();
      if (rect.top < -300) {
        setButTop(true);
      } else {
        setButTop(false);
      }
    };

    localRef.addEventListener("scroll", func);
    return () => localRef.removeEventListener("scroll", func);
  }, [BackgroundRef, ScrollRef]);

  const ToTop = () => {
    BackgroundRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {butTop && (
        <button className="ScrollTop" onClick={ToTop}>
          <div className="arrow"></div>
          <div className="arrow"></div>
        </button>
      )}
    </>
  );
};
export default ScrollToTop;
