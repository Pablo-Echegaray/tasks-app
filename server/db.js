import {createPool} from 'mysql2/promise';
//import db from 'mysql2/promise';
 
export const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '584577',
    dataBase: 'tasksdb'
}); 
/*
export const pool = db.configure({
    "host": "localhost",
    "user": "root",
    "password": "584577",
    "database": "tasksdb"
});
*/