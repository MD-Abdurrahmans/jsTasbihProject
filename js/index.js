

let count =0;
let subCount= document.getElementById("subCount");

function subBtn(){
    count++;
    let subCountString= subCount.innerText;
let subCountNumber=parseFloat(subCountString);
let current=subCountNumber.innerText =count;
subCount.innerText =current;
    console.log("click")
}


function subMinusBtn(){

  console.log(count);
   
  if(count>=1){

    console.log("coutn 1")
    count--;
    let subCountString= subCount.innerText;
    let subCountNumber=parseFloat(subCountString);
    let current=subCountNumber.innerText =count;
    subCount.innerText =current;
  }else{
    return false;
  }

        
}

let count1 =0;
let alhumCount= document.getElementById("alhumCount");

function alhumBtn(){
    count1 ++;
    let alhumCountString= alhumCount.innerText;
let alhumCountNumber=parseFloat(alhumCountString);
let current=alhumCountNumber.innerText =count1;
alhumCount.innerText =current;
 
}


function alhumMinusBtn(){


  if(count1>=1){

    count1 --;
    let alhumCountString= alhumCount.innerText;
    let alhumCountNumber=parseFloat(alhumCountString);
    let current=alhumCountNumber.innerText =count1;
    alhumCount.innerText =current;
  }else{
    return false;
  }

        
}
let count2 =0;
let akbarCount= document.getElementById("akbarCount");

function akbarBtn(){
    count2 ++;
    let akbarCountString= akbarCount.innerText;
let akbarCountNumber=parseFloat(akbarCountString);
let current=akbarCountNumber.innerText =count2;
akbarCount.innerText =current;
 
}


function akbarMinusBtn(){


  if(count2>=1){

    count2 --;
    let akbarCountString= akbarCount.innerText;
    let akbarCountNumber=parseFloat(akbarCountString);
    let current=akbarCountNumber.innerText =count2;
    akbarCount.innerText =current;
  }else{
    return false;
  }

        
}