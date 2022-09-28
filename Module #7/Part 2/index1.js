const hotel1 = {
	name: 'Safari View',
	rooms: 30,
	stars: '⭐⭐⭐⭐⭐',
	costPerNightAdult: 240,
	costPerNightChild: 180,
}

const hotel2 = {
	name: 'Leopard Mansion',
	rooms: 96,
	stars: '⭐⭐⭐',
	costPerNightAdult: 120,
	costPerNightChild: 180,
}


function NationalParkHotels(data){
    this.name = data.name
    this.rooms = data.rooms
    this.stars = data.stars
    this.costPerNightAdult = data.costPerNightAdult
    this.costPerNightChild = data.costPerNightChild
	
	this.summariseHotel = function(){
		const totalPrice = this.costPerNightAdult * 2 + this.costPerNightChild * 2
		console.log(`A one night stay at the ${this.name} for two adults and 
		two children costs a total of ${totalPrice}`)
	}
}

const safariView = new NationalParkHotels(hotel1)
const leopardMansion = new NationalParkHotels(hotel2)
safariView.summariseHotel()
leopardMansion.summariseHotel()
/*
Challenge:
1. Create a method on the constructor function called
   "summariseHotel".
2. Have it log out the following sentence 'A one night stay 
   at the <HOTEL NAME> for two adults and two children costs a 
   total of <PRICE>'
3. Your method will need the logic to calculate the price.
*/