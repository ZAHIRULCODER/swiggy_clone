const CORSPROXY =
   "https://api.scraperapi.com/?api_key=c72460abbe47a87e7e71798af15c0915&url=";

export const IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`;

//Cors fixed
export const FETCH_RESTAURANTS =
   CORSPROXY +
   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const FETCH_RESTAURANT_DETAILS =
   CORSPROXY +
   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001";
