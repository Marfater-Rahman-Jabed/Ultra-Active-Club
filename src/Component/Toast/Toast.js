import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
function MrToast() {

    const notify = () => {


        toast('Hello Geeks')
    }
    return (
        <div className="MrToast">
            <button onClick={notify}>Click Me!</button>
        </div>
    );
}

export default MrToast;