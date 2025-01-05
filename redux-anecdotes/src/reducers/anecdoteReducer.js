import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    changeVote(state, action){
      const id = action.payload.id
      return state.map(anec => anec.id !== id ? anec : action.payload)
    },
    addAnecdote(state, action){
      return state.concat(action.payload)
    },
    setAnecdotes(state, action){
      return action.payload
    }

  }
})

export const { changeVote, addAnecdote, setAnecdotes } = anecdoteSlice.actions

export const setupAnecdotes = () => {
  return async dispatch => {
    const resp = await anecdoteService.getAll()
    dispatch(setAnecdotes(resp))
  }
}

export const createAnecdote = (anecdote) => {
  return async dispatch => {
    const resp = await anecdoteService.addOne(anecdote)
    dispatch(addAnecdote(resp))
  }
}

export const addVote = (anecdote) => {
  return async dispatch => {
    const resp = await anecdoteService.postVote(anecdote)
    dispatch(changeVote(resp))
  }
}
export default anecdoteSlice.reducer