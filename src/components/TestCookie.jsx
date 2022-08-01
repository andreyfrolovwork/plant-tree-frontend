import React from 'react'
import { Button } from 'antd'
import $api from './../api/api.js'
const TestCookie = () => {
  return (
    <div>
      <Button
        onClick={async () => {
          await $api.post('/f1')
        }}
      >
        fetch 1
      </Button>
      <Button
        onClick={async () => {
          await $api.post('/f2')
        }}
      >
        fetch 2
      </Button>
    </div>
  )
}

export default TestCookie
