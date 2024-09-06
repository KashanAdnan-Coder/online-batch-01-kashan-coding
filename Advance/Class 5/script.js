// let data = [
//     {
//         name: "Kashan",
//         age: 1,
//         id: "_3280*80*u98*30238237^32",
//         password: "KashanAdnan120012"
//     },
//     {
//         name: "Shabea",
//         age: 2,
//         id: "_09240298042304928340972094",
//         password: "Shabeas3902-39"
//     },
// ]
// let newPromise = new Promise(function (resolve, reject) {
//     let user = prompt("Enter your Name")
//     if (user === "Kashan") {
//         resolve(data)
//     } else {
//         reject()
//     }
// })


newPromise.then(
    function (value) {
        console.log(value);
    },
    function (error) {
        console.log(error);
    }
)





// alert("Hi,I am a Alert")
// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "question"
//   });