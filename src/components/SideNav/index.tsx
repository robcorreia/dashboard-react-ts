import { ArrowsDownUp, EnvelopeSimple, GearSix, House, SignOut, Storefront } from '@phosphor-icons/react'
import React from 'react'

const SideNav = () => {
  return (
    <nav className='sidenav box bg-3'>
      <a className='brand' href="/">Fintech</a>
      <ul>
        <li>
          <div><House size={20} weight="bold" /></div>
          <a href="">Resumo</a>
        </li>
        <li>
          <div><Storefront size={20} weight="bold" /></div>
          <a href="">Vendas</a>
        </li>
        <li>
          <div><Storefront size={20} weight="bold" /></div>
          <a>Webhooks</a>
        </li>
        <li>
          <div><ArrowsDownUp size={20} weight="bold" /></div>
          <a>Configurações</a>
        </li>
        <li>
          <div><EnvelopeSimple size={20} weight="bold" /></div>
          <a>Contato</a>
        </li>
        <li>
          <div><SignOut size={20} weight="bold" /></div>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  )
}

export default SideNav