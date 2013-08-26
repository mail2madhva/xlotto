$(document).ready(function() {

	var requestURL = "http://54.214.160.210:5984/xlotto/9b0e9d6899ef7aa1838a4e40bf000ddc?callback=?";
	var dest = $('#jsondata'); 
	
	$.ajax({
			url : requestURL,
			dataType : "jsonp",
			success : function(data) {
				dest.html(JSON.stringify(data));
			},
			error : function(jqXHR, textStatus, errorThrown) {
				dest.html(jqXHR);
				alert(textStatus);
			}
		});
		
	$.getJSON(requestURL, function(json) {
      var type = json.type;
      var desc = json.description;
      $("#jsondata h3").html(type);
      $("h2").html(desc);
   });
});

