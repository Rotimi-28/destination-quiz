const arr1 = []

const arr2 = []

const arr3 = []

const arr4 = []



const compareArrays = function() {
    
    if (arr1.length > arr2.length && arr1.length > arr3.length && arr1.length > arr4.length ) {
        window.alert('array 1 is the longest')

    }
    else if (arr2.length > arr1.length && arr2.length > arr3.length && arr2.length > arr4.length ) {
        
        window.alert('array 2 is the longest')

    }
    else if (arr3.length > arr1.length && arr3.length > arr2.length && arr3.length > arr4.length ) {
        
        window.alert('array 3 is the longest')

    }
    else if (arr4.length > arr1.length && arr4.length > arr2.length && arr4.length > arr3.length ) {
        
        window.alert('array 4 is the longest')

    }
    
}


function increaseLength1() {
    arr1.push('x')
    window.alert('increased by 1')
}
function increaseLength2() {
    arr2.push('x')
    window.alert('increased by 1')
}
function increaseLength3() {
    arr3.push('x')
    window.alert('increased by 1')
}
function increaseLength4() {
    arr4.push('x')
    window.alert('increased by 1')
}





btn.addEventListener("click", compareArrays);