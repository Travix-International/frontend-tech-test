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

    constructor (props) {
      super(props);

      //To be accessed locally
      this.Style = Style;
    }

        render () {
            return (
              <div className={this.Style.app}>

                <PanelHeaderContainer className={Style.navbar}/>

                <Col 
                  className={this.Style.body} 
                  lg={4} 
                  lgOffset={4}
                  md={6} 
                  mdOffset={3} 
                  sm={12} 
                  xs={12} 
                >

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