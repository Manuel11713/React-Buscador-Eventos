import React,{Component} from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Eventos from './Eventos';

class App extends Component {

  token = 'WSF3M4NTPRB2M2G25F4L';
  state={
    categorias:[],
    eventos:[]
  }
  componentDidMount(){
    this.conseguirEventos();
  }
  conseguirEventos= async()=>{

    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;
    
    await fetch(url).then(respuesta =>respuesta.json())
                    .then(categorias=>this.setState({
                        categorias:categorias.categories
                    }))
                    .catch(error=>console.log(error));
  }
  obtenerEventos =async datos =>{
    const {nombre,categoria} = datos;

    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${nombre}&sort_by=date&categories=${categoria}&token=${this.token}&locale=es_ES`;
    
    await fetch(url).then(respuesta =>respuesta.json())
                    .then(eventos=>this.setState({
                      eventos:eventos.events
                    }))
                    .catch(error=>console.log(error));

  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Formulario
          categorias={this.state.categorias}
          obtenerEventos={this.obtenerEventos}
        />
        <Eventos
          eventos={this.state.eventos}
        />
      </div>
    );
  }
}

export default App;
