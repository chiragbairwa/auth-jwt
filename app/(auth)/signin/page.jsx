"use client"
import '../auth.css'
import { useState } from "react"
import Link from 'next/link'

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const submitHandler = async (event) => {
    event.preventDefault()

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
      <h2>Sign In</h2>
      <label>Email : <input type="email" name="email" onChange={onChangeHandler} required placeholder="abc@gmail.com" /></label>
      <label>Password : <input type="password" name="password" onChange={onChangeHandler} required placeholder="*******" /></label>

      <div>
        <Link href="/signup">
          Sign Up
        </Link>
        <button type="submit">Sign In</button>
      </div>

    </form>
  )
}

export default SignIn