let cookieBtn = document.getElementById('cookie');
let counterDisplay = document.getElementById('counter');
let cpsDisplay = document.getElementById('cps');
let grandmotherBtn = document.getElementById('item-1');
let bakerBtn = document.getElementById('item-2');
let factoryBtn = document.getElementById('item-3');
let cookieCount = Number(localStorage.getItem('cookieCount'));
let cookiePerSecond = Number(localStorage.getItem('cookiePerSecond'));
counterDisplay.innerText = cookieCount;
cpsDisplay.innerText = `${cookiePerSecond}/s`;

cookieBtn.addEventListener('click', function(){
    cookieCount++;
    counterDisplay.innerText = cookieCount;
});

grandmotherBtn.addEventListener('click',function(){
    if(cookieCount >= 100){
        cookieCount-=100;
        counterDisplay.innerText = cookieCount;
        cookiePerSecond = cookiePerSecond + 1;
        cpsDisplay.innerText = `${cookiePerSecond}/s`;
    }
    else{
        alert("You can't afford this");
    }
});

bakerBtn.addEventListener('click',function(){
    if(cookieCount >= 500){
        cookieCount-=500;
        counterDisplay.innerText = cookieCount;
        cookiePerSecond = cookiePerSecond + 10;
        cpsDisplay.innerText = `${cookiePerSecond}/s`;
    }
    else{
        alert("You can't afford this");
    }
});

factoryBtn.addEventListener('click',function(){
    if(cookieCount >= 5000){
        cookieCount-=5000;
        counterDisplay.innerText = cookieCount;
        cookiePerSecond = cookiePerSecond + 100;
        cpsDisplay.innerText = `${cookiePerSecond}/s`;
    }
    else{
        alert("You can't afford this");
    }
});

setInterval(function(){
    cookieCount = cookieCount + cookiePerSecond;
    counterDisplay.innerText = cookieCount;
    saveGame();
}, 1000);

function saveGame(){
    localStorage.setItem('cookieCount',cookieCount);
    localStorage.setItem('cookiePerSecond',cookiePerSecond);
}