import type { Chapter } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('../api/chapters')
	const chapters: Chapter[] = await response.json()
  console.log(chapters)
	return { chapters }
}
