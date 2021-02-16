// const express = require('express');
// const router = express.Router();
const userService = require('./user.service');

// routes
// router.post('/authenticate', authenticate);
// router.get('/', getAll);
this.authenticate = (req, res, next) => {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

this.getAll = (req, res, next) => {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

this.getProfile = (req, res, next) => {
    userService.getUser(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'User Not Found' }))
        .catch(err => next(err));
}

this.getChat = (req, res, next) => {
    userService.getChat(req.body)
        .then(chats => res.json(chats))
        .catch(err => next(err));
}

this.getUsers = (req, res, next) => {
    userService.getProfile(req.body)
        .then(profile => res.json(profile))
        .catch(err => next(err));
}

this.getInboxData = (req, res, next) => {
    userService.getInboxData(req.body)
        .then(inbox => res.json(inbox))
        .catch(err => next(err));
}

this.getDashboardData = (req, res, next) => {
    userService.getDashboardData(req.body)
        .then(dash => res.json(dash))
        .catch(err => next(err));
}
