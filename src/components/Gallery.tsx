import classes from "./Gallery.module.css";
import Grid from "@mui/material/Grid";
import Masonry from "react-masonry-css";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
export default function BlogList() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={classes.my_masonry_grid}
        columnClassName={classes.my_masonry_grid_column}
      >
        <div>
          <a href="">
            <img className={classes.art} width="100%" src="/4.jpg" alt="" />
          </a>
        </div>
        <div>
          <a href="">
            <img className={classes.art} width="100%" src="/2.png" alt="" />
          </a>
        </div>
        <div>
          <a href="">
            <img className={classes.art} width="100%" src="/3.jpg" alt="" />
          </a>
        </div>
        <div>
          <a href="">
            <img className={classes.art} width="100%" src="/1.png" alt="" />
          </a>
        </div>
        <div>
          <a href="">
            <img className={classes.art} width="100%" src="/5.jpg" alt="" />
          </a>
        </div>
        <div>
          <a href="">
            <img className={classes.art} width="100%" src="/6.jpg" alt="" />
          </a>
        </div>
        <div>
          <a href="">
            <img className={classes.art} width="100%" src="/7.jpg" alt="" />
          </a>
        </div>
        <div>
          <a href="">
            <img className={classes.art} width="100%" src="/8.jpg" alt="" />
          </a>
        </div>
        <div>
          <a href="">
            <img className={classes.art} width="100%" src="/9.png" alt="" />
          </a>
        </div>
      </Masonry>
    </div>
  );
}
