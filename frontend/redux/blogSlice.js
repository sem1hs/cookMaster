const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getBlogs = createAsyncThunk(
  "blog/getBlogs",
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
  blogs: [],
};
const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    // Get All Blogs
    builder.addCase(getBlogs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getBlogs.rejected, (state, action) => {
      console.log("rejected");
    });
  },
});

export default blogSlice.reducer;
