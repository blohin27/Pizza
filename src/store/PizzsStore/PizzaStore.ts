import { autorun, makeAutoObservable, toJS } from "mobx";

interface PizzaItem {
  id: number;
  name: string;
  price: number;
}

interface IShoppingCart {
  items: PizzaItem[];
  count: number;
}
class PizzsStore {
  itemsPizza: PizzaItem[] = [
    { id: 1, name: "Пеперони", price: 300 },
    { id: 2, name: "4 Сыра", price: 500 },
    { id: 3, name: "Кальцоне ", price: 700 },
    { id: 4, name: "Сицилийская", price: 350 },
  ];
  shoppingCart: IShoppingCart = { items: [], count: 0 };
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  getItems() {
    return this.itemsPizza;
  }

  addPizzaShoppingCart(item: PizzaItem) {
    this.shoppingCart.items.push(item);
    console.log(toJS(this.shoppingCart));
    this.shoppingCart.count = this.shoppingCart.count + 1;
  }

  get getAllPrice() {
    return this.shoppingCart.items.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
  }
  countPizzaById(item: PizzaItem) {
    const countPizza = this.shoppingCart.items.reduce(
      (accumulator: number, currentValue) => {
        if (currentValue.id === item.id) {
          accumulator = accumulator + 1;
        }
        return accumulator;
      },
      0
    );
    return countPizza;
  }
}

autorun(() => {
  console.log(toJS(storePizza.shoppingCart));
});

export const storePizza = new PizzsStore();
