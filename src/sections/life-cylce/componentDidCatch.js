import React, { Component } from 'react'

class BotonQueLanzaError extends Component{
    
    state = {throwError: false}

    render(){
        if(this.state.throwError){
            throw new Error('Error lanzado por el botón');
        }

        return(
            <button onClick={() => this.setState({throwError: true})}>
                Lanzar error!
            </button>
        );
    }

}

export default class EjemploDeComponentDidCatch extends Component {

    state = {hasError: false, errorMsg: ''}

    componentDidCatch(error, errorInfo){
        console.log('componentDidCatch');
        console.log({error, errorInfo});
        this.setState({hasError: true, errorMsg: error.toString()});
    }

    render() {
        if(this.state.hasError){
            return(
                <div>
                    <p>Error en el componente: {this.state.errorMsg}</p>
                    <button onClick={() => {this.setState({hasError: false})}}>
                        Volvera la aplicación
                    </button>
                </div>
            );
        }
        return (
            <div>
                <h4>Ciclo de omntaje: componentDidCatch</h4>
                <BotonQueLanzaError />
            </div>
        )
    }
}
