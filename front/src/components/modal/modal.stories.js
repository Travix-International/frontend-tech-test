import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import Modal from '.'

storiesOf('Modal', module).add('default', () => {
  const isOpenModal = boolean('Open/Close Modal', true)
  const contentModal = text('Text Modal', 'Content text inside Modal')
  return (
    <Fragment>
      <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
      <h2>Use knobs panel to open modal.</h2>
      <Modal open={isOpenModal} >
        <h1>{contentModal}</h1>
      </Modal>
    </Fragment>)
})
