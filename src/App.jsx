import React from "react"
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this feedback?")){
    setFeedback(feedback.filter((item) => item.id !== id))
    }
    
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          handleDelete={handleDelete}
        />
      </div>
    </>
  )
}

export default App
