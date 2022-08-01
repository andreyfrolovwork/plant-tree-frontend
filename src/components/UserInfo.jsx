import { useAuth } from '../lib/auth'

export function UserInfo() {
  const { user, logout } = useAuth()

  return (
    <div>
      Welcome {JSON.stringify(user)}
      <button onClick={() => logout()}>Log Out</button>
    </div>
  )
}
