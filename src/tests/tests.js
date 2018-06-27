import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jest from 'jest-mock';

import mockAxios from "./mockAxios";
import { getTodos } from "../actions/todoActions";

import Button from '../components/common/Button/Button';
import LinkTo from '../components/common/LinkTo/LinkTo';
import Input from '../components/common/Input/Input';
import Textarea from '../components/common/Textarea/Textarea';

describe('Button component test', () => {
	const buttonProps = {
		value: 'Test button'
	}
	it('Button component renders', () => {
		expect(
			shallow(
				<Button {...buttonProps} />
				).length
			).equal(1);
	})
})

describe('LinkTo component test', () => {
	const LinkToProps = {
		to: '/'
	}
	it('LinkTo component renders', () => {
		expect(
			shallow(
				<LinkTo {...LinkToProps} />
				).length
			).equal(1);
	})
})

describe('Input component test', () => {
	const InputProps = {
		value: 'Blog',
		customClass: 'success',
		name: 'title',
		id: 'taskTitle'
	}
	it('Input component renders', () => {
		expect(
			shallow(
				<Input {...InputProps} />
				).length
			).equal(1);
	})
})

describe('Textarea component test', () => {
	const TextareaProps = {
		placeholder: 'Please enter description',
		cols: '50',
		rows: '5'
	}
	it('Textarea component renders', () => {
		expect(
			shallow(
				<Textarea {...TextareaProps} />
				).length
			).equal(1);
	})
})

/*
describe('GET_TODOS ajax call test', () => {

	it("Get todos", async () => {
		const myList = {  
		    type:'GET_TODOS',
		    payload: {"tasks": [{
		  		"id" : 1,
		  		"title" : "Blog",
		  		"description": "Write a blog"
		  	},
		  	{
		  		"id" : 2,
		  		"title" : "Compose",
		  		"description": "Compose a song"
		  	}]}
		  }
	  // setup
	  mockAxios.get.mockImplementationOnce(() =>
	    Promise.resolve({
	      todos: myList.payload
	    })
	  );

	  // work
	  const todoList = await getTodos();
	  // expect
	  expect(todoList.type).equal(myList.type);
	  expect(mockAxios.get).toHaveBeenCalledTimes(1);
	  expect(mockAxios.get).toHaveBeenCalledWith("/tasks");
	});
});
*/
