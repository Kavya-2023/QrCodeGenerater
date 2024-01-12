import React, { useContext } from 'react'
import InputFeild from './InputFeild'
import InputColor from './InputColor'
import { inputContext } from '../App'

const InputForm = () => {
    const { getQrCode, inputValue } = useContext(inputContext);
    const handleSubmit = () => getQrCode();
    return (
        <div className='col-span-2 p-6 grid gap-4 m-3'>
            <h1 className='text-center font-bold text-blue-500 text-4xl mb-6'>Generate QR Code</h1>
            <InputFeild />
            <InputColor />
            <button disabled={!inputValue.url}
                onClick={handleSubmit}
                className="bg-blue-400 max-w-xs ml-auto px-4 py-2 text-white rounded-sm mt-4 hover:bg-blue-500 disabled:bg-gray-300">Generate QRCode</button>
        </div>
    )
}

export default InputForm
