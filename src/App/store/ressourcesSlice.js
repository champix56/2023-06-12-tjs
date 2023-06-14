import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    images: [],
    memes: []
}

const ressourcesSlice = createSlice({
    name: 'ressources',
    initialState,
    reducers: {}
});

// export const {} = ressourcesSlice.actions
export const fetchAllRessources = createAsyncThunk('ressources/fetchRessources',
    async () => {
        const promiseImages = await fetch('http://localhost:5629/images')
        const jso= await promiseImages.json() 
        console.log(jso)
        return jso
    })
export default ressourcesSlice.reducer