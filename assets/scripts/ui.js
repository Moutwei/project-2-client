'use strict'

const store = require('./store.js')

// hides everything except sign in and sign up
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
  $('#cancel-button').hide()
  $('#home-button').hide()
  $('#info-row').hide()
  $('.form-group').trigger('reset')
}

// initializes page to be hide all forms first
hideEverything()

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
  hideEverything()
  $('#sign-in').show()
  $('#cancel-button').show()
}
const onSignUpFailure = () => {
  failureMessage('Sign Up Failed')
}
const onSignInSuccess = (responseData) => {
  successMessage('Sign In Success')
  // essential code for allowing other methods to use the token data
  store.user = responseData.user
  hideEverything()
  $('#change-password-button').show()
  $('#sign-out').show()
  $('#leaders-button').show()
  $('#projects-button').show()
  $('#employees-button').show()
}
const onSignInFailure = () => {
  failureMessage('Sign In Failed')
  hideEverything()
  $('#sign-in').show()
  $('#cancel-button').show()
}
const onChangePasswordSuccess = () => {
  successMessage('Password Change Success')
  hideEverything()
  $('#change-password-button').show()
  $('#sign-out').show()
  $('#leaders-button').show()
  $('#projects-button').show()
  $('#employees-button').show()
}
const onChangePasswordFailure = () => {
  failureMessage('Password Change Failed')
}
const onSignOutSuccess = () => {
  successMessage('Signed Out Successfully')
  hideEverything()
  $('#sign-in-button').show()
  $('#sign-up-button').show()
}
const onSignOutFailure = () => {
  failureMessage('Sign Out Failed')
}

// *********** API ***********

// ******** leaders ********

const onCreateLeaderSuccess = () => {
  successMessage('Created Leader Successfully')
  $('.form-group').trigger('reset')
}
const onCreateLeaderFailure = () => {
  failureMessage('Create Leader Failed')
}
const onDeleteLeaderSuccess = () => {
  successMessage('Deleted Leader Successfully')
  $('.form-group').trigger('reset')
}
const onDeleteLeaderFailure = () => {
  failureMessage('Delete Leader Failed')
}
const onIndexLeadersSuccess = (indexedLeaders) => {
  successMessage('Indexed Leaders Successfully')
  $('#info-row').show()
  // Index Function
  let string = ''
  const data = indexedLeaders.leaders
  data.forEach(function (leader) {
    string += `<h6>${leader.name}</h6><p>ID: ${leader.id}</p>`
  })
  $('#info').html(string)
  $('.form-group').trigger('reset')
}
const onIndexLeadersFailure = () => {
  failureMessage('Index Leaders Failed')
}
const onShowLeaderSuccess = (indexedLeaders) => {
  successMessage('Showed Leader Successfully')
  $('#info-row').show()
  // Show Function
  const data = indexedLeaders.leader
  $('#info').html('<h4>' + data.name + '</h4>' +
  '<p> ID: ' + data.id + '</p>' +
  '<p> Projects Assigned: ' + data.projects.length + '</p>' +
  '<p> Email: ' + data.email + '</p>' +
  '<p> Phone: ' + data.phone + '</p>' +
  '<p> Skills: ' + data.skills + '</p>' +
  '<p> Completed Projects: ' + data.completed_projects + '</p>')
  $('.form-group').trigger('reset')
}
const onShowLeaderFailure = () => {
  failureMessage('Show Leader Failed')
}
const onUpdateLeaderSuccess = () => {
  successMessage('Updated Leader Successfully')
  $('.form-group').trigger('reset')
}
const onUpdateLeaderFailure = () => {
  failureMessage('Update Leader Failed')
}

// ******** projects ********

const onCreateProjectSuccess = () => {
  successMessage('Created Project Successfully')
  $('.form-group').trigger('reset')
}
const onCreateProjectFailure = () => {
  failureMessage('Create Project Failed')
}
const onDeleteProjectSuccess = () => {
  successMessage('Deleted Project Successfully')
  $('.form-group').trigger('reset')
}
const onDeleteProjectFailure = () => {
  failureMessage('Delete Project Failed')
}
const onIndexProjectsSuccess = (indexedProjects) => {
  successMessage('Indexed Projects Successfully')
  $('#info-row').show()
  let string = ''
  // Index Function
  const data = indexedProjects.projects
  data.forEach(function (project) {
    string += `<h6>${project.title}</h6><p>ID: ${project.id}</p>`
  })
  $('#info').html(string)
  $('.form-group').trigger('reset')
}
const onIndexProjectsFailure = () => {
  failureMessage('Index Projects Failed')
}
const onShowProjectSuccess = (indexedProjects) => {
  successMessage('Showed Project Successfully')
  $('#info-row').show()
  // Show Function
  const data = indexedProjects.project
  $('#info').html('<h4>' + data.title + '</h4>' +
  '<p> Mission: ' + data.mission + '</p>' +
  '<p> Target Date: ' + data.target + '</p>' +
  '<p> Requirements: ' + data.requirements + '</p>' +
  '<p> Assigned Leader ID: ' + data.leader_id + '</p>' +
  '<p> Assigned Employees: ' + data.employees.length + '</p>')
  $('.form-group').trigger('reset')
}
const onShowProjectFailure = () => {
  failureMessage('Show Project Failed')
}
const onUpdateProjectSuccess = () => {
  successMessage('Updated Project Successfully')
  $('.form-group').trigger('reset')
}
const onUpdateProjectFailure = () => {
  failureMessage('Update Project Failed')
}

// ******** employees ********

const onCreateEmployeeSuccess = () => {
  successMessage('Created Employee Successfully')
  $('.form-group').trigger('reset')
}
const onCreateEmployeeFailure = () => {
  failureMessage('Create Employee Failed')
}
const onDeleteEmployeeSuccess = () => {
  successMessage('Deleted Employee Successfully')
  $('.form-group').trigger('reset')
}
const onDeleteEmployeeFailure = () => {
  failureMessage('Delete Employee Failed')
}
const onIndexEmployeesSuccess = (indexedEmployees) => {
  successMessage('Indexed Employees Successfully')
  $('#info-row').show()
  // Index Function
  const data = indexedEmployees.employees
  let string = ''
  data.forEach(function (employee) {
    string += `<h6>${employee.name}</h6><p>ID: ${employee.id}</p>`
  })
  $('#info').html(string)
  $('.form-group').trigger('reset')
}
const onIndexEmployeesFailure = () => {
  failureMessage('Index Employees Failed')
}
const onShowEmployeeSuccess = (indexedEmployees) => {
  successMessage('Showed Employee Successfully')
  $('#info-row').show()
  // Show Function
  const data = indexedEmployees.employee
  $('#info').html('<h4>' + data.name + '</h4>' +
  '<p> Task: ' + data.task + '</p>' +
  '<p> Task Status: ' + data.task_status + '</p>' +
  '<p> Assigned Project ID: ' + data.project_id + '</p>')
  $('.form-group').trigger('reset')
}
const onShowEmployeeFailure = () => {
  failureMessage('Show Employee Failed')
}
const onUpdateEmployeeSuccess = () => {
  successMessage('Updated Employee Successfully')
  $('.form-group').trigger('reset')
}
const onUpdateEmployeeFailure = () => {
  failureMessage('Update Employee Failed')
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
  onUpdateLeaderFailure,
  onCreateProjectSuccess,
  onCreateProjectFailure,
  onDeleteProjectSuccess,
  onDeleteProjectFailure,
  onIndexProjectsSuccess,
  onIndexProjectsFailure,
  onShowProjectSuccess,
  onShowProjectFailure,
  onUpdateProjectSuccess,
  onUpdateProjectFailure,
  onCreateEmployeeSuccess,
  onCreateEmployeeFailure,
  onDeleteEmployeeSuccess,
  onDeleteEmployeeFailure,
  onIndexEmployeesSuccess,
  onIndexEmployeesFailure,
  onShowEmployeeSuccess,
  onShowEmployeeFailure,
  onUpdateEmployeeSuccess,
  onUpdateEmployeeFailure
}
