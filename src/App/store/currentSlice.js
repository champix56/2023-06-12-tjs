import { createSlice } from '@reduxjs/toolkit'
import { emptyMeme } from 'orsys-tjs-meme'
const initialState = emptyMeme

const currentSlice = createSlice({
    name: 'current',
    initialState,
    reducers: {
        update: (state, action) => {
            Object.assign(state, action.payload)
        },
        clear: (state) => { 
            Object.assign(state, emptyMeme) 
        }
    }
});

export const { update, clear } = currentSlice.actions
// update(unMeme) -> {type:'current/update', payload:unMeme} 
export default currentSlice.reducer