import React from 'react'
import renderer from 'react-test-renderer'

import GridItem from '.'

describe('GridItemComponent', () => {
  it('Snapshot', async () => {
    const tree = renderer
      .create(<GridItem
        title={'title'}
        description={'description'}
        handleRemove={()=>{}}
        handleEdit={()=>{}}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
