
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
 // console.log(action.text)
 switch (action.type){
   case 'ADD_RESTAURANT': 
   console.log(state)
   const restaurant = {id: cuid(), text: action.text }
   return {
    ...state, restaurants: [...state.restaurants, restaurant]
   }
   case 'DELETE_RESTAURANT': 
    const restaurants = state.restaurants.filter( restaurant => restaurant.id !== action.id)
    return{ ...state, restaurants }

    case 'ADD_REVIEW': 
    console.log(action)
    const review = { 
      id: cuid(), 
      text: action.review.text,
      restaurantId: action.review.restaurantId };
    return{
      ...state, reviews: [...state.reviews, review]
    }

    // case 'ADD_REVIEW':

      // const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() };
    //   return { ...state,
    //     reviews: [...state.reviews, review]
    //   }

    // case 'DELETE_REVIEW':
    //   const reviews = state.reviews.filter(review => review.id !== action.id);
    //   return {...state, reviews }


    case 'DELETE_REVIEW': 
    console.log(action)
    const reviews = state.reviews.filter(
      review => review.id !== action.id
    )
    return { ...state, reviews }

   default: 
   return state
  }

}
