import { createAction, createReducer } from '@reduxjs/toolkit'
            
const updateUnit = createAction('UPDATE_UNIT');
const updateHeight = createAction('UPDATE_HEIGHT');
const updateWeight = createAction('UPDATE_WEIGHT');
const clear = createAction('CLEAR');
const initialState = { unit: 'metric', height: '', weight: ''};

const BMIReducer = createReducer(initialState, (builder) => {   
  builder
    .addCase(updateUnit, (state, action) => {                            
      state.unit = action.unit;
    })
    .addCase(updateHeight, (state, action) => {
      state.height = action.height;                      
    })
    .addCase(updateWeight, (state, action) => {
      state.weight = action.weight;
    })
    .addCase(clear, (state, action) => {
      state.height = '';
      state.weight = '';
    })  
})

export default BMIReducer;