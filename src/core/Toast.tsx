import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export const toastSuccess = (text: string) => {
    toast.success(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
};

export const toastError = (text: string) => {
    toast.error(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
};


export const toastInfo = (text: string) => {
    toast.info(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
};

export interface ToastProps {

}

export default function Toast(props: ToastProps): JSX.Element {
  // eslint-disable-next-line no-empty-pattern
  const { } = props;
  return <ToastContainer />;
}
