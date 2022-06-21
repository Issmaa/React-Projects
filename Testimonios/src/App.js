import './App.css';
import Card from './components/card';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Testimonios de alumnos</h1>
        
     
      <Card
        name='Susan Smith'
        country='Colombia'
        image='2'
        rol='Front end developer'
        company='FTech'
        testify={<p>"Este es el testimonio de <strong>Susan</strong> el cual describe muchas cosas importantes      durante su preparacion en un bootcamp de programacion en JavaScript, el cual le ayudo a <strong>conseguir un empleo desde casa.</strong> "</p>} />
      <Card
        name='Maria Salas'
        country='Canada'
        image='4'
        rol='Back end developer'
        company='ChopFine'
        testify={<p>"Este es el testimonio de <strong>Maria</strong> el cual describe muchas cosas importantes durante su preparacion "</p>} /> 
      <Card 
        name='Marco tralice'
        country='Argentina'
        image='1'
        rol='Full stack developer'
        company='Mercado Libre'
        testify={<p>"<strong>Este es el testimonio de un estudiante </strong>el cual describe muchas cosas importantes durante su preparacion "</p>} />
      </div>
    </div>
  );
}

export default App;
