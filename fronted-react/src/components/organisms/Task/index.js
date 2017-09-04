import React from 'react'
import styled from 'styled-components'

import * as NewTaskTitle from  './../../molecules/NewTask'
import TaskRow from  './../../molecules/TaskRow'
import ContainerRow from  './../../atoms/container/row'
import ContainerColumn from  './../../atoms/container/column'

const Task = (props) => (
 <ContainerColumn>
 	<NewTaskTitle.Row 
		Text={ 'New Task' }  
		TextTitle={ 'Title' }  
		TextDescription={ 'Description' }
		handleChange= { props.handleChange }
		onSave = { props.onSave } 

	/>
	{
		props.tasks.map( ( task ) => {
			return <TaskRow key={ task.get('id')} task={ task } onDelete = { props.onDelete }  /> })
	}
	
 </ContainerColumn>
);
export default Task;
