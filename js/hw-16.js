// 1
console.log("                    EXERCISE #1");

class Account {
  constructor({ login, email }) {
    this.login = login;
    this.email = email;
  }
  getInfo() {
    return `Login: ${this.login}, Email: ${this.email}`;
  }
}

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

console.log(mango.getInfo()); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

console.log(poly.getInfo()); // Login: Poly, Email: poly@mail.com

// 2
console.log("                    EXERCISE #2");

class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
  }
}

const mango2 = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});

console.log(mango2.getInfo()); // User Mango is 2 years old and has 20 followers

const poly2 = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

console.log(poly2.getInfo()); // User Poly is 3 years old and has 17 followers

// 3
console.log("                    EXERCISE #3");

class Storage {
  constructor(firstItem) {
    this.items = firstItem;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    const elementIndex = this.items.indexOf(item);
    if (elementIndex !== -1) {
      this.items.slice(elementIndex, 1);
    }
  }
}

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem("Дроїд");
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
