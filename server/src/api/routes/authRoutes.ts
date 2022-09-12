import express from 'express';
import { login, signup } from './../../controller/authContoller';

const router = express.Router();

router.route('/login').post(login); /* .post(signup); */

router.route('/signup').post(signup);

export default router;
