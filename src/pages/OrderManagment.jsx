import React from 'react';
import OrderList from '../components/OrderManagment/OrderList';
import Sidebar from '../components/Sidebar';
import styles from '../styles';

const OrderManagement = () => {
  return (
    <main className="flex flex-col bg-neutral-50">
      <header className="flex-1 px-16 py-8 max-md:px-5">
        <h1 style={styles.heading}>Moje objednávky</h1>
      </header>
      <div className="flex flex-wrap gap-8 items-start px-16 pb-32 max-md:px-5 max-md:pb-24">
        <Sidebar />
        <OrderList />
      </div>
    </main>
  );
}

export default OrderManagement;