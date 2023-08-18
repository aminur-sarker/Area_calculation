
// function for inputValue

function getInputValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    inputField.value ='';
    return inputValue;
}

// function for new Value
// two parametter = one is id and other is value/innerText

function innerTextValue(elementId , areaCalculation){
const innerTextString = document.getElementById(elementId);
innerTextString.innerText= areaCalculation;
}

// Triangle---------

document.getElementById('triangle=btn').addEventListener('click',function(){
    const base = getInputValue('triangleBase');
    const height=  getInputValue('triangleHeight');
    const area = .5 * base*height;
    innerTextValue('areaTriangleValue',area);
})

// rectangle ------------ 

document.getElementById('rectangle-btn').addEventListener('click',function(){
    const width = getInputValue('rectangleWidth');
    const length =  getInputValue('rectangleLength');
    const area = width * length;
    innerTextValue('areaRectangleValue',area);
})


// Parallelogram-------------

document.getElementById('parallelogram-btn').addEventListener('click',function(){
    const base = getInputValue('parallelogramBase');
    console.log(base);
    const height=  getInputValue('parallelogramHeight');
    console.log(height);
    const area = base*height;
    innerTextValue('areaParallelogramValue',area);
})



