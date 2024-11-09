import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderManagement from "./pages/OrderManagment";

import Invoices from "./pages/Invoices";

function App() {
  return (
    <Router>
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route path="/order-management" element={<OrderManagement />} />
          <Route path="/faktury" element={<Invoices />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
