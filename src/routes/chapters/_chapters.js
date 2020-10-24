// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
    num: "Prologue",
    title: "The Traveler",
    slug: "prologue-the-traveler",
    img: "Prologue-650.png",
    appleID: "1533876783",
    spotifyID: "2QmkVQgjxVnRWd9uM7kbbd",
    deezerID: "176531862",
    published: true,
    html: `
      <p>A crackling fire illuminated the interior of a tavern. It was filled with tables stacked with empty tankards. Every table was occupied. A wooden bar ran along the length of the back wall, the surface scarred with divots, each telling a different story of the person who carved it. Despite its pock-marked surface, it had been sanded smooth by decades of sliding glasses. Atop a stool, a woman sat alone.</p>
      <p>Her silver hair draped over a cloak the deep color of wine. She was loosely holding a frothy mug of mead in front of her. Her deep green eyes stared intently at one of the divots in the bar, lightly digging at it with the nail of her left index finger. It seemed deeper than the others, perhaps made by something much larger than a common hunting knife. The froth of the mead dripped down onto her scarred knuckles. Picking up her mug, she took a drink.</p>
      <p>Through the drunken murmurs of the patrons, she overheard a conversation between two men at the table behind her. The older of the two, a wry man with a patchy gray beard, was doing most of the talking. He was bumbling through a story about the abandoned castle up the road. He was simultaneously whispering and yelling. As he motioned for his friend to lean in closer he knocked over an empty tankard. It fell to the floor with a low thud.</p>
      <p>Through the slurred exchange, she caught the words treasure, dungeon and something about a glowing key.</p>
      <p>Marceline finished her drink, slid two silver coins on the bar, and nodded to the wrinkled man behind the bar. She stood up, her bones cracking, seemingly in sync with the nearby fire. As she walked past the table where the two men were sitting, her tattered cloak shifted behind her. Nestled deep inside, a small silver sword caught the torchlight and glimmered.</p>
      <p>She reached the door and grasped the knotted wooden handle. She glanced back at the table. The men were raising their glasses and stumbling to stand for a toast. As they began to sing, it was clear the castle had left their mind.</p>
      <p>As she opened the door, a light breeze layered with the smell of fresh rain caressed her stoic face.</p>
      <p>The door closed behind her, the noise of the tavern cutting to a muffled hum.</p>
		`
  },
  {
    num: "Chapter 1",
    title: "Drawbridge",
    slug: "chapter-one-drawbridge",
    img: "Prologue-650.png",
    appleID: "",
    spotifyID: "",
    deezerID: "",
    published: false,
    html: `
      <p>More to come...</p>
		`
  },
  {
    num: "Chapter 2",
    title: "To Battle!",
    slug: "chapter-two-to-battle",
    img: "Prologue-650.png",
    appleID: "",
    spotifyID: "",
    deezerID: "",
    published: false,
    html: `
      <p>More to come...</p>
		`
  }
];

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
