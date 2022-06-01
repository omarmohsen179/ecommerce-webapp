import React, { Children, useCallback, useState } from "react";
import "./CrudTable.scss";

import DataGrid, {
  Column,
  Editing,
  Paging,
  Lookup,
  Form,
  Item,
  Button,
} from "devextreme-react/data-grid";
import "devextreme-react/text-area";
// import { Button } from "devextreme-react";

import { Popup } from "devextreme-react/popup";
import ButtonComponent from "../ButtonComponent";
// import { employees, states } from "./data.js";

function CrudTable({
  data = [],
  setData,
  colAttributes = [],
  FormComponent,
  onRowRemoving,
}) {
  const [clicked, setClicked] = useState(false);
  const [dataRow, setDataRow] = useState(null);

  const handleChange = useCallback((e) => {
    setDataRow(e.row.data);
    setClicked(true);
  }, []);

  function handleDelete(e) {
    setData(data.filter((item) => item.ID !== e.data.ID));
  }

  return (
    <div style={{ padding: 30 }} id="data-grid-demo">
      <DataGrid
        onRowRemoved={handleDelete}
        onRowRemoving={onRowRemoving}
        id="gridContainer"
        dataSource={data}
        showBorders={true}
      >
        <Editing mode="row" useIcons={true} allowDeleting />

        {clicked && (
          <Popup visible={clicked} onHiding={() => setClicked(false)}>
            <FormComponent
              setData={setData}
              rowData={dataRow}
              dataSource={data}
              columns={colAttributes}
            />
          </Popup>
        )}

        {colAttributes.map((el, index) => (
          <Column
            key={index}
            dataType={el.dataType || "string"}
            dataField={el.field}
            caption={el.caption}
          />
        ))}
        <Column type="buttons" width={110}>
          <Button name="delete" />
          <Button
            hint="Clone"
            icon="edit"
            visible={true}
            disabled={false}
            onClick={(e) => handleChange(e)}
          />

          {/* <Button
            hint="Clone"
            icon="copy"
            visible={true}
            disabled={false}
            onClick={(e) => {
              //   console.log(JSON.stringify(e.row.data.ID));
              //   const newData = data.filter((item) => item.ID !== e.row.data.ID);
              //   data = newData;
              handleDelete(e);
            }}
          /> */}
        </Column>
      </DataGrid>
    </div>
  );
}

export default CrudTable;
