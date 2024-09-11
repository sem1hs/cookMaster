const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getFoods = createAsyncThunk(
  "cook/getFoods",
  async (url, thunkAPI) => {
    try {
      const res = await fetch(url, { credentials: "include" });
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const searchFoods = createAsyncThunk(
  "cook/searchFoods",
  async (url, thunkAPI) => {
    try {
      const res = await fetch(url, { credentials: "include" });
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIngredients = createAsyncThunk(
  "cook/getIngredients",
  async (url, thunkAPI) => {
    try {
      const res = await fetch(url, { credentials: "include" });
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isLoading: false,
  foods: [],
  searchedFoods: [],
  ingredients: [],
};
const cookSlice = createSlice({
  name: "cook",
  initialState,
  extraReducers: (builder) => {
    // Get All Foods
    builder.addCase(getFoods.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFoods.fulfilled, (state, action) => {
      state.foods = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getFoods.rejected, (state, action) => {
      console.log("rejected");
    });

    //  Get Food By Name
    builder.addCase(searchFoods.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchFoods.fulfilled, (state, action) => {
      state.searchedFoods = action.payload;
      state.isLoading = false;
    });
    builder.addCase(searchFoods.rejected, (state, action) => {
      console.log("rejected");
    });

    //  Get Ingredients
    builder.addCase(getIngredients.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getIngredients.fulfilled, (state, action) => {
      state.ingredients = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getIngredients.rejected, (state, action) => {
      console.log("rejected");
    });
  },
});

export default cookSlice.reducer;
