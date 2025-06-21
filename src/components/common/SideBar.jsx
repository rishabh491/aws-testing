import React from "react";

const SideBar = () => {
  return (
    <aside className="h-[90vh] w-full   text-black">
      <h2 className="text-2xl font-semibold px-3">InfoData</h2>
      <hr/>
      <ul className="space-y-4">
        <li className="hover:bg-blue-800 px-3 py-2 rounded cursor-pointer">Sales</li>
        <li className="hover:bg-blue-800 px-3 py-2 rounded cursor-pointer">Items</li>
        <li className="hover:bg-blue-800 px-3 py-2 rounded cursor-pointer">Monthly Sales</li>
        <li className="hover:bg-blue-800 px-3 py-2 rounded cursor-pointer">Employees</li>
      </ul>
    </aside>
  );
};

export default SideBar;
