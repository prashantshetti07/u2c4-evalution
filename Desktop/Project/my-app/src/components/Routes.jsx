import { Routes, Route } from "react-router-dom";
import { Customers } from "./Customers";
import { DashBoard } from "./DashBoard";
import { Listings } from "./Listings";
import { Order } from "./order";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/customers" element={<Customers/>}></Route>
        <Route path="/listings" element={<Listings />}></Route>

      </Routes>
    </div>
  );
};

export { AllRoutes };
