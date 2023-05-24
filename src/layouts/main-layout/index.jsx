//import React from 'react'
import PropTypes from "prop-types";
const MainLayout = ({ children }) => {
  return (
    <main className="w-full h-screen flex flex-col  items-center ">
      {children}
    </main>
  );
};
MainLayout.propTypes = { children: PropTypes.node.isRequired };
export default MainLayout;
