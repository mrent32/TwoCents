import express from 'express';
const router = express.Router();

import {
    UserController
} from '../../controllers/user-controller.js';
const {getAllUsers, 
    getUserById,
     createUser,
      updateUserById,
      deleteUserById,
addFriend,
 removeFriend } = UserController 


router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)

export default router