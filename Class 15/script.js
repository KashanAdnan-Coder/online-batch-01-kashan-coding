// let obj = {
//     name: "Kashan",
//     age: 13
// }

// console.log(obj);

// 
// console.log(checkExist); // true



// console.log(window.location.href);
function sendToBook() {
    // window.location.href = "https://cdn.wccftech.com/wp-content/uploads/2014/10/JavaScript.pdf#page=259&zoom=100,33,33"
    // console.log(window.location.hostname);
    // console.log(window.location.pathname);
    // console.log(window.location.host);
    // console.log(window.location.port);
    // console.log(window.location.protocol);
    //  another way
    // window.location.replace("https://www.svgrepo.com/svg/525813/code-square")
    // let win = window.open()
    // win.document.write("Kashan")
    // window.close()
    var testPop = window.open("", "", "width=100,height=100");
    if (testPop === null) {
        alert("Please disable your popup blocker.");
    } else {
        // testPop.close();
    }

}