import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const CustomDatePickerInput = React.forwardRef<HTMLButtonElement, { value?: string, onClick?: () => void }>(({ value, onClick }, ref) => (
  <button onClick={onClick} ref={ref} style={{ 
      width: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      padding: '8px', 
      border: '1px solid #ced4da', 
      borderRadius: '.25rem', 
      fontSize: '1rem', 
      lineHeight: '100%', 
      color: '#495057', 
      backgroundColor: '#fff',
      position: 'relative', 
      overflow: 'hidden' 
    }}>
    {value}
    <div style={{ 
      position: 'absolute', 
      right: '0', 
      top: '0', 
      bottom: '0', 
      width: '40px', 
      backgroundColor: '#e9ecef', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center'
    }}>
      <FaCalendarAlt style={{ color: '#6c757d' }} />
    </div>
  </button>
));

export default CustomDatePickerInput;


