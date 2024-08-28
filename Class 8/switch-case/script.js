let date = new Date()
let day = date.getDay()
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
let dayOfWeek = days[day]


switch (dayOfWeek) {
    case "Sat":
        console.log("Whoope!")
        break;
    case "Sun":
        console.log("Whoope!")
        break;
    case "Mon":
        console.log("Busy")
        break;
    default:
        console.log("Shoot me now!")
}