import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import images from "./images";

const App = () => {
  const slideVariants = {
    hiddenRight: {
      height: 170,
      width: 305,
      x: "40%",
      opacity: 0,
    },
    hiddenLeft: {
      height: 170,
      width: 305,
      x: "-40%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      height: 300,
      width: 500,
      transition: {
        duration: 0.75,
      },
    },
  };

  const [imgIndex, setImgIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleBack = () => {
    setDirection("left");
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    } else {
      setImgIndex(images.length - 1);
    }
  };

  const handleForward = () => {
    setDirection("right");
    if (imgIndex < images.length - 1) {
      setImgIndex(imgIndex + 1);
    } else {
      setImgIndex(0);
    }
  };

  return (
    <div>
      <h1>Attack on Titan Carousel</h1>
      <div className="carousel-container">
        <button onClick={handleBack}>
          <i className="fa fa-angle-left"></i>
        </button>
        <img
          src={imgIndex > 0 ? images[imgIndex - 1] : images[images.length - 1]}
          height={150}
          width={270}
          className="inactive-item"
        />
        <AnimatePresence>
          <motion.img
            key={imgIndex}
            src={images[imgIndex]}
            width={500}
            height={300}
            objectFit="fill"
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            variants={slideVariants}
          />
        </AnimatePresence>
        <img
          src={imgIndex < images.length - 1 ? images[imgIndex + 1] : images[0]}
          height={150}
          width={270}
          className="inactive-item"
        />
        <button onClick={handleForward}>
          <i className="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default App;
