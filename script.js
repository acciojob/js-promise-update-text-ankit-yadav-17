//your JS code here. If required
let text = "Hello, world!"
function prom (){
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			resolve(text)
		},1000)
	})
}

let ans = document.getElementById('output');
ans.innerText = text;

