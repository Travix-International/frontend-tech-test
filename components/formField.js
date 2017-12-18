import React from 'react';
import { Input, DatePicker } from 'travix-ui-kit';

const FormField = ({
           loading,
           element,
           input,
           placeholder,
           type,
           meta: { touched, error, warning, invalid }
       }) => {
	const status = touched && (error || warning || invalid) ? 'error' : 'valid';
	return (
		<div className='input-field'>
			<div className={`input-with-status-${status}`}>
				{element === 'input' && <Input
					disabled={loading}
					{...input}
					status={status}
					multiline={type === 'multiline'}
					placeholder={placeholder}
					autoComplete='off'
					type={type || ''}
				/>}
				{element === 'datePicker' && <DatePicker
					disabled={loading}
					{...input}
					status={status}
					placeholder={placeholder}
					autoComplete='off'
					type={type || ''}
					valueFormatterFn={valueFormatter}
					minDate={(new Date()).toDateString()}
				/>}
				{touched && ((error && <p>{error}</p>) || (warning && <p>{warning}</p>))}
			</div>
		</div>
	);
};

function valueFormatter(date) {
	return new Date(date)
		.toDateString()
		.split(' ')
		.slice(1)
		.join(' ');
}

export default FormField;
