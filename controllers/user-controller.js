import { User } from '../models/index.js';


const UserController = {
    
getAllUsers(req, res) {
    User.find({})
    .then(userData => res.json(userData))
    .catch(err => res.status(500).json(err))
},

getUserById(req, res) {
    User.findById(req.params.userId)
    .then(userData => res.json(userData))
    .catch(err => res.status(500).json(err))
},

createUser(req, res) {
    User.create(req.body)
    .then(userData => res.json(userData))
    .catch(err => res.status(500).json(err))
},

updateUserById(req, res) {
    User.findOneAndUpdate(req.params.id, req.body, { new: true })
    .then(userData => {
        return !userData
        ? res.status(404).json({ message: 'no user with that id'})
        : res.json(userData)
    })
    .catch(err => res.status(500).json(err))
},
deleteUserById(req, res) {
    User.findOneAndDelete(req.params.id)
    .then(userData => {
      !userData ? res.json(404).json({message: 'user not found'})
      : res.json({message: 'user successfully deleted'})
    })
    .catch(err => res.status(500).json(err))
},

addFriend(req, res) {
    User.findOneAndUpdate(
        { _id: req.params.userId},
        { $addToSet: {friends: req.body.friendId || req.params.friendId  } },
        { new: true }
    )
    .then(userData => {
        !userData ? res.status(404).json({message: 'user not found'})
        : res.json(userData)
    })
    .catch(err => res.status(500).json(err))
},

removeFriend({ params }, res ) {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: params.friendId}},
        { new: true}
    )
    .then((dbUserData) => {
        if ( !dbUserData) {
            return res.status(404).json({mesage: 'no user with that id'})
        }
        const removed = !dbUserData.friends.includes(params.friendId)
        removed ? res.json({message : 'friend removed successfully', dbUserData})
        : res.json(dbUserData)
    })
    .catch((err) => res.status(400).json(err))
},
};

export { UserController }