// function Products() {
//   return <div></div>;
// }

// export default Products;

import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "productName", headerName: "Product Name", width: 130 },
  { field: "price", headerName: "Price", width: 130 },
  { field: "quantity", headerName: "Quantity", width: 130 },
];

const rows = [
  { id: 1, price: "16000", productName: "ps5", quantity: "20" },
  { id: 2, price: "16000", productName: "ps5", quantity: "20" },
  { id: 3, price: "16000", productName: "ps5", quantity: "20" },
  { id: 4, price: "16000", productName: "ps5", quantity: "20" },
  { id: 5, price: "1200", productName: "ps4", quantity: "20" },
  { id: 6, price: "1200", productName: "ps4", quantity: "20" },
  { id: 7, price: "1000", productName: "ps3", quantity: "20" },
  { id: 8, price: "16000", productName: "ps5", quantity: "20" },
  { id: 9, price: "16000", productName: "ps5", quantity: "20" },
  { id: 10, price: "16000", productName: "ps5", quantity: "20" },
  { id: 11, price: "16000", productName: "ps5", quantity: "20" },
  { id: 12, price: "16000", productName: "ps5", quantity: "20" },
  { id: 13, price: "16000", productName: "ps5", quantity: "20" },
];

function index() {
  return (
    <div
      style={{
        height: 400,
        width: "80%",
        margin: "auto",
        backgroundColor: "white",
        marginTop: "50px",
        borderRadius: "5px",
        boxShadow: "0 1px 9px 1px rgba(0, 0, 0, 0.28)",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default index;
