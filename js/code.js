var dayDiffCase = Math.floor((new Date(Date()).getTime() - new Date("02/09/2023").getTime()) / (1000 * 3600 * 24), 0);
var dayDiffOp = Math.floor((new Date(Date()).getTime() - new Date("09/21/2021").getTime()) / (1000 * 3600 * 24), 0); 
var dayDiffS2 = Math.floor((new Date(Date()).getTime() - new Date("03/22/2023").getTime()) / (1000 * 3600 * 24), 0); 

function randombg(){
  var random= Math.floor(Math.random() * 6) + 0;
  var bigSize = ["url('http://placehold.it/300&text=banner1')",
                 "url('http://placehold.it/300&text=banner2')",
                 "url('http://placehold.it/300&text=banner3')",
                 "url('http://placehold.it/300&text=banner4')",
                 "url('http://placehold.it/300&text=banner5')",
                 "url('http://placehold.it/300&text=banner6')"];
  document.getElementById("random").style.backgroundImage=bigSize[random];
}