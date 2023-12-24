import { json } from '@sveltejs/kit';
import type { Chapter } from '$lib/types';

async function getChapters() {
	let chapters: Chapter[] = []

	const paths = import.meta.glob('/src/chapters/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Chapter, 'slug'>
			const chapter = { ...metadata, slug } satisfies Chapter 
			chapter.published && chapters.push(chapter)
		}
	}

  // sort chapters by chapter.num
  chapters = chapters.sort((first, second) => first.num - second.num)

	return chapters
}

export async function GET() {
	const chapters = await getChapters()
	return json(chapters)
}
