import { makeAutoObservable } from 'mobx';

// DEFAULT STATE
 class Converter {
    currency = 1.07
    USD = ''
    EUR = ''
    constructor() {
        makeAutoObservable(this)
    }

    inputUSD = (usd) => {
      this.USD = usd;
      this.EUR = (usd / this.currency).toFixed(2);

    }

    inputEUR = (eur) => {
        this.EUR = eur;
        this.USD = (eur * this.currency).toFixed(2);
      }
}
export default new Converter();
