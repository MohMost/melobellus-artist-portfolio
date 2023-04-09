import { useState, useEffect } from "react";
import classes from "./Carousel.module.css";

interface CarouselProps {
  currentNum: number;
}

function Carousel({ currentNum }: CarouselProps) {
  const [currentImage, setCurrentImage] = useState<any>(currentNum);
  const imgUrls: string[] = [
    "/2.png",
    "image.png",
    "/1.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/9.png",
    "/7.jpg",
    "/8.jpg",
    "/6.jpg",
    "/10.png",
  ];

  useEffect(() => {
    setCurrentImage(currentNum);
  }, [currentNum]);

  return (
    <div className={classes.carousel}>
      <img
        className={classes.image}
        src={imgUrls[currentImage]}
        alt=""
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default Carousel;
