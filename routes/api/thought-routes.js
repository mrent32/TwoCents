import express from 'express';
const router = express.Router();

import {
    ThoughtController
} from './../../controllers/thought-controller.js'
const {getAllThoughts,
     getThoughtsById,
      postThought,
       deleteThought,
        updatedThought,
} = ThoughtController
router.route('/').get(getAllThoughts).post(postThought);

router.route('/:thoughtId').get(getThoughtsById).put(updatedThought).delete(deleteThought);

// router.route('/:thoughtId/reactions').post(createReaction);

// router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

export default router