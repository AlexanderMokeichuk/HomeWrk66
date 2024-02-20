import React from "react";
import {Link} from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import "./Header.css";

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div className={"min-vh-100 d-flex flex-column"}>
     <header>
       <div className={"container d-flex align-items-center justify-content-between"}>
         <Link to={"/"} className={"link-offset-2 link-underline link-underline-opacity-0 text-primary"}>
           <h2>Calorie tracer</h2>
         </Link>
         <AppBar/>
       </div>
     </header>
     <main className={"mt-4"}>
       <div className={"container d-flex justify-content-center"}>
         <div className={"col-9"}>
           {children}
         </div>
       </div>
     </main>
      <footer className={"mt-auto p-3 border"}>
        <div className={"container text-primary"}>
          Footer
        </div>
      </footer>
    </div>
  );
};

export default Layout;