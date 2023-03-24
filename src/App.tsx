import { CardDetails } from './components/CardDetails'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header />
      <div className='container mx-auto p-3'>
        <CardDetails />
      </div>
    </>
  )
}

export default App
