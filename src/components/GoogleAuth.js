import React, { Component } from 'react'
import KEY from '../key'

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: KEY,
        scope: 'email'
      })
    })
  }

  render() {
    return <div>Google Auth</div>
  }
}

export default GoogleAuth
