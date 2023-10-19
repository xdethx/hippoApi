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
