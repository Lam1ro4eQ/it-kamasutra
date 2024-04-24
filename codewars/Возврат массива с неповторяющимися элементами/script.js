const arr = [1,1,2,3,4,4,5,6,6,7,7,8,9];


function withoutRepeat (arr) {
    let newArr = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++ ) {
        const currentItem = arr[i];
        let count = 0;
        for ( let k = 0; k < arr.length; k++){
            if (currentItem === arr[k]) {
                count++;
            }
        }
        if (count < 2) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
withoutRepeat(arr);

//Возвращаем массив с элементами не повторяющимися