import React from "react";
import {Link} from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import mealImage from "../../assets/meal.webp";
import backMealImage from "../../assets/backMeal.jpg";
import "./Header.css";

const styleDivImage = {
  width: 400,
  height: 400,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div className={"min-vh-100 d-flex flex-column"} style={{
      backgroundImage: `url(${backMealImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
     <header>
       <div className={"container d-flex align-items-center justify-content-between"}>
         <Link to={"/"} className={"link-offset-2 link-underline link-underline-opacity-0 text-primary"}>
           <h2>Calorie tracer</h2>
         </Link>
         <AppBar/>
       </div>
     </header>
      <main className={"mt-3"}>
        <div className={"container d-flex justify-content-center"}>
          <div className={"col-9"}>
            {children}
          </div>
        </div>

        <div
          className={"position-absolute"}
          style={{
            ...styleDivImage,
            backgroundImage: `url(${mealImage})`,
            top: "30%",
            right: 0
          }}
        />

      </main>
      <footer className={"mt-auto"}>
        <div className={"container border-end p-3 rounded bg-white text-primary"}>
          Footer
        </div>
      </footer>
    </div>
  );
};

export default Layout;