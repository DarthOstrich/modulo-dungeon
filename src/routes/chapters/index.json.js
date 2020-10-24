import chapters from "./_chapters.js";

const contents = JSON.stringify(
  chapters.map(chapter => {
    return {
      ...chapter
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
