import React from "react"
import Card from "./shared/Card"
import RatingSelect from "./RatingSelect"
import { useState,useContext, useEffect } from "react"
import Button from "./shared/Button"
import FeedbackContext from "../context/FeedbackContext"


function FeedbackForm() {
  const [text, setText] = useState("")
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")

  const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
    if(feedbackEdit.isEdit === true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
      console.log("test")
    }
  }, [feedbackEdit])

  const handleTextChange = ({target: {value}}) => {
    if(value === "") {
      setBtnDisabled(true)
    } else if(value.trim().length<10) {
      setBtnDisabled(true)
      setMessage(" Please enter at least 10 characters")
    } else {
      setBtnDisabled(false)
      setMessage("")
    }

    setText(value)
   
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length >10){
      const newFeedback = {
        text,
        rating
      }
      if(feedbackEdit.isEdit === true){
        updateFeedback(feedbackEdit.item.id,newFeedback)
      }else {
      addFeedback(newFeedback)

      }


      setText("")
      setBtnDisabled(true) 
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How woud you rate your service with us ?</h2>
        <RatingSelect select={(select) => setRating(select)}/>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <p className="message">{message}</p>}
      </form>
    </Card>
  )
}

export default FeedbackForm
