import Movie from '../../containers/Movie'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function App() {
  return (
    <>
      <Header title="React Movie Search" />
      <Movie />
      <Footer />
    </>
  )
}

export default App
