import './App.css'
import Header from './components/Header'
import SideNav from './components/SideNav'
import { DataContextProvider } from './contexts/DataContext'
import Summary from './pages/Summary'

function App() {

  return (
    <DataContextProvider>
      <div className='container'>
        <SideNav />
        <main>
          <Header />
          <Summary />
        </main>
      </div>
    </DataContextProvider>
  )
}

export default App
