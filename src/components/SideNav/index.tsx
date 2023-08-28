import { ArrowsDownUp, EnvelopeSimple, GearSix, House, SignOut, Storefront } from '@phosphor-icons/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNav = () => {
  return (
    <nav className='sidenav box bg-3'>
      <a className='brand' href="/">Fintech</a>
      <ul>
        <li>
          <div><House size={20} weight="bold" /></div>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <div><Storefront size={20} weight="bold" /></div>
          <NavLink to="/vendas">Vendas</NavLink>
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