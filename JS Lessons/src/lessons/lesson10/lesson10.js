
//


const server = {
    getData() {
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                fs.getfile('./bookList.json', (err, list) => {
                    if (err) {
                        rej('can find this list')
                    } else {
                        res(list)
                    }
                })
            }, 2000)
        })
        return promise
    }
}

const pr = server.getData();
console.log('Promise', pr)

// then | catch | finally

pr.then((result)=>{
    console.log('data from server', result)
}).catch((err)=>{
    console.log('some error from server', err)
}).finally(()=>{
    console.log('finally')
}) // выполнится всегда

// напишите функцию delay(ms) которая возвращает промис переходящий в состояние "resolved" через ms миллисекунд

function delay(ms) {
    const promise = new Promise((res, rej) => {
        setTimeout(()=>{
            res(console.log('resolve'))
        },ms)
        return promise
    })
} // как я сделал

const delayy = (ms) => {
    return new Promise((res, rej) => {
        setTimeout(res,ms)
    })
}
delayy(2000).then(()=>{
    console.log("ok")
}) // как надо было
