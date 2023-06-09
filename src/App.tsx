import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
