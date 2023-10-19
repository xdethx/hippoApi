const express = require("express");
const router = express.Router();

const favorsData = [
  {
    _id: 7001,
    title: "20 PICS Personalized Cute Baby Shower Gift Favors As Shaped Stroller-Baby Shower Decoration Party-Newborn-Baby's Birthday favors",
    price: 60,
    setPrice:null,
    description:
      "Baby shower favor gifts for guests.gifts as sweet as your baby 👶🎁 ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨ Make your special day more memorable for your quests✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨   Get contact for bulk order ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨",
    category: "favor",
    image: [ "https://i.etsystatic.com/39632648/r/il/2502e6/5171124506/il_794xN.5171124506_a8uz.jpg",
  "https://i.etsystatic.com/39632648/r/il/0020cf/5219357877/il_794xN.5219357877_nzk8.jpg",
"https://i.etsystatic.com/39632648/r/il/e1ae32/5171125866/il_794xN.5171125866_mw0w.jpg",
"https://i.etsystatic.com/39632648/r/il/23f8df/5219366183/il_794xN.5219366183_7k9y.jpg",
"https://i.etsystatic.com/39632648/r/il/053770/5219354415/il_794xN.5219354415_cx4m.jpg",
"https://i.etsystatic.com/39632648/r/il/665c3d/5159657019/il_794xN.5159657019_itc6.jpg" ],
    isNew: true,
    video: "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/vdo_io5blk.mp4",
    Materials: "plaster, acrylic paints, stone varnish ",
  },
  {
    _id: 7002,
    title: "20 PICS Personalized Cute Baby Shower Gift Favors As Shaped Baby Rompers -Baby Shower Decoration Party-Newborn-Baby's Birthday favors-Gift",
    price: 60,
    setPrice:null,
    description: "Baby shower favor gifts for guests.gifts as sweet as your baby 👶🎁 ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨ Make your special day more memorable for your quests✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨   Get contact for bulk order ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨",
    category: "favor",
    image: [ "https://i.etsystatic.com/39632648/r/il/043b71/5180831649/il_794xN.5180831649_2p9l.jpg",
  "https://i.etsystatic.com/39632648/r/il/bd5b87/5132611732/il_794xN.5132611732_5t8n.jpg",
"https://i.etsystatic.com/39632648/r/il/6152e3/5132612104/il_794xN.5132612104_n1cz.jpg",
"https://i.etsystatic.com/39632648/r/il/0a753c/5132612788/il_794xN.5132612788_t6c8.jpg" ,
"https://i.etsystatic.com/39632648/r/il/89d874/5132613298/il_794xN.5132613298_amzf.jpg",
"https://i.etsystatic.com/39632648/r/il/9e7638/5132613880/il_794xN.5132613880_k5t4.jpg",
"https://i.etsystatic.com/39632648/r/il/665c3d/5159657019/il_794xN.5159657019_itc6.jpg"
],
    isNew: true,
    video: "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/Ads%C4%B1z_tasar%C4%B1m_mejjfd.mp4",
    Materials: "plaster, acrylic paints, stone varnish ",
  },
  {
    _id: 7003,
    title: "Personalized Cute Baby Shower Gift Favors As Shaped Baby Rompers -Baby Shower Decoration Party-Newborn-Baby's Birthday favors-Gift for Guest",
    price: 40,
    setPrice:60,
    description: "Baby shower favor gifts for guests.gifts as sweet as your baby 👶🎁 ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨ Make your special day more memorable for your quests✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨   Get contact for bulk order ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨",
    category: "favor",
    image: [ "https://i.etsystatic.com/39632648/r/il/28a6c6/5118979288/il_794xN.5118979288_5p7l.jpg",
    "https://i.etsystatic.com/39632648/r/il/d096b9/5167209251/il_794xN.5167209251_k2g3.jpg",
    "https://i.etsystatic.com/39632648/r/il/e3a276/5118980798/il_794xN.5118980798_lgfq.jpg",
    "https://i.etsystatic.com/39632648/r/il/76ff12/5167210189/il_794xN.5167210189_4v7y.jpg",
    "https://i.etsystatic.com/39632648/r/il/64695a/5167210859/il_794xN.5167210859_20ky.jpg",
    "https://i.etsystatic.com/39632648/r/il/351a7b/5118982430/il_794xN.5118982430_g058.jpg",
    "https://i.etsystatic.com/39632648/r/il/41e9d3/5167211865/il_794xN.5167211865_9d8k.jpg",
    "https://i.etsystatic.com/39632648/r/il/3d81dd/5118983586/il_794xN.5118983586_lgej.jpg",
    "https://i.etsystatic.com/39632648/r/il/93352f/5167221363/il_794xN.5167221363_8vpj.jpg",
    "https://i.etsystatic.com/39632648/r/il/665c3d/5159657019/il_794xN.5159657019_itc6.jpg"
],
    isNew: true,
    video: "https://v.etsystatic.com/video/upload/s--6_mkF-2H--/ac_none,c_crop,du_15,h_1080,q_auto:good,w_720,x_0,y_44/vdo_q1qhwe",
    Materials: "plaster, acrylic paints, stone varnish ",
  },
  {
    _id: 7004,
    title: "Personalized Cute Baby Shower Gift Favors-Baby Shower Decoration Party-Newborn Baby-Baby's Birthday favors-Gift for Guests ",
    price: 40,
    setPrice:60,
    description: "Baby shower favor gifts for guests.gifts as sweet as your baby 👶🎁 ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨ Make your special day more memorable for your quests✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨   Get contact for bulk order ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨",
    category: "favor",
    image: [ "https://i.etsystatic.com/39632648/r/il/e2958b/5167258111/il_794xN.5167258111_quft.jpg",
    "https://i.etsystatic.com/39632648/r/il/7a7596/5111413190/il_794xN.5111413190_2snk.jpg",
    "https://i.etsystatic.com/39632648/r/il/8d55c6/5111413656/il_794xN.5111413656_fynw.jpg",
    "https://i.etsystatic.com/39632648/r/il/0e8325/5111421254/il_794xN.5111421254_d8bs.jpg",
    "https://i.etsystatic.com/39632648/r/il/5fdccf/5111420720/il_794xN.5111420720_hiqd.jpg",
    "https://i.etsystatic.com/39632648/r/il/9dc2bf/5159656335/il_794xN.5159656335_m10h.jpg",
    "https://i.etsystatic.com/39632648/r/il/665c3d/5159657019/il_794xN.5159657019_itc6.jpg"
],
    isNew: true,
    video: "https://v.etsystatic.com/video/upload/s--6_mkF-2H--/ac_none,c_crop,du_15,h_1080,q_auto:good,w_720,x_0,y_44/vdo_q1qhwe",
    Materials: "plaster, acrylic paints, stone varnish ",
  },
];

router.get("/favors", (req, res) => {
  res.send(favorsData);
});
// Single proudct parameter

router.get("/favors/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const singleItem = favorsData.find((item) => item._id === itemId);

  if (!itemId) {
    return res.status(404).json({ message: "Product was not found" });
  }
  res.json(singleItem);
});
module.exports = router;
