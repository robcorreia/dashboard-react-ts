import './App.css'
import Header from './components/Header'
import SideNav from './components/SideNav'
import { DataContextProvider } from './contexts/DataContext'
import Sales from './pages/Sales'
import Summary from './pages/Summary'

function App() {

  return (
    <DataContextProvider>
      <div className='container'>
        <SideNav />
        <main>
          <Header />
          <Summary />
          <Sales />
        </main>
      </div>
    </DataContextProvider>
  )
}

export default App
