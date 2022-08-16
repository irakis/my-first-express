const express = require('express');
const path = require('path');
const app = express();

app.use((req, res, next) => {
    res.show = (name) => {
        res.sendFile(path.join(__dirname, `./public/${name}`));
    },
    next();
});

app.use('/user', (req, res) => {
  res.send('You have to be logged in.')
});

app.get( '/' , (req, res) => {
  res.show('home.html');
});

app.get( '/home' , (req, res) => {
  res.show('home.html');
});

app.get( '/about', (req, res) => {
  res.show('about.html');
})

app.use(( req, res ) => {
  res.status(400).sendFile(path.join(__dirname,'404.jpg'));
});
  
app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
