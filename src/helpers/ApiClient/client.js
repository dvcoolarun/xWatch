import { GraphQLClient } from "graphql-request";
import { useState, useEffect } from "react";

const client = new GraphQLClient("https://api.spacex.land/graphql/");

export const useGraphQl = (query) => {
  const [state, setState] = useState({
    loading: true
  });

  useEffect(() => {
    client.request(query).then((data) => {
      setState({
        data,
        loading: false
      });
    });
  }, [query]);

  return state;
};
