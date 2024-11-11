import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import OrderManagement from "./pages/OrderManagment";
import Invoices from "./pages/Invoices";
import AccountSettings from "./pages/AccountSettings";

function App() {
  return (
    <Router>
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/order-management" replace />}
          />
          <Route path="/order-management" element={<OrderManagement />} />
          <Route path="/faktury" element={<Invoices />} />
          <Route path="/settings" element={<AccountSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
