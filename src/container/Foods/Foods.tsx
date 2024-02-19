import React, {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Meals} from "../../type";
import axiosApi from "../../axiosApi";

const Foods: React.FC = () => {
  const [meals, setMeals] = useState<Meals[]>([]);

  const fetchMealsApi = useCallback(async () => {
    try {
      const {data: response} = await axiosApi.get<Meals | null>(".json");
      if (response) {
        setMeals(Object.keys(response).map((id) => ({
          ...response[id],
          id,
        })));
      } else {
        setMeals([]);
      }
    } finally {
      console.log("");
    }
  }, []);

  useEffect(() => {
    void fetchMealsApi();
  }, [fetchMealsApi]);

  const deleteMeal = async (id: string) => {
    await axiosApi.delete(`/${id}.json`);
    void fetchMealsApi();
  };

  return (
    <div>
      <Link to={`/add`} className={"btn btn-secondary"}>Add new meal</Link>
      <div>
        <h3>Foods</h3>
        <div>
          {meals.map((meal) => {
            return <div key={meal.id} className={"alert alert-primary"}>
              {meal.meal}
              <Link to={`/edit/${meal.id}`} className={"btn btn-secondary"}>Edit</Link>
              <button type={"button"} onClick={() => deleteMeal(meal.id)} className={"btn btn-danger"}>Delete</button>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Foods;