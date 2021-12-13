const express=require('express');
const ejs=require('ejs');
const app= new express(); 
const bodyParser=require('body-parser');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public")); 

app.get("/", (req,res)=>{
    res.render(`index`);
}); 

app.get("/workouts", (req,res)=>{
    res.render(`html/workouts`);
}); 
app.get("/calender", (req,res)=>{
    res.render(`html/calender`);
}); 
app.get("/recipes", (req,res)=>{
    res.render(`html/recipes`);
}); 

app.post('/journal', function(req,res){
    res.render('journal',{entry: req.body.entry});
})


const PORT = process.env.PORT|| 200; 
app.listen(PORT, ()=> console.log(`server running on ${PORT}`)); 