import React,{Component} from 'react';
import PropTypes from 'prop-types';
class Formulario extends Component{
    nombreRef = React.createRef();
    categoriaRef = React.createRef();
    mostarOpciones = (key)=>{
        const categoria = this.props.categorias[key];
        
        const {id,name_localized} = categoria;
 
        if(!id || !name_localized)return null;

        return(
            <option key={key} value={id}>{name_localized}</option>
        )
    }
    conseguirInfo= e =>{
        e.preventDefault();
        const datosBusqueda = {
            nombre:this.nombreRef.current.value,
            categoria:this.categoriaRef.current.value
        }
        this.props.obtenerEventos(datosBusqueda);
    }
    render(){
        const categorias = Object.keys(this.props.categorias);
        return(
            <div className="container p-3 ">
                <form className="text-center" onSubmit={this.conseguirInfo}>
                    <label htmlFor="contenedor-form">Buscar eventos por Nombre y Categoria</label>
                    <div className="form-row" id="contenedor-form">
                        <div className="form-group col-12 col-md-6">
                            <input className="mb-1 w-100" type="text" placeholder="Nombre del Evento" ref={this.nombreRef}/>
                        </div>
                        <div className="form-group col-12 col-md-4">
                            <select className="mb-1 w-100" ref={this.categoriaRef}>
                                {categorias.map(this.mostarOpciones)}
                            </select>
                        </div>
                        <div className="form-group col-12 col-md-2">
                            <button type="submit" className="btn btn-warning w-100 ">Buscar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
Formulario.propTypes={
    categorias: PropTypes.array.isRequired,
    obtenerEventos: PropTypes.func.isRequired
}
export default Formulario;

/*<div className="container">
                
                <form className="text-center">
                    <label htmlFor="from-contenedor">Busca tu Evento por Nombre o Categoria</label>
                    <div className="row form-group p-3" id="from-contenedor">
                    
                        <div className="col-12 col-md-4">
                            <input type="text" className="w-100"/>
                        </div>
                        <div className="col-12 col-md-4">
                            <select className="w-100">
                                <option></option>

                            </select>
                        </div>
                        <div className="col-12 col-md-4">
                            <button type="submit" className="w-100">Buscar </button>
                        </div>
                    
                    </div>
                </form>

            </div> */