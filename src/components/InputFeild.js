import React, { useContext } from 'react'
import { inputContext } from '../App'

function InputFeild() {
    const { inputValue, setInputValue } = useContext(inputContext);
    const handleColorChange = e => {
        setInputValue({ ...inputValue, url: e.target.value });
    }
    console.log(inputValue);
    return (
        <div>
            <label className='font-semibold text-md'>
                YOUR URL
            </label>
            <input type="url" className='w-full py-1 px-3 text-gray-700 border-2 rounded-sm' placeholder='http://example.com' value={inputValue.url} onChange={handleColorChange}></input>
        </div>
    )
}

export default InputFeild
