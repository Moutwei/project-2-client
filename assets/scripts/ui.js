'use strict'

const store = require('./store.js')

$('#sign-in').hide()
$('#sign-up').hide()
$('#change-password').hide()
$('#sign-out').hide()
$('#leader-section').hide()
$('#project-section').hide()
$('#employee-section').hide()

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

// ******** leaders ********

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
  // Index Function
  console.log(indexedLeaders.leaders)
  const data = indexedLeaders.leaders
  data.forEach(function (leader) {
    $('#data').append('<p>' + leader.name + ' ID: ' + leader.id + '</p>')
  })
}
const onIndexLeadersFailure = () => {
  failureMessage('Index Leaders Failed')
}
const onShowLeaderSuccess = (indexedLeaders) => {
  successMessage('Showed Leader Successfully')
  console.log(indexedLeaders.leader)
  // Show Function
  const data = indexedLeaders.leader
  $('#data').append('<p>' + data.name + ' ID: ' + data.id + '</p>')
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

// ******** projects ********

const onCreateProjectSuccess = () => {
  successMessage('Created Project Successfully')
}
const onCreateProjectFailure = () => {
  failureMessage('Create Project Failed')
}
const onDeleteProjectSuccess = () => {
  successMessage('Deleted Project Successfully')
}
const onDeleteProjectFailure = () => {
  failureMessage('Delete Project Failed')
}
const onIndexProjectsSuccess = (indexedProjects) => {
  successMessage('Indexed Projects Successfully')
  console.log(indexedProjects.projects)
  // Index Function
  const data = indexedProjects.projects
  data.forEach(function (project) {
    $('#data').append('<p>' + project.title + ' ID: ' + project.id + ' LEADER ID: ' + project.leader_id + '</p>')
  })
}
const onIndexProjectsFailure = () => {
  failureMessage('Index Projects Failed')
}
const onShowProjectSuccess = (indexedProjects) => {
  successMessage('Showed Project Successfully')
  console.log(indexedProjects.project)
  // Show Function
  const data = indexedProjects.project
  $('#data').append('<p>' + data.title + ' ID: ' + data.id + ' LEADER ID: ' + data.leader_id + '</p>')
}
const onShowProjectFailure = () => {
  failureMessage('Show Project Failed')
}
const onUpdateProjectSuccess = () => {
  successMessage('Updated Project Successfully')
}
const onUpdateProjectFailure = () => {
  failureMessage('Update Project Failed')
}

// ******** employees ********

const onCreateEmployeeSuccess = () => {
  successMessage('Created Employee Successfully')
}
const onCreateEmployeeFailure = () => {
  failureMessage('Create Employee Failed')
}
const onDeleteEmployeeSuccess = () => {
  successMessage('Deleted Employee Successfully')
}
const onDeleteEmployeeFailure = () => {
  failureMessage('Delete Employee Failed')
}
const onIndexEmployeesSuccess = (indexedEmployees) => {
  successMessage('Indexed Employees Successfully')
  console.log(indexedEmployees.employees)
  // Index Function
  const data = indexedEmployees.employees
  data.forEach(function (employee) {
    $('#data').append('<p>' + employee.name + ' TASK: ' + employee.task + ' EMPLOYEE ID: ' + employee.id + '</p>')
  })
}
const onIndexEmployeesFailure = () => {
  failureMessage('Index Employees Failed')
}
const onShowEmployeeSuccess = (indexedEmployees) => {
  successMessage('Showed Employee Successfully')
  console.log(indexedEmployees.employee)
  // Show Function
  const data = indexedEmployees.employee
  $('#data').append('<p>' + data.name + ' TASK: ' + data.task + ' EMPLOYEE ID: ' + data.id + '</p>')
}
const onShowEmployeeFailure = () => {
  failureMessage('Show Employee Failed')
}
const onUpdateEmployeeSuccess = () => {
  successMessage('Updated Employee Successfully')
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
