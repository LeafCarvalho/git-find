import React from 'react'

import { RepositorioContainer } from './style'

function Repositorio({repo, remover}) {

  const removeRepository = () => {
    remover(repo.id);
};

  return (
    <RepositorioContainer>
        <div className='repos'>
          <img src={repo.owner.avatar_url} alt="" />
          <h2>{repo.owner.login}</h2>
          <a href={repo.html_url} target='_blank'>{repo.full_name}</a>
          
          <a href="#" onClick={removeRepository}>Remover</a>
        </div>
    </RepositorioContainer>
  )
}

export default Repositorio