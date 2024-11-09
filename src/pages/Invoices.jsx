import React from "react";
import styles from "../styles";

import Sidebar from "../components/Sidebar";
import InvoicesList from "../components/Invoices/InvoicesList";
import Pagination from "../components/Invoices/Pagination";

const Invoices = () => {
  return (
    <main className="flex flex-col bg-neutral-50">
      <header className="flex-1 px-16 py-8">
        <h1 style={styles.heading}>Faktury</h1>
      </header>
      <div className="flex flex-wrap gap-8 items-start px-16 pb-32">
        <Sidebar />
        <section className="flex flex-col grow shrink min-w-[240px]">
          <InvoicesList />
          <Pagination />
        </section>
      </div>
    </main>
  );
};

export default Invoices;
