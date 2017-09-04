import React from 'react'
import { storiesOf } from '@storybook/react'
import * as TitleInput from '.'

storiesOf('Molecules/TitleInput', module)
.add('Normal Case', () => (<TitleInput.Row 
	Text={'Titulo H2 Right'}  
	/>))
.add('Row Case', () => (<TitleInput.Column
	Text={'Titulo H2 Right'}  
	/>));