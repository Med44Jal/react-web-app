import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            currentPage: 1,
            pageSize: 10,
            currentKeyword: '',
            pages: []
        }
    }

    componentDidMount() {
        this.getHits();
        window.onpopstate = (event) => console.log(event);
    }

    getHits = () => {
        this.state.currentKeyword !== '' ? axios.get('https://pixabay.com/api/?key=19749395-ba12040a0de8606d68dfe4e94&q=' + this.state.currentKeyword + "&page=" + this.state.currentPage + "&per_page=" + this.state.pageSize).then((response) => {
            let totalPages = Math.floor(response.data.totalHits / this.state.pageSize);
            this.setState({
                hits: response.data.hits,
                pages: new Array(totalPages).fill(0)
            })
        }).catch(error => console.log(error)) : console.log()
    }

    setKeyword = (event) => {
        this.setState({
            currentKeyword: event.target.value
        })
    }

    searchKeyword = (event) => {
        event.preventDefault();
        this.setState({
            currentPage: 1
        }, () => this.getHits())
    }

    goToPage = (index) => {
        this.setState({
            currentPage: index
        }, () => this.getHits());

    }

    render() {
        return (
            <div>
                <div>
                    <ul className="nav nav-pills">
                        {
                            this.state.pages.map((v, index) =>
                                <li key={index}
                                    className={this.state.currentPage === index + 1 ? "btn btn-primary" : "btn btn-link"}
                                    onClick={() => this.goToPage(index + 1)}>{index + 1}</li>
                            )
                        }

                    </ul>
                </div>
                <form onSubmit={this.searchKeyword}>
                    <div className="input-group">
                        <input className="form-control m-1" type="text" name="keyword" placeholder="Keyword"
                               value={this.state.currentKeyword}
                               onChange={this.setKeyword}/>
                        <div className="input-group-btn">
                            <button className="btn btn-success m-1" type="submit">Search
                            </button>
                        </div>
                    </div>
                </form>
                <div className="row">
                    {
                        this.state.hits.map((hit) =>
                            <div className="col-md-4" key={hit.id}>
                                <div className="card m-2">
                                    <div
                                        className="card-header">{hit.tags}</div>
                                    <div className="card-body">
                                        <img className="card-img" style={{
                                            "objectFit": "cover", "width": "100%",
                                            "height": "15vw"
                                        }} src={hit.webformatURL} alt=""/>
                                    </div>
                                    <div className="card-footer">
                                        <Link className="nav-link" to={"/details/" + hit.id}>
                                            <button className="btn btn-primary">More Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Gallery;