import { createSlice } from "@reduxjs/toolkit"

export interface PostType{
    title: string
    name: string
    team: string
    subject: string
}
export interface PostState{
    loading: boolean
    data: PostType[]
    error: any
}
const initialState : PostState = {
    loading: false,
    data: [],
    error: null
}

export const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addBoard: (state: PostState, payload ) => {
            alert(' 2.리듀서 내부로 들어온 할일은 ? '+JSON.stringify(payload))
            state.loading = true
        },
        addSuccess: (state: PostState, { payload }) => {
            state.data = [...state.data,payload]
            state.loading = false
        },
        addFailure: (state: PostState, { payload }) => {
            state.data = payload
            state.loading = false
        }
    }
})
// export const { boardActions } = boardSlice.actions
// export default boardSlice.reducer

const { reducer, actions } = boardSlice
export const boardActions = actions
export default reducer