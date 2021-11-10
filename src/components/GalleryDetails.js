import React, {Component} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

class GalleryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hit: []
        }
    }

    componentDidMount() {
        this.getHit();
    }

    getHit = () => {
        axios.get('https://pixabay.com/api/?key=19749395-ba12040a0de8606d68dfe4e94&id=' + this.props.match.params.id).then((response) =>
            this.setState({
                hit: response.data.hits
            })
        ).catch((error) => console.log(error))
    }


    render() {
        return (
            <div>
                {
                    this.state.hit.map((hit) =>
                        <div className="card m-3" key={hit.id}>
                            <div className="card-header">{hit.tags}</div>
                            <div className="card-body">
                                <img className="card-img" style={{
                                    "objectFit": "cover", "width": "100%",
                                    "height": "30vw"
                                }} src={hit.webformatURL} alt=""/>
                                <div className="row p-2">
                                    <div className="col-auto">
                                        <img className="img-thumbnail" src={hit.userImageURL} alt=""/>
                                    </div>
                                    <div className="col-auto">
                                        <ul className="nav nav-pills m-2">
                                            <li className="list-group-item"><strong>Views:</strong> {hit.views}</li>
                                            <li className="list-group-item"><strong>Comments:</strong> {hit.comments}
                                            </li>
                                            <li className="list-group-item"><strong>Downloads:</strong> {hit.downloads}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <Link className="btn btn-primary" to={"/gallery"}>Back</Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default GalleryDetails;