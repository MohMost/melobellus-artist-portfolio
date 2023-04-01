import { useState, useEffect } from "react";
import classes from "./Carousel.module.css";

function Carousel({ onClose, currentNum }: any) {
  const [CurrentImage, setCurrentImage] = useState(currentNum);
  const imgUrls = [
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
  }, []);
  return (
    <div className={classes.carousel} onClick={onClose}>
      <svg
        className={classes.arrow}
        onClick={(e) => {
          e.stopPropagation();
          CurrentImage > 0
            ? setCurrentImage(CurrentImage - 1)
            : setCurrentImage(imgUrls.length - 1);
        }}
        width="30"
        height="auto"
        viewBox="0 0 50 99"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M46.9975 49.4975L46.9975 92.9594L3.53558 49.4975L46.9975 6.03554L46.9975 49.4975Z"
          fill="#21073C"
          stroke="#DEFFEB"
          strokeWidth="5"
        />
      </svg>
      <div className={classes.centerContainer}>
        <img
          className={classes.image}
          src={imgUrls[CurrentImage]}
          alt=""
          onClick={(e) => e.stopPropagation()}
        />
        <div className={classes.tracker} onClick={(e) => e.stopPropagation()}>
          {imgUrls.map((url) => {
            return (
              <div
                key={imgUrls.indexOf(url)}
                className={
                  imgUrls.indexOf(url) === CurrentImage
                    ? classes.point2
                    : classes.point
                }
              ></div>
            );
          })}
        </div>
      </div>

      <svg
        className={classes.arrow}
        onClick={(e) => {
          e.stopPropagation();
          CurrentImage < imgUrls.length - 1
            ? setCurrentImage(CurrentImage + 1)
            : setCurrentImage(0);
        }}
        width="30"
        height="auto"
        viewBox="0 0 50 99"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.99748 49.4975L2.99748 6.03554L46.4594 49.4975L2.99748 92.9594L2.99748 49.4975Z"
          fill="#21073C"
          stroke="#DEFFEB"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
}

export default Carousel;
