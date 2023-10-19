const express = require("express");
const router = express.Router();

const burnersData = [
  {
    _id: 4001,
    title: "Handmade Brown Beard Gnome Conical,Backflow Incense Burner for Home Decoration ",
    price: 29,
    setPrice:30,
    description:
      "Handmade brown beard gnome conical,backflow incense holder with red,green,orange hat colors.Optional two kinds of little gnome friends.They are waiting for being a part of your home decoration...",
    category: "incense burner",
    image: [ "https://i.etsystatic.com/39632648/r/il/e0ac0a/4496143197/il_794xN.4496143197_irlx.jpg",
     "https://i.etsystatic.com/39632648/r/il/415195/4448797730/il_794xN.4448797730_trcf.jpg", 
     "https://i.etsystatic.com/39632648/r/il/b9c8ee/4496143025/il_794xN.4496143025_4dy9.jpg" ],
    isNew: true,
    video: "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/new1_o1re80.mp4",
    Materials: "plaster, acrylic paints, stone varnish ",
  },
  
  {
    _id: 4002,
    title: "Handmade Gray Beard Gnome Conical,Backflow Incense Burner for Home Decoration",
    price: 29,
    setPrice:30,
    description:
      "Handmade brown beard gnome conical,backflow incense holder with red,yellow,black,dark blue,baby blue hat colors.Optional two kinds of little gnome friends.They are waiting for being a part of your home decoration...",
    category: "incense burner",
    image: [ "https://i.etsystatic.com/39632648/r/il/7e54ca/4496103415/il_794xN.4496103415_p49t.jpg",
     "https://i.etsystatic.com/39632648/r/il/f46543/4496103969/il_794xN.4496103969_d4jl.jpg", 
     "https://i.etsystatic.com/39632648/r/il/499762/4448759368/il_794xN.4448759368_jsy3.jpg",
     "https://i.etsystatic.com/39632648/r/il/ecc16f/4496105293/il_794xN.4496105293_4yun.jpg",
    "https://i.etsystatic.com/39632648/r/il/e02ec4/4448760666/il_794xN.4448760666_8hzl.jpg" ],
    isNew: true,
    video: "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/new2_ubivmz.mp4",
    Materials: "plaster, acrylic paints, stone varnish ",
  },
  {
    _id: 4003,
    title: "Handmade Mushroom Backflow Incense Burner for Home Decoration",
    price: 25,
    setPrice:null,
    description:"This mushroom back flow incense burner will be the great addition to your home 🍄🍄 Mysterious forest vibe table top decoration🌲🌳 Best choice for an incense lover,unforgettable housewarming gift🍃🍃",
    category: "incense burner",
    image: [ "https://i.etsystatic.com/39632648/r/il/4466d2/5410792664/il_794xN.5410792664_g4ow.jpg",
  "https://i.etsystatic.com/39632648/r/il/cfc13e/5410788792/il_794xN.5410788792_lzy0.jpg",
"https://i.etsystatic.com/39632648/r/il/f55b85/5458915431/il_794xN.5458915431_pgsl.jpg",
"https://i.etsystatic.com/39632648/r/il/1ad919/5458915825/il_794xN.5458915825_rklo.jpg",
"https://i.etsystatic.com/39632648/r/il/450449/5410781972/il_794xN.5410781972_bhbx.jpg",
"https://i.etsystatic.com/39632648/r/il/f3a085/5458916831/il_794xN.5458916831_6ts1.jpg",
"https://i.etsystatic.com/39632648/r/il/ae9e7c/5410795380/il_794xN.5410795380_jupb.jpg"
 ],
    isNew: true,
    video: null,
    Materials: "plaster, acrylic paints, stone varnish ",
  },
  {
    _id: 4004,
    title: "Handmade Miniature Village House Light Decor for Home",
    price: 60,
    setPrice:null,
    description:"Handmade plaster tealight candle holder.This beautiful village with the possibility to use as conical essence burner.",
    category: "incense burner",
    image: [ "https://i.etsystatic.com/39632648/r/il/affd27/5403625412/il_794xN.5403625412_5rgl.jpg",
    "https://i.etsystatic.com/39632648/r/il/7488ba/5403631016/il_794xN.5403631016_8mu5.jpg",
    "https://i.etsystatic.com/39632648/r/il/82af46/5403630592/il_794xN.5403630592_bzol.jpg",
    "https://i.etsystatic.com/39632648/r/il/6de5a1/5451779579/il_794xN.5451779579_qqwo.jpg",
    "https://i.etsystatic.com/39632648/r/il/6e3438/5403631584/il_794xN.5403631584_zg3d.jpg",
    "https://i.etsystatic.com/39632648/r/il/acaf46/5451781713/il_794xN.5451781713_57si.jpg",
    "https://i.etsystatic.com/39632648/r/il/10a3a8/5403633372/il_794xN.5403633372_5s24.jpg"
 ],
    isNew: true,
    video: null,
    Materials: "plaster, acrylic paints, stone varnish ",
  },
];

router.get("/burners", (req, res) => {
  res.send(burnersData);
});
// Single proudct parameter

router.get("/burners/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const singleItem = burnersData.find((item) => item._id === itemId);

  if (!itemId) {
    return res.status(404).json({ message: "Product was not found" });
  }
  res.json(singleItem);
});
module.exports = router;
