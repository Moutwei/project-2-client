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

// *********** authorization ***********
const onSignUpSuccess = () => {
  successMessage('Sign Up Success, Please Sign In')
}
const onSignUpFailure = () => {
  failureMessage('Sign Up Failed')
}
const onSignInSuccess = (responseData) => {
  successMessage('Sign In Success')
  // essential code for allowing other methods to use the token data
  store.user = responseData.user
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

// *********** API ***********
const onCreateLeaderSuccess = () => {
  successMessage('Created Leader Successfully')
}
const onCreateLeaderFailure = () => {
  failureMessage('Create Leader Failed')
}
const onDeleteLeaderSuccess = () => {
  successMessage('Deleted Leader Successfully')
}
const onDeleteLeaderFailure = () => {
  failureMessage('Delete Leader Failed')
}
const onIndexLeadersSuccess = (indexedLeaders) => {
  successMessage('Indexed Leaders Successfully')
  console.log(indexedLeaders.leaders)
}
const onIndexLeadersFailure = () => {
  failureMessage('Index Leaders Failed')
}
const onShowLeaderSuccess = (indexedLeaders) => {
  successMessage('Showed Leader Successfully')
  console.log(indexedLeaders.leader)
}
const onShowLeaderFailure = () => {
  failureMessage('Show Leader Failed')
}
const onUpdateLeaderSuccess = () => {
  successMessage('Updated Leader Successfully')
}
const onUpdateLeaderFailure = () => {
  failureMessage('Update Leader Failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateLeaderSuccess,
  onCreateLeaderFailure,
  onDeleteLeaderSuccess,
  onDeleteLeaderFailure,
  onIndexLeadersSuccess,
  onIndexLeadersFailure,
  onShowLeaderSuccess,
  onShowLeaderFailure,
  onUpdateLeaderSuccess,
  onUpdateLeaderFailure
}
