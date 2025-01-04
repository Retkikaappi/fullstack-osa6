import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const anecdote = e.target.content.value
    dispatch(createAnecdote(anecdote))
    dispatch(showNotification(`Created anecdote: ${anecdote}`))
    e.target.content.value = ''
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