var output = document.querySelector("#output");


//date conversion
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth()+1;
if (month < 10) {
    month = `0${month}`;
}
var day = today.getDate();
if (day < 10) {
    day = `0${day}`;
}
today = `${year}-${month}-${day}`;

var API_KEY = `d4ce6d2a-4e3e-4263-aa9d-ce0111ee4de6`;

function callArticles () {
    var fromDate = today;
    var URL = `https://content.guardianapis.com/search?from-date=${fromDate}&api-key=${API_KEY}`
    fetch(URL, {method: "GET"})
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        var results = data.response.results;
        console.log(results);
        var resultsHTML = results.reduce(function(total,result){
            return total + `
            <a href="${result.webUrl}"><li>${result.webTitle}</li></a>
            `
        },``);
        output.innerHTML = `<ul>${resultsHTML}</ul>`;
    })
}
callArticles();