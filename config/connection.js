import pkg from 'mongoose';
const { connect, connection } = pkg

const connectionString = 'mongodb://127.0.0.1:27017/studentsDB';



export default connect(connectionString);