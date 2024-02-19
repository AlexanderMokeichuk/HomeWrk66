import React from "react";

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div className={"min-vh-100 d-flex flex-column bg-dark text-white"}>
     <header className={"bg-body text-dark"}>
       <div className={"container"}>
         Header
       </div>
     </header>
     <main>
       <div className={"container"}>
         {children}
       </div>
     </main>
      <footer className={"mt-auto bg-body text-dark p-3"}>
        <div className={"container"}>
          Footer
        </div>
      </footer>
    </div>
  );
};

export default Layout;