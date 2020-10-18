import './App.css';

const App = ({input}) => {

	let obj = {}
	let str = ''
	for (let i in input){
		if (input[i].length === 1){
			obj[input[i][0]] = i
			console.log(obj)
		}
		else {
			if(input[i].length === 2){
				obj[input[i][0]] = i
				obj[input[i][1]] = i
				console.log(obj)
			}

			if(input[i].length === 3){
				obj[input[i][0]] = i
				obj[input[i][1]] = i
				obj[input[i][2]] = i
				console.log(obj)
			}

		}
	}

	for(let i in obj){
		str+= obj[i]
	}


		return str;
}




export default App;
