import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAll, voteAnecdote } from './requests/anecdotes'
import { useContext } from 'react'
import { useMessageDisplay } from './NotificationContext'

const App = () => {
  const queryClient = useQueryClient()
  const messageDisplay = useMessageDisplay()
  const likeMutation = useMutation({
    mutationFn: voteAnecdote,
    onSuccess: (anecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], 
        anecdotes.map((ele) => ele.id === anecdote.id ? anecdote : ele))
    },
  })

  const handleVote = (anecdote) => {
    likeMutation.mutate(anecdote)
    messageDisplay({ type: 'MESSAGE', message: `You liked: ${anecdote.content}`})
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAll,
    refetchOnWindowFocus: false,
    retry: 1
  })

  const anecdotes = result.data
  if(result.isLoading){
    return(
      <div>loading anecdotes</div>
    )
  }

  if(result.isError){
    return(
      <div>anecdote service not available due to problems in server</div>
    )
  }

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
