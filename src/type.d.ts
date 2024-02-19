export interface Meal {
  mealTime: string,
  meal: string,
  calories: string,
}

export interface Meals extends Meal{
  id: string,
}
export interface MealApi {
  [id:string]: Meal,
}