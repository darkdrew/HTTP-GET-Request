//GET method

//can be used for xml or json
var http = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/posts";
var method = "GET";

//open the request
//1st argument is request method, 2nd arugment is the URL
http.open(method, url);

//when we make a request, and if the state changes, then do something
http.onreadystatechange = function() {
    //check whether the state is done
    //if the state is 200 means ok
    if(http.readyState === XMLHttpRequest.DONE && http.status === 200) {
        //convert the response to Json by using JSON.parse
        console.log(JSON.parse(http.response));
    } else if(http.readyState === XMLHttpRequest.DONE && http.status !== 200){
        console.log("bad request");
    }
}

//send the request
http.send();
