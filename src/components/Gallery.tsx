import classes from "./Gallery.module.css";
import Masonry from "react-masonry-css";
import Modal from "./Modal";
import Carousel from "./Carousel";
import { useState } from "react";

export default function Gallery() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [index, setIndex] = useState(null);
  const breakpointColumnsObj = {
    default: 4,
    1300: 3,
    1100: 2,
    700: 1,
  };

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

  function showModalHandler(e: any) {
    setModalIsVisible(true);
    const clickedIndex: any = parseInt(e.target.getAttribute("alt"));
    setIndex(clickedIndex);
  }

  function hideModalHandler(e: any) {
    e.stopPropagation();
    setModalIsVisible(false);
  }
  return (
    <div className={classes.gallery}>
      <h2 className={classes.title}>Gallery</h2>
      {modalIsVisible && (
        <Modal>
          <Carousel currentNum={index} onClose={hideModalHandler} />
        </Modal>
      )}

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={classes.my_masonry_grid}
        columnClassName={classes.my_masonry_grid_column}
      >
        {imgUrls.map((imgUrl) => {
          return (
            <div className={classes.image_container} onClick={showModalHandler}>
              <img
                key={imgUrls.indexOf(imgUrl)}
                className={classes.art}
                width="100%"
                src={imgUrl}
                alt={`${imgUrls.indexOf(imgUrl)}`}
              />
            </div>
          );
        })}
      </Masonry>
    </div>
  );
}
