/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/* Task 1 */
export function cookingStatus(timer) {
  var timer;
  if (timer == 0) {
    return 'Lasagna is done.';
  } if (timer > 0) {
    return 'Not done, please wait.';
  } if (!timer) {
    return 'You forgot to set the timer.';
  }
}

/* Task 2 */
export function preparationTime(layers, time=2) {
  const totalTime = layers.length * time;
  return totalTime;
  }

/* Task 3 */
export function quantities(ingredients) {
  return {
    noodles: ingredients.filter(i => i === 'noodles').length * 50,
    sauce: ingredients.filter(i => i === 'sauce').length * 0.2,
  }
 }

/* Task 4 */
export function addSecretIngredient(friendList, myList) {
  const secretIngredient = friendList[friendList.length - 1]
  myList.push(secretIngredient)
}

/* Task 5 */
export function scaleRecipe(recipe, portions) {
  const scaled = { ...recipe }
  const factor = portions / 2
  for (let ingredient in scaled) {
    scaled[ingredient] *= factor
  }
  return scaled
}