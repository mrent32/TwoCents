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
};

export { ThoughtController }
