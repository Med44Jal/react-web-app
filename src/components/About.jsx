import React, {Component} from 'react';
import Skills from "./Skills";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Mohamed",
            email: "med@youssfi.net",
            skills: [
                {id: 1, title: "Software Engineering"}
            ]
        }
    }

    render() {
        return (
            <div>
                <strong>Keep your smile</strong>
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <th width={20} rowSpan="2">
                            <img src={"images/cover.png"} width={100} alt=""/>
                        </th>
                        <td><strong>Name:</strong> {this.state.name}</td>
                    </tr>
                    <tr>
                        <td><strong>Email:</strong> {this.state.email}</td>
                    </tr>
                    </tbody>
                </table>
                <Skills skills={this.state.skills}/>
            </div>
        );
    }
}

export default About;