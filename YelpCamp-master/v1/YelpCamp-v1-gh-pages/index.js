const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views","./views");

const campgrounds= [
    {id: 1,  name:"table fan" , image :"https://www.crompton.co.in/wp-content/uploads/2019/07/Windmill-Chrome-Table.png" , desc :"this table fan bought just one month ago gives perfect cooling and is in perfect condition and you would also aprove of the price" , price : 150},
    {id: 2,  name:"camping hut 2" , image :"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbuQShr87T0VceHhZ5ThhzlQYW1Zkw0sDPsJ4mn81yUWGA985m" ,desc :"camping hut bought just one month ago is in perfect condition and you would also aprove of the price" , price : 150},
	{id: 3,  name:"cycle" , image :"https://images.jdmagicbox.com/quickquotes/images_main/b07l3q16rd-r-cycles-foldable-adventure-sports-mtb-cycle-with-21-derailleurs-in-black-3s-146670142-2aisc.jpg", desc :"this cycle bought just one month ago is in perfect condition and you would also aprove of the price" , price : 100},
    {id: 4,  name:"camera" , image :"https://www.sigma-global.com/common/cameras/index/images/fp_image.png", desc :"this camera bought just one month ago is in perfect condition and you would also aprove of the price" , price : 300}
	
]


app.get("/",(req,res) =>{
    res.render("landing");
});

app.get("/campgrounds",(req,res) =>{
    res.render("campgrounds",{campgrounds ,campgrounds});
});

app.post("/campgrounds",(req,res)=>{
    const name = req.body.name;
    const image = req.body.image;
	const desc = req.body.desc;
	const price = req.body.price;
    const newCampground = {name :name, image :image, desc :desc ,price :price}
    campgrounds.push(newCampground);

    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req,res) =>{
    res.render("new");
});
app.get("/campgrounds/itempage/:id", (req,res) =>{
	var name;
	var image;
	var desc;
	var price;
	let id = req.params.id;
	campgrounds.forEach(function(campground){
		console.log(campground);
		if(id == parseInt(campground.id)){
			name = campground.name;
			image = campground.image;
			desc = campground.desc;
			price = campground.price;
		}
	});
	let campgroundz = {name:name , image:image , desc:desc , price:price}
    res.render("itempage",{campgroundz,campgroundz});
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("The lender server has started!");
});