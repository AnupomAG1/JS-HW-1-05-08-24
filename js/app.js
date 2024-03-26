let box = document.querySelector(".box");
let list = document.querySelector(".menu-list");

box.addEventListener('click', function(){
  list.classList.toggle("active");
})




let inc = document.querySelector(".inc");
let counterNum = document.querySelector(".counter_num");
let dec = document.querySelector(".dec");


inc.addEventListener('click', function(){
  let rslt =  counterNum.value = Number(counterNum.value) + 1 ;
  console.log(rslt);
})



dec.addEventListener('click', function(){
    if (Number(counterNum.value) > 1) {
        counterNum.value = Number(counterNum.value) - 1;
    }else{
       dec.style.cursor = "not-allowed"; 
    }
})





let rangeValue = document.querySelector(".range-value");
let rangeResult = document.querySelector(".range-result");


rangeValue.addEventListener('input',function(){
    rangeResult.innerHTML = Number(rangeValue.value);
})




let rendomDisplay = document.querySelector("#random");
let randomBtn = document.querySelector(".random-btn");


randomBtn.addEventListener('click', function(){


    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);


    // console.log(red);
    rendomDisplay.style.backgroundColor = `rgb(${red},${green},${blue})`;
})




let imageDisplay = document.querySelector("#image_display");
let testImg = document.querySelector(".test-img");


imageDisplay.addEventListener('input', function(e){
    
  let url =  URL.createObjectURL(e.target.files[0]);
  testImg.src = url;
    e.preventDefault()
})