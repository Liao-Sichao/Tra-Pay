function loadTextFile() {
	httpObj = new XMLHttpRequest();
	httpObj.onload = displayData;
	httpObj.open("GET", "position.txt", true);
	httpObj.send(null);
};

function displayData(){
	document.ajaxForm.result.value = httpObj.responseText
		
  	var separatorString = ",";
  	var arrayString = document.ajaxForm.result.value.split(separatorString);

	var latlng = new google.maps.LatLng(arrayString[1],arrayString[2]);
   	var opts = {
    	zoom: 14,
    	center: latlng,
    	mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	   
  	var map = new google.maps.Map(document.getElementById("map_canvas"), opts);

  	var m_latlng1 = new google.maps.LatLng(arrayString[1],arrayString[2]);
  	var marker1 = new google.maps.Marker({
    	position: m_latlng1,
		map: map,
		icon: {
			fillColor: "#FF0000",                //“h‚è’×‚µF
			fillOpacity: 0.8,                    //“h‚è’×‚µ“§‰ß—¦
			path: google.maps.SymbolPath.CIRCLE, //‰~‚ğw’è
			scale: 16*arrayString[0],            //‰~‚ÌƒTƒCƒY
			strokeColor: "#FF0000",              //˜g‚ÌF
			strokeWeight: 1.0                    //˜g‚Ì“§‰ß—¦
		}
	});
		   

	var m_latlng2 = new google.maps.LatLng(arrayString[4],arrayString[5]);
  	var marker2 = new google.maps.Marker({
    	position: m_latlng2,
    	map: map,
		icon: {
			fillColor: "#FF0000",                //“h‚è’×‚µF
			fillOpacity: 0.8,                    //“h‚è’×‚µ“§‰ß—¦
			path: google.maps.SymbolPath.CIRCLE, //‰~‚ğw’è
			scale: 16*arrayString[3],             //‰~‚ÌƒTƒCƒY
			strokeColor: "#FF0000",              //˜g‚ÌF
			strokeWeight: 1.0                    //˜g‚Ì“§‰ß—¦
		}
  	});

  	var m_latlng3 = new google.maps.LatLng(arrayString[7],arrayString[8]);
  	var marker3 = new google.maps.Marker({
    	position: m_latlng3,
    	map: map,
		icon: {
			fillColor: "#FF0000",                //“h‚è’×‚µF
			fillOpacity: 0.8,                    //“h‚è’×‚µ“§‰ß—¦
			path: google.maps.SymbolPath.CIRCLE, //‰~‚ğw’è
			scale: 16*arrayString[6],            //‰~‚ÌƒTƒCƒY
			strokeColor: "#FF0000",              //˜g‚ÌF
			strokeWeight: 1.0                    //˜g‚Ì“§‰ß—¦
		}
  	});

  	var m_latlng4 = new google.maps.LatLng(arrayString[10],arrayString[11]);
  	var marker4 = new google.maps.Marker({
    	position: m_latlng4,
    	map: map,
		icon: {
			fillColor: "#FF0000",                //“h‚è’×‚µF
			fillOpacity: 0.8,                    //“h‚è’×‚µ“§‰ß—¦
			path: google.maps.SymbolPath.CIRCLE, //‰~‚ğw’è
			scale: 16*arrayString[9],            //‰~‚ÌƒTƒCƒY
			strokeColor: "#FF0000",              //˜g‚ÌF
			strokeWeight: 1.0                    //˜g‚Ì“§‰ß—¦
		}
  	});

  	var m_latlng5 = new google.maps.LatLng(arrayString[13],arrayString[14]);
  	var marker5 = new google.maps.Marker({
    	position: m_latlng5,
    	map: map,
		icon: {
			fillColor: "#FF0000",                //“h‚è’×‚µF
			fillOpacity: 0.8,                    //“h‚è’×‚µ“§‰ß—¦
			path: google.maps.SymbolPath.CIRCLE, //‰~‚ğw’è
			scale: 16*arrayString[12],           //‰~‚ÌƒTƒCƒY
			strokeColor: "#FF0000",              //˜g‚ÌF
			strokeWeight: 1.0                    //˜g‚Ì“§‰ß—¦
		}
  	});
};