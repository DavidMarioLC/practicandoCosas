class People {
  _name = "";
  _age = 0;

  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  getAge() {
    return this._age;
  }

  getName() {
    return this._name;
  }
}

class Employee extends People {
  _role = "";

  constructor(name, age, role) {
    super(name, age);
    this._role = role;
  }

  getRole() {
    return this._role;
  }
}

const employe = new Employee("david", 23, "Front End Engineer");

const resultado = {
  name: employe.getName(),
  age: employe.getAge(),
  role: employe.getRole(),
};

//Practicing with Leo
const objects = {
  name: "david",
  age: 2,
};

for (clave in objects) {
  console.log(objects[clave]);
}
