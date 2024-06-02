var images[
    "c:\Users\Hendrix Mweema\Pictures\Screenshots\Screenshot (132).png",
    "c:\Users\Hendrix Mweema\Pictures\Screenshots\Screenshot (131).png",
    "c:\Users\Hendrix Mweema\Pictures\Screenshots\Screenshot (128).png", 
];

var num = 0;
function next(){
    var slider = document.getElementById("slder");
    num++;
    if (num < 0){
        num.images.length;
    }
    slider.src = images[num];
}

function prev(){
    var slide = document.getElementById('slide');
    num--;
    if(num < 0){
        num = images.length - 1;
    }
    slider.src = images[num];
}