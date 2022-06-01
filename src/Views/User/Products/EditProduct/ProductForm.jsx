import React, { useCallback, useEffect, useState } from "react";

import "devextreme-react/text-area";

import SquaredInput from "../../../../Components/SquaredInput";
import ButtonComponent from "../../../../Components/ButtonComponent";
function ProductForm({ rowData, columns, dataSource, setData }) {
  const [values, setValues] = useState(rowData);
  console.log("values", values);
  console.log("dataSource", dataSource);

  useEffect(() => {
    setValues(rowData);
  }, [rowData]);

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  // const handleSubmit = useCallback((e) => {
  //   dataSource.map((el) => {
  //     if (el.ID === values.ID) {
  // setData({
  //   ...el,
  //   [el.name]: values.name,
  //   [el.price]: values.price,
  //   [el.quantity]: values.quantity,
  // });
  //     }
  //   });
  // }, []);
  function handleSubmit() {
    dataSource.map(
      (el) =>
        el.ID === values.ID && setData([...dataSource, { ...el, ...values }])
    );
  }

  ///////////Add function /////////////////

  // function handleSubmit() {
  //   dataSource.map(
  //     (el) =>
  //       el.ID === values.ID &&
  //       setData([...dataSource, { ...el, name: values.name }])
  //   );
  // }

  return (
    <div>
      <SquaredInput
        label={"Name"}
        name={columns[0].field}
        value={values.name}
        handleChange={handleChange}
        required
        // errorMessage={error.FullName}
      />
      <SquaredInput
        label={"Price"}
        name={columns[1].field}
        value={values.price}
        handleChange={handleChange}
        required
        // errorMessage={error.FullName}
      />
      <SquaredInput
        label={"Quantity"}
        name={columns[2].field}
        value={values.quantity}
        handleChange={handleChange}
        required
        // errorMessage={error.FullName}
      />
      <ButtonComponent onClick={handleSubmit} title="Submit" />
    </div>
  );
}

export default ProductForm;
