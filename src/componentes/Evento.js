import React,{Component} from 'react';
import PropTypes from 'prop-types';
class Evento extends Component{
    render(){
        const {name,logo,description,url} = this.props.evento;
        if(!name)return null;
        
        let desc = description.text;

        if(typeof(desc)!=='string')return null;

        if(desc.length>250) desc= desc.substr(0,250);
        return(
            <div className="col-6 col-md-4">  
                <div className="card mb-3 shadow" id="carta">
                    {logo !==null?<img src={logo.url} className="card-img-top" alt={name.text} id="imagen"/>: '' }
                    <div className="card-body">
                        <h5 className="card-title">{name.text}</h5>
                        <p className="card-text">{desc}</p>
                        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Ver Evento</a>
                    </div>
                </div>
            </div>
        )
    }
}
Evento.propTypes={
    evento: PropTypes.object.isRequired
}
export default Evento;