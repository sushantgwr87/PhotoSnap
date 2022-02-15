import { v4 as uuidv4 } from 'uuid';
import Alert from '../components/Alert';

export const setAlert =  ({ title, message }) => {
    
    const id = uuidv4();

    let toast = {
        id,
        title,
        message,
    }

    console.log(toast);

    return Alert({ toast })
};