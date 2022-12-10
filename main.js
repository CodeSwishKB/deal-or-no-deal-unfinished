var totalCase = 24
var prizesSplit = 2
var cases = []


let prizes = ["1",
    "5",
    "10",
    "25",
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "750",
    "1,000",
    "5,000",
    "7,500",
    "10,000",
    "25,000",
    "50,000",
    "100,000",
    "200,000",
    "300,000",
    "400,000",
    "500,000",
    "1,000,000",
    "2,000,000",
]
// var prize1 = document.querySelector('#price1')
// var prize2 = document.querySelector('#price2')

let randomPrize = [...[...prizes].sort((a, b) => 0.5 - Math.random())]   //random prize
let popup = document.querySelector('#popup');
let swapPop = document.querySelector('#swap');
loadCases();

selectedCase('Your Lucky Case Number')

function selectedCase(caseNumber){
    var selCase = `<div id='first-choice'>${caseNumber}</div>`
    document.querySelector('#first-choice').innerHTML = selCase;
}

let a = prizes.forEach((value,i)=>{
    cases.push(randomPrize[i])

    if((i+1) <=  totalCase/prizesSplit ){
       document.getElementById('price1').innerHTML += ` <div id="prizes${i+1}">${value}`
    }else{
       document.getElementById('price2').innerHTML += ` <div id="prizes${i+1}">${value}`
    }
})

// function loadPrize1(p,n){
//     for (var i = 0; i < 12; i++){
//         var j = i, k = (j+1);
//         var casePrize = `<div id='prizeVal${p}'>${n}</div>`
//         document.querySelector('#price1').innerHTML += casePrize;
//     }
// }

// function loadPrize2(p,n){
//     for (var i = 0; i < 12; i++){
//         var j = i, k = (j+1);
//         var casePrize = `<div id='prizeVal${p}'>${randomPrize[n-1]}</div>`
//         document.querySelector('#price2').innerHTML += casePrize;
//     }
// }

function loadCases(k){
        for (var i = 0; i < 24; i++){
            var j = i, k = (j+1)
            var caseEl = `<div id='casesN${k}' onclick='caseChoice(${k})'>${k}</div>`
            document.querySelector('#cases').innerHTML += caseEl;
    }

    // prizes.forEach((val, idx) => {
    //     casess.push({caseNumber: idx, prize: randomPrize[idx]})
    //     console.log('idx')

    // })
}



var firstChoice = 0;
var selCount = 0; 

function caseChoice(n){
    disabledCase(n);
  selCount++
//   let amountTextBox = `.price${randomPrize[n-1]}`
 
  if (selCount == 1){
    selectedCase(`<div style="border-radius: 10px;
    font-family: Eurostile;
    font-weight: bolder;
    text-align: center;
    background-image: url(../assests/img/briefcase3.png);
    background-repeat: no-repeat;
    line-height: 110px;
    font-size: 50px;
    color: black;" >${n}</div>`)
    firstChoice = n-1;
  } else if(selCount <= 2 && selCount >= 23){

}
  else {
     
    document.querySelector('#casetxt').innerHTML = randomPrize[n-1]
    modal()
    // swa()
    // if(selCount === (prizes.length-1)){
    //     document.getElementById("swap").style.display = "block"
    // }
}

}

function disabledPrize(){
    
}

function disabledCase(c){
    document.getElementById(`casesN${c}`).style.visibility = "hidden";


}

function modal(){
    popup.classList.add("open-popup")
    setTimeout(() => {
        popup.classList.remove("open-popup")
    },1000);
}

function swa(){
     document.querySelector('#popup')
    swapPop.classList.add("open-popup")
    setTimeout(() => {
        swapPop.classList.remove("open-popup")
    });
}


// function showPrize(){
//     cases(`${randomPrize[c]}`)
// }



// let popup = document.querySelector('#popup')


// const c = document.querySelector('#cases');


// let count = 0;

// c.addEventListener('click', (n) => {
//     count++;

//     if (count == 1){
        
//     }

// });


// // function selectedCase(caseVal){
// //     let selCase = `div  id="first-choice">${caseVal}</div>`;
// //     document.getElementById('cases').innerHTML = selCase;
// // }

// // let count = 0;

// // function casesClicked(n){  
// //     count++;
// //     if (count == 1){
// //         selectedCase(`<span style= "font-size: 10px;">Your Choice</span><br>Case${n}`);
// //     }
// // }
