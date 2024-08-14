const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');
const input4 = document.querySelector('.input4');
const btn = document.querySelector('.btn');



let btnCl = () => {
const value1 = parseFloat(input1.value);
const value2 = parseFloat(input2.value);

if (isNaN(value1) || isNaN(value2)) {
    alert('Please enter valid numbers.');
    return;
    
}
input3.value = value2
input4.value = value1;

}

btn.addEventListener('click', () => {
btnCl();
})
