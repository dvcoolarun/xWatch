export const launchPadQuery = `{
  launchpads {
    id
    successful_launches
    details
    location {
      name
      region
    }
    attempted_launches
    vehicles_launched {
      id
      success_rate_pct
    }
  }
}`;

export const columns = [
  {
    name: "Launch Pad",
    selector: "location.name",
    sortable: true,
    grow: 0.2,
  },
  {
    name: "Region",
    selector: "location.region",
    sortable: true,
    grow: 0.2,
  },
  {
    name: "Details",
    selector: "details",
    sortable: true,
    grow: 0.6,
    wrap: true,
    style: {
      lineHeight: "1.5rem",
      fontSize: "1rem"
    }
  }
];

export const customStyles = {
  tableWrapper: {
    style: {
      display: "table",
      margin: "6% auto",
      width: "60%",
      wordSpacing: "0.3rem"
    }
  },
  headCells: {
    style: {
      fontSize: "1rem",
      fontWeight: 800
    }
},
  rows: {
    style: {
      lineHeight: "1.5rem",
      fontSize: "1rem"
    }
  }
}
