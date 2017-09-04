import React from 'react'
import { storiesOf } from '@storybook/react'
import * as TitleInput from '.'

storiesOf('Molecules/NewTask', module)
.add('Normal Case', () => (<TitleInput.Row 
	Text={'New Task'}  
	TextTitle={'Title'}  
	TextDescription={'Description'}  
	/>))
.add('Row Case', () => (<TitleInput.Column
	Text={'New Task'}  
	TextTitle={'Title'}  
	TextDescription={'Description'}  
	/>));