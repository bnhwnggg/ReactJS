import React, { Component } from 'react';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { id: 1, name: "Shirt", price: 10 },
                { id: 2, name: "Pants", price: 4 },
                { id: 3, name: "Jacket", price: 30 },
                { id: 4, name: "Hoodie", price: 27 },
                { id: 5, name: "Socks", price: 14 },

            ],
            inpID: ' ',
            inpName: '',
            inpPrice: '',
            queury: '',
            data: [],
            filteredData: [],
        };
    }

    add = () => {
        this.state.list.push({
            id: this.state.inpID,
            name: this.state.inpName,
            price: this.state.inpPrice,
        });
        this.setState({
            list: this.state.list,
        });
    }

    sort = () => {
        this.state.list.sort((first, second) => {
            return first.price > second.price ? 1 : -1;
        })
        this.setState({
            list: this.state.list,
        });
    };

    searchQuery = event => {
        const query = event.target.value;
        this.setState(prevState => {
            const filteredData = prevState.list.filter(e => {
                return e.name.toLowerCase().includes(query.toLowerCase());
            });
            return {query, filteredData,};
        });
    };

    render() {
        return (
            <>

                <h2>Product</h2>
                {this.state.list.map((e) => (
                    <h2>
                        {e.id}, {e.name}, {e.price},
                    </h2>
                ))}

                <h2>Search Box</h2>
                <div class="input-box">
                    <form>
                        <input type="search" placeholder='search box' id="search-form" value={this.state.query} onChange={this.searchQuery} />
                    </form>
                </div>

                <div>
                    {this.state.filteredData.map(e => <h1>{e.name}</h1>)}
                </div>

                {/* add */}
                <input type="text" placeholder="ID to add" onChange={(e) => { this.setState({ inpID: e.target.value }); }} />
                <input type="text" placeholder='Name to add' onChange={(e) => { this.setState({ inpName: e.target.value }); }} />
                <input type="text" placeholder='Price to add' onChange={(e) => { this.setState({ inpPrice: e.target.value }); }} />
                <button onClick={() => { this.add() }}>Click to add</button>
                <button onClick={() => { this.sort() }}>Sort</button>


            </>
        );
    }
}

export default Product;

//State la 1 doi tuong luu cac bien dung trong component, cap nhat state thi giao dien cap nhat