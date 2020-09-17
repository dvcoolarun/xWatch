import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { useGraphQl } from "./helpers/ApiClient/client";
import { launchPadQuery, columns, customStyles } from "./constant/constant";
import ExpandedComponent from "./components/ExpandedComponent";
import Filter from "./components/Filter";
import "./css/styles.css";
import { getItemsWithMatchSorter } from "./helpers/utils";

export default function App() {
  const { data, loading } = useGraphQl(launchPadQuery);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterData, setFilterData] = useState([]);

  const handleChange = (value) => {
    setSearchTerm(value);
    setFilterData(getItemsWithMatchSorter(data.launchpads, searchTerm));
  };

  return (
    <div className="wrapper">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <header>
            <img src="https://svgshare.com/i/PiX.svg" alt="watch-logo" />
            <Filter
              value={searchTerm}
              handleChange={(event) => handleChange(event.target.value)}
            />
          </header>
          {searchTerm.length < 1 ? (
            <DataTable
              data={data.launchpads}
              columns={columns}
              responsive={true}
              customStyles={customStyles}
              expandableRows
              expandableRowsComponent={<ExpandedComponent />}
              expandOnRowClicked
            />
          ) : (
            <DataTable
              data={filterData}
              columns={columns}
              responsive={true}
              customStyles={customStyles}
              expandableRows
              expandableRowsComponent={<ExpandedComponent />}
              expandOnRowClicked
            />
          )}
        </>
      )}
    </div>
  );
}
