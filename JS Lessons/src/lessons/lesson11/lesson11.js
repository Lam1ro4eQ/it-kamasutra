import fetch from "node-fetch";

const foo = async () => {
    try {
       const yahooData = await fetch("https://yahoo.com/?query=js")
       const googleData = await fetch("https://google.com/?query=js")
       const duckData = await fetch("https://duckduckgo.com/?query=js")
    } catch (e) {
        
    }
} // async делает внутри функции асинхранно



fetch("https://google.com/?query=js").then((data) => {
    console.log(data.url);
})

fetch("https://yahoo.com/?query=js").then((data) => {
    console.log(data.url);
})

fetch("https://duckduckgo.com/?query=js").then((data) => {
    console.log(data.url);
})


fetch("https://google.com/?query=js").then((data) => {
    console.log(data.url);
    return fetch("https://yahoo.com/?query=js")
}).then((data) => {
    console.log(data.url);
    return fetch("https://duckduckgo.com/?query=js")
}).then((data) => {
    console.log(data.url);
}).catch((err) => {
    console.log(err)
})


const pr1 = fetch("https://google.com/?query=js")
const pr2 = fetch("https://yahoo.com/?query=js")
const pr3 = fetch("https://duckduckgo.com/?query=js")

const bigPromise = Promise.all([pr1, pr2, pr3]);
const bigPromise2 = Promise.all([
    fetch("https://google.com/?query=js"),
    fetch("https://yahoo.com/?query=js"),
    fetch("https://yahoo.com/?query=js")]);
bigPromise.then((bigData) => {
    console.log(bigData)
})

Promise.race([
    fetch("https://google.com/?query=js"),
    fetch("https://yahoo.com/?query=js"),
    fetch("https://duckduckgo.com/?query=js")]) // кто первый отработает
    .then((data) => {
        console.log(data.url)
    })
    .catch((err) => [
        console.log(err)
    ])


Promise.allSettled([
    fetch("https://google.com/?query=js"),
    fetch("https://yahoo.com/?query=js"),
    fetch("https://duckduckgo.com/?query=js")]) // в catch не попадает, возвращает статус и данные
    .then((data) => {
        console.log(data)
    })
    .catch((err) => [
        console.log(err)
    ])

Promise.any([
    fetch("https://google.com/?query=js"),
    fetch("https://yahoo.com/?query=js"),
    fetch("https://duckduckgo.com/?query=js")])// первый успешный,  любой успешный , все не успешные
    .then((data) => {
        console.log(data.url)
    })
    .catch((err) => [
        console.log(err)
    ])
// const server = {
//     getData() {
//         const promise = new Promise((res,rej)=>{
//             setTimeout(()=>{
//                 res("Some data");
//                 //rej("Error");
//             },1000)
//         })
//         return promise
//     }
// }


