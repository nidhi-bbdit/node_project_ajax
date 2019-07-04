var express = require('express');
var mongoose  = require('mongoose');
var router = express.Router();
const { body, validationResult } = require('express-validator/check');
const Registration = mongoose.model('Registration');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET registration  page. */

router.get('/registration', (req, res) => {
  res.render('registration', {title : 'Registration Form'});
});

router.post('/registration', [
	check('name').isLength({ min: 3 })
	.withMessage('Please enter a name')
	.withMessage('name must be atleast 3 characters'),
	check('email').isEmail()
	.withMessage('Please enter a valid mail')
	check('password').isLength({ min: 5 })
	.withMessage('Please enter a password')
	.withMessage('password must be atleast 5 characters'),
	], (req, res)=> {
	const errors = validationResult(req);
	if(errors.isEmpty()){
		const registration = new Registration(req.body);
	 	registration.save()
	  .then(() => {res.send('Thank you for your registration!');})
      .catch(() => { res.send('Sorry! Something went wrong.'); });
	}
	

  	res.json({message : "Data saved successfully.", status : "success", errors : errors.array()});
});



module.exports = router;
