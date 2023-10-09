class user {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  showInfo() {
    return `My name is ${this.firstName} ${this.lastName}, and I ${this.age} years old and I live in ${this.location}`;
  }
}

const her = new user("Dani", "Savre", "34", "Los Angeles");

const me = new user("Angie", "Prestano", "23", "Palermo");

console.log(me, her);

function confrontAge(user1, user2) {
  if (user1.age > user2.age) {
    console.log(
      `${user1.firstName} ${user1.lastName} is older than ${user2.firstName} ${user2.lastName}`
    );
  } else {
    console.log(
      `${user2.firstName} ${user2._lastName} is young than ${user1.firstName} ${user1.lastName}`
    );
  }
}

confrontAge(her, me);
