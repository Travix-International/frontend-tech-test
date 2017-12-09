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

    onTagSelected (event) {
        const tag = event.target.getAttribute('tag');
        
        this.setState({
            activeTag: tag
        });

        this.props.filter(tag);
    }

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
                        <a href="#">TODOs</a>
                    </Navbar.Brand>
                    <Navbar.Form>
                            <FormGroup>
                                <InputGroup>
                                    <FormControl onChange={event => this.props.search(event)} type="text" placeholder="Search" />
                                    <InputGroup.Addon>
                                        <Glyphicon glyph="search" />
                                    </InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                        </Navbar.Form>
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
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default PanelHeaderComponent