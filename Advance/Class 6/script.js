// let data = fetch("https://jsonplaceholder.typicode.com/users")

// data.then(
//     async function (value) {
//         let res = await value.json()
//         console.log(res);

//     },
//     function (error) {
//         console.log(error);
//     }
// )

async function getData() {
    let data = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(data);
}
getData()








let http = new XMLHttpRequest()

http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        document.getElementById("demo").innerHTML = http.responseText;
    }
};
http.open("GET", "filename", true);
http.send();