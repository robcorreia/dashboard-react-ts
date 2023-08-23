import './App.css'
import Header from './components/Header'
import SideNav from './components/SideNav'
import Summary from './pages/Summary'

function App() {

  return (
    <div>
      <SideNav />
      <main>
        <Header />
        <Summary />
      </main>
    </div>

  )
}

export default App
