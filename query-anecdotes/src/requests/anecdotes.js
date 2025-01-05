import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'


export const getAll = async () => {
  const resp = await axios.get(baseUrl)
  return resp.data
}

export const createAnecdote = async (anecdote) => {
  const resp = await axios.post(baseUrl, { content: anecdote, votes: 0})
  return resp.data
}

export const voteAnecdote = async (anecdote) => {
  const resp = await axios.put(`${baseUrl}/${anecdote.id}`, { ...anecdote, votes: anecdote.votes + 1 })
  return resp.data
}