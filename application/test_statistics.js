function test_statistics() {
  console.log("test_statistics");

  var akkaEndpointElement = document.getElementById('akkaEndpointTxtBox');
  var akkaEndpoint = akkaEndpointElement.value || akkaEndpointElement.placeholder;

  var xmlHttp = new XMLHttpRequest();
  //xmlHttp.open( "GET", akkaEndpoint, true ); // false for synchronous request
  xmlHttp.open("GET", akkaEndpoint + "/api/testresults", false);
  xmlHttp.send(null);
  //return xmlHttp.responseText;

  // final results
  var results = []

  var testResults = JSON.parse(xmlHttp.responseText);
  testResults.forEach(test => {
    xmlHttp.open("GET", akkaEndpoint + "/api/agentResults?testId=" + test.id, false)
    xmlHttp.send(null)

    var agentResult = JSON.parse(xmlHttp.responseText)

    agentResult.forEach(agent => {
      xmlHttp.open("GET", akkaEndpoint + "/api/requestResults?testId=" + test.id + "&agentId=" + agent.id, false)
      xmlHttp.send(null)
  
      var requestResult = JSON.parse(xmlHttp.responseText)
      requestResult.forEach(result => {
        results.push(flatten({test: test, agent: agent, result: result}))
      })
    });

  });

  //var myResult = [ {"url":"google.at", "successful": "c0.85", "totalTime":"231"}, 
  //{"url":"facebook.com", "successful": "0.74", "totalTime":"100"}];



  var table = document.createElement("table");

  buildHtmlTable(table, results)

  var divContainer = document.getElementById("showResult");
  divContainer.innerHTML = "";
  divContainer.appendChild(table)
}

function buildHtmlTable(selector, myResult) {
  var columns = addAllColumnHeaders(myResult, selector);

  for (var i = 0; i < myResult.length; i++) {
    var row$ = $('<tr/>');
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
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

function flatten (ob) {
	var toReturn = {};
	
	for (var i in ob) {
		if (!ob.hasOwnProperty(i)) continue;
		
		if ((typeof ob[i]) == 'object') {
			var flatObject = flatten(ob[i]);
			for (var x in flatObject) {
				if (!flatObject.hasOwnProperty(x)) continue;
				
				toReturn[i + '.' + x] = flatObject[x];
			}
		} else {
			toReturn[i] = ob[i];
		}
	}
	return toReturn;
};