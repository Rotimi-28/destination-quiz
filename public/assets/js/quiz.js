const arrUSA = []

const arrItaly = []

const arrJapan = []

const arrMexico = []

/////////////////////////////////////////////////////////////////////////////////////////////

const option1 = document.querySelector('[data-option-id="1"]');
const option2 = document.querySelector('[data-option-id="2"]');
const option3 = document.querySelector('[data-option-id="3"]');
const option4 = document.querySelector('[data-option-id="4"]');

const optionBtn = document.querySelector('.option-btn')
///////////////////////////////////////////////////////////////////////////////////////////////

const mexicoPush = function() {
    arrMexico.push('x')
    console.log('point for Mexico')
    this.style.background = "white";
}

const japanPush = function() {
    arrJapan.push('x')
    console.log('point for Japan')
}

const italyPush = function() {
    arrItaly.push('x')
    console.log('point for Italy')
}

const usaPush = function() {
    arrUSA.push('x')
    console.log('point for USA')
}

option1.addEventListener('click', mexicoPush, {once: true} )


option2.addEventListener('click', japanPush, {once: true} )


option3.addEventListener('click', italyPush, {once: true} )


option4.addEventListener('click', usaPush, {once: true} )



///////////////////////////////////////////////////////////////////////////////////

const compareArrays = function() {
    
    if (arrUSA.length > arrItaly.length && arrUSA.length > arrJapan.length && arrUSA.length > arrMexico.length ) {
        window.alert('USA has most points')

    }
    else if (arrItaly.length > arrUSA.length && arrItaly.length > arrJapan.length && arrItaly.length > arrMexico.length ) {
        
        window.alert('Italy has most points')

    }
    else if (arrJapan.length > arrItaly.length && arrJapan.length > arrUSA.length && arrJapan.length > arrMexico.length ) {
        
        window.alert('Japan has most points')

    }
    else if (arrMexico.length > arrItaly.length && arrMexico.length > arrJapan.length && arrMexico.length > arrUSA.length ) {
        
        window.alert('Mexico has most points')

    }
    
}


/////////////////////////////////////////////////////////////////

const resultsBtn = document.querySelector(".resultsBtn");

resultsBtn.addEventListener("click", compareArrays);