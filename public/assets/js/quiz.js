const arrUSA = []

const arrItaly = []

const arrJapan = []

const arrMexico = []

const optionBtn = document.querySelector(".option-btn");
const option = optionBtn.textContent;

console.log(option)

const optionCheck1 = function() {
    
    if (option === "I like burgers") {
        arrUSA.push('x')
        console.log('point for USA')
    }
    else if (option === "I like pasta") {
        arrItaly.push('x')
    }
    else if (option === "I like sushi") {
        arrJapan.push('x')
    }
    else if (option === "I like tacos") {
        arrMexico.push('x')
    }
}


optionBtn.addEventListener("click", optionCheck1)


const compareArrays = function() {
    
    if (arrUSA.length > arrItaly.length && arrUSA.length > arrJapan.length && arrUSA.length > arrMexico.length ) {
        window.alert('array 1 is the longest')

    }
    else if (arrItaly.length > arrUSA.length && arrItaly.length > arrJapan.length && arrItaly.length > arrMexico.length ) {
        
        window.alert('array 2 is the longest')

    }
    else if (arrJapan.length > arrItaly.length && arrJapan.length > arrUSA.length && arrJapan.length > arrMexico.length ) {
        
        window.alert('array 3 is the longest')

    }
    else if (arrMexico.length > arrItaly.length && arrMexico.length > arrJapan.length && arrMexico.length > arrUSA.length ) {
        
        window.alert('array 4 is the longest')

    }
    
}




const resultsBtn = document.querySelector(".resultsBtn");

resultsBtn.addEventListener("click", compareArrays);