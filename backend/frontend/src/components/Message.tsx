import React, { useState } from 'react';


type props = { text: string; type: string }

const Message = ({ text, type }: props) => {
    const [display, setDisplay] = useState(true)

    const getMessageClass = () => {
        switch (type) {
            case 'success':
                return 'bg-green-500';
            case 'error':
                return 'bg-red-500';
            case 'warning':
                return 'bg-yellow-500';
            default:
                return 'bg-gray-500';
        }
    };

    const showDisplay = () => display ? 'block' : 'hidden'



    const onClose: React.MouseEventHandler = () => setDisplay(!display)

    return (
        <div className={`fixed top-0 left-0 w-full ${getMessageClass()} text-white p-4 border ${showDisplay()}`}>
            <div className="flex items-center justify-between">
                <p>{text}</p>
                <button onClick={onClose} className="text-white font-bold">
                    Close
                </button>
            </div>
        </div>
    );
};

export default Message;
