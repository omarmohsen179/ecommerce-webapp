import React from "react";
import CrudTable from "../../../../Components/CrudTable/CrudTable";

import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Lookup,
  Form,
} from "devextreme-react/data-grid";
import "devextreme-react/text-area";
import { Item } from "devextreme-react/form";
import SquaredInput from "../../../../Components/SquaredInput";
function EditProduct() {
  const data = [
    { name: "ps5", price: "16000", quantity: "20" },
    { name: "ps4", price: "8000", quantity: "14" },
    { name: "ps3", price: "4000", quantity: "20" },
    { name: "ps3", price: "4000", quantity: "20" },
  ];

  const colAttributes = [
    {
      field: "name",
      caption: "Name",
    },
    {
      field: "price",
      caption: "Price",
    },
    {
      field: "quantity",
      caption: "quantity",
    },
  ];

  return (
    <CrudTable data={data} colAttributes={colAttributes}>
      <SquaredInput
        label={"Full Name"}
        name="FullName"
        // handleChange={handleChange}
        // value={values["FullName"]}
        required
        // errorMessage={error.FullName}
        // onBlur={CheckInputs(values, error)}
      />
      <SquaredInput
        label={"Age"}
        name="FullName"
        // handleChange={handleChange}
        // value={values["FullName"]}
        required
        // errorMessage={error.FullName}
        // onBlur={CheckInputs(values, error)}
      />
    </CrudTable>
  );
}

export default EditProduct;
