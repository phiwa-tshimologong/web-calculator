let runningTotal = 0;
let buffer = '0';
let prevOperator;

const screen = document.querySelector('.screen');

const  buttonClick =  (value) => {
    if(isNaN(value)){
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

const handleSymbol = (symbol) => {
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '-':
        case '+':
        case '&divide;':
        case '&times;':
            handleMath(symbol);
            console.log(runningTotal);
            break;
    }
 
}

const handleMath = (symbol) => {
    // console.log(symbol);
    if (buffer === '0'){
        // do nothing
        return;
    }
    const intBuffer = parseInt(buffer);

    if(runningTotal === 0){
        runningTotal = buffer;
    } else {
        flushOperation(intBuffer);
        console.log(runningTotal);
    }
    prevOperator = symbol;
    buffer = '0';

}

const flushOperation = (intBuffer) => {
    if(prevOperator === '&plus;'){
        runningTotal += intBuffer;
    } else if (prevOperator === '&minus;'){
        runningTotal -= intBuffer;
    } else if(prevOperator === '&times;'){
        runningTotal *= intBuffer;
    } else {
        runningTotal += intBuffer;
    }
}

const handleNumber = (numberString) => {
    if(buffer === '0'){
        buffer = numberString;
    } else {
        buffer += numberString
        
    }
    
}



const init = () => {
    document
        .querySelector('.calc-buttons')
        .addEventListener('click', (event) => {
            buttonClick(event.target.innerText);
        })
}

init();