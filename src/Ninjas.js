import React, { Component } from 'react';

class Ninjas extends Component {
    render() {
        // console.log(this.props);

        // destructring props into variables called name, age, belt
        const { name, age, belt } = this.props;
         return(
            <div className="ninja">
                <div>Name: { name }</div>
                <div>Age: { age }</div>
                <div>Belt: { belt }</div>
            </div>
        )
    }
}

export default Ninjas; 