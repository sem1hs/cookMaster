const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getUser = createAsyncThunk(
  "user/fetchUser",
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
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      console.log("rejected");
    });
  },
});

export default userSlice.reducer;
