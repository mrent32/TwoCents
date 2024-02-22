import * as connection from "../config/connection.js";
import { User, Thought, Reaction } from '../models/index.js';

// connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    let friendCheck = await connection.db.listCollections({ name: 'users'}).toArray();
    if (friendCheck.length) {
        await connection.dropCollection('users')
    }

    
}) 

// apprenticeships
// open source github contributions
// internships within next month
// local coding meetups
// tutoring route