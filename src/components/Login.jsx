import React from 'react'
import { useForm } from '../hooks/useForm'
import { useAuth } from '../lib/auth'
import TgButton from './TgButton.jsx'
import { Button } from 'antd'

export function Login() {
  const { login } = useAuth()
  const { values, onChange } = useForm({})
  const [error, setError] = React.useState(null)
  /* auth_date: 1658242690
    first_name: "iobox"
    hash: "7d282c9fae0b20524c63638946dfcbda94b66f29983918d6d1cc72a234e35a1c"
    id: 1154486226
    photo_url: "https://t.me/i/userpic/320/jPHN0HQDqvnUMUvy2gsZirOpaxyuQRrpbFki9RAKjQg.jpg"
    username: "iobox420" */
  const cbOnAuth = user => {
    console.log('Logged in as ' + user)
    logWithTelegram({
      auth_date: 1658242690,
      first_name: 'iobox',
      hash: '7d282c9fae0b20524c63638946dfcbda94b66f29983918d6d1cc72a234e35a1c',
      id: 1154486226,
      photo_url: 'https://t.me/i/userpic/320/jPHN0HQDqvnUMUvy2gsZirOpaxyuQRrpbFki9RAKjQg.jpg',
      username: 'iobox420',
    })
  }

  return (
    <div>
      Login
      <form
        onSubmit={async e => {
          e.preventDefault()
          try {
            /*            await login({ email: 'iobox420@gmail.com', password: '1234' })*/

            await login(values)
          } catch (err) {
            setError(err)
          }
        }}
      >
        <input autoComplete="new-password" placeholder="email" name="email" onChange={onChange} />
        <input type="password" placeholder="password" name="password" onChange={onChange} />
        <button type="submit">Submit</button>
        <TgButton botName={'plant_trees_worldwide_bot'} callbackOnAuth={cbOnAuth} />
      </form>
      {error && <div style={{ color: 'tomato' }}>{JSON.stringify(error, null, 2)}</div>}
    </div>
  )
}
