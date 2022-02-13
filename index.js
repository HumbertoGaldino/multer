const express = require('express');
const app = express();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null, 'uploads/')
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + "-" + file.originalname)
    }
});
const upload = multer({ storage });

app.set('view engine', 'ejs');

app.get('/', (req,res) => res.render('home'));

app.post('/', upload.single('image'), (req,res) => {
    console.log(req.body, req.file);
    res.send('ok');
});

app.listen(3000, () => console.log('running...'));