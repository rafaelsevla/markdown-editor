'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import SaveMessage from 'components/save-messages';

const MarkdownEditorHeader = ({ isSaving, handleCreate, handleRemove }) => (
  <header className="editor-header">
    <SaveMessage isSaving={isSaving} />
    <Button onClick={handleCreate} kind="success">
      Criar novo
    </Button>

    <Button onClick={handleRemove} kind="danger">
      Remover
    </Button>
  </header>
);

MarkdownEditorHeader.propTypes = {
  isSaving: PropTypes.bool,
  handleCreate: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default MarkdownEditorHeader;
