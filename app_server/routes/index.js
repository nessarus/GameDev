var express = require('express');
var ctrlProjects = require('../controllers/projects');
var ctrlAcc = require('../controllers/account');
var ctrlChat = require('../controllers/chat');
var router = express.Router();

/* GET home page. */
router.get('/', ctrlAcc.welcome);
router.get('/about', ctrlAcc.about);

/* GET profile page. */
router.get('/profile', ctrlAcc.profile);
router.post('/profile', ctrlAcc.prof);

/* GET projects page. */
router.get('/projects', ctrlProjects.prjList);
router.get('/projects/delete/:id', ctrlProjects.delPrj);

router.get('/new_project', ctrlProjects.prjCreate);
router.post('/new_project', ctrlProjects.prjCre);

router.get('/projects/:id', ctrlProjects.myProject);


/* GET chat page. */
router.get('/chat', ctrlAcc.chat);

/* GET login page. */
router.get('/register', ctrlAcc.register);
router.post('/register', ctrlAcc.regist);
router.get('/login', ctrlAcc.loginForm);
router.post('/login', ctrlAcc.login);
router.get('/logout', ctrlAcc.logout);



//router.get('/:id/', ctrlProjects.taskList);
//router.post('/:id/new', ctrlProjects.newTask);
//router.get('/:pid/delete/:tid', ctrlProjects.delTask);

//router.get('/register', ctrlAcc.register);


module.exports = router;
