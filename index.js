const express = require('express');
const cors = require('cors');
const app = express();

const bonusImages = [
	{
		path: "https://peach.blender.org/wp-content/uploads/storyboardplate1.JPG",
		description: "Storyboard",
	},
	{
		path: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
		description: "Poster",
	}
];

const castBunny = (sceneId) => ({
	id: 0,
	description: "Le lapin",
	name: "Big Buck Bunny",
	image: `./images/characters/Bunny${sceneId}.png`,
});

const castFrank = (sceneId) => ({
	id: 1,
	description: "L'écureuil volant",
	name: "Frank",
	image: `./images/characters/Joe${sceneId}.png`,
});

const castRinky = (sceneId) => ({
	id: 2,
	description: "L'écureuil rouge",
	name: "Rinky",
	image: `./images/characters/Alfred${sceneId}.png`,
});

const castGimerra = (sceneId) => ({
	id: 3,
	description: "Le chinchilla",
	name: "Gimerra",
	image: `./images/characters/Chichi${sceneId}.png`,
});

const castBird = (sceneId) => ({
	id: 4,
	description: "L'oiseau",
	name: "Bird",
	image: `./images/characters/oiseau${sceneId}.png`,
});


const scenes = [
	{
		id: 0,
		title: "Génerique",
		casting: [castBird(1)],
		image: "./images/scenes/scene1",
		beginTimecode: 0,
		endTimecode: 30,
	},
	{
		id: 1,
		title: "Le réveil de Bunny",
		casting: [castBunny(2), castFrank(2)],
		image: "./images/scenes/scene2",
		reactions: [
			{
				name: "Jean",
				message: "Je me réveille pareil",
				timecode: 50,
			}
		],
		beginTimecode: 31,
		endTimecode: 73,
	},
	{
		id: 2,
		title: "La chute du papillon",
		casting: [castBunny(3), castFrank(3)],
		image: "./images/scenes/scene3",
		reactions: [
			{
				name: "Eve",
				message: "C'est la pomme d'Adam",
				timecode: 85,
			},
			{
				name: "Jack",
				message: "Choqué :o",
				timecode: 87,
			}
		],
		beginTimecode: 74,
		endTimecode: 103,
	},
	{
		id: 3,
		title: "La rencontre",
		casting: [castBunny(4), castFrank(4), castRinky(4), castGimerra(4)],
		image: "./images/scenes/scene4",
		beginTimecode: 104,
		endTimecode: 146,
	},
	{
		id: 4,
		title: "La diversion",
		casting: [castBunny(5), castFrank(5), castRinky(5), castGimerra(5)],
		image: "./images/scenes/scene5",
		reactions: [
			{
				name: "Jeanne",
				message: "Il se fait bully le pauvre...",
				timecode: 180,
			},
			{
				name: "Marie",
				message: "c'est cruel, pas pour tout public",
				timecode: 180,
			}
		],
		beginTimecode: 147,
		endTimecode: 185,
	},
	{
		id: 5,
		title: "Le crime",
		casting: [castBunny(6), castFrank(6), castRinky(6), castGimerra(6)],
		image: "./images/scenes/scene6",
		beginTimecode: 186,
		endTimecode: 241
	},
	{
		id: 6,
		title: "La vengeance est un plat qui se mange froid",
		casting: [castBunny(7)],
		image: "./images/scenes/scene7",
		reactions: [
			{
				name: "Samuel",
				message: "il est meilleur que moi à la corde",
				timecode: 272,
			}
		],
		beginTimecode: 242,
		endTimecode: 284,
	},
	{
		id: 7,
		title: "Que fait Bunny ?",
		casting: [castBunny(8), castFrank(8), castRinky(8), castGimerra(8)],
		image: "./images/scenes/scene8",
		reactions: [
			{
				name: "Patrick",
				message: "c'est Rambo!",
				timecode: 285,
			}
		],
		beginTimecode: 285,
		endTimecode: 299,
	},
	{
		id: 8,
		title: "Bunny contre attaque",
		casting: [castBunny(9)],
		image: "./images/scenes/scene9",
		beginTimecode: 300,
		endTimecode: 339,
	},
	{
		id: 9,
		title: "Gimerra et sa noisette",
		casting: [castBunny(10), castGimerra(10)],
		image: "./images/scenes/scene10",
		reactions: [
			{
				name: "Julien",
				message: "il est vernis lui",
				timecode: 355,
			},
			{
				name: "Mikael",
				message: "vers l'infini et l'au delà",
				timecode: 374,
			}
		],
		beginTimecode: 340,
		endTimecode: 376,
	},
	{
		id: 10,
		title: "Frank s'envole",
		casting: [castFrank(11), castBird(11)],
		image: "./images/scenes/scene11",
		beginTimecode: 377,
		endTimecode: 405,
	},
	{
		id: 11,
		title: "Le plan de Frank tombe à l'eau",
		casting: [castFrank(12), castBunny(12)],
		image: "./images/scenes/scene12",
		reactions: [
			{
				name: "Pénélope",
				message: "on dirait Scrat",
				timecode: 422,
			},
			{
				name: "Valentin",
				message: "il a plus de carburant",
				timecode: 442,
			}
		],
		beginTimecode: 406,
		endTimecode: 460,
	},
	{
		id: 12,
		title: "Tout est bien qui finit bien",
		casting: [castFrank(13), castBunny(13)],
		image: "./images/scenes/scene13",
		reactions: [
			{
				name: "Alice",
				message: "il est mignon comme ça",
				timecode: 484,
			}			
		],
		beginTimecode: 461,
		endTimecode: 489,
	},
	{
		id: 13,
		title: "Crédits",
		casting: [],
		image: "./images/scenes/scene14",
		reactions: [
			{
				name: "Anne",
				message: "C'est la fin :'(",
				timecode: 500,
			},
			{
				name: "Jérémy",
				message: "Bravo ! Super court métrage",
				timecode: 502,
			}
		],
		beginTimecode: 490,
		endTimecode: 578,
	},
	{
		id: 14,
		title: "Scène post crédits",
		casting: [castFrank(15), castBird(15)],
		image: "./images/scenes/scene15",
		reactions: [
			{
				name: "Xavier",
				message: "une suite ?",
				timecode: 572,
			}
		],
		beginTimecode: 579,
		endTimecode: 596,
	}
];

const crew = [
	{
		id: 0,
		name: "Sacha Goedegebure",
		role: "Directeur",
		image: "https://peach.blender.org/wp-content/uploads/small_IMG_3723.jpg",
	},
	{
		id: 0,
		name: "Andy Goralczyk",
		role: "Directeur artistique",
		image: "https://peach.blender.org/wp-content/uploads/small_IMG_3717.jpg",
	},
	{
		id: 0,
		name: "Enrico Valenza",
		role: "Chef artistique",
		image: "https://peach.blender.org/wp-content/uploads/small_IMG_3735.jpg",
	},
	{
		id: 0,
		name: "Nathan Vegdahl",
		role: "Rigger et animateur",
		image: "https://peach.blender.org/wp-content/uploads/IMG_3712.jpg",
	},
	{
		id: 0,
		name: "William Reynish",
		role: "Animateur",
		image: "https://peach.blender.org/wp-content/uploads/small_IMG_3713.jpg",
	},
	{
		id: 0,
		name: "Brech Van Lommel",
		role: "Directeur technique",
		image: "https://peach.blender.org/wp-content/uploads/small_IMG_3722.jpg",
	},
	{
		id: 0,
		name: "Campbell Barton",
		role: "Directeur technique",
		image: "https://peach.blender.org/wp-content/uploads/IMG_3728.jpg",
	},
	{
		id: 0,
		name: "Jan Morgenstern",
		role: "Musique et sons",
		image: "https://peach.blender.org/wp-content/uploads/IMG_3708_jan.jpg",
	},
	{
		id: 0,
		name: "Ton Roosendaal",
		role: "Producteur",
		image: "https://peach.blender.org/wp-content/uploads/small_IMG_3739.jpg",
	}
];

// Util to add a delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Route to get the list of all the scenes existing with minimal data
app.get('/scenes', (req,res) => {
	const simplifiedScenes = scenes.map(({ id, title, beginTimecode, endTimecode }) => {
		return {
			id,
			title,
			beginTimecode,
			endTimecode,
		}
	});

  res.status(200).json(simplifiedScenes);
});

// Route to get the crew who worked on the project with their names, roles, etc.
app.get('/crew', (req,res) => {
  res.status(200).json(crew);
});

// Route to get bonus images
app.get('/bonusImages', (req,res) => {
  res.status(200).json(bonusImages);
});

// Route to get the details of a specific scene corresponding to the given timecode
app.get('/scene/:timecode', async (req,res) => {
	const timecode = req.params.timecode;

	const scene = scenes.find((scene) => 
		scene.beginTimecode <= timecode && scene.endTimecode >= timecode
	);

	// Add a delay of 3 seconds before returning a result  
	await delay(3000);

	res.status(200).json(scene)
});

// Serve static files in the /images folder
app.use('/images', express.static('images'));
// Serve openapi.yaml file statically
app.use('/openapi.yaml', express.static('openapi.yaml'));
// Serve index.html file statically
app.use(express.static(__dirname + "/"));

app.use(cors());

// Default port if no port is given
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server listening");
});
