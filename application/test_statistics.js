function test_statistics() {
    console.log("test_statistics");

    var akkaEndpoint = document.getElementById('akkaEndpointTxtBox').value;

    var xmlHttp = new XMLHttpRequest();
    //xmlHttp.open( "GET", akkaEndpoint, true ); // false for synchronous request
	xmlHttp.open( "GET", akkaEndpoint + "/api/testresults", false );
    xmlHttp.send( null );
    //return xmlHttp.responseText;

	var myResult = JSON.parse(xmlHttp.responseText);

    //var myResult = [ {"url":"google.at", "successful": "c0.85", "totalTime":"231"}, 
    //{"url":"facebook.com", "successful": "0.74", "totalTime":"100"}];
    
    var table = document.createElement("table");

        buildHtmlTable(table, myResult)

        var divContainer = document.getElementById("showResult");
        divContainer.innerHTML = "";
        divContainer.appendChild(table)
}

function buildHtmlTable(selector, myResult) {
    var columns = addAllColumnHeaders(myResult, selector);

    for( var i = 0; i < myResult.length; i++) {
        var row$ = $('<tr/>');
        for(var colIndex = 0; colIndex < columns.length; colIndex++) {
            var cellValue = myResult[i][columns[colIndex]];
            if (cellValue == null) cellValue = "";
            row$.append($('<td/>').html(cellValue));
          }
          $(selector).append(row$);
        }
}

function addAllColumnHeaders(myList, selector) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');
  
    for (var i = 0; i < myList.length; i++) {
      var rowHash = myList[i];
      for (var key in rowHash) {
        if ($.inArray(key, columnSet) == -1) {
          columnSet.push(key);
          headerTr$.append($('<th/>').html(key));
        }
      }
    }
    $(selector).append(headerTr$);
  
    return columnSet;
  }