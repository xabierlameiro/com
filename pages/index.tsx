import type { NextPage } from "next";
import React from "react";

const Header = () => <h1 data-testid="header">Header</h1>;
const Main = () => <h1 data-testid="main">Main Content</h1>;
const Footer = () => <h1 data-testid="footer">Footer</h1>;

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
