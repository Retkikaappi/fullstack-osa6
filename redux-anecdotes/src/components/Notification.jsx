import { useSelector, useDispatch } from 'react-redux'
import { hideNotification } from '../reducers/notificationReducer'
import { useEffect } from 'react'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    const notif = setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)

    // useEffect jotta toimisi ilman timeouttien kylvemistä joka paikkaan.
    return () => clearTimeout(notif)
  },[notification])

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <>
      {
        notification ?
          <div style={style}>
            {notification}
          </div>
          : null
      }
    </>
  )
}

export default Notification