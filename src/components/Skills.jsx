import React, {Component} from 'react';

class Skills extends Component {

    constructor(props) {
        super(props);
        this.state = {skillValue: "", skills: [...this.props.skills]};
    }


    addSkill = (event) => {
        event.preventDefault();
        let skill = {
            id: [...this.state.skills].length + 1,
            title: this.state.skillValue
        }
        this.setState(
            {
                skills: [...this.state.skills, skill]
            }
        )
    }

    onDelete = (skill) => {
        let index = this.state.skills.indexOf(skill); //indice de l'objet skill à supprimer
        let listSkills = [...this.state.skills];//copier le tableau des objets dans un autre tableau
        listSkills.splice(index, 1);//supprimer un objet
        this.setState({
            skills: listSkills
        })
    }

    setSkill = (event) => {
        this.setState(
            {
                skillValue: event.target.value
            }
        )
    }

    render() {
        return (
            <div className="card m-2">
                <div className="card-header">Skills</div>
                <div className="card-body">
                    <form onSubmit={this.addSkill}>
                        <div className="input-group">
                            <input className="form-control m-1" type="text" name="skill" placeholder="Skill To Add"
                                   onChange={this.setSkill}/>
                            <div className="input-group-btn">
                                <button className="btn btn-primary m-1" type="submit">Add
                                </button>
                            </div>
                        </div>
                    </form>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.skills.map((skill, index) =>
                                <tr key={index}>
                                    <th scope="row">{skill.id}</th>
                                    <td>{skill.title}</td>
                                    <td>
                                        <button onClick={() => this.onDelete(skill)} className="btn btn-danger">X
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Skills;