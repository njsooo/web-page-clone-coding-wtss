import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/fonts/lg.ttf";
import "lightgallery/fonts/lg.woff";
import "lightgallery/fonts/lg.woff2";
import "lightgallery/images/loading.gif";
import "lightgallery/css/lightgallery-bundle.min.css";

(function initLightGallery() {
  lightGallery(document.querySelector(".lightgallery"), {
    plugins: [
      lgZoom,
      lgThumbnail
    ],
    speed: 500
  });
})();
