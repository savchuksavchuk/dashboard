import "./CustomersTable.scss";

export const CustomersTable = ({ customers }) => {
  return (
    <table className="customersTable">
      <thead className="customersTable__heading">
        <tr>
          <th className="customersTable__title">Customer Name</th>
          <th className="customersTable__title">Company</th>
          <th className="customersTable__title">Phone Number</th>
          <th className="customersTable__title">Email</th>
          <th className="customersTable__title">Country</th>
          <th className="customersTable__title">Status</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr className="customersTable__row" key={customer.phone}>
            <td className="customersTable__item">{customer.name}</td>
            <td className="customersTable__item">{customer.company}</td>
            <td className="customersTable__item">{customer.phone}</td>
            <td className="customersTable__item">{customer.email}</td>
            <td className="customersTable__item">{customer.country}</td>
            <td className="customersTable__item">
              {customer.active ? (
                <span className="customersTable__status--active">Active</span>
              ) : (
                <span className="customersTable__status--inactive">
                  Inactive
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
