import React from 'react';
import Sidebar from '../components/Sidebar';
import AccountForm from '../components/Settings/AccountForm';
import styles from '../styles';

function AccountSettings() {
  return (
    <main className="flex flex-col bg-neutral-50">
      <header className="flex-1 px-16 py-8">
        <h1 style={styles.heading}>Nastavení účtu</h1>
      </header>
      <section className="flex flex-wrap gap-8 items-start px-16 pb-32">
        <Sidebar />
        <div className="flex grow shrink justify-center min-w-[240px]">
          <div className="flex flex-col p-6 w-full bg-white rounded-xl">
            <AccountForm />
          </div>
        </div>
      </section>
    </main>
  );
}

export default AccountSettings;
