'use strict'

const store = require('./store.js')

const successMessage = (newText) => {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = newText => {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = () => {
  successMessage('Sign Up Success, Please Sign In')
}

const onSignUpFailure = () => {
  failureMessage('Sign Up Failed')
}

const onSignInSuccess = (responseData) => {
  successMessage('Sign In Success')
  store.user = responseData.user
  console.log(responseData.user.email) // HOLY THIS PART SHOWS THE EMAIL YO
  console.log(responseData.user.id)
}

const onSignInFailure = () => {
  failureMessage('Sign In Failed')
}

const onChangePasswordSuccess = () => {
  successMessage('Password Change Success')
}

const onChangePasswordFailure = () => {
  failureMessage('Password Change Failed')
}

const onSignOutSuccess = () => {
  successMessage('Signed Out Successfully')
}

const onSignOutFailure = () => {
  failureMessage('Sign Out Failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
