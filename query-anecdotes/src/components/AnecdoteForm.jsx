import { useQueryClient, useMutation } from "@tanstack/react-query"
import { createAnecdote } from "../requests/anecdotes"
import { useMessageDisplay } from "../NotificationContext"
const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const messageDisplay = useMessageDisplay()

  const createAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (anecdote) => {
      messageDisplay({ type: 'MESSAGE', message: anecdote.content})
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
    onError: (error) => {
      messageDisplay({ type: 'MESSAGE', message: error.response.data.error })
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    createAnecdoteMutation.mutate(content)
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
