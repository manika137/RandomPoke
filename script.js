//Some Global Variables to Hold Info for Later

// //Constructors for API URL Request. We'll use these later

var baseURL = "https://pokeapi.co/api/v2";
var pokemon = "/pokemon/";

//Pull in our HTML elements so we can talk to them using JS
var title = document.getElementById("title");
var hright = document.getElementById("height");
var weight = document.getElementById("weight");
var idd = document.getElementById("idd");
var img = document.getElementById("img");
var topp = document.getElementById("topp");
var bottom = document.getElementById("bottom");
var dis = document.getElementById("description");
// runs whole function as soon as page opens. We wrap all our code in this function.
(function () {
    //Set Event listener on Button. When clicked, run the makeRequest function defined below
    document.getElementById("ajaxButton").addEventListener("click", makeRequest);



    //variable to hold httpRequest info
    var httpRequest;
    //makeRequest function runs when button is clicked
    function makeRequest() {
        httpRequest = new XMLHttpRequest();
        //If something is wrong with request, pop-up an alert that says so
        if (!httpRequest) {
            alert("It did not work :(");
            return false;
        }
        // var id1 = idd.value;
        var id1 = Math.floor(Math.random() * 100 + 1);
        var fullURL = baseURL + pokemon + id1;
        topp.className = 'content';
        bottom.className = 'pannel  rotate';
        dis.innerHTML = "Loading ...";
        httpRequest.onreadystatechange = fillInfo;

        httpRequest.open(
            "GET", fullURL
        );
        httpRequest.send();
    }

    //Function that Runs When API Call is finished
    function fillInfo() {
        //variable to hold the response from API GET request
        var responseContent;
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                // console.log(httpRequest.responseText);

                //         /*Save the response in responseContent variable.
                //         Note that the response has ' ' around it. This means it is a String.*/
                responseContent = httpRequest.responseText;
                console.log(responseContent);
                //         /*
                //         Since responseContent is a string, we need to change it into an object
                //         to use it. To do this, we can use JSON.parse. This parses or translates
                //         a JSON object from a String.
                //         */
                var parsed = JSON.parse(responseContent);
                //         //Now we can use the info the same way as an object.
                console.log(parsed);
                // console.log(parsed);

                //         /* Now lets update our actual HTML using this info.
                //         We already have two variables, title and description which we
                //         pulled into our code using document.getElementById() earlier.
                //         We can update these variables with the information from the API
                //         by using the .innerHTML command. */
                title.innerHTML = parsed.name;
                height.innerHTML = parsed.height;
                weight.innerHTML = parsed.weight;
                img.src = parsed.sprites.front_default;
                topp.className = 'content active';
                bottom.className = 'pannel active';
                dis.innerHTML = "Random your Pokemon";
                //   
            } else {
                alert("There was a problem with the request.");
            }
        }

    } //Make sure you ad the () after the end of the function.
})();

function click() {

    var id = document.getElementById("idd").value;
    alert(id);
}
