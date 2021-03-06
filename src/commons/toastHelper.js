import { toast } from 'react-toastify';

export const toastError = (error) => {
    let message = null;
    if (typeof error === 'object' && error.message) {
        ({ message } = error);
    }
    if (message != null && message !== 'undefined' && message !== '') {
        toast.error(message, {
            theme: 'colored',
        });
    }
};

export const toastSuccess = (message) => {
    if (message != null && message !== 'undefined' && message !== '') {
        toast.success(message);
    }
};
