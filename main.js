const homeController = require('./controllers/homeController');

const express = require('express');
const  app = express();

app.set('view engine' , 'ejs');
app.set('port', process.env.PORT || 3000);

app.get('/', homeController.showSignupPage);
app.get('/signIn', homeController.showSigninPage);

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${ app.get('port') }`);
});