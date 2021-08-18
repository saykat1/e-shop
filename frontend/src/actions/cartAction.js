import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  // @ fetch product which one should be add
  const { data } = await axios.get(`/api/products/${id}`);

  // @ dispatch
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty: qty
    }
  });

  // @ and also set to local storage entire-cart
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))  

};


export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id
    })

    // @ update local storage
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}