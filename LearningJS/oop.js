class Person{
	constructor (name,age){
	this.name = name;
	this.age = age;
}

	greeting(){
	console.log(`I am ${this.name} and I am ${this.age} years old`);
	}
}

person1 = new Person('Binam',20);
person1.greeting();