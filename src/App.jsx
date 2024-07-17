import SinglePage from './pages/singlePage/singlePage'
import ListPage from "./pages/listPage/ListPage"
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ListPage/>}/>
        <Route path="/:id" element={<SinglePage />} />
      </Routes>
    </>
  )

}

export default App
