import {toast} from 'react-toastify';

export const toastify = (message) =>{
    toast(message, {
        position: toast.POSITION.TOP_RIGHT
    });
}