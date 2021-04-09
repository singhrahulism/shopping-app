import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div>
        <Header />
          <main className="py-4">
            <Container>
            <h1>My React App!</h1>
            </Container>
          </main>
        <Footer />
    </div>
  );
}

export default App;
