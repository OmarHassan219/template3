let nums = document.querySelectorAll(".numo");
let section = document.querySelector(".awesome-stats");
let start = false ; 
let scrollup= document.querySelector(".scrolup");
let myspan = document.querySelectorAll(".skills .pro span");
let mysectionskills = document.querySelector(".skills");







let myinp = document.querySelector("[type = email ]");

let number = document.querySelector(".zeko");
let range = document.querySelector(".reko");
let mymax= myinp.getAttribute("maxlength");



window.onscroll=function(){


if(window.scrollY >= section.offsetTop){
if(!start){
nums.forEach((a) => startcount(a));
start=true;
}
}


if(window.scrollY >= mysectionskills.offsetTop){


    myspan.forEach(function(e){
    
    
    e.style.width = e.dataset.progress ; 
    
    
    })
    }
    
    if(window.scrollY > 10000 ){
    
        scrollup.style.display = "flex" ; 
        
        
        }else{
        
            scrollup.style.display="none"
        
        
        }


}




function startcount(elemnt){

let goal = elemnt.dataset.goal ; 
let count = setInterval(function(){

elemnt.textContent++ ; 

if(elemnt.textContent === goal){
clearInterval(count)

}


}, 10/goal);


}















let countdown = new Date("Mar 12,2023 14:02:00").getTime();
let days  = document.querySelector(".day h1");
    let hours  = document.querySelector(".hours h1");
    let minutes  = document.querySelector(".minutes h1");
    let seconds  = document.querySelector(".seconds h1");


let count = setInterval(function(){

    let daydate = new Date().getTime();



    
  
    
    let diff = countdown -daydate ; 
    
   
    days.innerHTML =  Math.floor (diff / (1000 * 60 * 60 * 24 )) < 10 ? `00${ Math.floor (diff / (1000 * 60 * 60 * 24 ))}` : Math.floor (diff / (1000 * 60 * 60 * 24 )) < 100 ? `0${ Math.floor (diff / (1000 * 60 * 60 * 24 )) }` :  Math.floor (diff / (1000 * 60 * 60 * 24 ))  ;
    hours.innerHTML= Math.floor((diff % (1000 * 60 * 60 * 24 ) / (1000 * 60 * 60)))<10 ? `0${Math.floor((diff % (1000 * 60 * 60 * 24 ) / (1000 * 60 * 60)))}`:Math.floor((diff % (1000 * 60 * 60 * 24 ) / (1000 * 60 * 60))) ;
    minutes.innerHTML=  Math.floor((diff % (1000 * 60 * 60 * 24 ) % (1000 * 60 * 60)) / (1000 *60))< 10 ? `0${Math.floor((diff % (1000 * 60 * 60 * 24 ) % (1000 * 60 * 60)) / (1000 *60))}` : Math.floor((diff % (1000 * 60 * 60 * 24 ) % (1000 * 60 * 60)) / (1000 *60));
    let remainseconds = diff % (1000 * 60 * 60 * 24 ) % (1000 * 60 * 60) % (1000 *60);
    seconds.innerHTML =Math.floor(remainseconds / (1000) ) < 10 ? `0${Math.floor(remainseconds / (1000) )}` : Math.floor(remainseconds / (1000) );
    if(seconds.innerHTML == 0 ){
        
                clearInterval(count);
               
            }
    


}, 1000);





// console.log(mymax);
number.innerHTML = mymax ;
myinp.oninput=function(){

number.innerHTML = (mymax -  myinp.value.length )  ; 
number.innerHTML == 0 ? number.classList.add("zero") :  number.classList.remove("zero") ; 

range.style.width = `${myinp.value.length * 100 / mymax }%` 












}














function scroup(){



window.scrollTo(0 ,0);






}







