import { React, useState } from "react";
import { useHistory } from "react-router";
import MasterTable from "../../../Components/MasterTable/MasterTable";
// import DataGrid, { Column, HeaderFilter } from "devextreme-react/data-grid";

import DataGrid, {
  Column,
  Paging,
  Pager,
  SearchPanel,
  GroupPanel,
  Grouping,
  FilterRow,
  Scrolling,
  HeaderFilter,
  FilterBuilderPopup,
  FilterPanel,
} from "devextreme-react/data-grid";

const columns = [
  {
    field: "name",
    caption: "Name",
  },
  {
    field: "price",
    caption: "Price",
    // alignment: "center",
  },
  {
    field: "quantity",
    caption: "Quantity",
    // alignment: "center",
  },
];

const data = [
  { name: "ps5", price: "16000", quantity: "20" },
  { name: "ps4", price: "8000", quantity: "14" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
  { name: "ps3", price: "4000", quantity: "20" },
];

function Products() {
  return (
    <div style={{ padding: 25 }}>
      {/* <MasterTable
        dataSource={data}
        colAttributes={columns}
        onRowDoubleClick={(e) => useHistory.push("/")}
        onRowRemoving={(e) => console.log(e)}
      /> */}
      {/* 
      <DataGrid
        dataSource={data}
        filterRow={true}
        showBorders={true}
        remoteOperations={true}
        searchPanel={true}
        allowFiltering={true}
      >
        <SearchPanel visible={true} text={searchText} />

        <Column dataField="name" dataType="string" />
        <Column dataField="price" dataType="number" />
        <Column dataField="quantity" dataType="number" />

        <Paging defaultPageSize={12} />
        <Pager
          showPageSizeSelector={true}
          allowedPageSizes={allowedPageSizes}
        />
      </DataGrid> */}

      <DataGrid
        dataSource={data}
        allowColumnReordering={true}
        rowAlternationEnabled={true}
        showBorders={true}
        // onContentReady={this.onContentReady}
      >
        <FilterRow visible={true} />
        <FilterPanel visible={true} />
        {/* <FilterBuilderPopup position={filterBuilderPopupPosition} /> */}
        <HeaderFilter visible={true} />
        {/* <Scrolling mode="infinite" /> */}

        <SearchPanel visible={true} highlightCaseSensitive={true} />

        {/* <Column dataField="Product" groupIndex={0} /> */}
        {/* <Column
          dataField="Amount"
          caption="Sale Amount"
          dataType="number"
          format="currency"
          alignment="right"
        />
        <Column
          dataField="Discount"
          caption="Discount %"
          dataType="number"
          format="percent"
          alignment="right"
          allowGrouping={false}
          cssClass="bullet"
        /> */}
        <Column dataField="name" dataType="string" />
        <Column dataField="price" dataType="number" />
        <Column dataField="quantity" dataType="number" />
        <Column dataField="SaleDate" dataType="date" />
        <Column dataField="Customer" dataType="string" width={150} />

        <Pager allowedPageSizes={5} showPageSizeSelector={true} />
        <Paging defaultPageSize={10} />
      </DataGrid>
    </div>
  );
}

export default Products;
