import { useState } from "react";
import HeaderComponent from "../../component/header/Header.component";
import styled from "styled-components";
import { SortingComponent } from "../../component/sorting";
import { PizzaComponent } from "../../component/pizza/PizzaComponent";
//(Math.random() < 0.5 ? -1 : 1)
import { observer } from "mobx-react";

export const LandingCpomponent = observer(() => {
  const funcGenNumber = (prev: number) => {
    if (prev === 100) {
      let oneAndTwo = Math.floor(Math.random() * 2) + 1;
      return oneAndTwo === 1 ? 9 : 98;
    }
    if (prev > 1) {
      let array = Array.from(prev.toString(), Number);
      let oneAndTwo = Math.floor(Math.random() * 2) + 1;
      if (oneAndTwo === 1) {
        return Number(array[array.length - 1]) - 1 > 0
          ? Number(array[array.length - 1]) - 1
          : 0;
      } else {
        let newArray = [];
        if (array[array.length - 1] !== 0) {
          newArray.push(array[array.length - 1] - 1);
          newArray[0] > 0 ? newArray.push(newArray[0] - 1) : 0;
          return Number(newArray.join(""));
        }
        return 0;
      }
    }
    return 0;
  };
  const checkingRule = (array: string[]) => {
    let check = 0;
    for (let item of array) {
      if (item === "3" || item === "-2") {
        check++;
      }
    }
    return check;
  };
  let sum = 0;
  let check = 0;
  while (sum !== 200 && check !== 2) {
    let a = funcGenNumber(100);
    let b = funcGenNumber(a);
    let c = funcGenNumber(b);
    let d = funcGenNumber(c);
    let e = funcGenNumber(d);
    let f = funcGenNumber(e);
    let q = funcGenNumber(f);
    let w = funcGenNumber(q);
    let t = funcGenNumber(w);
    let y = funcGenNumber(t);
    let a1 = a;
    let b1 = b * (Math.random() < 0.5 ? -1 : 1);
    let c1 = c * (Math.random() < 0.5 ? -1 : 1);
    let d1 = d * (Math.random() < 0.5 ? -1 : 1);
    let e1 = e * (Math.random() < 0.5 ? -1 : 1);
    let f1 = f * (Math.random() < 0.5 ? -1 : 1);
    let q1 = q * (Math.random() < 0.5 ? -1 : 1);
    let w1 = w * (Math.random() < 0.5 ? -1 : 1);
    let t1 = t * (Math.random() < 0.5 ? -1 : 1);
    let y1 = y * (Math.random() < 0.5 ? -1 : 1);

    let array = [];
    array.push(String(a1));
    array.push(String(b1));
    array.push(String(c1));
    array.push(String(d1));
    array.push(String(e1));
    array.push(String(f1));
    array.push(String(q1));
    array.push(String(w1));
    array.push(String(t1));
    array.push(String(y1));
    sum = a1 + b1 + c1 + d1 + e1 + f1 + q1 + w1 + t1 + y1;
    check = checkingRule(array);
    console.log(array);
    console.log(a1, b1, c1, d1, e1, f1, q1, w1, t1, y1);
    console.log("Cумма", sum);
    console.log("чек", check);
    console.log("разделитель");
  }
  return (
    <StyledWrapContent>
      <HeaderComponent />
      <SortingComponent />
      <PizzaComponent />
    </StyledWrapContent>
  );
});

const StyledWrapContent = styled.div`
  width: 80%;
  padding: 20px 50px 20px 50px;
  border-radius: 7px;
  margin: 0 auto;
  background: white;
`;
