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
import PropTypes from 'prop-types'

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

        /*
         * Each itemm of the Virtualized list will call this function
         */
        const rowRender = ({key, index, isScrolling, isVisible, style}) => {
            return (
              <div key={key} style={style}>
                <TODOItemContainer TODO={this.props.TODOS[items[index]]} />
              </div>
            );
        }

        return (
          <ListGroup>
            <AutoSizer disableHeight style={{flex: '1 1 auto'}}>
              {({ width }) => (
                <List
                  className={Style.list}
                  height={window.innerHeight - 300} 
                  maxHeight={500}
                  rowCount={items.length}
                  rowHeight={45}
                  rowRenderer={rowRender}
                  width={width}
                />
              )}
            </AutoSizer>
          </ListGroup>
        );
    }
}

TODOListComponent.propTypes = {
    TODOS: PropTypes.object,
    search: PropTypes.string,
    tag: PropTypes.array
}

export default TODOListComponent