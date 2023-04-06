import { Search } from "../Search/Search";
import "./CustomersList.scss";
import { useEffect, useState } from "react";
import customersList from "/public/api/customers.json";
import { CustomersTable } from "../CustomersTable/CustomersTable";
import { Pagination } from "../Pagination/Pagination";

function getFilteredCustomers(customers, search) {
  const query = search.toLowerCase();

  const filteredCustomers = [...customersList].filter((customer) => {
    for (const key in customer) {
      const value = customer[key];

      if (typeof value !== "boolean" && value.toLowerCase().includes(query)) {
        return true;
      }
    }

    return false;
  });

  return filteredCustomers;
}

export const CustomersList = () => {
  const [customers, setCustomers] = useState(customersList);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredCustomers = getFilteredCustomers(customersList, search);

    setCustomers(filteredCustomers);
  }, [search]);

  return (
    <div className="customersList">
      <div className="customersList__heading">
        <div>
          <h2 className="customersList__title">All Customers</h2>
          <h3 className="customersList__subtitle">Active Members</h3>
        </div>
        <Search onSearch={setSearch} />
      </div>
      <CustomersTable customers={customers} />
      <div className="customersList__footer">
        <span className="customersList__data">
          Showing data 1 to 8 of 256K entries
        </span>
        <Pagination />
      </div>
    </div>
  );
};
