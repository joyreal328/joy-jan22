import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

// export default config;


export default {

	preprocess: [
		mdsvex({
		  extensions: ['.md'],
		  layout: {
			blog: 'src/routes/blog/post.svelte'
		  },
		})
	  ],
	
	  extensions: ['.svelte', '.md'], // Add this
	
	  kit: {
		adapter: adapter()
	  }


	

	  

};