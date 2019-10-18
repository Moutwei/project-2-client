const config = require('./config.js')
const store = require('./store.js')

// *********** authorization ***********
const signUp = (formData) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}
const signIn = (formData) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}
const changePassword = (formData) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
const signOut = () => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// *********** API ***********

// ******** leaders ********

const createLeader = (formData) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/leaders',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
const deleteLeader = (formData) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/leaders/' + formData.leader.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const indexLeaders = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/leaders',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const showLeader = (formData) => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/leaders/' + formData.leader.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateLeader = (formData) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/leaders/' + formData.leader.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

// ******** projects ********

const createProject = (formData) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/projects',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
const deleteProject = (formData) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/projects/' + formData.project.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const indexProjects = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/projects',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const showProject = (formData) => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/projects/' + formData.project.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateProject = (formData) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/projects/' + formData.project.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createLeader,
  deleteLeader,
  indexLeaders,
  showLeader,
  updateLeader,
  createProject,
  deleteProject,
  indexProjects,
  showProject,
  updateProject
}
