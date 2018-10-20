
  import React, { PropTypes } from 'react';

  const msgMap: Object = {
    init: {
      icon: 'music_note',
      msg: 'Seja bem vindo!'
    },
    loading: {
      msg: 'Buscando...'
    },
    noContent: {
      icon: 'info',
      msg: 'Nada encontrado'
    },
    error: {
      icon: 'error',
      msg: 'Erro!'
    }
  };


const Messages = ({ status }: { status: string }) => (
  <div className="toast">
    <i className="material-icons">{msgMap[status].icon}</i>
    <span className="text">{msgMap[status].msg}</span>
  </div>
);

export default Messages;
