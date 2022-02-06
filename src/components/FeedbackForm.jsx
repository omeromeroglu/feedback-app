import React from "react"
import Card from "./shared/Card"
import { useState } from "react"
import Button from "./shared/Button"

function FeedbackForm() {
  const [text, setText] = useState("")

  const handleTextChange = (e) => {
    setText(e.target.value)
  }
  return (
    <Card>
      <form>
        <h2>How woud you rate your service with us ?</h2>
        {/* @todo - raing select component */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
