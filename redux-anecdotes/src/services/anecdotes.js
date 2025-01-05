import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const resp = await axios.get(baseUrl)
  return resp.data
}

const addOne = async (anecdote) => {
  const resp = await axios.post(baseUrl, { content: anecdote, votes: 0 })
  return resp.data
}

const postVote = async (anecdote) => {
  const resp = await axios
    .put(`${baseUrl}/${anecdote.id}`,
      {
        content: anecdote.content,
        votes: anecdote.votes + 1
      })
  console.log(resp.data)
  return resp.data
}

export default { getAll, addOne, postVote }