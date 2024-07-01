// 1

const bankAccount = {
  info: function (ownerName, accountNumber, initialBalance) {
    this.ownerName = ownerName;
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  },
  deposit: function (cash) {
    if (cash > 0) {
      this.balance += cash;
      alert(`Депозит ${cash} UAH. Поточний баланс: ${this.balance} UAH`);
    } else {
      alert("Недійсна сума депозиту. Будь ласка, введіть позитивне значення.");
    }
  },
  withdraw: function (cash) {
    if (cash > 0 && cash <= this.balance) {
      this.balance -= cash;
      alert(`Знято ${cash} UAH. Поточний баланс: ${this.balance} UAH`);
    } else {
      alert("Недостатньо коштів або недійсна сума виводу.");
    }
  },
};

bankAccount.info("Bohdan", 123456789, 2000);
bankAccount.deposit(200);
bankAccount.withdraw(626);
bankAccount.withdraw(400);

// 2

const weather = {
  temperature: prompt("Введіть температуру"),
  humidity: 36,
  windSpeed: 8,
  coldOrHot: function () {
    if (this.temperature < 0 || this.temperature == 0) {
      alert("Температура нижче або дорівнює 0 градусів Цельсія");
    } else {
      alert("Температура вище 0 градусів Цельсія");
    }
  },
};
weather.coldOrHot();

// 3

let enteredEmail = prompt("Введіть пошту");
let enteredPassword = prompt("Введіть пароль");

const user = {
  name: "Bohdan",
  login: function () {
    if (
      (enteredEmail.includes("@") && !enteredPassword.includes(" ")) ||
      enteredPassword.length > 5
    ) {
      alert("Логін успішний!");
    } else {
      alert("Неправильний email або пароль.");
    }
  },
};

user.login();

// 4

const movie = {
  title: "Перший месник",
  director: "Джо Джонстон",
  year: 2011,
  rating: 7,
  rFunction: function () {
    document.getElementById("title").innerText = "Title: " + this.title;
    document.getElementById("director").innerText =
      "Director: " + this.director;
    document.getElementById("year").innerText = "Year: " + this.year;
    document.getElementById("rating").innerText = "Rating: " + this.rating;
  },
};
movie.rFunction();

const uptTitle = document.getElementById("title");

const uptText = function () {
  if (movie.rating > 8 || movie.rating === 8) {
    uptTitle.style.color = "green";
  } else {
    uptTitle.style.color = "red";
  }
};
uptText();
