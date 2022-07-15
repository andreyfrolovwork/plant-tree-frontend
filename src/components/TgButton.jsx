import React from 'react'
class TelegramLoginButton extends React.Component {
  componentDidMount() {
    const { botName, size, requestAccess, showUserPic, callbackOnAuth } = this.props
    window.TelegramLoginWidget = {
      callbackOnAuth: user => callbackOnAuth(user),
    }
    const script = document.createElement('script')
    script.src = 'https://telegram.org/js/telegram-widget.js?19'
    script.setAttribute('data-telegram-login', botName || 'samplebot')
    script.setAttribute('data-size', size || 'large')
    script.setAttribute('data-request-access', requestAccess || 'write')
    script.setAttribute('data-userpic', !showUserPic)
    script.setAttribute('data-onauth', 'TelegramLoginWidget.callbackOnAuth(user)')
    script.async = true
    debugger
    this.instance.appendChild(script)
  }

  render() {
    return <div ref={component => (this.instance = component)}>{this.props.children}</div>
  }
}
export default TelegramLoginButton
