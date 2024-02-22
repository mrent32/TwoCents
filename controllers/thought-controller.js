import { Thought, User, Reaction } from '../models/index.js';
import { Types } from 'mongoose';


const ThoughtController = {
    async getAllThoughts(req, res) {
        try {
            const thoughts =  await Thought.find({})
            res.json(thoughts)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async getThoughtsById(req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.thoughtId})
            return !thought
             ? res.status(404).json({message: 'Thought not found'})
            : res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async postThought(req, res) {
        try {
            const newThought = await Thought.create(req.body)
            res.json(newThought)
            console.log('logging out', newThought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async deleteThought(req, res) {
        try {
            const deletedThought = await Thought.findByIdAndDelete({_id: req.params.thoughtId})
            res.status(200).json(deletedThought)
        } catch (err) {
            res.status(500).json(err)
    } 
    },
    async updatedThought(req, res) {
        try {
            const updatedThought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$set: req.body},
                {runValidators: true, new: true }
            )
            return !Thought 
            ? res.status(404).json({message: 'no thought with that id'})
            : res.json(updatedThought)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async createReaction(req, res) {
        try {
            const newReaction = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$addToSet: {reactions: req.body}},
            {runValidators: true, new: true}
            )
            newReaction ? res.json(newReaction) : res.status(404).json({message: 'not found'})
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async deleteReaction(req, res) {
        try {
          const thought = await Thought.findOneAndUpdate(
              {_id: req.params.thoughtId},
              {$pull: {reactions: {reactionId: req.params.reactionId}}},
              {runValidators: true, new: true}
          );
  
          thought ? res.json(thought) : res.status(404).json({message: notFound});
      } catch (e) {
          res.status(500).json(e);
      }
    },
};

export { ThoughtController }
