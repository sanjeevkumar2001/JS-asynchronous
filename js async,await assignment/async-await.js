// Async/Await in JS
let div = document.querySelector(".container");
 async function can1(){
   try{
    let data = await fetch("https://dummyjson.com/posts");
    let resp = await data.json();
    console.log(resp);
    let crd = document.querySelector(".load");
 
        crd.remove();
        for(let i=0;i<30;i++){
            let item = document.createElement("p");
           let item1 = document.createElement("p");
           let item2 = document.createElement("p");
           let item3 = document.createElement("p");
           let item4 = document.createElement("p");
           let item5 = document.createElement("p");
           let item6 = document.createElement("p");
           let item7= document.createElement("p");
           let item10 = document.createElement("hr")
           
     
         
           item1.innerHTML = `Id: ${resp.posts[i].id}`;
          
  
           item.innerHTML = `Body: ${resp.posts[i].body}`;
          
           item2.innerHTML = `Dislikes: ${resp.posts[i].reactions.dislikes}`;
           item4.innerHTML = `Reactions: ${resp.posts[i].reactions.likes}`;
           item3.innerHTML =  `Tags: ${resp.posts[i].tags}`;
           item5.innerHTML = `Title: ${resp.posts[i].title}`;
           item6.innerHTML = `User-ID: ${resp.posts[i].userId}`;
           item7.innerHTML = `Views: ${resp.posts[i].views}`;
           div.appendChild(item1);
           div.appendChild(item);
          
            div.appendChild(item2);
            div.appendChild(item4);
            div.appendChild(item3);
            div.appendChild(item5);
            div.appendChild(item6);
            div.appendChild(item7);
            div.appendChild(item10);
        }

    }
    catch(err){
        let crd = document.querySelector(".load");
        setTimeout(function(){
            crd.remove();
            let item8 = document.createElement("p");
            let item9 = document.createElement("p");
            item8.innerHTML ="Operation Timed Out (or) Pls switch on Internet."
            item9.innerHTML = err;
            div.appendChild(item8);
            div.appendChild(item9);
        },3000);
      

    
    }
       
}
can1();