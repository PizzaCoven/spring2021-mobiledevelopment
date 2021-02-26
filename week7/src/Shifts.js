import React, {Component} from 'react'

class Shifts extends Component {
    constructor(props) {
            super(props);
            this.state = {
                days: 0
            
            };
    };

render() {

        return(
            <div>
                <h2>Shifts Available: {this.state.days}</h2>
                <button onClick={()=> this.setState({days: this.state.days + 1})}></button>
                <button conClick={()=> this.setState({days: 0})}>Reset Counter</button>
            </div>
        );
}
}

export default Shifts;