import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Stars from '../../UI/stars'
import Favorite from '../../UI/favorite'

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 3.2rem;
  line-height: 1.7em;
  font-family: Montserrat, Verdana, Geneva, sans-serif;
  color: #343434;
  font-weight: 600;
`
Title.displayName = 'Title'

const HeadLine = styled.h4`
  font-family: Montserrat, Verdana, Geneva, sans-serif;
  color: #343434;
  font-size: 1.6rem;
  font-weight: 400;
`
HeadLine.displayName = 'HeadLine'

const FavoriteAndStarsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const InfoRating = styled.span`
  font-size: 1.6rem;
  line-height: 1.5;
  margin-left: .5rem;
  color: #343434;
`
InfoRating.displayName = 'InfoRating'

const strings = {
  valueMaxRating: '/ 5',
  rated: 'Rated'
}

const TitlePageComponent = ({
  id,
  rating,
  title,
  headline,
  favorited,
  onChangeFavorite,
  onChangeStars
}) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <HeadLine>{headline}</HeadLine>
      <FavoriteAndStarsContainer>
        <Favorite
          id={id}
          selected={favorited}
          onClick={onChangeFavorite}/>
        <Stars
          value={rating}
          onChangeValue={onChangeStars}
          id={id}/>
        <InfoRating>
          {`${strings.rated} ${rating ? rating : 0} ${strings.valueMaxRating}`}
        </InfoRating>
      </FavoriteAndStarsContainer>
    </TitleContainer>
  )
}

TitlePageComponent.propTypes = {
  id: PropTypes.string,
  rating: PropTypes.number,
  title: PropTypes.string,
  headline: PropTypes.string,
  favorited: PropTypes.bool,
  onChangeFavorite: PropTypes.func,
  onChangeStars: PropTypes.func
}

export default TitlePageComponent
