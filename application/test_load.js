function test_load() {
    console.log("test_load");

    var akkaEndpoint = document.getElementById('akkaEndpointTxtBox').value;
   
    var uri = document.getElementById('uriTxtBox').value;
    var userCount = document.getElementById('userCountTxtBox').value;
    var requestCount = document.getElementById('requestCountTxtBox').value;

    var params = "?url="+encodeURIComponent(uri)+"&nAgents="+userCount+"&nRequests="+ requestCount

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", akkaEndpoint + "/api/start" + params, false ); // false for synchronous request
    xmlHttp.send( null );

    // todo check status == 200 || 500

    return xmlHttp.responseText;
}