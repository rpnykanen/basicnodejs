const app = require('express')();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.listen(port, () => {
  console.log('running on 3000');
});

app.get('/', (req, res) => {
    const param = req.query.param ? req.query.param : '';
    res.send('Heeeyyyy '+param)
});