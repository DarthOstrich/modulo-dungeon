import { mdsvex } from "mdsvex";
import netlify from "@sveltejs/adapter-netlify";
import mdsvexConfig from "./mdsvex.config.js";
/** @type {import('@sveltejs/kit').Config} */
const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],
    kit: {
    adapter: netlify(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},

    preprocess: [mdsvex(mdsvexConfig)]
};

export default config;
