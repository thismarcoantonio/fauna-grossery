import React from 'react'
import { Form, Input, Button } from './styled'

const AuthForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Enter email" />
      <Input placeholder="Enter password" />
      <Button type="submit">Finish</Button>
    </Form>
  )
}

export default AuthForm
