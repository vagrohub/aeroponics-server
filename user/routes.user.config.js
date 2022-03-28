import { Router } from 'express';
import {
    edditUserPassword,
    edditUsername,
    getUserData,
    getAllUserData
} from './controllers/user.controllers.js';
import checkingRequestsForFields from '../middlewares/checkingRequestsForFields.middleware.js';
import checkingAuthenticate from '../middlewares/checkingAuthenticate.middleware.js';

const router = new Router();

router.get(
    '/',
    [
        checkingAuthenticate()
    ],
    getUserData
);

router.post(
    '/password',
    [
        checkingAuthenticate(),
        checkingRequestsForFields('body', 'password')
    ],
    edditUserPassword
);

router.post(
    'username',
    [
        checkingAuthenticate(),
        checkingRequestsForFields('body', 'username')
    ],
    edditUsername
);

export default router;
