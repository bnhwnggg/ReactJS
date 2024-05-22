import React, { Component } from 'react';
class CComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { name: "A", age: "20" },
                { name: "B", age: "30" },
            ],
            inpName: "",
            inpAge: "",
        }
    }

    add = () => {
        this.state.list.push({ 
            name: this.state.inpName, 
            age: this.state.inpAge,
        });
        this.setState({ 
            list: this.state.list,
        });
    }

    render() {
        return (
            <>
                <h2>CCompoennt Demo {this.state.inpName}, {this.state.inpAge} {""}</h2>
                {this.state.list.map((e) => (
                    <h3>
                        {e.name}, {e.age}
                    </h3>
                ))}

                <input type="text" onChange={(e) => {
                    this.setState({ inpName: e.target.value });
                }} />
                <input type="text" onChange={(e) => {
                    this.setState({ inpAge: e.target.value });
                }} />

                <button onClick={() => {this.add()}}>Create</button>
            </>
        );
    }
}

export default CComponent;

//State la 1 doi tuong luu cac bien dung trong component, cap nhat state thi giao dien cap nhat