const peets = [];

const addPets = function () {
  const Name = document.getElementById("Name").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("Name").value;
  const age = document.getElementById("age").value;
  const breed = document.getElementById("ownerName").value;

  const newPet = new addPets(Name, owerName, species, age, breed);
};

class pet {
  constructor(_name, _owner, _specie, _age, _breed) {
    this.name = _name;
    this.owner = _owner;
    this.species = _specie;
    this.age = _age;
    this.breed = _breed;
  }
}
