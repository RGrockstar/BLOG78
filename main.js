var images = [
"20190611_134540 (1).jpg",
"PicsArt_01-09-07.21.25.png",
"PicsArt_01-09-07.19.41.png",
"PicsArt_01-09-07.14.12.png",
"PicsArt_01-09-07.29.28.png"
];
var names = [
"Family photo",
"Uma Gupta",
"Aastha Gupta",
"Rishabh Gupta",
"Amit Gupta"
];
var i=0;
function Nextslide(){
i++;
var members=4
if(i>members)
{
i=0;
}
var updatedImage=images[i];
var updatedName=names[i];
document.getElementById("image1").src=updatedImage;
document.getElementById("name1").innerHTML=updatedName;
}