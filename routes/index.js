var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Home');
});

router.get('/About', function(req, res, next) {
  res.render('About');
});

router.get('/Agenda', function(req, res, next) {
  res.render('Agenda', {hour: 9, minute: 30});
});

router.get('/Topics', function(req, res, next) {
  res.render('Topics');
});

router.get('/Structure', function(req, res, next) {
  let oversight = [
    {
      "name": "Samir El-Ghazaly",
      "email": "",
      "role": "Chair"
    },
    {
      "name": "Alaa Abunjaileh",
      "email": "-",
      "role": "Member"
    },
    {
      "name": "Ali Darwish",
      "email": "-",
      "role": "Member"
    },
    {
      "name": "Hadia El Hennawy",
      "email": " -",
      "role": "Member"
    },
    {
      "name": "Abdel Razik Sebak ",
      "email": "-",
      "role": "Member"
    },

    {
      "name": "Imran Mehdi",
      "email": "-",
      "role": "Member"
    },

    {
      "name": "Georg Ponchak",
      "email": "-",
      "role": "Member"
    },

    {
      "name": "Yahia Antar",
      "email": "-",
      "role": "Member"
    }
  ]

  let steering = [

    {
      "name": "Prof. Hadia El Hennawy",
      "role": "Former Chair"
    },
    {
      "name": "Prof. Diaa A. M. Khalil",
      "role": "Former Chair"
    },
    {
      "name": "Othman Lotfy Elsayed",
      "role": "Former Chair"
    },
    {
      "name": "Prof. Ayman El-Tager",
      "role": "Conference Co-Chair (MTT)"
    },
    {
      "name": "Prof. Hany Hammad",
      "role": "Conference Co-Chair (MTT)"
    },
    {
      "name": "Prof. Samir Elghazaly",
      "role": "Member"
    },
    {
      "name": "Prof. Yahia Antar",
      "role": "Member"
    },
    {
      "name": "Prof. Esmat Abdalla",
      "role": "Member"
    },
    {
      "name": "Prof. Amr Safwat",
      "role": "Member"
    },
    {
      "name": "Prof. Tamer Abo Elfad",
      "role": "Member"
    },
  ]
  let organizing = [

    {
      "name": "Prof.Hany Hammad",
      "role": "OCC & Conference Co-Chair"
    },
    {
      "name": "Prof. Ashraf Mansour",
      "role": "GUC University Chairman of the board of trustee"
    },
    {
      "name": "Prof. Yasser Hegazy",
      "role": "GUC University President"
    },
    {
      "name": "Prof. Ahmed Mahdy ",
      "role": "IET faculty Dean"
    },
    {
      "name": "Prof. AbdelMagid Allam",
      "role": "GUC Communication Department Head"
    },
    {
      "name": "Assistant Prof. Yasmine Abdellah",
      "role": "GIU (AP member"
    },
    {
      "name": "Prof. Tallal El Shabrawy",
      "role": ""
    },
    {
      "name": "Prof. Frank Gunzer",
      "role": ""
    },
    {
      "name": "Assoc. Prof. Haitham Omran",
      "role": ""
    },
    {
      "name": "Assoc. Prof. Mohamed Abdel Ghani",
      "role": ""
    },
    {
      "name": "Assoc. Prof. Mohamed Abdel Ghani",
      "role": ""
    },
    {
      "name": "Assistant Prof. Mohamed Ashour",
      "role": ""
    },
    {
      "name": "Assistant Prof. Eman Azab",
      "role": "Women In Eng. Member"
    },
    {
      "name": "Assistant Prof. Maggie Mashaly",
      "role": "Women In Eng. Member"
    },
    {
      "name": "Assistant Prof. Minar Al-Aasser",
      "role": "Women In Eng. Member"
    },

    {
      "name": "Eng. Randa El Khosht ",
      "role": "Teaching Assistants"
    },
    {
      "name": "Eng.Maha ElFeshawy",
      "role": "Teaching Assistants"
    },
    {
      "name": "Eng.Hadil Hesham Eissawy",
      "role": "Teaching Assistants"
    },
    {
      "name": "Eng.Abdelrahman Moustafa Darwish",
      "role": "Teaching Assistants"
    },
    {
      "name": "Eng. Sondos Tarek Mohamed El Zeiny",
      "role": "Teaching Assistants"
    }
  ]
  let finance = [
    {
      "name": "Prof. Ahmed Madian ",
      "role": "Chair of FC"
    },
    {
      "name": "Prof. Ahmad Khatta",
      "role": "Member"
    },
    {
      "name": "Prof. Hany Hammad",
      "role": "Member"
    },
  ]
  let technical  = [

    {
      "name": "Prof. Hadia El Hennawy ",
      "role": "TPC CoChair (AP)"
    },
    {

      "name": "Prof. Amr Safwat",
      "role": "TPC CoChair (MTT)"
    },
    {
      "name": "Abbas Omar",
      "role": "Member"
    },
    {
      "name": "Abdel Razik Sebak",
      "role": "Member"
    },
    {
      "name": "Adel Abd Elrahman",
      "role": "Member"
    },
    {
      "name": " Ahmed Atteia",
      "role": "Member"
    },
    {
      "name": "Ahmed Khalil",
      "role": "Member"
    },
    {
      "name": "Ahmed Kishk",
      "role": "Member"
    },
    {
      "name": "Alaa Abunjaileh",
      "role": "Member"
    },
    {
      "name": "Alaa Hassan Kamel",
      "role": "Member"
    },
    {
      "name": "Ali Darwish",
      "role": "Member"
    },
    {
      "name": "Aly Fathy",
      "role": "Member"
    },
    {
      "name": "Amal El-Ghazaly ",
      "role": "Member"
    },
    {
      "name": "Amir Mortazawi",
      "role": "Member"
    },
    {
      "name": "Angie Eldamak",
      "role": "Workshops, Tutorials & Exhibition"
    },
    {
      "name": "Ashraf S. Mohra",
      "role": "Member"
    },
    {
      "name": "Atif El-Sherbini",
      "role": "Member"
    },
    {
      "name": "Ayman El-Tager",
      "role": "Member"
    },
    {
      "name": "Darwish A. Mohamed",
      "role": "Member"
    },
    {
      "name": "Diaa Khalil",
      "role": "Co-Chair for Workshops, Tutorials & Exhibition"
    },
    {
      "name": "Dylan Williams",
      "role": "Member"
    },
    {
      "name": "Ezzeldin Soliman",
      "role": "Member"
    },
    {
      "name": "Gamal Hegazi",
      "role": "Member"
    },
    {
      "name": "George Ponchak",
      "role": "Workshops, Tutorials & Exhibition"
    },
    {
      "name": "Goutam Chattopadhyay",
      "role": "Member"
    },
    {
      "name": "Hany Hammad",
      "role": "Member"
    },
    {
      "name": "Hend A. Malhat",
      "role": "Member"
    },
    {
      "name": "Hossam Shalaby",
      "role": "Member"
    },
    {
      "name": "Ibrahim Salem",
      "role": "Workshops, Tutorials & Exhibition"
    },
    {
      "name": "Imran Mehdi",
      "role": "Member"
    },
    {
      "name": "Islam Eshrah",
      "role": "Member"
    },
    {
      "name": "John Papapolymerou",
      "role": "Member"
    },
    {
      "name": "Kawthar Zaki",
      "role": "Member"
    },
    {
      "name": "Madhu Gupta ",
      "role": "Member"
    },
    {

      "name": "Magda El-Shenawee",
      "role": "Member"
    },
    {
      "name": "Magdy Salama",
      "role": "Member"
    },
    {
      "name": "Mahmoud Abdalla",
      "role": "Member"
    },
    {
      "name": "Malek Hussain",
      "role": "Member"
    },
    {
      "name": "Manos Tentizeris",
      "role": "Member"
    },
    {
      "name": "Mohamed Abouzahra",
      "role": "Member"
    },
    {
      "name": "Mohamed Salem",
      "role": "Member"
    },
    {
      "name": "Mona Hella",
      "role": "Member"
    },
    {
      "name": "Nooreldeen Ismail",
      "role": "Member"
    },
    {
      "name": "Peter Siegel",
      "role": "Member"
    },
    {

      "name": "Rafat Mansour",
      "role": "Member"
    },
    {
      "name": "Rashaunda Henderson",
      "role": "Member"
    },
    {
      "name": "Richard Snyder",
      "role": "Member"
    },
    {
      "name": "Rene Marklein",
      "role": "Member"
    },
    {
      "name": "Saber Zein Eldin",
      "role": "Member"
    },
    {
      "name": "Salah Obayya",
      "role": "Member"
    },
    {
      "name": "Samir Elghazaly",
      "role": "Member"
    },
    {
      "name": "Scott Barker",
      "role": "Member"
    },
    {
      "name": "Sedky Riad",
      "role": "Member"
    },
    {
      "name": "Tamer Abuelfadl",
      "role": "Member"
    },
    {

      "name": "Telesphor Kamgaing",
      "role": "Member"
    },
    {
      "name": "Thomas Kaiser",
      "role": "Member"
    },
    {
      "name": "Tim Lee",
      "role": "Member"
    },
    {
      "name": "Uche Wejinya",
      "role": "Member"
    },
    {
      "name": " Usha Varshne",
      "role": "Member"
    },
    {
      "name": "Victor F. Hanna",
      "role": "Member"
    },
    {
      "name": "Waleed Khalil",
      "role": "Member"
    },

  ]
  let workshops = [
    {
      "name": "Prof. Diaa A. M. Khalil  ",
      "role": "ASU"
    },
    {

      "name": "Assoc. Prof.  Angie R. Eldamak",
      "role": "GUC"
    },
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
  res.render('Structure', {over: oversight,
    steering:steering,
    organizing:organizing,
    finance:finance,
    technical:technical,
    workshops:workshops,
    women:women
  });
});

router.get('/Sponsers', function(req, res, next) {
  res.render('Sponsers');
});

router.get('/Registration', function(req, res, next) {
  res.render('Registration');
});

module.exports = router;