import React from "react";
import InstallIcon from "../../assets/icons/arrow-down-on-square-stack.svg";
import styles from "../../styles";

const invoices = [
  {
    number: "121548784515487",
    orderNumber: "121548784515487",
    amount: "-1500 Kč",
  },
  {
    number: "121548784515487",
    orderNumber: "121548784515487",
    amount: "-1500 Kč",
  },
  {
    number: "121548784515487",
    orderNumber: "121548784515487",
    amount: "-1500 Kč",
  },
  {
    number: "121548784515487",
    orderNumber: "121548784515487",
    amount: "-1500 Kč",
  },
  {
    number: "121548784515487",
    orderNumber: "121548784515487",
    amount: "-1500 Kč",
  },
  {
    number: "121548784515487",
    orderNumber: "121548784515487",
    amount: "-1500 Kč",
  },
  {
    number: "121548784515487",
    orderNumber: "121548784515487",
    amount: "-1500 Kč",
  },
  {
    number: "121548784515487",
    orderNumber: "121548784515487",
    amount: "-1500 Kč",
  },
  {
    number: "121548784515487",
    orderNumber: "121548784515487",
    amount: "-1500 Kč",
  },
];

function InvoicesList() {
  return (
    <div className="flex flex-col max-w-[976px]">
      <div className="flex flex-col justify-center p-4 w-full bg-white rounded-t-xl border-b border-zinc-200">
        <div className="flex gap-8 w-full">
          <div className="grow w-[232px]" style={styles.smTitle}>
            Číslo faktury
          </div>
          <div className="grow w-56" style={styles.smTitle}>
            Číslo objednávky
          </div>
          <div className="grow w-32" style={styles.smTitle}>
            Cena celkem
          </div>
          <div className="grow w-32 text-right" style={styles.smTitle}>
            Stažení
          </div>
        </div>
      </div>
      <div className="flex flex-col px-6 pb-4 w-full bg-white">
        {invoices.map((invoice, index) => (
          <div key={index} className="flex gap-8 items-start mt-10 w-full">
            <div className="w-64" style={styles.textBase}>
              {invoice.number}
            </div>
            <div className="w-64" style={styles.textBase}>
              {invoice.orderNumber}
            </div>
            <div className="flex-1" style={styles.textBase}>
              {invoice.amount}
            </div>
            <div className="flex gap-1 items-center text-blue-500">
              <img
                loading="lazy"
                src={InstallIcon}
                alt="Install Icon"
                className="w-4 aspect-square"
              />
              <button className="self-stretch my-auto">Stáhnout</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InvoicesList;
