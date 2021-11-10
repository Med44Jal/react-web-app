import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            list: [0]
        }
    }

    compute = (op) => {
        let c = op === '+' ? this.state.count + 1 : this.state.count - 1;
        this.setState(
            {
                count: c,
                list: new Array(c).fill(0)
            }
        );
    }

    render() {
        return (
            <div className="card m-3">
                <div className="card-header">
                    <strong>{this.props.title ? this.props.title : 'Default title'} : {this.state.count}</strong>

                </div>
                <div className="card-header d-flex justify-content-between">
                    <div></div>
                    <div>
                        <button onClick={() => this.compute('+')} className={"btn btn-success m-2"}>+</button>
                        {this.state.count > 0 ?
                            <button onClick={() => this.compute('-')} className={"btn btn-danger m-2"}>-</button> :
                            <button className={"btn btn-disabled btn-danger m-2"}>-</button>}
                    </div>
                </div>
                <div className="card-body">
                    {this.state.list.map((value, index) =>
                        <img key={index} src={this.props.image ? this.props.image : "images/cover.png"} alt=""
                             width={100} height={150}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Counter;