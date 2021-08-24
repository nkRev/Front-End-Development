function onButtonClick(){
    //create xmlHttpRequest obj
    var xmlHttpRequest = new XMLHttpRequest();

    //instantiate the request obj
    //open(method_type, url, async)
    xmlHttpRequest.open('GET', 'data.txt', true)

    //defining event listener for readyStateChange event w/ anonymous function
    xmlHttpRequest.onreadystatechange = function(){
        //check if the request is completed and was successful
        if(this.readyState == 4 && this.status==200){
            //inserting the response from the server into the element
            document.getElementById('result').innerHTML = this.responseText;
        }
    }
    //send the request to the server
    xmlHttpRequest.send()
}