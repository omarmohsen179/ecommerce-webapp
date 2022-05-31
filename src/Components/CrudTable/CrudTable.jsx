import React, { useState } from "react";

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
// import { employees, states } from "./data.js";

function CrudTable({ data = [], colAttributes = [], children }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div style={{ padding: 30 }} id="data-grid-demo">
      {/* <DataGrid dataSource={data} showBorders={true} id="gridContainer"> */}
      <DataGrid id="gridContainer" dataSource={data} showBorders={true}>
        <Editing mode="row" useIcons={true} />
        {/* <Column dataField="name" />
        <Column dataField="price" />
        <Column dataField="quantity" /> */}

        {clicked && <Popup visible={true}>{children}</Popup>}
        {colAttributes.map((el, index) => (
          <Column
            key={index}
            dataType={el.dataType || "string"}
            dataField={el.field}
            caption={el.caption}
          />
        ))}

        <Column type="buttons" width={110}>
          <Button
            hint="Clone"
            icon="edit"
            visible={true}
            disabled={false}
            onClick={() => setClicked(true)}
          />
        </Column>
      </DataGrid>
      <button
        style={{
          position: "absolute",
          bottom: "87.3%",
          right: "19%",
          zIndex: "10000",
          display: !clicked ? "none" : "block",
          transition: "1s",
          transitionDelay: "2s",
        }}
        onClick={() => setClicked(false)}
      >
        Exit
      </button>
    </div>
  );
}

export default CrudTable;
