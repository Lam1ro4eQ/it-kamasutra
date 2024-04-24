function round(){
    let num = document.querySelector('.i-2').value;
    let stringNum = num.split('.');
    console.log(num.split('.'));
    if (stringNum[1][2] == '5') {
        num = +num + 0.00000001;
        num = (Math.round(num*100)/100).toFixed(2);
    } else {
        num = (Math.round(num*100)/100).toFixed(2);
    }
    console.log(num);
    document.querySelector('.out-4').textContent = num;
}
document.querySelector('.button-primary').onclick = round;

// .split('.'); 148.325