import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props){
        console.log('Constructor');
        super(props);
        this.state = {}
    }

    componentWillMount(){
        console.log('componentWillMount');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    render(){
        console.log('render');
        return(
            <div>
                <h4>Ciclo de vida</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officia id maxime esse! Id, pariatur nulla at cupiditate deserunt temporibus sed dolor quaerat molestiae quos error quibusdam natus eius consequuntur.</p>
            </div>
        );
    }
}

export default LifeCycle
