import React, {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {MealApi, Meals} from "../../type";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";
import AlertMeal from "../../components/AlertMeal/AlertMeal";

const Foods: React.FC = () => {
  const [meals, setMeals] = useState<Meals[]>([]);
  const [lauding, setLauding] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const fetchMealsApi = useCallback(async () => {
    try {
      setLauding(true);
      const {data: response} = await axiosApi.get<MealApi | null>(".json");
      if (response) {
        setMeals(Object.keys(response).map((id) => ({
          ...response[id],
          id,
        })));
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
    await axiosApi.delete(`/${id}.json`);
    void fetchMealsApi();
    setIsActive(false);
  };

  const isDisabled = (isActive) ? "disabled" : "";

  return (lauding) ? <Spinner/> : (
    <div className={"d-flex flex-column"}>
      <Link to={`/add`} className={`btn btn-secondary ms-auto ${isDisabled}`}>Add new meal</Link>
      <div>
        <h3 className={"mb-4"}>Foods</h3>
        <div>
          {meals.map((meal) => {
            return (
              <AlertMeal
                key={meal.id}
                meal={meal}
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