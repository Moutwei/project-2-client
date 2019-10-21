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

// ******** leaders ********

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

// ******** projects ********

const onCreateProject = (event) => {
  event.preventDefault() // stops page refresh
  //
  const formData = getFormFields(event.target) // gives us the data entered
  console.log(formData)
  //
  api.createProject(formData)
    .then(ui.onCreateProjectSuccess)
    .catch(ui.onCreateProjectFailure)
}
const onDeleteProject = (event) => {
  event.preventDefault() // stops page refresh
  const formData = getFormFields(event.target) // gives us the data entered
  console.log(formData)
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
  console.log(formData)
  //
  api.showProject(formData)
    .then(ui.onShowProjectSuccess)
    .catch(ui.onShowProjectFailure)
}
const onUpdateProject = (event) => {
  event.preventDefault() // stops page refresh
  //
  const formData = getFormFields(event.target) // gives us the data entered
  console.log(formData)
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
  console.log(formData)
  //
  api.createEmployee(formData)
    .then(ui.onCreateEmployeeSuccess)
    .catch(ui.onCreateEmployeeFailure)
}
const onDeleteEmployee = (event) => {
  event.preventDefault() // stops page refresh
  const formData = getFormFields(event.target) // gives us the data entered
  console.log(formData)
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
  console.log(formData)
  //
  api.showEmployee(formData)
    .then(ui.onShowEmployeeSuccess)
    .catch(ui.onShowEmployeeFailure)
}
const onUpdateEmployee = (event) => {
  event.preventDefault() // stops page refresh
  //
  const formData = getFormFields(event.target) // gives us the data entered
  console.log(formData)
  //
  api.updateEmployee(formData)
    .then(ui.onUpdateEmployeeSuccess)
    .catch(ui.onUpdateEmployeeFailure)
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
  onUpdateEmployee
}
