document.getElementById('events').addEventListener('mousemove',function(){



    console.log("Button Clicked!");
    const sf= document.getElementById('ts');
    sf.innerText='This is abdus_shobhan';
    document.body.style.backgroundColor = 'green';
})
document.getElementById('text-field').addEventListener('keyup',function(event){


    console.log(event.target.value);
   
})
   














// For testing .....
    const d= document.getElementById('hh');
     d.style.backgroundColor='red';
     d.style.textAlign='center';
     d.innerText='Dept. of computer science and technology at thpi';
    

document.getElementById('btnd').addEventListener('click',function(){

      console.log('Button is now on clicked!');
      const t= document.getElementById('hh');    
      t.style.backgroundColor='green';
      t.innerText='You are Lucky One!'
      t.style.border='2px solid salmon';            



})
document.getElementById('btn_upd').addEventListener('click',function(){


    const INputFild= document.getElementById('input_fild');
    const p=document.getElementById('text-field1');

    const value1=INputFild.value;
    p.innerText=value1;
    INputFild.value='';
    
})
// same one....

document.getElementById('btn-post').addEventListener('click',function(){

      const inp= document.getElementById('text-area');
      const value3=inp.value;
    //   console.log(value3);
      const newContainer=document.getElementById('main-container');
      const p=document.createElement('p');
      p.innerText=value3;
      newContainer.appendChild(p);
      
      inp.value='';



})



// new

document.getElementById('newtext').addEventListener('keyup',function(event){

 const text1=event.target.value;
 console.log(text1);
 const delet=document.getElementById('btndl');
 if(text1=='delete'){
    delet.removeAttribute('disabled');
 }
 else{
    delet.setAttribute('disabled',true);
 }
})


// step-1
document.getElementById('btndl').addEventListener('click',function(){


    const del=document.getElementById('dhea');
    del.style.display='none';
})













// document.getElementById('btn-1').addEventListener('click',function(){

//     const inputText1=document.getElementById('text');
//    const commentText=inputText1.value;
//     console.log(commentText);

//     const newcomment=document.getElementById('contai');
//     const p=document.createElement('p');
//     p.innerText=commentText;

//     newcomment.appendChild('p');

//     inputText1.value='';
           




// })