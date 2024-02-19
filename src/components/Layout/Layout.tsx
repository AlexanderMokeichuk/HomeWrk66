import React from "react";
import {Link} from "react-router-dom";
import AppBar from "../AppBar/AppBar";

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div className={"min-vh-100 d-flex flex-column bg-dark text-white"}>
     <header className={"border border-start-0 border-end-0"}>
       <div className={"container d-flex align-items-center justify-content-between"}>
         <Link to={"/"} className={"link-offset-2 link-underline link-underline-opacity-0 text-white"}>
           <h2>Calorie tracer</h2>
         </Link>
         <AppBar/>
       </div>
     </header>
     <main className={"mt-4"}>
       <div className={"container"}>
         {children}
       </div>
     </main>
      <footer className={"mt-auto border border-start-0 border-end-0 p-3"}>
        <div className={"container"}>
          Footer
        </div>
      </footer>
    </div>
  );
};

export default Layout;