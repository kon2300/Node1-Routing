const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    signUplink: {
    href: '/signUp',
    text: 'signUpはこちら' 
    },
    signInlink: {
    href: '/signIn',
    text: 'signInはこちら' 
    }
  })
});

router.get('/signIn', (req, res) => {
  res.render('signIn', {
    signUplink: {
      href: '/signUp',
      text: 'signUpはこちら' 
      },
    })
});

router.get('/signUp', (req, res) => {
  res.render('signUp', {
    signInlink: {
      href: '/signIn',
      text: 'signInはこちら' 
      }
    })
});

module.exports = router;