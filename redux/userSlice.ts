import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  age: string;
  bodyType: string;
  gender: string;
  goal: string;
  height: string;
  name: string;
  weight: string;
  workoutExperience: string;
  workoutLocation: string;
}

const initialState: UserState = {
  age: "",
  bodyType: "",
  gender: "",
  goal: "",
  height: "",
  name: "",
  weight: "",
  workoutExperience: "",
  workoutLocation: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAge: (state, action: PayloadAction<string>) => {
      state.age = action.payload;
    },
    setBodyType: (state, action: PayloadAction<string>) => {
      state.bodyType = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setGoal: (state, action: PayloadAction<string>) => {
      state.goal = action.payload;
    },
    setHeight: (state, action: PayloadAction<string>) => {
      state.height = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setWeight: (state, action: PayloadAction<string>) => {
      state.weight = action.payload;
    },
    setWorkoutExperience: (state, action: PayloadAction<string>) => {
      state.workoutExperience = action.payload;
    },
    setWorkoutLocation: (state, action: PayloadAction<string>) => {
      state.workoutLocation = action.payload;
    },
  },
});

export const {
  setAge,
  setBodyType,
  setGender,
  setGoal,
  setHeight,
  setName,
  setWeight,
  setWorkoutExperience,
  setWorkoutLocation,
} = userSlice.actions;

export default userSlice.reducer;
