'use strict'

// file requires
const events = require('./events.js')

$(() => {
  // handlers for form button clicks
  // auths
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  // api
  $('#create-leader').on('submit', events.onCreateLeader)
  $('#delete-leader').on('submit', events.onDeleteLeader)
  $('#index-leaders').on('submit', events.onIndexLeaders)
  $('#show-leader').on('submit', events.onShowLeader)
  $('#update-leader').on('submit', events.onUpdateLeader)
})
