//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

function squareDigits(num){
  let txtArr = String(num).split('');
  let out = '';
  for ( let i = 0; txtArr.length > i; i++ ) {
    out += Math.pow(txtArr[i], 2);
  }
  out = Number(out);
  console.log(typeof(out));
  console.log(out);
  return out;
}


// squareDigits(9123);




// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names){
  let out = '';
  for ( let i = 0; names.length > i; i++ ) {
    for ( let item in names[i]) {
      if ( i == names.length - 1) {
        out += `${names[i][item]}`;
      } else if ( i !== names.length - 2 ) {
        out += `${names[i][item]}, `;
        
      } else {
        out += `${names[i][item]} & `;
      }
    }
  }
  return out;
}
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Alex'} ]);
// returns 'Bart, Lisa & Maggie'




//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  let out = '';
  if ( number%2 ) {
    out = 'Odd';
  } else {
    out = 'Even';
  }
  return out;
}

//even_or_odd(22);




// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
  str = str.toLowerCase();
    for ( let i = 0; str.length > i; i++) {
      if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
        return false;
      }
    } 
     return true;
}
//console.log(isIsogram('huiloh'));




// На фабрике принтер печатает этикетки для коробок. Для одного вида коробок принтер должен использовать цвета, которые для простоты названы буквами от a to m.
// Цвета, используемые принтером, записываются в контрольную строку. Например, "хорошая" контрольная строка будет aaabbbbhaijjjmозначать, что принтер трижды использовал цвет a, четыре раза цвет b, один раз цвет h, затем один раз цвет a ...
// Иногда возникают проблемы: отсутствие цветов, техническая неисправность и "плохая" контрольная строка получается, например, aaaxbbbbyyhwawiwjjjwwmс буквами не из a to m.
// Вы должны написать функцию, printer_errorкоторая по заданной строке будет возвращать частоту ошибок принтера в виде строки, представляющей рациональное число, числителем которого является количество ошибок, а знаменателем - длина контрольной строки. Не уменьшайте эту дробь до более простого выражения.
// Строка имеет длину больше или равна единице и содержит только буквы от aдо z.
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"
// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"
      
function printerError(s) {
  let tmp = s.split('');
  let sum = 0;
  let err = 0;
  for ( let i = 0; tmp.length > i; i++) { //общее кол-во
    sum++;
    if ( /[^a-m]/gm.test(tmp[i])) {   // кол-во не входящих в диапазон a to m
      err++;
    }
  }
  let res = `${err}/${sum}`;
  return res;
}

// printerError('aaabbbbhaijjjm');





// Вы, наверное, знаете систему «лайков» по ​​Facebook и другим страницам. Люди могут "лайкать" сообщения в блогах, изображения или другие предметы. Мы хотим создать текст, который должен отображаться рядом с таким элементом.
// Реализуйте функцию, которая принимает массив, содержащий имена людей, которым нравится предмет. Он должен возвращать отображаемый текст, как показано в примерах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  if (names.length == 0) {
    return "no one likes this";
  } else if (names.length == 1) {
    return names[0] + " likes this";  
  } else if (names.length == 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (names.length == 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
  }
}





// Тролли атакуют ваш раздел комментариев!
// Обычный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
// Примечание: для этого ката y не считается гласной.

function disemvowel(str) {
  let outputString = (str.replace(/[aeiou]/gi, ""));
  console.log(outputString);
  return outputString;
}
//  disemvowel("This website is for losers LOL!");



// В этом ката вы создадите функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.

function filter_list(l) {
  let newarr = [];
  for ( let i = 0; l.length > i; i++ ) {
    if (typeof l[i] == "number") {
      newarr.push(l[i]);
    }
  }
  return newarr;
}
// filter_list([1,2,'aasf','1','123',123]);




// Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.

function digitize(n) {
  
  let arr = n.toString().split('').reverse();
  
  for ( let i = 0; arr.length > i; i++ ) {
    arr[i] = Number(arr[i]);
  }
  console.log(arr);
  return arr;
}
//  digitize(1234567);




// Ваша задача - отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число - позиция, которую слово должно занимать в результате.
// Примечание. Числа могут быть от 1 до 9. Таким образом, первым словом будет 1 (а не 0).
// Если входная строка пуста, вернуть пустую строку. Слова во входной строке будут содержать только действительные последовательные числа.
// Примеры
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
  return words.split(" ").sort(function(a,b) {
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ');
}
// order("4of Fo1r pe6ople g3ood th5e the2");




// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  let sum = 0;
  for ( let i = 0; array.length > i; i++ ) {
  sum = sum + array[i];
 }
 console.log(sum);
  if (sum%2) {
    return 'odd';
  } else { return 'even'}
  
}

// oddOrEven([0, -1, -5]);




// Ваша цель в этом ката - реализовать функцию различия, которая вычитает один список из другого и возвращает результат.
// Он должен удалить все значения из списка a, которые присутствуют в списке, bсохраняя их порядок.
// arrayDiff([1,2],[1]) == [2]
// Если значение присутствует в b, все его вхождения должны быть удалены из другого:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  let arr = [];
  for ( let item of a) {
    if (!b.includes(item)) {
      arr.push(item);
    }
  }
  return arr;
  // for ( let i = 0; a.length > i; i++ ) {
  //   for ( let k = 0; b.length > k; k++ ) {
  //     console.log(a[i]);
  //     if (a[i] == b[k]) {
  //       a.splice(a[i], 1);
  //     }
  //   }
  // }
  // console.log(a);
}

// arrayDiff([1,2],[2]);



// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.


function reverseWords(str) {
  let war = str.split(" ");
  let out = [];
  console.log(war);
  
  for ( let i = 0; war.length > i; i++) {
     out.push(war[i].split("").reverse().join(""));
  }
   let k = out.join(" ");
  console.log(out);
  return out;
}

// reverseWords('The quick brown fox jumps over the lazy dog.');





// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

let number = function(busStops){
  let peopleIn = 0;
  let peopleOut = 0;
    for (let i=0; i<busStops.length; i++) {
      peopleIn += busStops[i][0];
      peopleOut += busStops[i][1];
  }
  return peopleIn - peopleOut;
}





// Учитывая массив единиц и нулей, преобразуйте эквивалентное двоичное значение в целое число.
// Например: [0, 0, 0, 1]рассматривается как 0001двоичное представление 1.
// Примеры:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

const binaryArrayToNumber = arr => {
  let a = arr.join("");
  let parsed = parseInt(a, 2);
  return parsed;
}
// binaryArrayToNumber([1, 0, 0, 1]);





// Учитывая строку, вы должны вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.
// doubleChar("String") ==> "SSttrriinngg"
// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
// doubleChar("1234!_ ") ==> "11223344!!__  "

function doubleChar(str) {
  let out = [];
  let str1 = str.split("");
  for ( let i = 0; str1.length > i; i++ ) {
    out += str1[i] + str1[i];
  }
  return out;
}
// doubleChar("Sstring");




// Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
// Например:
// Учитывая [34, 15, 88, 2]ваше решение вернется2
// Учитывая [34, -345, -1, 100]ваше решение вернется-345
// Для целей этого ката вы можете предположить, что предоставленный массив не будет пустым.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = args[0];
    for ( let i = 0; args.length > i; i++ ) {
      if ( min > args[i]) {
        min = args[i];
      }
    }
    return min;
  }
}
// findSmallestInt([34, -345, -1, 100]);



// Создайте функцию, которая будет возвращать приветствие, использующее ввод; ваша программа должна вернуться, "Hello, <name> how are you doing today?".
// [Убедитесь, что вы набираете именно то, что я написал, иначе программа может работать некорректно]

function greet(name){
 return `Hello, ${name} how are you doing today?`;;
}
// greet('Alex');




// Задача Учитывая год, верните век, в котором он находится. Примеры
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
  let x = Math.ceil(year/100);
    return x; 
}




// В этой игре герой движется слева направо. Игрок бросает кубик и дважды перемещается на количество клеток, указанное кубиком .
// Создайте функцию для терминальной игры, которая берет текущую позицию героя и броска (1-6) и возвращает новую позицию.
// Пример:
// move(3, 6) should equal 15

function move (position, roll) {
  return position + roll*2;
}




// Напишите функцию RemoveExclamationMarks, которая удаляет все восклицательные знаки из заданной строки.

function removeExclamationMarks(s) {
  return s.replace(/!/gm, '');
}






// Создайте функцию, которая дает индивидуальное приветствие. Эта функция принимает два параметра: nameи owner.

function greet (name, owner) {
  if (name == owner) {
  return "Hello boss";
  }
  return "Hello guest";
  }






// xzxzxz

  function betterThanAverage(classPoints, yourPoints) {
    let count = 0;
     classPoints.map(item => {
     if (item < yourPoints) {
     count ++;
     }
     });
     return count > classPoints.length - count;
    }

    class Kata {
      static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
      }
    }




// Таракан - одно из самых быстрых насекомых. Напишите функцию, которая принимает скорость в км в час и возвращает ее в см в секунду, округленную до целого числа (= пол).
// Например:
// 1.08 --> 30
// Примечание! Входными данными является вещественное число (фактический тип зависит от языка) и> = 0. Результат должен быть целым числом.

function cockroachSpeed(s) {
  return parseInt(s * (1/36)*1000)
  }





// Это простой поворот к примеру ката (предоставлен Codewars, когда вы учитесь создавать свои собственные ката).
// Добавьте в массив значение «codewars» websites/ Websites1000 раз.

var websites = [];
while (websites.length < 1000) {
  websites.push("codewars");
}




// Учитывая набор чисел, верните аддитивное обратное для каждого числа. Каждый позитив становится негативом, а негатив становится позитивом.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invert(array) {
  let inverted = []; 
 for (let i = 0; i < array.length; i++) {
   if (array[i] == 0) {
     inverted.push(-0);
   } else {
   inverted.push(parseInt(-array[i]));
     }
 }
 return inverted;
}




// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
  return s.repeat(n);
}


let laLigaGoals = 43;
let championsLeagueGoals = 10;
let copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;




function paperwork(n, m) {
  if (n < 0 || m < 0) return 0;
  return n * m;
}





// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
// The solution would work like the following:

function getEvenNumbers(numbersArray){
  for(i=0; i < numbersArray.length; i++){
    if(numbersArray[i] % 2 != 0){
       numbersArray.splice(i,1)
       
       i--;
    };
  };
  return numbersArray;
}





// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

function solve(s){
  return Math.max(...s.split(/[^aoeiu]/i).map(s => s.length))
}





// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.
// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

function solve(arr){  
  let alphabeth = "abcdefghijklmnopqrstuvwxyz";
    return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabeth.indexOf(y)).length);
  };





//   Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.
// Input:
// Array of file sizes (0 <= s <= 100)
// Capacity of the HD (0 <= c <= 500)
// Output:
// Number of files that can be fully saved in the HD.
// Examples:
// save([4,4,4,3,3], 12) -> 3
// # 4+4+4 <= 12, but 4+4+4+3 > 12

function save(sizes, hd) {
  for (var i=0;i<sizes.length;i++){
    if (sizes.slice(0,1+i).reduce((a,b)=>a+b,0)>hd) return i
  }
  return i
}





// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.
// https://en.wikipedia.org/wiki/Triangle

function otherAngle(a, b) {
  return 180 - (a + b);
}