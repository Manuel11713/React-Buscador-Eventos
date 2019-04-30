import React,{Component} from 'react';
import Evento from './Evento';
import PropTypes from 'prop-types';
class Eventos extends Component{
     render(){
         return(
             <div className="container-fluid"> 
                <div className="row">
                    {Object.keys(this.props.eventos).map(key=>{
                        return(<Evento
                            key={key}
                            evento={this.props.eventos[key]}
                        />)
                    })}
                </div>    
             </div>
         )
     }
}
Eventos.propTypes={
    eventos: PropTypes.array.isRequired
}
export default Eventos;