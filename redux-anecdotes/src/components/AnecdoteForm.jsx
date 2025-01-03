import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createAnecdote(e.target.content.value))
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