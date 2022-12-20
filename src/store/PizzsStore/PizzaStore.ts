import { makeAutoObservable } from "mobx";

class PizzsStore {
  itemsPizza = [
    { id: 1, name: "Пеперони", price: 300 },
    { id: 2, name: "4 Сыра", price: 500 },
    { id: 3, name: "Колбасная", price: 700 },
    { id: 4, name: "Колбасная", price: 350 },
    { id: 5, name: "Колбасная", price: 650 },
    { id: 6, name: "Колбасная", price: 250 },
  ];
  shoppingCard = { items: [], count: 0 };
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  getItems() {
    return this.itemsPizza;
  }
}

export const storePizza = new PizzsStore();
