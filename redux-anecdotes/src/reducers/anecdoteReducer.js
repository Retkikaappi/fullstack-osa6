import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addVote(state, action){
      const anecdoteId = action.payload
      const anecdote = state.find((ele) => ele.id === anecdoteId)
      const votedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1
      }
      return state.map(anec => anec.id !== anecdoteId ? anec : votedAnecdote)
    },
    createAnecdote(state, action){
      return state.concat(action.payload)
    },
    setAnecdotes(state, action){
      return action.payload
    }

  }
})

export const { addVote, createAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer