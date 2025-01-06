import { useContext, useEffect } from "react"
import NotificationContext from "../NotificationContext"


const Notification = () => {
  const [message, messageDispatch] = useContext(NotificationContext)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  useEffect(() => {
    const notif = setTimeout(() => {
      messageDispatch({ type: 'HIDE'})
    }, 5000)

    // useEffect jotta ei tarvisi kylvää timeouttia, voisi tehdä myös reduceriin, jolloin voisi kontrolloida timeout-aikaa, mutta tämä vaikuttaa paremmalta.
    return () => clearTimeout(notif)
  }, [message])
  

  return (
    <>
    {message ? 
      <div style={style}>
        {message}
      </div>
      : null
    }
    </>
  )
}

export default Notification
