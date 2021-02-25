import React, {useState} from 'react';

function Tornado () {
    const [hours, setHours] = useState(0);

    return(
        <div>
            <h2>Tornado Warning: {hours}</h2>
            <button onClick={()=> this.setState({hours: this.state.hours + 1})}></button>
                <button conClick={()=> this.setState({hours: 0})}>Reset Counter</button>
        </div>
    )
}

export default Tornado;