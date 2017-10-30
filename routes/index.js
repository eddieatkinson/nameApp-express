var express = require('express');
var router = express.Router();

var nameArray = [
	'Eddie',
	'Valerie',
	'Allyson',
	'Michael',
	'Scott'
];

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/search', (req, res)=>{
	res.send(req.query.nameSearch);
});

router.post('/search', (req, res)=>{
	// res.send(req.body.nameSearch);
	var userName = req.body.nameSearch;
	var onTheList = "not ";
	for(let i = 0; i < nameArray.length; i++){
		if(userName == nameArray[i]){
			onTheList = "";
		}
	}
	res.render('search', { userName: userName, onTheList: onTheList });
});

router.post('/nameAdded', (req, res)=>{
	var nameToBeAdded = req.body.nameToBeAdded;
	nameArray.push(nameToBeAdded);
	res.render('nameAdded', { nameToBeAdded: nameToBeAdded, nameArray: nameArray });
});

module.exports = router;
