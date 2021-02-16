// users hardcoded for simplicity, store in a db for production applications
// const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
const fs = require('fs');

let getData = [];
let getChatData = [];
let getProfileData = [];
let InboxData = [];
let DashboardData = [];

fs.readFile(`${__dirname}/myfile/user.json`, 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    getData = JSON.parse(data);
    //res.send(JSON.parse(data));
});

fs.readFile(`${__dirname}/myfile/chatdata.json`, 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    getChatData = JSON.parse(data);
    //res.send(JSON.parse(data));
});

fs.readFile(`${__dirname}/myfile/profileData.json`, 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    getProfileData = JSON.parse(data);
    //res.send(JSON.parse(data));
});

fs.readFile(`${__dirname}/myfile/inboxData.json`, 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    InboxData = JSON.parse(data);
    //res.send(JSON.parse(data));
});

fs.readFile(`${__dirname}/myfile/dashboardData.json`, 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    DashboardData = JSON.parse(data);
    //res.send(JSON.parse(data));
});

module.exports = {
    authenticate,
    getAll,
    getUser,
    getChat,
    getProfile,
    getInboxData,
    getDashboardData
};

async function authenticate({ username, password }) {
    const user = getData.find(u => u.username === username && u.password === password);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}

async function getAll() {
    return getData;
}

async function getUser({ id }) {
    id = parseInt(id);
    const user = getData.find(u => u.id === id);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}

async function getChat({ id, fromUser }) {
    return getChatData;
}

async function getProfile() {
    return getProfileData;
}

async function getInboxData() {
    return InboxData;
}

async function getDashboardData() {
    return DashboardData;
}
