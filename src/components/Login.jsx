import React from 'react'
import { useForm } from '../hooks/useForm'
import { useAuth } from '../lib/auth'
import TgButton from './TgButton.jsx'
import { Button } from 'antd'
import TestCookie from './TestCookie.jsx'

export function Login() {
  const { login } = useAuth()
  const { values, onChange } = useForm({})
  const [error, setError] = React.useState(null)
  const mockSignWithTg = async user => {
    console.log('Mock Logged in as ' + user)
    try {
      await login({
        type: 'telegram-auth',
        payload: {
          auth_date: 1658242690,
          first_name: 'iobox',
          hash: '7d282c9fae0b20524c63638946dfcbda94b66f29983918d6d1cc72a234e35a1c',
          id: 1154486226,
          photo_url: 'https://t.me/i/userpic/320/jPHN0HQDqvnUMUvy2gsZirOpaxyuQRrpbFki9RAKjQg.jpg',
          username: 'iobox420',
        },
      })
    } catch (err) {
      setError(err)
    }
  }

  const signInWithTelegram = async user => {
    console.log('Logged in as ' + user)
    try {
      await login({
        type: 'telegram-auth',
        payload: user,
      })
    } catch (err) {
      setError(err)
    }
  }

  return (
    <div>
      Login
      <TestCookie />
      <form
        onSubmit={async e => {
          e.preventDefault()
          try {
            await login({
              type: 'email-auth',
              payload: values,
            })
          } catch (err) {
            setError(err)
          }
        }}
      >
        <input autoComplete="new-password" placeholder="email" name="email" onChange={onChange} />
        <input type="password" placeholder="password" name="password" onChange={onChange} />
        <button type="submit">Submit</button>
        <TgButton botName={'plant_trees_worldwide_bot'} callbackOnAuth={signInWithTelegram} />
        <Button onClick={mockSignWithTg}>mock signin with telegram</Button>
      </form>
      {error && <div style={{ color: 'tomato' }}>{JSON.stringify(error, null, 2)}</div>}
    </div>
  )
}
