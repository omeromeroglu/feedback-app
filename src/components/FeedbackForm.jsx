import React from "react"
import Card from "./shared/Card"
import RatingSelect from "./RatingSelect"
import { useState } from "react"
import Button from "./shared/Button"

function FeedbackForm({handleAdd}) {
  const [text, setText] = useState("")
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")

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
      handleAdd(newFeedback)

      setText("")
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
