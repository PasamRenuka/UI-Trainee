var countDown1 = document.getElementById('count');
// var bg=document.getElementById("img1");
// var bgImage=bg.innerHTML;

var intervalcount=countDown1.innerHTML;
setInterval(function(){
     intervalcount = intervalcount>0 ? intervalcount-1 : 0;
    //   var bgImage = intervalcount%2==0 ? 'https://static.vecteezy.com/system/resources/thumbnails/001/978/304/small/beautiful-watercolor-colorful-rainbow-background-free-vector.jpg' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQDsEzKu_S8qN4qmMZEUmoeYUoNVf_T_11Rn_PXKg&s'
        countDown1.innerHTML=intervalcount;
        // bg.src =bgImage;
        countDown1.style.fontSize = intervalcount * 50 + "px";

},1000)