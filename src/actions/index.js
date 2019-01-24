import types from './types';
import { db } from '../firebase';

export const getMessages = () => dispatch => {
    const dbRef = db.ref('/chat-log');

    dbRef.on('value', (snapshot) => {
        console.log('The DB has changed!');
        dispatch({
            type: types.GET_CHAT_MESSAGES,
            messages: snapshot.val()
        });
    });

    return dbRef;
}

export const sendMessage = message => dispatch => {
    db.ref('/chat-log').push(message);
}