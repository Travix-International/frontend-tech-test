import React from 'react'
import { storiesOf } from '@storybook/react'
import { State, Store } from '@sambego/storybook-state'
import { action } from '@storybook/addon-actions'
import Grid from '../grid'
import GridItem from '.'

const store = new Store({
  itemOne: true,
  itemTwo: false,
})

storiesOf('Grid', module)
  .add('list with grid-list', () => (
    <State store={store}>
      {state => [
        <Grid key={1}>
          <GridItem
            title={'Title one'}
            description={'Description one'}
            done={state.itemOne}
            onChangeCheckbox={() => {
              store.set({ itemOne: !store.get('itemOne') })
            }}
            handleEdit={action('handleEdit')}
            handleRemove={action('handleRemove')}
            id={'1'}/>
          <GridItem
            title={'Title two'}
            description={'Description two'}
            done={state.itemTwo}
            onChangeCheckbox={() => {
              store.set({ itemTwo: !store.get('itemTwo') })
            }}
            handleEdit={action('handleEdit')}
            handleRemove={action('handleRemove')}
            id={'2'}/>
        </Grid>
      ]}
    </State>
  ))
