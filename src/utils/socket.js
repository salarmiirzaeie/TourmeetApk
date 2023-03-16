import {io} from 'socket.io-client';
const socket = io.connect('http://192.168.43.153:3333');
export default socket;
