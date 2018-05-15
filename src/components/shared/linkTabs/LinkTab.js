import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import LinkLabel from './LinkLabel'
import styles from './linkTabs.scss'

const getPath = (pathname, pathCategory, pathCategoryIndex, isCutAfter) => {
  const pathArr = pathname.split('/')
  pathArr[pathCategoryIndex] = pathCategory
  if (isCutAfter) {
    pathArr.length = pathCategoryIndex + 1
  }
  const path = pathArr.join('/')
  return path
}

const getLinkAdress = (pathname, query, queryProperties, saveQuery) => {
  const linkAddress = {
    pathname,
    query: {}
  }

  if (saveQuery && query) {
    let newQuery = {}
    if (!queryProperties) {
      newQuery = query
    } else {
      queryProperties.forEach((property) => {
        const propertyValue = query[property]
        if (propertyValue) {
          newQuery[property] = propertyValue
        }
      })
    }
    linkAddress.query = newQuery
  }

  return linkAddress
}

const isTabActive = (pathname, pathCategory, pathCategoryIndex) => {
  const pathArray = pathname.split('/')
  const path = pathArray[pathCategoryIndex]
  const result = pathArray.length >= pathCategoryIndex + 1 &&
    (path === pathCategory || path === pathCategory.split('/')[pathCategoryIndex - 1])
  return result
}

export default function LinkTab(props) {
  const { pathCategory, pathCategoryIndex, cutAfter, queryProperties, saveQuery, label,
    location: { pathname, query } } = props

  const newPathname = getPath(pathname, pathCategory, pathCategoryIndex, cutAfter)
  const linkAddress = getLinkAdress(newPathname, query, queryProperties, saveQuery)
  const className = classnames(styles.link, { [styles.active]: isTabActive(pathname, pathCategory, pathCategoryIndex) })

  return (
    <li>
      <Link
        className={className}
        to={linkAddress}
      >
        <LinkLabel label={label} />
      </Link>
    </li>
  )
}

LinkTab.propTypes = {
  location: PropTypes.object.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  pathCategory: PropTypes.string.isRequired,
  cutAfter: PropTypes.bool,
  saveQuery: PropTypes.bool,
  queryProperties: PropTypes.array,
  pathCategoryIndex: PropTypes.number.isRequired
}
