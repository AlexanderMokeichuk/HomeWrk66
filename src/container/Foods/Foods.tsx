import React, {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {MealApi, Meals} from "../../type";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";
import AlertMeal from "../../components/AlertMeal/AlertMeal";

const Foods: React.FC = () => {
  const [meals, setMeals] = useState<Meals[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [lauding, setLauding] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [btnId, setBtnId] = useState<string>("");

  const fetchMealsApi = useCallback(async () => {
    try {
      setLauding(true);
      const {data: response} = await axiosApi.get<MealApi | null>(".json");
      if (response) {
        const meals = Object.keys(response).map((id) => ({
          ...response[id],
          id,
        })).reverse();
        setMeals(meals);

        setTotalPrice(meals.reduce((sum, meal) => {
          return sum + parseInt(meal.calories);
        }, 0));
      } else {
        setMeals([]);
      }
    } finally {
      setLauding(false);
    }
  }, []);

  useEffect(() => {
    void fetchMealsApi();
  }, [fetchMealsApi]);

  const deleteMeal = async (id: string) => {
    setIsActive(true);
    setBtnId(id);
    if (confirm("Real?")) {
      await axiosApi.delete(`/${id}.json`);
      void fetchMealsApi();
    }
    setIsActive(false);
  };

  const isDisabled = (isActive) ? "disabled" : "";

  return (lauding) ? <Spinner/> : (
    <div className={"d-flex flex-column"}>
      <div className={"d-flex align-items-center"}>
        {(meals.length)
          ? <h3 className={"text-success"}>
            Total calories:{" "}
            <span className={"text-primary"}>
            {totalPrice}
              <strong className={"text-danger"}> kcal</strong>
          </span>
          </h3>
          : undefined
        }
        <Link to={`/add`} className={`ms-auto btn btn-success ${isDisabled}`}>Add new meal</Link>
      </div>
      <div className={"mt-3"}>
        <h3 className={"mb-4 text-primary"}>Foods</h3>
        <div>
          {meals.map((meal) => {
            return (
              <AlertMeal
                key={meal.id}
                meal={meal}
                btnId={btnId}
                isDisabled={isDisabled}
                isActive={isActive}
                deleteMeal={deleteMeal}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Foods;