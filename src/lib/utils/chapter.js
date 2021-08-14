export const CHAPTER_PATH = 'src/routes';

export const getChapters = () => {
	const data = [
		{
			published: true,
			chapter: 1,
			title: 'Chapter 1',
			date: '1 jul',
			permalink: 'chapter-01'
		}
	];

	return data;
};
