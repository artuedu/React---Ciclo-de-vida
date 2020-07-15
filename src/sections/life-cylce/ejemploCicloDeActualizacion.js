import React, { Component } from 'react';
import PropTypes from 'prop-types';


const ANIMAL_IMAGES = {
    panda: 'data:image/jpeg;base64,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',
    cat: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg',
    dolphin: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5d9208eb5cafe81a0f3c986a/delfin0_0.jpg'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES);

class AnimalImage extends Component{
    state = {src: ANIMAL_IMAGES[this.props.animal]}

    componentWillReceiveProps(nextProps){
        console.clear();
        console.log('1.- componentWillReciveProps');
        this.setState({src: ANIMAL_IMAGES[nextProps.animal]});
    }

    //Lomismo que usar PureComponent
    shouldComponentUpdate(nextProps){
        console.log('2.- shouldComponentUptdate');
        console.log('Anterior: ', this.props.animal);
        console.log('Nuevo: ', nextProps.animal);
        return this.props.animal !== nextProps.animal;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('3.- componentWillUpdate', nextProps, nextState);
        const img = document.querySelector('img');
        console.log('from img element', {alt: img.alt});
        //web animation api
        img.animate([{
            filter: 'blur(0px)'
        },{
            filter: 'blur(2px)'
        }],{
            duration: 500,
            easing: 'ease'
        });
    }

    componentDidUpdate(prevProps, prevState){
        console.log('4.- componntDidUpdate');
        const img = document.querySelector('img');
        //web animation api
        img.animate([{
            filter: 'blur(2px)'
        },{
            filter: 'blur(0px)'
        }],{
            duration: 1500,
            easing: 'ease'
        });
        console.log('from img element', {alt: img.alt});
    }

    render(){
        console.log('-> render');
        return(
            <div>
                <p>Selected {this.props.animal}</p>
                <img 
                    alt={this.props.animal}
                    src={this.state.src}
                    width='250'
                /> 
            </div>
        );
    }
}
AnimalImage.propTypes = {
    animal: PropTypes.oneOf(ANIMALS)
}

class EjemploDeCicloDeActualizacion extends Component{
    state = {animal: 'panda'}

    _renderAnimalButton = (animal) => {
        return (
            <button 
                // disabled={animal === this.state.animal}
                key={animal} 
                onClick={() => this.setState({animal})}>
                {animal}
            </button>
        );
    }

    render(){
        return(
            <div>
                <h4>Ciclo de Actualización,  Ejemplo de: ComponentWillReciveProps y ShouldComponentUpdate</h4>
                {ANIMALS.map(this._renderAnimalButton)}
                <AnimalImage animal={this.state.animal}/>
            </div>
        );
    }
}

export default EjemploDeCicloDeActualizacion
