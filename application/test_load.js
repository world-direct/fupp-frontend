function test_load() {
    console.log("test_load");

    var akkaEndpoint = document.getElementById('akkaEndpointTxtBox').value;
   
    var uri = document.getElementById('uriTxtBox').value;
    var userCount = document.getElementById('userCountTxtBox').value;
    var requestCount = document.getElementById('requestCountTxtBox').value;

    var params = "uri="+uri+"&userCount="+userCount+"&requestCount="+ requestCount

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", akkaEndpoint, true ); // false for synchronous request
    xmlHttp.send( params );

    // todo check status == 200 || 500

    return xmlHttp.responseText;
}