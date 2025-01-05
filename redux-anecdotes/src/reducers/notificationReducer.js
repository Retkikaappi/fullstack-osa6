import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    displayNotification(state, action){
      return action.payload
    },
    hideNotification(){
      return ''
    }
  }
})

export const { displayNotification, hideNotification } = notificationSlice.actions

let notif = null // ei hirveän hieno tapa estää notificaatioiden "queue":ta, mutta toimii.

export const showNotification = (message, timeout) => {
  return async dispatch => {
    if(notif){
      clearTimeout(notif)
    }

    dispatch(displayNotification(message))

    notif = setTimeout(() => {
      dispatch(hideNotification())
      notif = null
    }, (timeout * 1000))


  }
}

export default notificationSlice.reducer