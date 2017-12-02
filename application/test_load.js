function test_load() {
    console.log("test_load");

    // TODO: POST test configuration

    /*
    (POST) StartLoadTest
        URL
        WaitTime
        DurationTime
        WorkerCount
    */
    var uri = document.getElementById('uriTxtBox').value;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", uri, true ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
    
    //document.getElementById('view')
    ///.exectueJavaScrpipt('fetch("http://10.0.0.32:8080", {method: "get"})');
  //.executeJavaScript('fetch("http://example.com/?foo=bar", {method: "post"});');
 

  
}