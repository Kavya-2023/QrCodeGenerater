import React, { useContext } from 'react';
import { saveAs } from 'file-saver';
// import img1 from "../images/qr_download.png"
import { inputContext } from '../App';

const Qrcode = () => {
    const { response, loading, error } = useContext(inputContext);

    const downloadImage = () => {
        if (response) {
            saveAs(response, 'qrCode.png');
        } else {
            console.error("Invalid response data for image");
            // You might want to show an error message to the user or handle it in some way
        }
    };

    if (loading) {
        return (
            <div className='animate-pulse flex flex-col items-center justify-center px-10 gap-3'>
                <div className='h-32 w-full bg-gray-300'></div>
                <div className='h-8 w-full bg-gray-300'></div>
            </div>
        );
    }

    if (error) {
        console.error("Error while generating QR code:", error);
        return (
            <div className='text-red-500 flex items-center'>
                Sorry, something went wrong. Please check the console for more details.
            </div>
        );
    }

    return (
        <div className='bg-gray-100 rounded-r-md flex flex-col items-center justify-center'>
            {response ? (
                <div>
                    <img src={response} alt="qrCode" className='w-48' />
                    <button
                        onClick={downloadImage}
                        className='bg-blue-400 text-white m-2 py-1 px-4 hover:bg-blue-500 w-full'
                    >
                        Download
                    </button>
                </div>
            ) : (
                <div className='text-gray-600'>
                    Your QR Code will be shown here...
                </div>
            )}
        </div>
    );
};

export default Qrcode;
