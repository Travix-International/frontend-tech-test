//Third Party
import React from 'react'
import {
	Row, 
	Grid, 
	Col,
	Panel,
	Modal
} from 'react-bootstrap'

//Containters
import TODOListContainer from '../../containers/TODOList'
import TODOAddContainer from '../../containers/TODOAdd'
import ModalContainer from '../../containers/Modal/Modal'
import PanelHeaderContainer from '../../containers/Header/PanelHeader'

//Style
import Style from './Style.less'

class AppComponent extends React.Component {

    render () {
        return (
        	<div className={Style.app}>

        		<PanelHeaderContainer className={Style.navbar}/>

        		<Col className={Style.body} xs={12} sm={12} md={6} mdOffset={3} lg={4} lgOffset={4}>

		            <Panel>
				     	<TODOListContainer/>
		                <TODOAddContainer/>
				    </Panel>

				    <ModalContainer/>

	            </Col>
        	</div>
        );
    }

}

export default AppComponent