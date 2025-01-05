import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  console.log(useSelector(state => state))
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return filter ?
      anecdotes.filter(ele =>  ele.content.toLowerCase().includes(filter.toLowerCase()))
      : anecdotes
  })
  const filteredAnec = [...anecdotes].sort((a,b) => b.votes - a.votes)

  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(addVote(anecdote))
    dispatch(showNotification(`You voted for: ${anecdote.content}`, 5))
  }


  return(
    <>
      {filteredAnec.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
                has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList