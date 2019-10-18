'use-strict'
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js') // ./ in same folder
const ui = require('./ui.js')

// *********** authorization ***********
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
// *********** API ***********
const onCreateLeader = (event) => {
  event.preventDefault() // stops page refresh
  //
  const formData = getFormFields(event.target) // gives us the data entered
  console.log(formData)
  //
  api.createLeader(formData)
    .then(ui.onCreateLeaderSuccess)
    .catch(ui.onCreateLeaderFailure)
}
const onDeleteLeader = (event) => {
  event.preventDefault() // stops page refresh
  const formData = getFormFields(event.target) // gives us the data entered
  console.log(formData)
  //
  api.deleteLeader(formData)
    .then(ui.onDeleteLeaderSuccess)
    .catch(ui.onDeleteLeaderFailure)
}
const onIndexLeaders = () => {
  event.preventDefault() // stops page refresh
  //
  api.indexLeaders()
    .then(ui.onIndexLeadersSuccess)
    .catch(ui.onIndexLeadersFailure)
}
const onShowLeader = (event) => {
  event.preventDefault() // stops page refresh
  //
  const formData = getFormFields(event.target) // gives us the data entered
  console.log(formData)
  //
  api.showLeader(formData)
    .then(ui.onShowLeaderSuccess)
    .catch(ui.onShowLeaderFailure)
}
const onUpdateLeader = (event) => {
  event.preventDefault() // stops page refresh
  //
  const formData = getFormFields(event.target) // gives us the data entered
  console.log(formData)
  //
  api.updateLeader(formData)
    .then(ui.onUpdateLeaderSuccess)
    .catch(ui.onUpdateLeaderFailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut,
  onCreateLeader,
  onDeleteLeader,
  onIndexLeaders,
  onShowLeader,
  onUpdateLeader
}
