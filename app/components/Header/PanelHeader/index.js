//Third Party
import React from 'react'
import Infinite from 'react-infinite'
import { 
    Navbar, 
    Nav, 
    MenuItem, 
    NavDropdown, 
    FormGroup, 
    FormControl,
    InputGroup,
    Glyphicon
} from 'react-bootstrap'

//Style less
import Style from './Style.less';

class PanelHeaderComponent extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            activeTag: 'Filter'
        };
    }

    /* 
     * fires an event notifyng the application
     * that a new filter tag has been selected
     * Triggers a list redraw
     */
    onTagSelected (event) {
        const tag = event.target.getAttribute('tag');
        
        this.setState({
            activeTag: tag
        });

        this.props.filter(tag);
    }

    /* 
     * fires an event notifyng the application
     * that no tag is selected and all elements should 
     * be displayed
     * Triggers a list redraw
     */
    setTagToAll () {
        this.setState({
            activeTag: 'Filter'
        });        

        this.props.filter(null);
    }

    render () {
        const tags = [
            'Home', 'Work', 'Fun', 'Friends', 'Health', 'Vacations', '2017', '2018', 'Others', 'Important'
        ];

        return (
            <Navbar className={Style.navbar} collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <label>TODOs</label>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown id={1} title={this.state.activeTag}>
                            <MenuItem onClick={() => this.setTagToAll()}>All</MenuItem>
                            {
                                tags.map (
                                   tag => <MenuItem key={tag} tag={tag} onClick={event => this.onTagSelected(event)}>{tag}</MenuItem>
                                )
                            }
                        </NavDropdown>
                    </Nav>
                        <Navbar.Form className="pull-right">
                            <FormGroup>
                                <InputGroup>
                                    <FormControl onChange={event => this.props.search(event)} type="text" placeholder="Search" />
                                    <InputGroup.Addon>
                                        <Glyphicon glyph="search" />
                                    </InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                        </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default PanelHeaderComponent