let div = document.querySelector(".container");
let div1 = document.querySelector(".container1");
let button = document.querySelector(".button");
let h2 = document.querySelector("h2");
let item1 = document.createElement("p");
// Step1 fn is created, and a call back function step2 is executed only after step1
function Step1(fn){
    button.addEventListener("click",function(){
        h2.remove();
        fn("Call Back Executed")
    })
 }
 // Step2 fn is created, and a call back function step3 is executed only after step2
 function Step2(data,fn1){
    // set timeout is javascript functionality to delay of 5 seconds.
    setTimeout(function(){
      
         item1.innerHTML = `${data} after 5 Seconds`;
         div1.append(item1);
         fn1("Title:")
     
    },5000)
}
 // async  Step3 fn is created to fetch data from api, and a call back function step4 is executed only after step3
async function Step3(data1,fn2){
    let data = await fetch("https://dummyjson.com/posts");
    let resp = await data.json();

    fn2(resp,data1);
 }
//  step4 is executed only after step3 is executed with a resp parameter, using resp we try to append it to div.
 function Step4(resp,data1){

    for(let i=0; i<30; i++){
        let item = document.createElement("p");

        item.innerHTML = `${data1} ${resp.posts[i].title}`
        div1.remove();
        div.append(item);
    }
    
}
// asynchronous call back hell is executed, because one function is executed after another and a function is passed
// an argument to another function(i.e... call back function)
Step1(function(data){
    Step2(data,function(data1){
        Step3(data1,function(resp){
            Step4(resp,data1)
        })
    })
})