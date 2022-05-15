
///////////////////////////////////////////////////

// empty arrays for possible countries to visit
const arrUSA = []

const arrItaly = []

const arrJapan = []

const arrMexico = []

/////////////////////////////////////////////////////////////////////////////////////////////


// select each posisble option 
const option1 = document.querySelector('[data-option-id="1"]');
const option2 = document.querySelector('[data-option-id="2"]');
const option3 = document.querySelector('[data-option-id="3"]');
const option4 = document.querySelector('[data-option-id="4"]');
const option5 = document.querySelector('[data-option-id="5"]');
const option6 = document.querySelector('[data-option-id="6"]');
const option7 = document.querySelector('[data-option-id="7"]');
const option8 = document.querySelector('[data-option-id="8"]');
const option9 = document.querySelector('[data-option-id="9"]');
const option10 = document.querySelector('[data-option-id="10"]');
const option11 = document.querySelector('[data-option-id="11"]');
const option12 = document.querySelector('[data-option-id="12"]');
const option13 = document.querySelector('[data-option-id="13"]');
const option14 = document.querySelector('[data-option-id="14"]');
const option15 = document.querySelector('[data-option-id="15"]');
const option16 = document.querySelector('[data-option-id="16"]');
const option17 = document.querySelector('[data-option-id="17"]');
const option18 = document.querySelector('[data-option-id="18"]');
const option19 = document.querySelector('[data-option-id="19"]');
const option20 = document.querySelector('[data-option-id="20"]');
const option21 = document.querySelector('[data-option-id="21"]');

const optionBtn = document.querySelector('.option-btn')
///////////////////////////////////////////////////////////////////////////////////////////////


// add pics to quiz questions
const pic1 = document.querySelector('[data-pic-id="1"]').src="/assets/images/food.jpeg";

const pic2 = document.querySelector('[data-pic-id="2"]').src="/assets/images/weather.png";

const pic3 = document.querySelector('[data-pic-id="3"]').src="/assets/images/sights.jpg";

const pic4 = document.querySelector('[data-pic-id="4"]').src="/assets/images/accomodations.jpeg";

const pic5 = document.querySelector('[data-pic-id="5"]').src="/assets/images/drinks.jpg";

const pic6 = document.querySelector('[data-pic-id="6"]').src="/assets/images/transportation.png";



///////////////////////////////////////////////////////////////////

// functions to add points 
const mexicoPush1 = function() {
    arrMexico.push('x')
    console.log('point for Mexico')
    this.style.background = "white";
    if (option2.style.background === 'white') {
        option2.style.background = "";
        arrJapan.pop();   
    }
    else if (option3.style.background === 'white') {
        option3.style.background = "";
        arrItaly.pop();
    }
    else if (option4.style.background === 'white') {
        option4.style.background = "";
        arrUSA.pop();
    }
}

const mexicoPush2 = function() {
    arrMexico.push('x')
    console.log('point for Mexico')
    this.style.background = "white";
    if (option5.style.background === 'white') {
        option5.style.background = "";
        arrItaly.pop();   
    }
    else if (option6.style.background === 'white') {
        option6.style.background = "";
        arrUSA.pop();
    }
    else if (option8.style.background === 'white') {
        option8.style.background = "";
        arrJapan.pop();
    }
}

const mexicoPush3 = function() {
    arrMexico.push('x')
    console.log('point for Mexico')
    this.style.background = "white";
    if (option9.style.background === 'white') {
        option9.style.background = "";
        arrUSA.pop();   
    }
    else if (option10.style.background === 'white') {
        option10.style.background = "";
        arrJapan.pop();
    }
    else if (option11.style.background === 'white') {
        option11.style.background = "";
        arrItaly.pop();
    }
}

const mexicoPush4 = function() {
    arrMexico.push('x')
    console.log('point for Mexico')
    this.style.background = "white";
    if (option14.style.background === 'white') {
        option14.style.background = "";
        arrJapan.pop();   
    }
    else if (option15.style.background === 'white') {
        option15.style.background = "";
        arrItaly.pop();
    }
    else if (option16.style.background === 'white') {
        option16.style.background = "";
        arrUSA.pop();
    }
}

const mexicoPush5 = function() {
    arrMexico.push('x')
    console.log('point for Mexico')
    this.style.background = "white";
    if (option18.style.background === 'white') {
        option18.style.background = "";
        arrItaly.pop();   
    }
    else if (option19.style.background === 'white') {
        option19.style.background = "";
        arrUSA.pop();
    }
    else if (option20.style.background === 'white') {
        option20.style.background = "";
        arrJapan.pop();
    }
    else if (option21.style.background === 'white') {
        option21.style.background = "";
    }
}

////////////////////////////////////////////////////

const japanPush1 = function() {
    arrJapan.push('x')
    console.log('point for Japan')
    this.style.background = "white";
    if (option1.style.background === 'white') {
        option1.style.background = "";
        arrMexico.pop();   
    }
    else if (option3.style.background === 'white') {
        option3.style.background = "";
        arrItaly.pop();
    }
    else if (option4.style.background === 'white') {
        option4.style.background = "";
        arrUSA.pop();
    }
}

const japanPush2 = function() {
    arrJapan.push('x')
    console.log('point for Japan')
    this.style.background = "white";
    if (option5.style.background === 'white') {
        option5.style.background = "";
        arrItaly.pop();   
    }
    else if (option6.style.background === 'white') {
        option6.style.background = "";
        arrUSA.pop();
    }
    else if (option7.style.background === 'white') {
        option7.style.background = "";
        arrMexico.pop();
    }
}

const japanPush3 = function() {
    arrJapan.push('x')
    console.log('point for Japan')
    this.style.background = "white";
    if (option9.style.background === 'white') {
        option9.style.background = "";
        arrUSA.pop();   
    }
    
    else if (option11.style.background === 'white') {
        option11.style.background = "";
        arrItaly.pop();
    }

    else if (option12.style.background === 'white') {
        option12.style.background = "";
        arrMexico.pop();
    }
}

const japanPush4 = function() {
    arrJapan.push('x')
    console.log('point for Japan')
    this.style.background = "white";
    if (option13.style.background === 'white') {
        option13.style.background = "";
        arrMexico.pop();   
    }
    else if (option15.style.background === 'white') {
        option15.style.background = "";
        arrItaly.pop();
    }
    else if (option16.style.background === 'white') {
        option16.style.background = "";
        arrUSA.pop();
    }
}

const japanPush5 = function() {
    arrJapan.push('x')
    console.log('point for Japan')
    this.style.background = "white";
    if (option17.style.background === 'white') {
        option17.style.background = "";
        arrMexico.pop();
    }
    else if (option18.style.background === 'white') {
        option18.style.background = "";
        arrItaly.pop();   
    }
    else if (option19.style.background === 'white') {
        option19.style.background = "";
        arrUSA.pop();
    }
    
    else if (option21.style.background === 'white') {
        option21.style.background = "";
    }
}

////////////////////////////////////////////////////

const italyPush1 = function() {
    arrItaly.push('x')
    console.log('point for Italy')
    this.style.background = "white";
    if (option1.style.background === 'white') {
        option1.style.background = "";
        arrMexico.pop();   
    }
    else if (option2.style.background === 'white') {
        option2.style.background = "";
        arrJapan.pop();
    }
    else if (option4.style.background === 'white') {
        option4.style.background = "";
        arrUSA.pop();
    }
}

const italyPush2 = function() {
    arrItaly.push('x')
    console.log('point for Italy')
    this.style.background = "white";
    if (option8.style.background === 'white') {
        option8.style.background = "";
        arrJapan.pop();   
    }
    else if (option6.style.background === 'white') {
        option6.style.background = "";
        arrUSA.pop();
    }
    else if (option7.style.background === 'white') {
        option7.style.background = "";
        arrMexico.pop();
    }
}

const italyPush3 = function() {
    arrItaly.push('x')
    console.log('point for Italy')
    this.style.background = "white";
    if (option9.style.background === 'white') {
        option9.style.background = "";
        arrUSA.pop();   
    }
    
    else if (option10.style.background === 'white') {
        option10.style.background = "";
        arrJapan.pop();
    }

    else if (option12.style.background === 'white') {
        option12.style.background = "";
        arrMexico.pop();
    }
}

const italyPush4 = function() {
    arrItaly.push('x')
    console.log('point for Italy')
    this.style.background = "white";
    if (option13.style.background === 'white') {
        option13.style.background = "";
        arrMexico.pop();   
    }
    else if (option14.style.background === 'white') {
        option14.style.background = "";
        arrJapan.pop();
    }
    else if (option16.style.background === 'white') {
        option16.style.background = "";
        arrUSA.pop();
    }
}

const italyPush5 = function() {
    arrItaly.push('x')
    console.log('point for Italy')
    this.style.background = "white";
    if (option17.style.background === 'white') {
        option17.style.background = "";
        arrMexico.pop();
    }
    else if (option20.style.background === 'white') {
        option20.style.background = "";
        arrJapan.pop();   
    }
    else if (option19.style.background === 'white') {
        option19.style.background = "";
        arrUSA.pop();
    }
    
    else if (option21.style.background === 'white') {
        option21.style.background = "";
    }
}


///////////////////////////////////////////////////////////////



const usaPush1 = function() {
    arrUSA.push('x')
    console.log('point for USA')
    this.style.background = "white";
    if (option1.style.background === 'white') {
        option1.style.background = "";
        arrMexico.pop();   
    }
    else if (option2.style.background === 'white') {
        option2.style.background = "";
        arrJapan.pop();
    }
    else if (option3.style.background === 'white') {
        option3.style.background = "";
        arrItaly.pop();
    }
}

const usaPush2 = function() {
    arrUSA.push('x')
    console.log('point for USA')
    this.style.background = "white";
    if (option8.style.background === 'white') {
        option8.style.background = "";
        arrJapan.pop();   
    }
    else if (option5.style.background === 'white') {
        option5.style.background = "";
        arrItaly.pop();
    }
    else if (option7.style.background === 'white') {
        option7.style.background = "";
        arrMexico.pop();
    }
}

const usaPush3 = function() {
    arrUSA.push('x')
    console.log('point for USA')
    this.style.background = "white";
    if (option11.style.background === 'white') {
        option11.style.background = "";
        arrItaly.pop();   
    }
    
    else if (option10.style.background === 'white') {
        option10.style.background = "";
        arrJapan.pop();
    }

    else if (option12.style.background === 'white') {
        option12.style.background = "";
        arrMexico.pop();
    }
}

const usaPush4 = function() {
    arrUSA.push('x')
    console.log('point for USA')
    this.style.background = "white";
    if (option13.style.background === 'white') {
        option13.style.background = "";
        arrMexico.pop();   
    }
    else if (option14.style.background === 'white') {
        option14.style.background = "";
        arrJapan.pop();
    }
    else if (option15.style.background === 'white') {
        option15.style.background = "";
        arrItaly.pop();
    }
}

const usaPush5 = function() {
    arrUSA.push('x')
    console.log('point for USA')
    this.style.background = "white";
    if (option17.style.background === 'white') {
        option17.style.background = "";
        arrMexico.pop();
    }
    else if (option20.style.background === 'white') {
        option20.style.background = "";
        arrJapan.pop();   
    }
    else if (option18.style.background === 'white') {
        option18.style.background = "";
        arrItaly.pop();
    }
    
    else if (option21.style.background === 'white') {
        option21.style.background = "";
    }
}

/////////////////////////////////////////////

const noPush = function() {
    console.log('no point pushed');
    this.style.background = "white";
    if (option17.style.background === 'white') {
        option17.style.background = "";
        arrMexico.pop();
    }
    else if (option18.style.background === 'white') {
        option18.style.background = "";
        arrItaly.pop();   
    }
    else if (option19.style.background === 'white') {
        option19.style.background = "";
        arrUSA.pop();
    }
    
    else if (option20.style.background === 'white') {
        option20.style.background = "";
        arrJapan.pop();
    }
}





/////////////////////////////////////////////////////////

// event listeners for options

//question 1
option1.addEventListener('click', mexicoPush1, {once: true} );


option2.addEventListener('click', japanPush1, {once: true} )


option3.addEventListener('click', italyPush1, {once: true} )


option4.addEventListener('click', usaPush1, {once: true} )

//question 2
option5.addEventListener('click', italyPush2, {once: true} )


option6.addEventListener('click', usaPush2, {once: true} )


option7.addEventListener('click', mexicoPush2, {once: true} )


option8.addEventListener('click', japanPush2, {once: true} )

//question 3
option9.addEventListener('click', usaPush3, {once: true} )


option10.addEventListener('click', japanPush3, {once: true} )


option11.addEventListener('click', italyPush3, {once: true} )


option12.addEventListener('click', mexicoPush3, {once: true} )

//question 4
option13.addEventListener('click', mexicoPush4, {once: true} )


option14.addEventListener('click', japanPush4, {once: true} )


option15.addEventListener('click', italyPush4, {once: true} )


option16.addEventListener('click', usaPush4, {once: true} )


//question 5
option17.addEventListener('click', mexicoPush5, {once: true} )


option18.addEventListener('click', italyPush5, {once: true} )


option19.addEventListener('click', usaPush5, {once: true} )


option20.addEventListener('click', japanPush5, {once: true} )


option21.addEventListener('click', noPush, {once: true} )



///////////////////////////////////////////////////////////////////////////////////

const resultsBtn = document.querySelector(".resultsBtn");

var displayErrorModal = function () {
    // When the user clicks on the button, open the modal
    // mainDiv.classList.remove("has-background-dark");

    // Get the modal
    var modal = document.querySelector("#myModal");

    // Get the <span> element that closes the modal
    var span = document.querySelector(".close");

    modal.style.display = "flex";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
}

var displayErrorModal2 = function () {
    // When the user clicks on the button, open the modal
    // mainDiv.classList.remove("has-background-dark");

    // Get the modal
    var modal2 = document.querySelector("#myModal2");

    // Get the <span> element that closes the modal
    var span2 = document.querySelector(".close2");

    modal2.style.display = "flex";

    // When the user clicks on <span> (x), close the modal
    span2.onclick = function() {
        modal2.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal2) {
        modal2.style.display = "none";
        }
    }
}

const compareArrays = function() {

    arrLengths = arrMexico.length + arrItaly.length + arrJapan.length + arrUSA.length; 
    
    if (arrLengths === 0) {
        displayErrorModal();
    }
    else if ( arrLengths < 4 ) {
        displayErrorModal2();
        
    }
    else if (arrUSA.length > arrItaly.length && arrUSA.length > arrJapan.length && arrUSA.length > arrMexico.length ) {
        
        console.log('USA has most points')
        resultsBtn.href='/results1'
        
    }
    else if (arrItaly.length > arrUSA.length && arrItaly.length > arrJapan.length && arrItaly.length > arrMexico.length ) {
        
        console.log('Italy has most points')
        resultsBtn.href='/results2'

    }
    else if (arrJapan.length > arrItaly.length && arrJapan.length > arrUSA.length && arrJapan.length > arrMexico.length ) {
        
        console.log('Japan has most points')
        resultsBtn.href='/results3'

    }
    
    else if (arrMexico.length > arrItaly.length && arrMexico.length > arrJapan.length && arrMexico.length > arrUSA.length ) {
        
        console.log('Mexico has most points')
        resultsBtn.href='/results4'


    }

    else {
        resultsBtn.href='/results'
    }
    

    
    
}


/////////////////////////////////////////////////////////////////



resultsBtn.addEventListener("click", compareArrays);