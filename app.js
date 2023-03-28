const express= require('express');
const bodyParse= require('body-parser');



const app= express();
const PORT= process.env.PORT || 3977;


app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());


app.get("/", (req, res) =>{
    res.send('Hello world');
});


app.listen(PORT, () =>{
    console.log(`Server ready on port ${PORT}`);
});