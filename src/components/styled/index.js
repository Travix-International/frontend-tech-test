import styled,{css} from 'styled-components'

export const media = {
  mobile: (...args) => css`
    @media (max-width: 767px) {
      ${ css(...args) }
    }
  `
};

export const Section = styled.section`
	padding: 4em;
	background: papayawhip;
	max-width:650px;  
	margin:0 auto;
	text-align: center;
	${ media.mobile`
    padding: 4em 1em;
  ` }
`;

export const Form = styled.form`
	display:flex;
	justify-content:space-between;
	padding:1em 0;
	align-items: center;
`;

export const Button = styled.button`
  height:37px;
	color: palevioletred;
	font-size: 1em;
	margin: 5px;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

export const Input = styled.input`
	padding: 0.5em;
	margin: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: 2px solid palevioletred;
	border-radius: 3px;
	font-size: 1em;
	width:100%;
`;

export const ItemList = styled.div`
	color: palevioletred;
	font-size: 1em;
	margin: 1em 0;
`;

export const Item = styled.div`
	color: palevioletred;
	font-size: 1em;
	margin: 1em 0.5em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;  
  text-align: left;
`;

export const ItemButtons = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:column
`;

export const Title = styled.h3`
	color: palevioletred;
	font-size: 1.5em;
	margin: 5px;
	word-break: break-all;
  word-wrap: break-word;
	text-decoration:${props => props.isDone ? 'line-through' : 'none'};
`;

export const Description = styled.p`
  display:flex;
  justify-content:space-between;
	color: palevioletred;
	font-size: 1em;
	margin:5px;
	text-decoration:${props => props.isDone ? 'line-through' : 'none'};
`;

export const ErrorMessage = styled.h3`
	color: red
`;