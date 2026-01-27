//init node server
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const categories = [
  {
    id: 1,
    titre: "A",
    images: [
      "https://blog.hellofresh.co.uk/wp-content/uploads/2021/03/HF201125_R209_W02_FR_RFR20161819-1_MB_Main_low-scaled.jpg",
      "https://kissmychef.com/wp-content/uploads/2020/07/cornetteria.jpg",
    ],
  },
  { id: 2, titre: "B", images: [] },
  {
    id: 3,
    titre: "C",
    images: [
      "https://img-3.journaldesfemmes.fr/BNubGw2ChgpFyw3eK2g-PMwF28Y=/1240x/smart/7231e1a7ad4a4fbb94f3498c11392d23/ccmcms-jdf/36619834.jpg",
    ],
  },
  { id: 4, titre: "D", images: [] },
];

app.use(cors());
app.use(bodyParser.json());

app.get("/categories", (req, res) => {
  res.json(categories);
});

//ajouter une nouvelle image à une catégorie
app.post("/image", (req, res) => {
  const { url } = req.body;

  //a remplacer par une requete insert dans une BDD
  categories[0].images.push(url);

  res.json({ message: "Image ajoutée avec succès" });
});

//
app.patch("/image/:idCategorie", (req, res) => {
  const idCategorie = parseInt(req.params.idCategorie);

  //ajouter le déplacement de l'image

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
