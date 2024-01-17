"use client"
import '../auth.css'
import { useState } from "react"
import { containsCapital, containsLower, containsNumber, validLength } from '../validations'
import Link from 'next/link'
const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const submitHandler = async (event) => {
    event.preventDefault()
    
    if (formData.password === formData.confirmPassword) {
      switch (true) {
        case containsCapital(formData.password):
          console.log("containsCapital")

        case containsLower(formData.password):
          console.log("containsLower")

        case containsNumber(formData.password):
          console.log("containsNumber")

        case validLength(formData.password):
          console.log(formData)
          
        // Send Data
      }
    }
    else {
      console.log("Password does not Match")
    }
  }
  const onChangeHandler = (event) => {
    const data = {
      ...formData,
      [event.target.name]: event.target.value
    }
    setFormData(data)
  }

  return (
    <form onSubmit={submitHandler} className="container" >
      <h2>Sign Up</h2>
      <label>Email : <input type="email" name="email" onChange={onChangeHandler} required placeholder="abc@gmail.com" /></label>
      <label>Password : <input type="password" name="password" onChange={onChangeHandler} required placeholder="*******" /></label>
      <label>Confirm Password : <input type="password" name="confirmPassword" onChange={onChangeHandler} required placeholder="*******" /></label>

      <div>
        <button type="submit">Sign Up</button>
      </div>
      <span>
      Already have an account? <Link href="/signin">Sign In</Link>
      </span>
    </form>
  )
}

export default SignUp