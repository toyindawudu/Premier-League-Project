var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://api-football-v1.p.rapidapi.com/v2/predictions/157462");
xhr.setRequestHeader("x-rapidapi-host", "api-football-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "5113ea7f29mshcbcba822473947bp1a5d28jsn754d1e09e6fb");

xhr.send(data);
console.log(data);