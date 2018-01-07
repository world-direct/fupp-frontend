function test_load() {
    console.log("test_load");

    var akkaEndpointElement = document.getElementById('akkaEndpointTxtBox');
    var uriElement = document.getElementById('uriTxtBox');
    var userCountElement = document.getElementById('userCountTxtBox');
    var requestCountElement = document.getElementById('requestCountTxtBox');

    var akkaEndpoint = akkaEndpointElement.value || akkaEndpointElement.placeholder;
    var uri = uriElement.value || uriElement.placeholder;
    var userCount = userCountElement.value || 1;
    var requestCount = requestCountElement.value || 1;

    var params = "?url="+encodeURIComponent(uri)+"&nAgents="+userCount+"&nRequests="+ requestCount

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", akkaEndpoint + "/api/start" + params, false ); // false for synchronous request
    xmlHttp.send( null );

    // todo check status == 200 || 500

    return xmlHttp.responseText;
}