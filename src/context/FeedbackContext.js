import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This item 2",
      rating: 8,
    },
    {
      id: 3,
      text: "This item 3",
      rating: 6,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, isEdit: false })

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
    console.log(feedback)
  }

  const editFeedback = (item) => {
    setFeedbackEdit({ item, isEdit: true })
  }

  const updateFeedback = (id,updItem) => {
      setFeedback(feedback.map((item) => item.id=== id ? {...item, ...updItem} : item))

      setFeedbackEdit({ item: {}, isEdit: false })
  }

  return (
    <FeedbackContext.Provider
      value={{ feedback, handleDelete, addFeedback, editFeedback, feedbackEdit,updateFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext