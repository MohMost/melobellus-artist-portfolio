import classes from "./Gallery.module.css";
import Masonry from "react-masonry-css";
import Modal from "./Modal";
import Carousel from "./Carousel";
import { useState } from "react";

export default function Gallery() {
  const [modalVisible, setModalVisible] = useState(false);
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

  function showHandler(e: any) {
    setModalVisible(true);
    const clickedIndex: any = parseInt(e.target.getAttribute("alt"));
    setIndex(clickedIndex);
  }

  function hideHandler(e: any) {
    e.stopPropagation();
    setModalVisible(false);
  }
  return (
    <div id="gallery" className={classes.gallery}>
      <h2 className={classes.title}>Gallery</h2>
      {modalVisible && (
        <Modal onClose={hideHandler}>
          <Carousel currentNum={index} />
        </Modal>
      )}

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={classes.my_masonry_grid}
        columnClassName={classes.my_masonry_grid_column}
      >
        {imgUrls.map((imgUrl) => {
          return (
            <div className={classes.image_container} onClick={showHandler}>
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
