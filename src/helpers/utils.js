import matchSorter from "match-sorter";

export const getItemsWithMatchSorter = (rows, inputValue) => {
  return inputValue
    ? matchSorter(rows, inputValue, {
        keys: ["location.name", "location.region", "details"]
      })
    : rows;
};
