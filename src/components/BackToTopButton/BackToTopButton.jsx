import React, { useState } from "react";
import IconComponent from "../IconComponent/IconComponent";
import { Button } from "./styles";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const userScrolled = document.documentElement.scrollTop;
    const sizeInPx = 500;
    if (userScrolled > sizeInPx) {
      setVisible(true);
    } else if (userScrolled <= sizeInPx) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <IconComponent
        className={visible ? "active" : ""}
        onClick={scrollToTop}
        src="https://img.icons8.com/ios-filled/50/000000/circled-up.png"
      />
    </Button>
  );
};

export default BackToTopButton;
