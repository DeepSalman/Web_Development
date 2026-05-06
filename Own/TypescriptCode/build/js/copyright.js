//Original Javascript code
// const year =document.getElementById("year")
// const thisyear = new Date().getFullYear()
// year.setAttribute("datetime",thisyear) 
// year.textContent = thisyear
//1st variation
let year = document.getElementById("year");
let thisyear = new Date().getFullYear().toString();
if (year) {
    year.setAttribute("datetime", thisyear);
    year.textContent = thisyear;
}
//2nd variation 
const year1 = document.getElementById("year");
const thisyear1 = new Date().getFullYear().toString();
year1.setAttribute("datetime", thisyear);
year1.textContent = thisyear;
export {};
//# sourceMappingURL=copyright.js.map