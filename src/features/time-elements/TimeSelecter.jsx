
import { useDispatch } from 'react-redux';
import Select from "react-select";
import { setSelectedTime } from './TimeSelecterSlice';
import React, { useEffect, useState } from 'react';
import './timer.scss'

const _options = [
    { value: '5:00', label: '5:00' },
    { value: '10:00', label: '10:00' },
    { value: '15:00', label: '15:00' },
    { value: '30:00', label: '30:00' },
    { value: '1:00:00', label: '1:00:00' },
    { value: '1:30:00', label: '1:30:00' },
  ];

function TimeSelecter() {
const dispatch = useDispatch();
const [value, setValue] = useState('');

useEffect(() => {
   if (value) {
    dispatch(setSelectedTime(value));
   }
}, [value, dispatch])

const _handleChange = e => {
    const value = e.value;
    setValue(value)
}
  return (
    <div className='time-set-line'>
         <Select 
         options={_options}
         onChange={e => _handleChange(e)}
      /> 
    </div>
  )
}

export default TimeSelecter
