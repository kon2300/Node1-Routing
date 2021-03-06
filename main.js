const express = require('express');
const router = require('./routes');

const  app = express();

app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.use('/', router);

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${ app.get('port') }`);
});