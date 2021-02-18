import { createSlice } from '@reduxjs/toolkit';

export const hoverSlice = createSlice({
  name: 'hover',
  initialState: { //initial state boolean of tournament cards
    //row1 - (4 games in each row)
    game1row1: false, game2row1: false, game3row1: false, game4row1: false,
    //row2 - (4 games in each row)
    game1row2: false, game2row2: false, game3row2: false, game4row2: false,
    //row3 - (4 games in each row)
    game1row3: false, game2row3: false, game3row3: false, game4row3: false,
    //row4 - (4 games in each row)
    game1row4: false, game2row4: false, game3row4: false, game4row4: false,
    //lobby page banner image 
    imagehoverBoolean: false

  },

  reducers: { //detects change
    //row1
    game1Row1ReducerOn:(state) => {state.game1row1 = true;}, game1Row1ReducerOff: (state) => {state.game1row1 = false;},
    game2Row1ReducerOn:(state) => {state.game2row1 = true;}, game2Row1ReducerOff: (state) => {state.game2row1 = false;},
    game3Row1ReducerOn:(state) => {state.game3row1 = true;}, game3Row1ReducerOff: (state) => {state.game3row1 = false;},
    game4Row1ReducerOn:(state) => {state.game4row1 = true;}, game4Row1ReducerOff: (state) => {state.game4row1 = false;},
    //row2
    game1Row2ReducerOn:(state) => {state.game1row2 = true;}, game1Row2ReducerOff: (state) => {state.game1row2 = false;},
    game2Row2ReducerOn:(state) => {state.game2row2 = true;}, game2Row2ReducerOff: (state) => {state.game2row2 = false;},
    game3Row2ReducerOn:(state) => {state.game3row2 = true;}, game3Row2ReducerOff: (state) => {state.game3row2 = false;},
    game4Row2ReducerOn:(state) => {state.game4row2 = true;}, game4Row2ReducerOff: (state) => {state.game4row2 = false;},
    //row3
    game1Row3ReducerOn:(state) => {state.game1row3 = true;}, game1Row3ReducerOff: (state) => {state.game1row3 = false;},
    game2Row3ReducerOn:(state) => {state.game2row3 = true;}, game2Row3ReducerOff: (state) => {state.game2row3 = false;},
    game3Row3ReducerOn:(state) => {state.game3row3 = true;}, game3Row3ReducerOff: (state) => {state.game3row3 = false;},
    game4Row3ReducerOn:(state) => {state.game4row3 = true;}, game4Row3ReducerOff: (state) => {state.game4row3 = false;},
    //row3
    game1Row4ReducerOn:(state) => {state.game1row4 = true;}, game1Row4ReducerOff: (state) => {state.game1row4 = false;},
    game2Row4ReducerOn:(state) => {state.game2row4 = true;}, game2Row4ReducerOff: (state) => {state.game2row4 = false;},
    game3Row4ReducerOn:(state) => {state.game3row4 = true;}, game3Row4ReducerOff: (state) => {state.game3row4 = false;},
    game4Row4ReducerOn:(state) => {state.game4row4 = true;}, game4Row4ReducerOff: (state) => {state.game4row4 = false;},
    //lobby page
    bannerImageHoverOn:(state) => {state.imagehoverBoolean = true;}, bannerImageHoverOff: (state) => {state.imagehoverBoolean = false;},


  },
});
//exporting reducers 
export const {game1row1, game1Row1ReducerOn, game1Row1ReducerOff,
              game2row1, game2Row1ReducerOn, game2Row1ReducerOff,
              game3row1, game3Row1ReducerOn, game3Row1ReducerOff,
              game4row1, game4Row1ReducerOn, game4Row1ReducerOff, /*row 1 end*/
              game1row2, game1Row2ReducerOn, game1Row2ReducerOff,
              game2row2, game2Row2ReducerOn, game2Row2ReducerOff,
              game3row2, game3Row2ReducerOn, game3Row2ReducerOff,
              game4row2, game4Row2ReducerOn, game4Row2ReducerOff, /*row 2 end*/
              game1row3, game1Row3ReducerOn, game1Row3ReducerOff,
              game2row3, game2Row3ReducerOn, game2Row3ReducerOff,
              game3row3, game3Row3ReducerOn, game3Row3ReducerOff,
              game4row3, game4Row3ReducerOn, game4Row3ReducerOff, /*row 3 end*/
              game1row4, game1Row4ReducerOn, game1Row4ReducerOff,
              game2row4, game2Row4ReducerOn, game2Row4ReducerOff,
              game3row4, game3Row4ReducerOn, game3Row4ReducerOff,
              game4row4, game4Row4ReducerOn, game4Row4ReducerOff, /*row 4 end*/
              imagehoverBoolean, bannerImageHoverOn , bannerImageHoverOff,  /*Banner page image stuf*/ }
               = hoverSlice.actions;

//selectors 
export const game1Row1Selector = state => state.hover.game1row1;
export const game2Row1Selector = state => state.hover.game2row1;
export const game3Row1Selector = state => state.hover.game3row1;
export const game4Row1Selector = state => state.hover.game4row1;
//row2
export const game1Row2Selector = state => state.hover.game1row2;
export const game2Row2Selector = state => state.hover.game2row2;
export const game3Row2Selector = state => state.hover.game3row2;
export const game4Row2Selector = state => state.hover.game4row2;
//row3
export const game1Row3Selector = state => state.hover.game1row3;
export const game2Row3Selector = state => state.hover.game2row3;
export const game3Row3Selector = state => state.hover.game3row3;
export const game4Row3Selector = state => state.hover.game4row3;
//row4
export const game1Row4Selector = state => state.hover.game1row4;
export const game2Row4Selector = state => state.hover.game2row4;
export const game3Row4Selector = state => state.hover.game3row4;
export const game4Row4Selector = state => state.hover.game4row4;
//banner page
export const bannnerImageHoverSelector = state => state.hover.imagehoverBoolean;



export default hoverSlice.reducer;
