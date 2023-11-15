import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			"/restaurants": {
				target: "https://www.swiggy.com/dapi/restaurants/list/v5",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/restaurants/, ""),
			},
			"/menu": {
				target: "https://www.swiggy.com/dapi/menu/pl",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/menu/, ""),
			},
		},
	},
	plugins: [react()],
});
