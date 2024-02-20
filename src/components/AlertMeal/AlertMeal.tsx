import React from "react";
import {Link} from "react-router-dom";
import {Meals} from "../../type";
import BtnSpinner from "../BtnSpinner/BtnSpinner";
import "./AlertMeal.css";
import editSvg from "bootstrap-icons/icons/pencil-square.svg";
import deleteSvg from "bootstrap-icons/icons/trash3.svg";

interface Props {
  meal: Meals,
  btnId: string,
  isDisabled: string,
  isActive: boolean,
  deleteMeal: (id: string) => void,
}

const btnStyle = {
  display: "block",
  width: 25,
  height: 25,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const AlertMeal: React.FC<Props> = ({meal, btnId, isDisabled, isActive, deleteMeal}) => {

  const styleBtnDelete = {
    backgroundImage: `url(${deleteSvg})`,
    ...btnStyle,
  };
  const styleBtnEdit = {
    backgroundImage: `url(${editSvg})`,
    ...btnStyle,
  };

  return (
    <div key={meal.id} className={"alertMeal bg-white alert d-flex flex-column gap-3"}>
      <div className={"d-flex"}>
        <div className={"col-9"}>
          <span className={"text-success"}>{meal.mealTime}</span>
        </div>
        <div className={"col d-flex align-items-center justify-content-between"}>
        <span className={"text-break"}>
          {meal.calories}:
          <strong> kcal</strong>
        </span>
          <div className={" d-flex flex-column gap-2"}>
            <Link
              to={`/edit/${meal.id}`}
              className={`btn p-0 ${isDisabled}`}
            >
              <span style={styleBtnEdit}></span>
            </Link>

            <button
              type={"button"}
              className={"btn p-0 d-flex align-items-center gap-1"}
              onClick={() => deleteMeal(meal.id)}
              disabled={isActive}
            >
              {(isActive && btnId === meal.id) ? <BtnSpinner/> : undefined}
              <span style={styleBtnDelete}></span>
            </button>
          </div>
        </div>
      </div>
      <div className={"text-break overflow-y-auto"} style={{maxHeight: 100}}>
        {meal.meal}
      </div>
    </div>
  );
};

export default AlertMeal;