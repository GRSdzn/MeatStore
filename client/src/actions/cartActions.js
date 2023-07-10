// cartActions.js

// Action type
export const ADD_TO_CART = 'ADD_TO_CART';

// Action creator
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};


// cartActions.js

// Action types
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';

// Action creators
export const fetchProductSuccess = (product) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    error: error,
  };
};

export const fetchProduct = (id) => {
  return (dispatch) => {
    // Make API request to fetch the product by ID
    axios
      .get(`http://localhost:8000/api/cart/items/${id}/`)
      .then((response) => {
        dispatch(fetchProductSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductFailure(error.message));
      });
  };
};
