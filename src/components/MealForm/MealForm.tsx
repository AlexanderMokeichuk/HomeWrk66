import React, {FormEvent, useCallback, useEffect, useState} from "react";
import {MEAL_TIME} from "../../constants";
import {Meal, MealApi} from "../../type";
import axiosApi from "../../axiosApi";
import {useNavigate, useParams} from "react-router-dom";

const defaultMeal: Meal = {
  mealTime: "Breakfast",
  meal: "",
  calories: "",
};
const MealForm: React.FC = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [meal, setMeal] = useState<Meal>(defaultMeal);

  const fetchMealApi = useCallback(async () => {
    try {
      const {data: response} = await axiosApi.get<MealApi | string>(`/${id}.json`);
      setMeal(response);
    } finally {
      console.log("");
    }
  }, [id]);

  const changeMeal = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setMeal(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const addNewMeal = async (e: FormEvent) => {
    e.preventDefault();
    await axiosApi.post(".json", {...meal});
    setMeal(defaultMeal);
    navigate("/");
  };

  const editMeal = async (e:FormEvent)=> {
    e.preventDefault();
    await axiosApi.put(`/${id}.json`, {...meal});
    setMeal(defaultMeal);
    void fetchMealApi();
  };



  useEffect(() => {
    if(id) {
      void fetchMealApi();
    }
  }, [fetchMealApi, id]);

  return (
    <form onSubmit={(!id) ? addNewMeal : editMeal} className={"form-control d-flex flex-column gap-3"}>
      <div>
        <select
          className={"form-select"}
          name={"mealTime"}
          value={meal.mealTime}
          onChange={changeMeal}
        >
          {MEAL_TIME.map((time) => {
            return <option key={time.id}>{time.name}</option>;
          })}
        </select>
      </div>
      <div>
        <textarea
          name={"meal"}
          className={"form-control"}
          required
          value={meal.meal}
          onChange={changeMeal}
        />
      </div>
      <div>
        <input
          type={"number"}
          name={"calories"}
          required
          className={"form-control"}
          value={meal.calories}
          onChange={changeMeal}
        />
      </div>
      <button
        type={"submit"}
        className={"btn ms-auto btn-secondary"}
      >
        {(!id) ? "Add" : "Edit"}
      </button>
    </form>
  );
};

export default MealForm;