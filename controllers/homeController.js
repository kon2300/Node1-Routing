module.exports = {
  showSignupPage: (req, res) => {
    res.render('signUp', {
      link: {
        href: '/signIn',
        text: 'signInはこちら' 
      }
    });
  },
  showSigninPage: (req, res) => {
    res.render('signIn', {
      link: {
        href: '/',
        text: 'signUpはこちら' 
      }
    });
  }
};