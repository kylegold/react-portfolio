import React from "react"
import "./style.css"

const Contact = () => {
  return(
    <div className="container" style={{width:"600px"}}>
      <div style={{textAlign:"center"}}>
      <h2>Contact Us</h2>
    <p>Leave a message:</p>
    </div>
      <form>
      <label for="fname">First Name</label>
      <input type="text" placeholder="First Name"/>
      <label for="lname">Last Name</label>
      <input type="text" placeholder="Last Name"/>
      <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"170px"}}></textarea>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}

export default Contact