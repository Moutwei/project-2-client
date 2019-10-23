'use-strict'
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js') // ./ in same folder
const ui = require('./ui.js')

// *********** authorization ***********
const onSignUp = (event) => {
  event.preventDefault() // stops page refresh
  const formData = getFormFields(event.target) // gives us the data entered
  //
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
const onSignIn = (event) => {
  event.preventDefault() // stops page refresh
  const formData = getFormFields(event.target) // gives us the data entered
  //
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onChangePassword = (event) => {
  event.preventDefault() // stops page refresh
  const formData = getFormFields(event.target) // gives us the data entered
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

// ******** leaders ********

const onCreateLeader = (event) => {
  event.preventDefault() // stops page refresh
  //
  const formData = getFormFields(event.target) // gives us the data entered
  //
  api.createLeader(formData)
    .then(ui.onCreateLeaderSuccess)
    .catch(ui.onCreateLeaderFailure)
}
const onDeleteLeader = (event) => {
  event.preventDefault() // stops page refresh
  const formData = getFormFields(event.target) // gives us the data entered
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
  //
  api.showLeader(formData)
    .then(ui.onShowLeaderSuccess)
    .catch(ui.onShowLeaderFailure)
}
const onUpdateLeader = (event) => {
  event.preventDefault() // stops page refresh
  //
  const formData = getFormFields(event.target) // gives us the data entered
  //
  api.updateLeader(formData)
    .then(ui.onUpdateLeaderSuccess)
    .catch(ui.onUpdateLeaderFailure)
}

// ******** projects ********

const onCreateProject = (event) => {
  event.preventDefault() // stops page refresh
  //
  const formData = getFormFields(event.target) // gives us the data entered
  //
  api.createProject(formData)
    .then(ui.onCreateProjectSuccess)
    .catch(ui.onCreateProjectFailure)
}
const onDeleteProject = (event) => {
  event.preventDefault() // stops page refresh
  const formData = getFormFields(event.target) // gives us the data entered
  //
  api.deleteProject(formData)
    .then(ui.onDeleteProjectSuccess)
    .catch(ui.onDeleteProjectFailure)
}
const onIndexProjects = () => {
  event.preventDefault() // stops page refresh
  //
  api.indexProjects()
    .then(ui.onIndexProjectsSuccess)
    .catch(ui.onIndexProjectsFailure)
}
const onShowProject = (event) => {
  event.preventDefault() // stops page refresh
  //
  const formData = getFormFields(event.target) // gives us the data entered
  //
  api.showProject(formData)
    .then(ui.onShowProjectSuccess)
    .catch(ui.onShowProjectFailure)
}
const onUpdateProject = (event) => {
  event.preventDefault() // stops page refresh
  //
  const formData = getFormFields(event.target) // gives us the data entered
  //
  api.updateProject(formData)
    .then(ui.onUpdateProjectSuccess)
    .catch(ui.onUpdateProjectFailure)
}

// ******** employees ********

const onCreateEmployee = (event) => {
  event.preventDefault() // stops page refresh
  //
  const formData = getFormFields(event.target) // gives us the data entered
  //
  api.createEmployee(formData)
    .then(ui.onCreateEmployeeSuccess)
    .catch(ui.onCreateEmployeeFailure)
}
const onDeleteEmployee = (event) => {
  event.preventDefault() // stops page refresh
  const formData = getFormFields(event.target) // gives us the data entered
  //
  api.deleteEmployee(formData)
    .then(ui.onDeleteEmployeeSuccess)
    .catch(ui.onDeleteEmployeeFailure)
}
const onIndexEmployees = () => {
  event.preventDefault() // stops page refresh
  //
  api.indexEmployees()
    .then(ui.onIndexEmployeesSuccess)
    .catch(ui.onIndexEmployeesFailure)
}
const onShowEmployee = (event) => {
  event.preventDefault() // stops page refresh
  //
  const formData = getFormFields(event.target) // gives us the data entered
  //
  api.showEmployee(formData)
    .then(ui.onShowEmployeeSuccess)
    .catch(ui.onShowEmployeeFailure)
}
const onUpdateEmployee = (event) => {
  event.preventDefault() // stops page refresh
  //
  const formData = getFormFields(event.target) // gives us the data entered
  //
  api.updateEmployee(formData)
    .then(ui.onUpdateEmployeeSuccess)
    .catch(ui.onUpdateEmployeeFailure)
}

// ******** buttons ********

// this is a function that hides everything!
const hideEverything = () => {
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#leader-section').hide()
  $('#project-section').hide()
  $('#employee-section').hide()
  $('#leaders-button').hide()
  $('#projects-button').hide()
  $('#employees-button').hide()
  $('#change-password-button').hide()
  $('#sign-out-button').hide()
  $('#cancel-button').hide()
  $('#home-button').hide()
  $('#info-row').hide()
}

const onSignInButton = (event) => {
  hideEverything()
  $('#sign-in').show()
  $('#cancel-button').show()
  $('#sign-in-button').hide()
  $('#sign-up-button').hide()
  $('#message').html('')
}
const onSignUpButton = (event) => {
  hideEverything()
  $('#sign-up').show()
  $('#cancel-button').show()
  $('#sign-in-button').hide()
  $('#sign-up-button').hide()
}
const onChangePasswordButton = (event) => {
  hideEverything()
  $('#change-password').show()
  $('#home-button').show()
}
const leadersButton = (event) => {
  hideEverything()
  $('#sign-out').show()
  $('#leader-section').show()
  $('#home-button').show()
}
const projectsButton = (event) => {
  hideEverything()
  $('#sign-out').show()
  $('#project-section').show()
  $('#home-button').show()
}
const employeesButton = (event) => {
  hideEverything()
  $('#sign-out').show()
  $('#employee-section').show()
  $('#home-button').show()
}
const cancelButton = (event) => {
  hideEverything()
  $('#sign-in-button').show()
  $('#sign-up-button').show()
}
const homeButton = (event) => {
  hideEverything()
  $('#sign-out').show()
  $('#leaders-button').show()
  $('#projects-button').show()
  $('#employees-button').show()
  $('#change-password-button').show()
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
  onUpdateLeader,
  onCreateProject,
  onDeleteProject,
  onIndexProjects,
  onShowProject,
  onUpdateProject,
  onCreateEmployee,
  onDeleteEmployee,
  onIndexEmployees,
  onShowEmployee,
  onUpdateEmployee,
  onSignInButton,
  onSignUpButton,
  onChangePasswordButton,
  leadersButton,
  projectsButton,
  employeesButton,
  cancelButton,
  homeButton
}
