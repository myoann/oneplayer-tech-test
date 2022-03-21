const express = require('express');
const app = express();

const castBunny = {
	id: 0,
	description: "Le lapin",
	name: "Big Buck Bunny",
	image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/BBB-Bunny.png"
};

const castFrank = {
	id: 1,
	description: "L'écureuil volant",
	name: "Frank",
	image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Big.Buck.Bunny.-.Frank.png"
};

const castRinky = {
	id: 2,
	description: "L'écureuil rouge",
	name: "Rinky",
	image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Big.Buck.Bunny.-.Ricky.png"
};

const castGimerra = {
	id: 3,
	description: "Le chinchilla",
	name: "Gimerra",
	image: "https://peach.blender.org/wp-content/uploads/furtest_render.jpg"
};

const castBird = {
	id: 4,
	description: "L'oiseau",
	name: "Bird",
	image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Chirp1_-_BBB_-_reduced_snapshot.png"
};


const scenes = [
	{
		id: 0,
		title: "Génerique",
		casting: [castBird],
		image: "",
		beginTimecode: 0,
		endTimecode: 30
	},
	{
		id: 1,
		title: "Le réveil de Bunny",
		casting: [castBunny, castFrank],
		image: "",
		reactions: [
			{
				name: "Jean",
				message: "Je me réveille pareil",
				timecode: 50
			}
		],
		beginTimecode: 31,
		endTimecode: 73
	},
	{
		id: 2,
		title: "La chute du papillon",
		casting: [castBunny, castFrank],
		image: "",
		reactions: [
			{
				name: "Eve",
				message: "C'est la pomme d'Adam",
				timecode: 85
			},
			{
				name: "Jack",
				message: "Choqué :o",
				timecode: 87
			}
		],
		beginTimecode: 74,
		endTimecode: 103
	},
	{
		id: 3,
		title: "La rencontre",
		casting: [castBunny, castFrank, castRinky, castGimerra],
		image: "",
		beginTimecode: 104,
		endTimecode: 146
	},
	{
		id: 4,
		title: "La diversion",
		casting: [castBunny, castFrank, castRinky, castGimerra],
		image: "",
		reactions: [
			{
				name: "Jeanne",
				message: "Il se fait bully le pauvre...",
				timecode: 180
			},
			{
				name: "Marie",
				message: "c'est cruel, pas pour tout public",
				timecode: 180
			}
		],
		beginTimecode: 147,
		endTimecode: 185
	},
	{
		id: 5,
		title: "Le crime",
		casting: [castBunny, castFrank, castRinky, castGimerra],
		image: "",
		beginTimecode: 186,
		endTimecode: 241
	},
	{
		id: 6,
		title: "La vengeance est un plat qui se mange froid",
		casting: [castBunny],
		image: "",
		reactions: [
			{
				name: "Samuel",
				message: "il est meilleur que moi à la corde",
				timecode: 272
			}
		],
		beginTimecode: 242,
		endTimecode: 284
	},
	{
		id: 7,
		title: "Que fait Bunny ?",
		casting: [castBunny, castFrank, castRinky, castGimerra],
		image: "",
		reactions: [
			{
				name: "Patrick",
				message: "c'est Rambo!",
				timecode: 285
			}
		],
		beginTimecode: 285,
		endTimecode: 299
	},
	{
		id: 8,
		title: "Bunny contre attaque",
		casting: [castBunny],
		image: "",
		beginTimecode: 300,
		endTimecode: 339
	},
	{
		id: 9,
		title: "Gimerra et sa noisette",
		casting: [castBunny, castGimerra],
		image: "",
		reactions: [
			{
				name: "Julien",
				message: "il est vernis lui",
				timecode: 355
			},
			{
				name: "Mikael",
				message: "vers l'infini et l'au delà",
				timecode: 374
			}
		],
		beginTimecode: 340,
		endTimecode: 376
	},
	{
		id: 10,
		title: "Frank s'envole",
		casting: [castFrank, castBird],
		image: "",
		beginTimecode: 377,
		endTimecode: 405
	},
	{
		id: 11,
		title: "Le plan de Frank tombe à l'eau",
		casting: [castFrank, castBunny],
		image: "",
		reactions: [
			{
				name: "Pénélope",
				message: "on dirait Scrat",
				timecode: 422
			},
			{
				name: "Valentin",
				message: "il a plus de carburant",
				timecode: 442
			}
		],
		beginTimecode: 406,
		endTimecode: 460
	},
	{
		id: 12,
		title: "Tout est bien qui finit bien",
		casting: [castFrank, castBunny],
		image: "",
		reactions: [
			{
				name: "Alice",
				message: "il est mignon comme ça",
				timecode: 484
			}			
		],
		beginTimecode: 461,
		endTimecode: 489
	},
	{
		id: 13,
		title: "Crédits",
		casting: [],
		image: "",
		reactions: [
			{
				name: "Anne",
				message: "C'est la fin :'(",
				timecode: 500
			},
			{
				name: "Jérémy",
				message: "Bravo ! Super court métrage",
				timecode: 502
			}
		],
		beginTimecode: 490,
		endTimecode: 578
	},
	{
		id: 14,
		title: "Scène post crédits",
		casting: [castFrank, castBird],
		image: "",
		reactions: [
			{
				name: "Xavier",
				message: "une suite ?",
				timecode: 572
			}
		],
		beginTimecode: 579,
		endTimecode: 596
	}
];

const crew = [
	{
		id: 0,
		name: "Sacha Goedegebure",
		role: "Directeur",
		image: "https://peach.blender.org/wp-content/uploads/small_IMG_3723.jpg"
	},
	{
		id: 0,
		name: "Andy Goralczyk",
		role: "Directeur artistique",
		image: "https://peach.blender.org/wp-content/uploads/small_IMG_3717.jpg"
	},
	{
		id: 0,
		name: "Enrico Valenza",
		role: "Chef artistique",
		image: "https://peach.blender.org/wp-content/uploads/small_IMG_3735.jpg"
	},
	{
		id: 0,
		name: "Nathan Vegdahl",
		role: "Rigger et animateur",
		image: "https://peach.blender.org/wp-content/uploads/IMG_3712.jpg"
	},
	{
		id: 0,
		name: "William Reynish",
		role: "Animateur",
		image: "https://peach.blender.org/wp-content/uploads/small_IMG_3713.jpg"
	},
	{
		id: 0,
		name: "Brech Van Lommel",
		role: "Directeur technique",
		image: "https://peach.blender.org/wp-content/uploads/small_IMG_3722.jpg"
	},
	{
		id: 0,
		name: "Campbell Barton",
		role: "Directeur technique",
		image: "https://peach.blender.org/wp-content/uploads/IMG_3728.jpg"
	},
	{
		id: 0,
		name: "Jan Morgenstern",
		role: "Musique et sons",
		image: "https://peach.blender.org/wp-content/uploads/IMG_3708_jan.jpg"
	},
	{
		id: 0,
		name: "Ton Roosendaal",
		role: "Producteur",
		image: "https://peach.blender.org/wp-content/uploads/small_IMG_3739.jpg"
	}
];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

app.get('/scenes', (req,res) => {
	const simplifiedScenes = scenes.map((scene) => {
		return {
			id: scene.id,
			title: scene.title,
			beginTimecode: scene.beginTimecode,
			endTimecode: scene.endTimecode,
		}
	})

    res.status(200).json(simplifiedScenes)
})

app.get('/crew', (req,res) => {
    res.status(200).json(crew)
})

// TODO: add images


app.get('/scene/:timecode', (req,res) => {
	const timecode = req.params.timecode;

    const scene = scenes.find((scene) => 
    	scene.beginTimecode <= timecode && scene.endTimecode >= timecode
    );

   	const randomNumber = Math.floor(Math.random() * 5000) + 1;

    res.status(200).json(scene)
})

app.listen(8080, () => {
  console.log("Serveur à l'écoute");
});