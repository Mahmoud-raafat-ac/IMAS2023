var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('Home');
});

router.get('/About', function (req, res, next) {
  res.render('About');
});

router.get('/Topics', function (req, res, next) {
  res.render('Topics');
});

router.get('/Committees', function (req, res, next) {
  let steering = [
    {
      "name": "Prof. Samir El-Ghazali ",
      "role": "Chair"
    },
    {
      "name": "Prof. Yahia Antar ",
      "role": "Member"
    },
    {
      "name": "Prof. Othman Elsayed",
      "role": "Member"
    },
    {
      "name": "Prof. Diaa Khalil",
      "role": "Member"
    },
    {
      "name": "Prof. Tamer Abo Elfadl",
      "role": "Member"
    }
  ]

  let Conference = [
    {
      "name": "Prof. Ayman El-Tager",
      "role": "Former Chair"
    },
    {
      "name": "Prof. Hany Hammad",
      "role": "Former Chair"
    }
  ]

  let TPC_Chairs = [
    {
      "name": "Prof. Hadia El-Hennawy",
      "role": "OCC & Conference Co-Chair"
    },
    {
      "name": "Prof. Amr Safwat",
      "role": "GUC University Chairman of the board of trustee"
    }
  ]

  let TPC_Members = [
    {
      "name": "Prof. Roberto D. Graglia",
      "role": "Chair of FC"
    },
    {
      "name": "Prof. Victor F. Hanna",
      "role": "Member"
    },
    {
      "name": "Prof. Rene Marklein",
      "role": "Member"
    },
    {
      "name": "Prof. Ahmad Kishk",
      "role": "Member"
    },
    {
      "name": "Prof. Kawthar Zaki",
      "role": "Member"
    },
    {
      "name": "Prof. Esmat Abdallah",
      "role": "Member"
    },
    {
      "name": "Prof. Sedky Riad",
      "role": "Member"
    },
    {
      "name": "Prof. Atef Elshrbeni",
      "role": "Member"
    },
    {
      "name": "Prof. Abbas Omar",
      "role": "Member"
    },
    {
      "name": "Prof. Abdel Razik Sebak  ",
      "role": "Member"
    },
    {
      "name": "Prof. Ali Darwish",
      "role": "Member"
    },
    {
      "name": "Prof. Islam Eshrah ",
      "role": "Member"
    },
    {
      "name": "Prof. Ezzeldin Soliman",
      "role": "Member"
    },
    {
      "name": "Prof. Matthys M. Botha",
      "role": "Member"
    },
    {
      "name": "Prof. Dirk I. L. de Villiers",
      "role": "Member"
    },
    {
      "name": "Prof. M. Gustafsson",
      "role": "Member"
    },
    {
      "name": "Prof. M. S. Sharawi",
      "role": "Member"
    },
  ]

  let G_Secretary = [
    {
      "name": "Assoc. Prof. Hussein Kotb",
      "role": "TPC CoChair (AP)"
    }
  ]

  let women = [
    {
      "name": "Assoc. Prof. Bassant Abdelhamid",
      "role": "ASU"
    },
    {

      "name": "Assistant Prof. Eman Azab",
      "role": "GUC"
    },
    {

      "name": "Assistant Prof. Maggie Mashaly",
      "role": "GUC"
    },
  ]
  let Organizing = [
    {
      "name": "Prof. Ahmed Mahdy",
      "role": "ASU"
    },
    {
      "name": "Prof. Frank Gunzer",
      "role": "GUC"
    },
    {
      "name": "Prof. Tallal El Shabrawy",
      "role": "GUC"
    },
    {
      "name": "Prof. Mohamed Ashour",
      "role": "ASU"
    },
    {
      "name": "Assoc. Prof. Amr Talaat",
      "role": "GUC"
    },
    {
      "name": "Assoc. Prof. Haitham Omran",
      "role": "GUC"
    },
    {
      "name": "Assoc. Prof. Mohamed Abdel Ghani",
      "role": "ASU"
    },
    {
      "name": "Assistant Prof. Minar Al-Aasser",
      "role": "GUC"
    },
    {
      "name": "Assistant Prof. Yasmine Abdellah",
      "role": "GUC"
    },
  ]

  let Assistants = [
    {
      "name": "Eng. Randa El Khosht",
      "role": "ASU"
    },
    {
      "name": "Eng. Maha El feshawy",
      "role": "GUC"
    },
    {
      "name": "Eng. Hadil Hesham Eissawy",
      "role": "GUC"
    },
    {
      "name": "Eng. Abdelrahman Moustafa Darwish",
      "role": "GUC"
    },
    {
      "name": "Eng. Sondos Tarek Mohamed El Zeiny",
      "role": "GUC"
    },
  ]
  res.render('Committees', {
    G_Secretary: G_Secretary,
    steering: steering,
    TPC_Members: TPC_Members,
    TPC_Chairs: TPC_Chairs,
    Conference: Conference,
    Assistants: Assistants,
    women: women,
    Organizing: Organizing
  });
});

router.get('/Sponsers', function (req, res, next) {
  res.render('Sponsers');
});

router.get('/Venue', function (req, res, next) {
  res.render('Venue');
});

router.get('/Agenda', function (req, res, next) {
  res.render('Agenda', { hour: 12, minute: 30 });
});

router.get('/Contact-Us', function (req, res, next) {
  res.render('Contact-Us');
});

module.exports = router;