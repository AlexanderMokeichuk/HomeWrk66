import React from "react";
import {Link} from "react-router-dom";
import {Meals} from "../../type";

interface Props {
  meal: Meals,
  isDisabled: string,
  isActive: boolean,
  deleteMeal: (id: string) => void,
}

const AlertMeal: React.FC<Props> = ({meal, isDisabled, isActive, deleteMeal}) => {

  return (
    <div key={meal.id} className={"alert alert-primary d-flex gap-3"}>
      <div className={"col-9"}>
        <p className={"text-secondary"}>{meal.mealTime}</p>
        <span className={"text-break"}>{meal.meal}</span>
      </div>
      <div className={"col d-flex align-items-center justify-content-between"}>
        <span className={"text-break"}>
          {meal.calories}
          <strong>kcal</strong>
        </span>
        <div className={"d-flex flex-column"}>
          <Link
            to={`/edit/${meal.id}`}
            className={`btn btn-secondary
           ${isDisabled}`}
          >
            Edit
          </Link>

          <button
            type={"button"}
            className={"btn btn-danger"}
            onClick={() => deleteMeal(meal.id)}
            disabled={isActive}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertMeal;