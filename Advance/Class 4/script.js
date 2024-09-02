// asyncronus
// async function getValue(name, id) {
//     console.log(name);
//     console.log(id);
// }

// getValue("Kashan", 1)
// getValue("Adnan", 2)
// getValue("Shabea", 3)
// getValue("Hassan", 4)
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function pehlaFunction() {
    myDisplayer("Hello");
}

function doosraFunction() {
    myDisplayer("Goodbye");
}

pehlaFunction();
doosraFunction();