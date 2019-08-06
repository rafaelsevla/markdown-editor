'use strict'

import React, { PropTypes } from 'react'
import Button from 'components/button'

const MarkdownEditorHeader = ({ isSaving, handleCreate, handleRemove }) => (
  <header className='editor-header'>
    {isSaving !== null && (
      <p className='save-message'>{isSaving ? 'Salvando...' : 'Salvo!'}</p>
    )}

    <Button onClick={handleCreate} kind='success'>
      Criar novo
    </Button>

    <Button onClick={handleRemove} kind='danger'>
      Remover
    </Button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  isSaving: PropTypes.bool,
  handleCreate: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
