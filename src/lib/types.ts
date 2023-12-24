export type Categories = 'sveltekit' | 'svelte';

export type Chapter = {
  chapter: string;
  num: number;
  title: string;
  slug: string;
  img: string;
  appleID: string;
  spotifyID: string;
  deezerID: string;
  published: boolean;
  date: string;
  next: string;
  prev: string;
}
