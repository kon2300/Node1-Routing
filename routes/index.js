const express = require('express');
const router = express.Router();

router.use('/signUp', require('./signUp'));
router.use('/signIn', require('./signIn'));

router.get('/', (req, res) => {
  res.render('index', {
    signUplink: {
    href: 'signUp',
    text: 'signUpはこちら' 
    },
    signInlink: {
    href: 'signIn',
    text: 'signInはこちら' 
    }
  })
});

module.exports = router;