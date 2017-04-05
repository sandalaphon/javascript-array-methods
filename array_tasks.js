var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2)
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd)
		return arr
	},

	square: function (arr) {
		var array = arr.map(function(element){
			return element*element
		}) 
		return array
	},

	sum: function (arr) {
		var total = 0
		total = arr.reduce(function(total, element){
			return total+element
		})
		return total
	},

	findDuplicates: function (arr) {
		var answer = []
		while (arr.length>0){
			var maybe = arr.shift()
			if(arr.includes(maybe) && !answer.includes(maybe)){
				answer.push(maybe)
			}
		}
		return answer
	},

	removeAndClone: function (arr, valueToRemove) {
		answer=[]
		arr.forEach(function(x){
			if(x !== valueToRemove){
				answer.push(x)
			}
		})
		return answer
	},

	findIndexesOf: function (arr, itemToFind) {
		answer=[]
		arr.forEach(function(x, index){
			if(x===itemToFind){
				answer.push(index)
			}
		})
		return answer
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var sum = 0
		sum = arr.reduce(function(acc, element){
			return element%2===0 ? acc+(element*element) : acc
		},0)
		return sum
	}

}

module.exports = arrayTasks
