import React, { useContext, useEffect, useState } from 'react'
import { CompactPicker } from 'react-color';
import { inputContext } from '../App';
function InputColor() {
    const [color, setColor] = useState("#054080");
    const [displaycolorpicker, setColorPicker] = useState(false);
    const handlecolorChange = (color) => {
        setColor(color.hex);
    }
    const { inputValue, setInputValue } = useContext(inputContext);
    useEffect(() => {
        setInputValue({ ...inputValue, color: color })
    }, [color]);
    return (
        <div>
            <label className='text-md font-semibold'>
                COLOR
            </label>
            <div className='flex items-center gap-2'>
                <div style={{ background: color }} onClick={() => setColorPicker(!displaycolorpicker)}
                    className='cursor-pointer w-10 h-8 border-4'>
                </div>
                <span>{color}</span>
            </div>
            {
                displaycolorpicker && (
                    <div className='absolute mt-2'>
                        <CompactPicker color={color} onChange={handlecolorChange} />
                    </div>
                )
            }

        </div>
    )
}

export default InputColor
