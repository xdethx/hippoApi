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
    image: "https://i.etsystatic.com/39632648/r/il/e0ac0a/4496143197/il_794xN.4496143197_irlx.jpg",
     url:'https://ghosthippo.etsy.com/listing/1375155961',
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
    image: "https://i.etsystatic.com/39632648/r/il/7e54ca/4496103415/il_794xN.4496103415_p49t.jpg",

    url:'https://ghosthippo.etsy.com/listing/1375200927',
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
    image:  "https://i.etsystatic.com/39632648/r/il/4466d2/5410792664/il_794xN.5410792664_g4ow.jpg",

 url:'https://ghosthippo.etsy.com/listing/1590485881',
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
    image: "https://i.etsystatic.com/39632648/r/il/affd27/5403625412/il_794xN.5403625412_5rgl.jpg",

 url:'https://ghosthippo.etsy.com/listing/1575004076',
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
    image:  "https://i.etsystatic.com/39632648/r/il/9dd0e6/4521108345/il_794xN.4521108345_7llh.jpg",
  
       url:'https://ghosthippo.etsy.com/listing/1382504075',
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
    image:  "https://i.etsystatic.com/39632648/r/il/6f1d21/5451552149/il_794xN.5451552149_g54p.jpg",

   url:'https://ghosthippo.etsy.com/listing/1589125601',
    isNew: true,
    video: null,
    Materials: "plaster, acrylic paints, stone varnish ",
  },

  {
    _id: 5003,
    title: "Handmade Santa Claus Statue,Christmas Tree and Christmas Village House,Christmas Decor,African American Christmas Decor,Black Santa,Ornament",
    price: 40,
    setPrice:60,
    description:
      "Santa claus statues🎅🏻🎅🏿 Aditional christmas tree,christmas village house and the gift box🎄🏠🎁 All of them handmade.",
    category: "xmas",
    image:  'https://i.etsystatic.com/39632648/r/il/2ba6a5/5481099567/il_1140xN.5481099567_ivzo.jpg',

       url:'https://ghosthippo.etsy.com/listing/1580961392',
    isNew: true,
    video: null,
    Materials: "plaster, acrylic paints, stone varnish ",
  },
  {
    _id: 5004,
    title: "Handmade Plump Santa Claus Figure with Christmas Tree&Gift Box,Christmas Home Decor,christmas gift,Xmas,ornament",
    price: 10,
    setPrice:15,
    description:
      "Handmade plump santa figures and 2 optional christmas tree and a gift box🎅🏻🎄🎁 great choice for christmas decoration,make happy a santa lover friend with this cute gift.",
    category: "xmas",
    image:  'https://i.etsystatic.com/39632648/r/il/a4896c/5481773645/il_1140xN.5481773645_iyy8.jpg',

       url:'https://ghosthippo.etsy.com/listing/1595285079',
    isNew: true,
    video: null,
    Materials: "plaster, acrylic paints, stone varnish ",
  },
  {
    _id: 5005,
    title: "Handmade christmas snowman Figure with Christmas Tree&Gift Box,Christmas Home Decor,christmas gift,Xmas,ornament,winter snowman",
    price: 15,
    setPrice:null,
    description:
      "Handmade plump santa figures and 2 optional christmas tree and a gift box🎅🏻🎄🎁 great choice for christmas decoration,make happy a santa lover friend with this cute gift.",
 category: "xmas",
    image: 'https://i.etsystatic.com/39632648/r/il/d27c6c/5433937278/il_1140xN.5433937278_ssgu.jpg',

       url:'https://ghosthippo.etsy.com/listing/1581144364',
    isNew: true,
    video: null,
    Materials: "plaster, acrylic paints, stone varnish ",
  },
  {
    _id: 5006,
    title: "Handmade Santa Claus Statue with 2 Little Santa's Head Statues Home Decoration For Your Christmas Party&Tree,Christmas ornaments,Xmas Gift",
    price: 50,
    setPrice:60,
    description:
      "Excellent choice for christmas decoration, Let him bring gifts to you 🎅🎄🎁 As a gift make your friend happy with this Christmas spirit and joyful winter celebrations.",
 category: "xmas",
    image:  'https://i.etsystatic.com/39632648/r/il/67eb74/5419043142/il_1140xN.5419043142_90nn.jpg',

       url:'https://ghosthippo.etsy.com/listing/1592126053',
    isNew: true,
    video: null,
    Materials: "plaster, acrylic paints, stone varnish ",
  },
  {
    _id: 6001,
    title: "Handmade Teddy Bear Family Figures&Bibelots For Home Decoration",
    price: 60,
    setPrice:null,
    description:
      "These pretty family waiting for an owner as cute as them🎀Make the perfect addition to any home, Adds a pleasant&authentic mood to room 🐻💫 ",
    category: "decor",
    image:  "https://i.etsystatic.com/39632648/r/il/806169/5459054323/il_794xN.5459054323_qnay.jpg",

url:'https://ghosthippo.etsy.com/listing/1590513233',
    isNew: true,
    video: null,
    Materials: "plaster, acrylic paints, stone varnish ",
  },
  {
    _id: 6002,
    title: "Handmade Gothic Cat Figure,Antique Painted Table Top Decor for Home Decoration,Table top miniatures,Cat Statue,Halloween",
    price: 15,
    setPrice:null,
    description:
      "Handmade grim reapers feline Cat with cloak and skull necklace.Antique painted gothic cat figure for tabletop,desktop,halloween home decoration ",
    category: "decor",
    image:  'https://i.etsystatic.com/39632648/r/il/bb922a/5480740447/il_1140xN.5480740447_avq0.jpg',

  url:'https://ghosthippo.etsy.com/listing/1580784492',
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
    image:  "https://i.etsystatic.com/39632648/r/il/2502e6/5171124506/il_794xN.5171124506_a8uz.jpg",

url:'https://ghosthippo.etsy.com/listing/1526795638',
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
    image:  "https://i.etsystatic.com/39632648/r/il/043b71/5180831649/il_794xN.5180831649_2p9l.jpg",

url:'https://ghosthippo.etsy.com/listing/1518606706',
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
    image: "https://i.etsystatic.com/39632648/r/il/28a6c6/5118979288/il_794xN.5118979288_5p7l.jpg",
   
url:'https://ghosthippo.etsy.com/listing/1529847147',
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
    image:"https://i.etsystatic.com/39632648/r/il/e2958b/5167258111/il_794xN.5167258111_quft.jpg",
   

url:'https://ghosthippo.etsy.com/listing/1528220079',
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
