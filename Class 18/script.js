function greetWorld() {
    let name = prompt("Enter your name: ")
    if (name === "Kashan") {
        throw "The name kashan causes this error : Please remove kashan and type anything else or the code won't work! "
    }
}

// greetWorld()



let button = document.getElementById("button")
button.onclick = greetWorld