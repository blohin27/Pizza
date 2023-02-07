import { autorun, makeAutoObservable, reaction, toJS } from "mobx";

interface sizePizza {
  26: boolean;
  30: boolean;
  40: boolean;
}

interface pricePizza {
  26: number;
  30: number;
  40: number;
}
export interface PizzaItem {
  id: number;
  name: string;
  possibleSize: sizePizza;
  size: string;
  possiblePrice: pricePizza;
  price: number;
  cake: string;
}

interface IShoppingCart {
  items: PizzaItem[];
  count: number;
}
class PizzsStore {
  itemsPizza: PizzaItem[] = [
    {
      id: 1,
      name: "Пеперони",
      possibleSize: { 26: true, 30: true, 40: true },
      size: "26",
      price: 400,
      possiblePrice: { 26: 400, 30: 500, 40: 650 },
      cake: "Тонкое",
    },
    {
      id: 2,
      name: "4 Сыра",
      size: "26",
      price: 500,
      possibleSize: { 26: true, 30: true, 40: true },
      possiblePrice: { 26: 500, 30: 600, 40: 690 },
      cake: "Тонкое",
    },
    {
      id: 3,
      name: "Кальцоне ",
      size: "26",
      price: 360,
      possibleSize: { 26: true, 30: true, 40: true },
      possiblePrice: { 26: 360, 30: 570, 40: 990 },
      cake: "Тонкое",
    },
    {
      id: 4,
      name: "Сицилийская",
      size: "26",
      price: 600,
      possibleSize: { 26: true, 30: true, 40: true },
      possiblePrice: { 26: 600, 30: 700, 40: 800 },
      cake: "Тонкое",
    },
    {
      id: 5,
      name: "Сицилийская",
      size: "26",
      price: 600,
      possibleSize: { 26: true, 30: true, 40: true },
      possiblePrice: { 26: 600, 30: 700, 40: 800 },
      cake: "Тонкое",
    },
    {
      id: 6,
      name: "Сицилийская",
      size: "26",
      price: 600,
      possibleSize: { 26: true, 30: true, 40: true },
      possiblePrice: { 26: 600, 30: 700, 40: 800 },
      cake: "Тонкое",
    },
    {
      id: 7,
      name: "Сицилийская",
      size: "26",
      price: 600,
      possibleSize: { 26: true, 30: true, 40: true },
      possiblePrice: { 26: 600, 30: 700, 40: 800 },
      cake: "Тонкое",
    },
  ];
  shoppingCart: IShoppingCart = { items: [], count: 0 };
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    // reaction(()=>this.shoppingCart,(sc)=>{}) должен вызваться один раз
  }

  getItems() {
    return this.itemsPizza;
  }

  addPizzaShoppingCart(item: PizzaItem) {
    this.shoppingCart.items.push(item);
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

  countPizzaByIndividual(item: PizzaItem) {
    const countPizza = this.shoppingCart.items.reduce(
      (accumulator: number, currentValue) => {
        if (JSON.stringify(currentValue) === JSON.stringify(item)) {
          accumulator = accumulator + 1;
        }
        return accumulator;
      },
      0
    );
    return countPizza;
  }

  priceTotalPizzaByIndividual(item: PizzaItem) {
    const countPizza = this.shoppingCart.items.reduce(
      (accumulator: number, currentValue) => {
        if (JSON.stringify(currentValue) === JSON.stringify(item)) {
          accumulator = accumulator + currentValue.price;
        }
        return accumulator;
      },
      0
    );
    return countPizza;
  }

  getItemPizza(id: number) {
    const pizzaItem = this.itemsPizza.find((item) => id === item.id);

    return pizzaItem;
  }
  getUniquePizzaItems() {
    let arrayPizza = this.shoppingCart.items;
    let uniqueArrayString: String[] = [];
    let uniqueArrayStore: PizzaItem[] = [];

    arrayPizza.forEach((itemStore) => {
      const itemString = JSON.stringify(itemStore);
      if (!uniqueArrayString.includes(itemString)) {
        uniqueArrayStore.push(itemStore);
        uniqueArrayString.push(itemString);
      }
    });

    return uniqueArrayStore;
  }
  cleanShoppingCart() {
    this.shoppingCart.items = [];
    this.shoppingCart.count = 0;
  }
  deletePizzaIndividual(item: PizzaItem) {
    const newArrayPizza = this.shoppingCart.items.filter((currentValue) => {
      if (JSON.stringify(currentValue) !== JSON.stringify(item)) {
        this.shoppingCart.count = this.shoppingCart.count - 1;

        return true;
      } else return false;
    });
    storePizza.shoppingCart.items = newArrayPizza;
  }
  deletePizzaIndividualOne(item: PizzaItem) {
    for (let value of this.shoppingCart.items) {
      if (JSON.stringify(value) === JSON.stringify(item)) {
        let index = this.shoppingCart.items.indexOf(item);
        this.shoppingCart.items.splice(index, 1);
        this.shoppingCart.count = this.shoppingCart.count - 1;
        break;
      }
    }
  }
}

export const storePizza = new PizzsStore();
