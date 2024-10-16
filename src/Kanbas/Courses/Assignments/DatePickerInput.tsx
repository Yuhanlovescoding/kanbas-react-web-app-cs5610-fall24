import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const CustomDatePickerInput = React.forwardRef<HTMLButtonElement, { value?: string, onClick?: () => void }>(({ value, onClick }, ref) => (
  <button onClick={onClick} ref={ref} className="custom-date-picker">
    {value}
    <div className="custom-date-picker-icon-container">
      <FaCalendarAlt className="custom-date-picker-icon" />
    </div>
  </button>
));

export default CustomDatePickerInput;


