import React from "react";
import styles from "../../styles";

import RepeatIcon from "../../assets/icons/arrow-uturn-left.svg";
import CancelIcon from "../../assets/icons/x-mark.svg";

function OrderCard({ order }) {
  return (
    <article className="bg-white rounded-xl p-6 shadow-sm mb-[32px]">
      <div className="flex justify-between items-center mb-4">
        <h3 style={styles.textLg}>Číslo objednávky: {order.id}</h3>
        <span
          style={styles.textXs}
          className="px-2 py-1 text-green-700 bg-green-100 rounded"
        >
          {order.status}
        </span>
      </div>
      <div className="flex gap-2 mb-6">
        {order.products.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Product ${index + 1}`}
            className="w-12 h-12 object-cover rounded-lg"
          />
        ))}
      </div>
      <div className="flex justify-between mb-6">
        <div>
          <p style={styles.textBase}>
            Datum objednávky:{" "}
            <span className="text-gray-500">{order.date}</span>
          </p>
          <p style={styles.textBase}>
            Cena celkem:{" "}
            <span className="text-gray-500">{order.totalPrice}</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-blue-500 font-medium">Potřebujete poradit?</p>
          <p className="text-neutral-900 font-semibold">
            314 004 540 (po-pá 8:00-16:00)
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="px-12 py-3 bg-blue-500 text-white font-semibold rounded-lg">
          Detail
        </button>
        <div className="flex gap-6" style={styles.textSm}>
          <button className="flex items-center gap-1">
            <span>Zopakovat</span>
            <img src={RepeatIcon} alt="Repeat Icon" className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-1">
            <span>Stornovat</span>
            <img src={CancelIcon} alt="Cancel Icon" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default OrderCard;
