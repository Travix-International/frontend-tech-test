//Third Party
import React from 'react'
import { AutoSizer, List } from 'react-virtualized';
import {
    Row, 
    Grid, 
    Col, 
    ListGroup, 
    ListGroupItem,
    InputGroup
} from 'react-bootstrap'

//Container
import TODOItemContainer from '../../containers/TODOItem'

//Style
import Style from './Style.less';

class TODOListComponent extends React.Component {

    render () {

        //Filter only uncompleted TODOs
        let items = Object.keys(this.props.TODOS).filter(
            _id => !this.props.TODOS[_id].completed
        );

        //If Search enabled filter by search string
        if (this.props.search.length) {
            items = items.filter(
                _id => this.props.TODOS[_id].title.includes(this.props.search)
            );
        }

        //If tag selected filter by tag
        if (this.props.tag) {
            items = items.filter(
                _id => this.props.TODOS[_id].tags.includes(this.props.tag)
            );
        }

        const rowRender = ({key, index, isScrolling, isVisible, style}) => {
            return (
                    <div key={key} style={style}>
                    <TODOItemContainer TODO={this.props.TODOS[items[index]]} />
                </div>
            );
        }

        return (
            <ListGroup style={{height: '300px'}}>
                <AutoSizer>
                    {
                        ({ height, width }) => (
                            <List 
                                className={Style.list}
                                width={width}
                                height={300}
                                rowCount={items.length}
                                rowHeight={45}
                                rowRenderer={rowRender}/>        
                        )
                    }
                </AutoSizer>
            </ListGroup>    
        );
    }

}

export default TODOListComponent