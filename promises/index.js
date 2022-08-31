const fetch = require('node-fetch');

// const callBack1 = (theCallBack) => {
//     cosole.log('this is callback 1')
//     return theCallBack();
// }

// const callBack2 = (theCallBack) => {
//     cosole.log('this is callback 2')
//     return theCallBack();
// }

// const callBack3 = (theCallBack) => {
//     cosole.log('this is callback 3')
//     return theCallBack();
// }

// const callBack4 = (theCallBack) => {
//     cosole.log('this is callback 4')
//     return theCallBack();
// }


// // callBack1(callBack2(callback3(callback4())))

// const promise1 = new Promise((resolve, reject) => {})
// const promiseResolved = Promise.resolve('This Resolved');
// const promiseRejected = Promise.reject('This has rejected!!')


// // console.log({promise1})
// // console.log({promiseResolved})
// // console.log({promiseRejected})


// // =========   Basic .then response from a Promise ==============

// function myPromise(param) {
//     return new Promise((resolve, reject) => {
//         if(!!param) {
//             return resolve(`This Resolved just fine with param: ${param}`);
//         } else {
//             return reject({status: 'Failure', message: 'Something went wrong!!'})
//         }
//     })
// }

// // fetch('http://;lakdjf;lasdkj@a;sdjf;lkasjf.com').then()
// // myPromise('I WIN!!!').then(response => {

// //     myPromise(response).then(res1 => {
// //         myPromise(2).then(res2 => {
// //             myPromise({res1, res2}).then(res3 => {

// //                 console.log({response, res1, res2, res3});

// //                 // Make sure your final code goes here and not OUTSIDE of the .THEN
                
// //             }).catch(err => {})
// //         }).catch(err => {})
// //     }).catch(err => {})
    
// //     // console.log({response});
   
// // }).catch(error => {

// //     console.log({error});
    
// // })



// // ===========================================================



// // =================== Promise All ============================

// // Promise.all([myPromise('1'), myPromise('two'), myPromise(3), myPromise('IV')]).then(responseValues => {
// //     const [one, two, three, four] = responseValues;
// //     // console.log({responseValues, one, two, three, four});
// // })


// // ==========================================================



// // =================== Async / Await ========================


// // async function modernFunct() {}

// // step 1: create async function
// // const modernFunc = async () => {
// //     return 'hello there'
// // }

// // step 2: utilize try / catch for resolve / reject replacement
// const modernFunc = async () => {
//     // try acts like the resolve of a Promise
//     try {

//         // await only works in async functions
//         // it can only be used on something that returns a Promise
//         // await will wait for the call to complete and get a response before moving on to the next phase of the code.
//         const myResolve1 = await myPromise('1');
//         const myResolve2 = await myPromise('2');
//         const myResolve3 = await myPromise('3');
//         const myResolve4 = await myPromise('4');
//         const myResolve5 = await myPromise('5');
        
//         // mypromise('1').then(myResolve => {
//         //     // <do something here></here>
//         // }).catch(err => err);

//         return {resolve: [myResolve1, myResolve2, myResolve3, myResolve4, myResolve5]}
        
//     // return 'hello there'
//     // return resolve(`This Resolved just fine with param: ${param}`);
//     // return `This Resolved just fine with param: ${param}`;

//     // catch(err) is the reject from a Pomise and catches anything that goes wrong in the try
//     } catch(err) {
//         return err;
//         // return reject({status: 'Failure', message: 'Something went wrong!!'})
//         // return {status: 'Failure', message: 'Something went wrong!!'}
//     }

// }

// // console.log({modern: modernFunc()})
// // modernFunc().then(resp => {
// //     console.log({resp})
// // }).catch(err => {
// //     console.log({err})
// // })




// // ===================================================================


// // ========================  Fetch - Axios ===========================
const axios = require('axios');

const grabPokeData = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res => {
        console.log({res: res.data.results});    
            res.data.results.forEach(poke => {
                console.log(`This Pokemon is : ${poke.name}. Find more info about me at : ${poke.url}`)
            })
        // return res
    }).catch(err => {
        console.log({err})
    });
}

// const grabPokeData = async () => {
//     const allPokes = await fetch('https://pokeapi.co/api/v2/pokemon/');
//     const mew = await fetch('https://pokeapi.co/api/v2/pokemon/mew');

//     console.log(allPokes)
    
// }

grabPokeData();