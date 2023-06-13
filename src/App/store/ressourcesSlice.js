import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    images:[],
    memes:[]
}

const ressourcesSlice = createSlice({
  name: 'ressources',
  initialState,
  reducers: {}
});

// export const {} = ressourcesSlice.actions

export default ressourcesSlice.reducer