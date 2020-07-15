import React, { Component } from 'react';

class ComponentWillMount extends Component {
    constructor(props){
        console.log('Constructor');
        super(props);
        this.state = {mensaje: 'mensaje modificado'}
    }

    componentWillount(){
        console.log('componentWillMount');
        this.setState({mensaje: 'mensaje modificado'});
    }

    render(){
        console.log('Render');
        return(
            <div>
                <h4>Ciclo de montaje: componentWillMount</h4>
                <p>{this.state.mensaje}</p>
            </div>
        );
    }
}

export default ComponentWillMount
