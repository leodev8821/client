import logo from './logo.svg';
import './App.css';
import Header from './header/Header'
import Footer from './footer/Footer';
import Container from './components/task/Container';
import Forms from './components/Forms';

function App() {
  return (
    <div className="d-flex flex-column align-items-center w-100 h-100">
      <Header />
      <div id='mainCont' className='d-flex flex-column align-items-center'>
        <div id='formContainer' className='card bg-light mb-3 w-25'>

          <div id='Add-Task' className="card mt-3 mb-3">
            <Forms type="create" />
          </div>

          <div id='formEdit'  className="card mt-3 mb-3">
            <Forms type="update" />
          </div>

        </div>

        <h2>Listado de tareas existente</h2>
        <div id='currentTask' className='d-flex flex-wrap mx-3 justify-content-center'>
          <Container id="mydibabsbsa" title="Task1" taskText="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino" />
          <Container id="mydibabsbs3" title="Task2" taskText="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino" />
          <Container id="mydibabsbs2" title="Task3" taskText="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino" />
          <Container id="mydibabsbs2" title="Task3" taskText="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino" />

        </div>

      </div>
      <Footer />
    </div>
  )

}

export default App;
