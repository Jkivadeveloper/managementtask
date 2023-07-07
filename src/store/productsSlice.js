import { createSlice } from '@reduxjs/toolkit';
import { db } from '../firebase';

const initialState = {
  products: [],
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: 'products', // Changed from 'product' to 'products'
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const productId = action.payload;
      state.selectedProduct = state.products.find((p) => p.id === productId);
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setSelectedProduct, setProducts } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    const productsRef = db.collection('products');
    const productsSnapshot = await productsRef.get();
    const products = productsSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        image: data.image,
        images: data.images,
        name: data.name,
        price: data.price,
        description: data.description,
      };
    });
    dispatch(setProducts(products));
  } catch (error) {
    console.log(error);
  }
};

export default productsSlice.reducer;
