import React from "react";
import Layout from "../Layout";
import style from "./Home.module.scss";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import Task from "../../Components/Task";
import client from "../../utils/client";

const Home = () => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <div className={style.root}>
          <span>Home page</span>
          <Task />
        </div>
      </Layout>
    </ApolloProvider>
  );
};

export default Home;
