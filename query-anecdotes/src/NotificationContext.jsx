import { createContext, useContext, useReducer } from 'react'

const NotificationContext = createContext()

const notificationReducer = (state, action) => {
  switch(action.type){
    case 'MESSAGE':
      return action.message 
    case 'HIDE':
      return ''
    default:
      return state
  }
} 

export const NotificationContextProvider = (props) => {
  const [message, messageDispatch] = useReducer(notificationReducer, '')

  return (
    <NotificationContext.Provider value={[message, messageDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  )
}

let notif = null



export const useMessageValue = () => {
  const messageValue = useContext(NotificationContext)
  return messageValue[0]
}

export const useMessageDisplay = () => {
  const messageSet = useContext(NotificationContext)
  return messageSet[1]
}
export default NotificationContext