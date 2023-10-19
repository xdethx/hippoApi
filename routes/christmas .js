const express = require("express");
const router = express.Router();

const xmasData = [
  {
    _id: 5001,
    title: "Gnome Christmas Ornament with Candle Holder,Home decor,Home & Living,Gift",
    price: 35,
    setPrice:40,
    description:
      "Gnome christmas ornament with candle holder.2 gnomes are holding christmas tree and gift box.🎅🏻🎄🎅🏻🎁",
    category: "xmas",
    image: [ "https://i.etsystatic.com/39632648/r/il/9dd0e6/4521108345/il_794xN.4521108345_7llh.jpg",
    "https://i.etsystatic.com/39632648/r/il/403cc7/4473748226/il_794xN.4473748226_4qxh.jpg",
    "https://i.etsystatic.com/39632648/r/il/d79a58/4521113749/il_794xN.4521113749_115o.jpg",
    "https://i.etsystatic.com/39632648/r/il/d21384/4521115097/il_794xN.4521115097_2spk.jpg",
    "https://i.etsystatic.com/39632648/r/il/80c011/4473751966/il_794xN.4473751966_447q.jpg",
    "https://i.etsystatic.com/39632648/r/il/ab8ca6/4521120301/il_794xN.4521120301_7ypu.jpg",
    "https://i.etsystatic.com/39632648/r/il/a87509/4521120829/il_794xN.4521120829_bln0.jpg",
    "https://i.etsystatic.com/39632648/r/il/af80a8/4473758258/il_794xN.4473758258_fkfu.jpg"
  
       ],
    isNew: true,
    video: "https://v.etsystatic.com/video/upload/s--VRkpUS2p--/ac_none,c_crop,du_15,h_960,q_auto:good,w_720,x_0,y_160/10_hls8jk",
    Materials: "plaster, acrylic paints, stone varnish ",
  },
  {
    _id: 5002,
    title: "Santa Claus Stick Candle Holder For Home Decor,Home & Living,Gift,Xmas Home Decor,Holiday Candle Holders,Christmas Decoratio",
    price: 20,
    setPrice:null,
    description:
      "Santa Claus is coming to your home 🎅🏻 He carries a stick candle top of the gift box 🎁to bring warm light for your holiday night✨The best candle holder if your a huge holiday decorator,  On the other hand it's a wonderful gift for the Santa lover family&friends",
    category: "xmas",
    image: [ "https://i.etsystatic.com/39632648/r/il/6f1d21/5451552149/il_794xN.5451552149_g54p.jpg",
    "https://i.etsystatic.com/39632648/r/il/03f638/5451552891/il_794xN.5451552891_3thw.jpg",
    "https://i.etsystatic.com/39632648/r/il/b0d7d9/5403403150/il_794xN.5403403150_hx24.jpg",
    "https://i.etsystatic.com/39632648/r/il/d592ef/5403403560/il_794xN.5403403560_2ww1.jpg",
    "https://i.etsystatic.com/39632648/r/il/5dbc2b/5451554033/il_794xN.5451554033_4h24.jpg"
  
       ],
    isNew: true,
    video: null,
    Materials: "plaster, acrylic paints, stone varnish ",
  },

];

router.get("/christmas", (req, res) => {
  res.send(xmasData);
});
// Single proudct parameter

router.get("/christmas/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const singleItem = xmasData.find((item) => item._id === itemId);

  if (!itemId) {
    return res.status(404).json({ message: "Product was not found" });
  }
  res.json(singleItem);
});
module.exports = router;
