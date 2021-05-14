const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('signUp', {
    signInlink: {
      href: '/signIn',
      text: 'signInはこちら' 
      }
    })
});

module.exports = router;