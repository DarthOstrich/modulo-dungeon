import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const chapter = await import(`../../../chapters/${params.slug}.md`)

		return {
			content: chapter.default,
			meta: chapter.metadata
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}
