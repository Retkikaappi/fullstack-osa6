import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  console.log(useSelector(state => state))
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return filter ?
      anecdotes.filter(ele =>  ele.content.toLowerCase().includes(filter.toLowerCase()))
      : anecdotes
  })
  const filteredAnec = [...anecdotes].sort((a,b) => b.votes - a.votes)

  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(addVote(id))
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList