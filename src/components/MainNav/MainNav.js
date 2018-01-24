import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import {
  Container,
  Row,
  Col,
} from 'components/Grid'

import styles from './MainNav.css'

function MainNav(props) {
  const { filter } = props

  const all = 'All'
  const active = 'Active'
  const done = 'Done'

  return (
    <Container isFluid>
      <Row className={styles.mainNav} middle="xs" start="xs" tagName="ul" top="xs">
        <Col tagName="li" xs={4}>
          {filter === undefined
            ? <strong>{all}</strong>
            : <Link to="/">{all}</Link>
          }
        </Col>
        <Col tagName="li" xs={4}>
          {filter === 'active'
            ? <strong>{active}</strong>
            : <Link to="/active">{active}</Link>
          }
        </Col>
        <Col tagName="li" xs={4}>
          {filter === 'done'
            ? <strong>{done}</strong>
            : <Link to="/done">{done}</Link>
          }
        </Col>
      </Row>
    </Container>
  )
}

MainNav.propTypes = {
  filter: PropTypes.string,
}


export default MainNav
