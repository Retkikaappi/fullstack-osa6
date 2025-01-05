import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const anecdote = e.target.content.value
    e.target.content.value = ''

    const resp = await anecdoteService.addOne(anecdote)
    dispatch(createAnecdote(resp))
    dispatch(showNotification(`Created anecdote: ${resp.content}`))
    console.log(resp)
  }

  return(
    <>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div><input
          name='content'/></div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm