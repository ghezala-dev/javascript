const sandraKayeProfileData = {
	name: 'Sandra Kaye',
	portfolio: 'www.sandrasportfolio.com',
	currentJob: 'Google',
	currentSalary: '400k'	
}

/*
Challenge
1. Use Object.assign to cut 4 lines of code from the constructor function.
*/


function DevProfile(data){
    Object.assign(this, data)
	this.summariseDev = function(){
	console.log(`${this.name}'s porfolio is at ${this.portfolio} and they work at ${this.currentJob}. Their current salary is ${this.currentSalary}.`)
}
}

const sandraKaye = new DevProfile(sandraKayeProfileData)
sandraKaye.summariseDev()
