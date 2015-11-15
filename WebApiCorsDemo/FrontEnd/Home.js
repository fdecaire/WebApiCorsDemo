$(document).ready(function () {
	GetMessage();
});

function GetMessage() {
	var url = "http://www.franksmessageapi.com/api/Home/MyMessage";

	$.ajax({
		crossDomain: true,
		type: "GET",
		url: url,
		dataType: 'json',
		contentType: 'application/json',
		success: function (data, textStatus, jqXHR) {
			alert(data.Message);
		},
		error: function (jqXHR, textStatus, errorThrown) {
			alert(formatErrorMessage(jqXHR, textStatus));
		}
	});
}

function formatErrorMessage(jqXHR, exception) {

	if (jqXHR.status === 0) {
		return ('Not connected.\nPlease verify your network connection.');
	} else if (jqXHR.status == 403) {
		return ('Forbidden [403]');
	} else if (jqXHR.status == 404) {
		return ('The requested page not found. [404]');
	} else if (jqXHR.status == 500) {
		return ('Internal Server Error [500].');
	} else if (exception === 'parsererror') {
		return ('Requested JSON parse failed.');
	} else if (exception === 'timeout') {
		return ('Time out error.');
	} else if (exception === 'abort') {
		return ('Ajax request aborted.');
	} else {
		return ('Uncaught Error.\n' + jqXHR.responseText);
	}
}