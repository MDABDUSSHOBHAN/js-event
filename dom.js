function makeRed(){

    document.body.style.backgroundColor ='red'
}
function makeYellow(){

    document.body.style.backgroundColor='yellow'
}
// orange
const sd=document.getElementById('orange');
sd.addEventListener('click',function(){

    document.body.style.backgroundColor='green'
})
function evenHand(){
    const h=document.getElementById('ashead');
    h.innerText='Bangladesh is a smart Country!'
}

function handlar(){

    const hea=document.getElementById('hea3');
    hea.innerText='This is abdus_shobhan';
}
// Option -3                                      
document.getElementById('even').addEventListener('click',function(){

    const hean=document.getElementById('hea3');
    hean.innerText='Default Text';    
})
// New Stap..
document.getElementById('btn-update').addEventListener('click' ,function(){

        //    step-1
       const inputFild= document.getElementById('input-fild');
       const sdd= inputFild.value;
       const p=document.getElementById('pcont');
      p.innerText=sdd;
      inputFild.value=''; 


})

document.getElementById('btn-2').addEventListener('mouseenter',function(){

     const inputText=document.getElementById('text1');
    //  console.log(inputText);
     const input= inputText.value;
    console.log('Document Clicked!');
    console.log(input);
    const comment=document.getElementById('secontainer');
    const p=document.createElement('p');
    comment.appendChild(p);
    p.innerText=input;
    inputText.value='';
    


})