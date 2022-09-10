const express = require('express');
const app = express();
const bodyParser=require('body-parser');
global.config=require('./config.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('./controllers')); //routes which does't require token authentication should be placed here
app.use(require('./middlewares/TokenValidator')); //middleware to authenticate token
app.use(require('./controllers/account')); //Apis to protect and use token should be placed here



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(config.port,function() {
  console.log("Listening at Port "+config.port);
});