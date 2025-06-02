import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Article from './pages/Article'
import Layout from './components/Layout'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
