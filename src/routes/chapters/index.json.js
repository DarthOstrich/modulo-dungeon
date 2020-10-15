import chapters from "./_chapters.js";

const contents = JSON.stringify(
  chapters.map(chapter => {
    return {
      chapterNum: chapter.chapterNum,
      title: chapter.title,
      slug: chapter.slug,
      img: chapter.img
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
