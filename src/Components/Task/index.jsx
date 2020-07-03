import React, { useEffect, useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import query from "./query";

const Task = () => {
  const { loading, error, data } = useQuery(query);
  if (error) {
    return <span>Error</span>;
  }
  console.log(data);
  return <div>{loading ? <span>Loading</span> : <span>Data</span>}</div>;
};

export default Task;
