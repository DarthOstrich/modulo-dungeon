import { basename } from 'path';
import pMap from "p-map"

export async function get() {
	// Import all .svx files in the directory
	const modules = import.meta.glob('./*.svx');

  const chapters = await pMap(
		Object.entries(modules),
		async function ([filename, module]) {
			// Import the component. The metadata here is added by MDSveX and mirrors
			// the front matter.
			const { metadata } = await module()

			return {
        num: metadata.num,
        chapter: metadata.chapter,
        img: metadata.img, 
        appleID: metadata.appleID,
        spotifyID: metadata.spotifyID,
        deezerID: metadata.deezerID, 
        published: metadata.published, 
        next: metadata.next, 
				title: metadata.title,
				date: new Date(metadata.date),
				slug: basename(filename, ".svx") // Generate a slug we can link to
			}
		}
	)

	// Sort posts by descending date
	chapters.sort((a, b) => (a.num > b.num ? 1 : -1))

	return {
		body: { chapters }
	};
}
