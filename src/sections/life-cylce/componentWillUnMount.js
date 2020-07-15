import React, { Component } from 'react';

class ComponenteADesmontar extends Component {

    state = {windowWidth: 0}

    _updateStateWindowWidth = () => {
        this.setState({windowWidth: document.body.clientWidth});
    }

    componentDidMount(){
        this._updateStateWindowWidth();
        window.addEventListener('resize', this._updateStateWindowWidth);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
        window.removeEventListener('resize', this._updateStateWindowWidth);
    }

    render() {
        return (
            <div>
                <p>Ancho de la ventana: {this.state.windowWidth}</p>
            </div>
        );
    }
}

class EjemploDeComponentWillUnmount extends Component{

    state = {mostrarComponente: true}

    render(){
        if(this.state.mostrarComponente){
            return(
                <div>
                    <h4>Ciclo de desmontaje: componentWillUnmount</h4>
                    <ComponenteADesmontar />
                    <button onClick={() => this.setState({mostrarComponente: false})}>
                        Desmontar componente
                    </button>
                </div>
            );
        }else{
            return(
                <p>Componente desmontado</p>
            );
        }
    }
}

export default EjemploDeComponentWillUnmount;
