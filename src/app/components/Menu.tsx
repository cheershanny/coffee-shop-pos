import React from "react";
import AddToOrder from "../components/AddToOrder";
interface Item {
  id: number;
  name: string;
  price: number;
}
const Menu = () => {
  const foodList: Item[] = [
    {
      id: 0,
      name: "Pho",
      price: 12,
    },
    {
      id: 1,
      name: "Banh Mi",
      price: 7,
    },
    {
      id: 2,
      name: "Pizza",
      price: 20,
    },
  ];
  const drinkList: Item[] = [
    {
      id: 0,
      name: "Jasmine Green Tea",
      price: 3,
    },
    {
      id: 1,
      name: "Matcha Latte",
      price: 2,
    },
    {
      id: 2,
      name: "Kombucha",
      price: 1,
    },
  ];
  return (
    <div className="card h-dvh w-1/2 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Menu</h2>
        <table className="table">
          <tbody>
            <tr>
              <td className="font-bold">Food</td>
            </tr>
            {foodList.map((food) => (
              <tr key={food.id} className="hover">
                <td>{food.name}</td>
                <td><AddToOrder price = {food.price} name={food.name}/></td>
              </tr>
            ))}
            <tr>
              <td className="font-bold">Drink</td>
            </tr>
            {drinkList.map((drink) => (
              <tr key={drink.id} className="hover">
                <td>{drink.name}</td>
                <td><AddToOrder price={drink.price} name={drink.name}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Menu;
