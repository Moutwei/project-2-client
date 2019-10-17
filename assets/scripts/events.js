'use-strict'
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js') // ./ in same folder
const ui = require('./ui.js')

const onSignUp = (event) => {
  event.preventDefault() // stops page refresh
  const formData = getFormFields(event.target) // gives us the data entered
  console.log(formData)
  //
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
const onSignIn = (event) => {
  event.preventDefault() // stops page refresh
  const formData = getFormFields(event.target) // gives us the data entered
  console.log(formData)
  //
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onChangePassword = (event) => {
  event.preventDefault() // stops page refresh
  const formData = getFormFields(event.target) // gives us the data entered
  console.log(formData)
  //
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}
const onSignOut = (event) => {
  event.preventDefault() // stops page refresh
  //
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut
}
