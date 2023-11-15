export const IMG_CDN_URL =
	"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// export const FETCH_RESTAURANTS =
// 	"https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// export const FETCH_RESTAURANT_DETAILS =
// 	"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=";


//Cors fixed
export const FETCH_RESTAURANTS =
	"https://corsproxy.io/?" +
	encodeURIComponent(
		"https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
	);
export const FETCH_RESTAURANT_DETAILS =
	"https://corsproxy.io/?" +
	encodeURIComponent(
		"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId="
	);
