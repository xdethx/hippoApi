const express = require("express");
const router = express.Router();

const decorData = [
  {
    _id: 6001,
    title: "Handmade Teddy Bear Family Figures&Bibelots For Home Decoration",
    price: 80,
    setPrice:null,
    description:
      "These pretty family waiting for an owner as cute as them🎀Make the perfect addition to any home, Adds a pleasant&authentic mood to room 🐻💫 ",
    category: "decor",
    image: [ "https://i.etsystatic.com/39632648/r/il/806169/5459054323/il_794xN.5459054323_qnay.jpg",
  "https://i.etsystatic.com/39632648/r/il/e6fc68/5410921680/il_794xN.5410921680_opr8.jpg",
"https://i.etsystatic.com/39632648/r/il/6943a7/5410922264/il_794xN.5410922264_dptr.jpg",
"https://i.etsystatic.com/39632648/r/il/07e654/5410924448/il_794xN.5410924448_k2n8.jpg",
"https://i.etsystatic.com/39632648/r/il/ae6317/5410925540/il_794xN.5410925540_noj4.jpg"],
    isNew: true,
    video: null,
    Materials: "plaster, acrylic paints, stone varnish ",
  },

 
];

router.get("/decor", (req, res) => {
  res.send(decorData);
});
// Single proudct parameter

router.get("/decor/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const singleItem = decorData.find((item) => item._id === itemId);

  if (!itemId) {
    return res.status(404).json({ message: "Product was not found" });
  }
  res.json(singleItem);
});
module.exports = router;
