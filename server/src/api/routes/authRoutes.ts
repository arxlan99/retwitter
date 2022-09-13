import express from 'express';
import { authMe, login, logout, protect, signup } from './../../controller/authContoller';

const router = express.Router();

router.route('/logout').post(logout);

router.route('/login').post(login);

router.route('/signup').post(signup);

router.route('/me').get(protect, authMe);

export default router;
