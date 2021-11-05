import { toast } from 'react-toastify';

const UseNotify = () => {
    const successNotify = () =>{
        toast.success('Mission Successful', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const deleteNotify = () =>{
        toast.success('Delete Successful', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return {successNotify, deleteNotify}
};

export default UseNotify;