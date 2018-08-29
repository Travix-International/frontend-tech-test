import React from 'react'

class HomeComponent extends React.Component {
  constructor(){
    super()
    console.log('constructor working')
  }

  render(){
    return(
      <section>
        Home component working!
      </section>
    )
  }
}

export default HomeComponent
