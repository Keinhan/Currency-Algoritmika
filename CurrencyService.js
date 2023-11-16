class CurrencyService {
  constructor(firstCurrency, secondCurrency) {
    this.firstCurrency = firstCurrency;
    this.secondCurrency = secondCurrency;
    const apiKey = "5140d40fd0ac64e6b5b6c745";
    this.url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;
    this.amount = null;
  }

  alert(message) {
    const div = document.createElement("div");
    div.textContent = message;
    div.className = "alert alert-danger";
    div.style.display = "block";

    const section = document.querySelector(".main");

    section.append(div);

    setTimeout(() => {
      div.style.display = "none";
    }, 1000);

    amountElementLeft.value = "";
  }

  exchange() {
    if (this.firstCurrency == this.secondCurrency) {
      this.alert("Your currencies match in both directions");
    }
    return new Promise((resolve, reject) => {
      fetch(this.url + this.firstCurrency)
        .then((res) => res.json())
        .then((data) => {
          let datas = data.conversion_rates;
          const rate = datas[this.secondCurrency];

          const newAmount = Number(this.amount);

          let result = (rate * newAmount).toFixed(4);

          let fromRate = document.querySelector("#fromRate");
          let toRate = document.querySelector("#toRate");

          fromRate.textContent = `1 ${this.firstCurrency} = ${rate.toFixed(
            4
          )} ${this.secondCurrency}`;

          toRate.textContent = `1 ${this.secondCurrency} = ${(1 / rate).toFixed(
            4
          )} ${this.firstCurrency}`;

          resolve(result);
        })
        .catch((err) => {
          this.alert("There's something wrong!");
          reject(err);
        });
    });
  }

  changeAmount(amount) {
    this.amount = amount;
  }

  changeFirstCurrency(fromCurrency) {
    this.firstCurrency = fromCurrency;
  }

  changeSecondCurrency(toCurrency) {
    this.secondCurrency = toCurrency;
  }
}
