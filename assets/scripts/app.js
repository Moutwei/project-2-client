'use strict'

// file requires
const events = require('./events.js')

$(() => {
  // handlers for form button clicks
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
})
