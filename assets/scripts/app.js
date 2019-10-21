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
  // leaders
  $('#create-leader').on('submit', events.onCreateLeader)
  $('#delete-leader').on('submit', events.onDeleteLeader)
  $('#index-leaders').on('submit', events.onIndexLeaders)
  $('#show-leader').on('submit', events.onShowLeader)
  $('#update-leader').on('submit', events.onUpdateLeader)
  // projects
  $('#create-project').on('submit', events.onCreateProject)
  $('#delete-project').on('submit', events.onDeleteProject)
  $('#index-projects').on('submit', events.onIndexProjects)
  $('#show-project').on('submit', events.onShowProject)
  $('#update-project').on('submit', events.onUpdateProject)
  // employees
  $('#create-employee').on('submit', events.onCreateEmployee)
  $('#delete-employee').on('submit', events.onDeleteEmployee)
  $('#index-employees').on('submit', events.onIndexEmployees)
  $('#show-employee').on('submit', events.onShowEmployee)
  $('#update-employee').on('submit', events.onUpdateEmployee)
  // buttons
  $('#sign-in-button').on('click', events.onSignInButton)
  $('#sign-up-button').on('click', events.onSignUpButton)
  $('#change-password-button').on('click', events.onChangePasswordButton)
  $('#sign-out-button').on('click', events.onSignOutButton)

  $('#leaders-button').on('click', events.leadersButton)
  $('#projects-button').on('click', events.projectsButton)
  $('#employees-button').on('click', events.employeesButton)
})
