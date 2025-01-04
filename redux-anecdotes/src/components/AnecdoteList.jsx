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

  const vote = (id, content) => {
    dispatch(addVote(id))
    dispatch(showNotification(content))
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
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList