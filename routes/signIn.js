const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('signIn', {
    signUplink: {
      href: '/signUp',
      text: 'signUpはこちら' 
      }
    })
});

module.exports = router;