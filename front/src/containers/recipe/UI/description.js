import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { duration } from 'moment'

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  border-top: solid .1rem #f7f6f4;
  margin-top: 2rem;
  box-sizing: border-box;
  padding: 0 1rem;
  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`

const Description = styled.p`
  max-width: 66.6%;
  flex-basis: 66.6%;
  margin: 2rem 1rem 0 0;
  color: #343434;
  font-weight: 400;
  line-height: 2.4rem;
  font-size: 1.6rem;
  font-family: 'Source Sans Pro', 'Trebuchet MS', Helvetica, sans-serif;
  box-sizing: border-box;
  @media only screen and (max-width: 767px) {
    width: 100%;
    max-width: 100%;
    flex-basis: 100%;
  }
`
Description.displayName = 'Description'

const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: calc(100% - 66.6%);
  flex-wrap: wrap;
  flex-direction: row;
  margin: 2rem 0 0 2rem;
  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-basis: 100%;
    margin: 2rem 0 0 0;
  }
`

const TitleInformation = styled.p`
  font-weight: 600;
  color: #343434;
  line-height: 2.4rem;
  font-size: 1.6rem;
  flex-basis: 50%;
`
TitleInformation.displayName = 'TitleInformation'

const ValueInformation = styled.p`
  flex-basis: 50%;
  text-align: right;
`
ValueInformation.displayName = 'ValueInformation'

const strings = {
  prepTime: 'Preparation Time',
  cookingDifficulty: 'Cooking difficulty',
  level: 'Level'
}

const DescriptionPageComponent = ({
  description,
  time,
  difficulty
}) => {

  return (
    <DescriptionContainer>
      <Description>
        {description}
      </Description>
      <InformationContainer>
        <TitleInformation>{strings.prepTime}</TitleInformation>
        <ValueInformation>{duration(time).humanize()}</ValueInformation>
        <TitleInformation>{strings.cookingDifficulty}</TitleInformation>
        <ValueInformation>{`${strings.level} ${difficulty}`}</ValueInformation>
      </InformationContainer>
    </DescriptionContainer>
  )
}

DescriptionPageComponent.propTypes = {
  description: PropTypes.string,
  time: PropTypes.string,
  difficulty: PropTypes.number
}

export default DescriptionPageComponent
