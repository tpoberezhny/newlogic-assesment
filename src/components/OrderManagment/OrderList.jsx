import React from "react";
import OrderCard from "./OrderCard";
import styles from "../../styles";

import OrderIcon from "../../assets/icons/order.svg";

const orders = [
  {
    id: "2200245834",
    date: "6. 12. 2022",
    totalPrice: "1 500 Kč",
    status: "Zaplaceno",
    products: [OrderIcon, OrderIcon, OrderIcon],
  },
  {
    id: "2200245835",
    date: "7. 12. 2022",
    totalPrice: "2 000 Kč",
    status: "Zaplaceno",
    products: [OrderIcon, OrderIcon, OrderIcon],
  },
  {
    id: "2200245836",
    date: "8. 12. 2022",
    totalPrice: "1 800 Kč",
    status: "Zaplaceno",
    products: [OrderIcon, OrderIcon, OrderIcon],
  },
];

const OrderList = () => {
  return (
    <section className="flex flex-col flex-1 min-w-[240px] max-md:max-w-full">
      {orders.map((order, index) => (
        <OrderCard
          key={order.id}
          order={order}
          className={index > 0 ? styles.orderCardMargin : ""}
        />
      ))}
    </section>
  );
};

export default OrderList;
