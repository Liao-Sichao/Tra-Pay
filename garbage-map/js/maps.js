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
	

	var a=arrayString[0]*3;
	var b=arrayString[3]*3;
	var c=arrayString[6]*3;
	var d=arrayString[9]*3;
	var e=arryaString[12]*3;
   
  	var map = new google.maps.Map(document.getElementById("map_canvas"), opts);

  	var m_latlng1 = new google.maps.LatLng(arrayString[1],arrayString[2]);
  	var marker1 = new google.maps.Marker({
    	position: m_latlng1,
		map: map,
		icon: {
			fillColor: "#FF0000",                //�h��ׂ��F
			fillOpacity: 0.8,                    //�h��ׂ����ߗ�
			path: google.maps.SymbolPath.CIRCLE, //�~���w��
			scale: a,            //�~�̃T�C�Y
			strokeColor: "#FF0000",              //�g�̐F
			strokeWeight: 1.0                    //�g�̓��ߗ�
		}
	});
		   

	var m_latlng2 = new google.maps.LatLng(arrayString[4],arrayString[5]);
  	var marker2 = new google.maps.Marker({
    	position: m_latlng2,
    	map: map,
		icon: {
			fillColor: "#FF0000",                //�h��ׂ��F
			fillOpacity: 0.8,                    //�h��ׂ����ߗ�
			path: google.maps.SymbolPath.CIRCLE, //�~���w��
			scale: b,             //�~�̃T�C�Y
			strokeColor: "#FF0000",              //�g�̐F
			strokeWeight: 1.0                    //�g�̓��ߗ�
		}
  	});

  	var m_latlng3 = new google.maps.LatLng(arrayString[7],arrayString[8]);
  	var marker3 = new google.maps.Marker({
    	position: m_latlng3,
    	map: map,
		icon: {
			fillColor: "#FF0000",                //�h��ׂ��F
			fillOpacity: 0.8,                    //�h��ׂ����ߗ�
			path: google.maps.SymbolPath.CIRCLE, //�~���w��
			scale: c,            //�~�̃T�C�Y
			strokeColor: "#FF0000",              //�g�̐F
			strokeWeight: 1.0                    //�g�̓��ߗ�
		}
  	});

  	var m_latlng4 = new google.maps.LatLng(arrayString[10],arrayString[11]);
  	var marker4 = new google.maps.Marker({
    	position: m_latlng4,
    	map: map,
		icon: {
			fillColor: "#FF0000",                //�h��ׂ��F
			fillOpacity: 0.8,                    //�h��ׂ����ߗ�
			path: google.maps.SymbolPath.CIRCLE, //�~���w��
			scale: d,            //�~�̃T�C�Y
			strokeColor: "#FF0000",              //�g�̐F
			strokeWeight: 1.0                    //�g�̓��ߗ�
		}
  	});

  	var m_latlng5 = new google.maps.LatLng(arrayString[13],arrayString[14]);
  	var marker5 = new google.maps.Marker({
    	position: m_latlng5,
    	map: map,
		icon: {
			fillColor: "#FF0000",                //�h��ׂ��F
			fillOpacity: 0.8,                    //�h��ׂ����ߗ�
			path: google.maps.SymbolPath.CIRCLE, //�~���w��
			scale: e,           //�~�̃T�C�Y
			strokeColor: "#FF0000",              //�g�̐F
			strokeWeight: 1.0                    //�g�̓��ߗ�
		}
  	});
};