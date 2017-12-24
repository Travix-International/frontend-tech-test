import React from 'react';
import FormField from './formField';

const FormFields = (formFields) => {
	const fields = formFields.names.map(key => formFields[key]);
	fields.forEach((field, key) => {
		fields[key].data = formFields.fields[field.input.name];
	});
	return fields.map(({ input, meta, data }, key) => (
		<div key={key}>
			<FormField
				placeholder={formFields.lang[data.placeholder]}
				element={data.element}
				type={data.type}
				meta={meta}
				input={input}
				loading={formFields.loading}
			/>
		</div>
	));
};

export default FormFields;
