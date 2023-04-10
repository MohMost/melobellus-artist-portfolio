import classes from "./Gallery.module.css";
import Masonry from "react-masonry-css";
import Modal from "./ImageModal";
import Carousel from "./Carousel";
import { useEffect, useState, useRef, Suspense } from "react";
import { storage } from "./utils/firebase-config";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { color } from "framer-motion";
import Images from "./utils/Images";
export default function Gallery() {
  const dataFetchedRef = useRef(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [imagesAreDisplayed, setImagesAreDisplayed] = useState<any>([]);

  const breakpointColumnsObj = {
    default: 4,
    1300: 3,
    1100: 2,
    700: 1,
  };

  function showHandler(e: any) {
    setModalVisible(true);
    const clickedIndex: any = e.target.getAttribute("src");
    setIndex(clickedIndex);
    document.body.classList.toggle("no-scroll");
  }

  function hideHandler(e: any) {
    e.stopPropagation();
    setModalVisible(false);
    document.body.classList.toggle("no-scroll");
  }
  return (
    <div id="gallery" className={classes.gallery}>
      <div className={classes.title_container}>
        <img src="./star.svg" alt="" />
        <h2 className={classes.title}>Gallery</h2>
        <img src="./star.svg" alt="" />
      </div>

      {modalVisible && (
        <Modal onClose={hideHandler}>
          <Carousel currentNum={index} />
        </Modal>
      )}

      <Suspense
        fallback={<img className={classes.loading} src="/loading.svg" />}
      >
        <Images clickEvent={showHandler} />
      </Suspense>
    </div>
  );
}
