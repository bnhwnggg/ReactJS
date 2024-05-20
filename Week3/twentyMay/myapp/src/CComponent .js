import React, { Component } from 'react';
class CComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 20,
        }
    }

    upX = () => {
        this.setState({x: this.state.x + 1});
    };

    upY = () => {
        this.setState({ y: this.state.y + 1 });
    };
    render() {
        return (
            <>
                <h2>CCompoennt Demo{this.state.x}, {this.state.y}</h2>
                <button onClick={this.upX}>Tang X</button>
                <button onClick={this.upY}>Tang y</button>
            </>
        );
    }
}

export default CComponent;

//State la 1 doi tuong luu cac bien dung trong component, cap nhat state thi giao dien cap nhat