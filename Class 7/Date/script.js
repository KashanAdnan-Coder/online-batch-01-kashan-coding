// Getting the current date and time

// let date = new Date() // get the current date and time
// console.log(date);

// let month = date.getMonth()

// 0 Jan 1 Feb 2 March 3 April 4 May 5 June 6 july 7 august 8 Sep 9 Oct 10 Nov 11 Dec
// console.log(month)

// let date2 = date.getDate()
// console.log(date2 + " Date")

// let day = date.getDay()
// 0 Sunday 1 Mon 2 Tues 3 Wed 4 Thurs 5 Friday 6 Sat
// console.log(day);

// let year= date.getFullYear() // getFullYear() to get the year

// console.log(year)
// let hour = date.getHours()
// console.log(hour)
// let min = date.getMinutes()
// console.log(min)
// let sec = date.getSeconds()
// console.log(sec)

// let milisecond = date.getMilliseconds()
// 
// console.log(milisecond)

// specify date



// let date90 = new Date("August 23, 2011") // Month  Date, year
// console.log(date90);

let date = new Date()
date.setMonth(11)
date.setDate(23)
date.setFullYear(2000)
date.setHours(2)
date.setMinutes(34)
date.setSeconds(59)
console.log(date);
