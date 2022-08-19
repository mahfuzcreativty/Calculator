const display1 = document.querySelector('#dis1')

const display2 = document.querySelector('#dis2')

function getNum(num) {
    display1.value += num
}

function del() {
    display1.value = display1.value.substr(0, display1.value.length-1)
}

function clearAll() {
    display1.value = ' '
    display2.value = ' '
}

function calculateAll() {
    display2.value = eval(display1.value)
}