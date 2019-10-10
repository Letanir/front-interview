import React from 'react';

export default class Fruits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: [
                {name: "Банан", price: 3},
                {name: "Яблоко", price: 5},
                {name: "Груша", price: 8},
                {name: "Апельсин", price: 6},
                {name: "Персик", price: 5}
            ],
        };
    }

    renderList() {
        return (this.state.fruits.map((object) =>
            <tr key={object.name}>
                <td width={100}>{object.name}</td>
                <td>{object.price}</td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                    {this.renderList()}
                    </tbody>
                </table>
                <input/>
                <button onClick={() => {alert("Not implemented!")}}>Найти
                </button>
            </div>
        )
    }
}