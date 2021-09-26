import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import CardList from './CardList'
import './AllDataAPI.css';

class AllDataAPI extends Component {
    constructor() {
        super();
        this.state = {
            allDataList: [],
        }
    }

    componentDidMount = async () => {

        let list = await axios.get(`${process.env.REACT_APP_SERVER}/getDataFromApi`);
        console.log(list.data);
        this.setState({
            allDataList: list.data,
        })
    }

    addToFavorites = async (item) => {
        await axios.post(`${process.env.REACT_APP_SERVER}/addFav?email=${this.props.auth0.user.email}`, item)

    }



    render() {
        return (
            <>
                <div>
                    <h1>All Data from the API</h1>
                    <h3>Select your favorites :)</h3>
                </div>
                <div className="container">
                    {this.state.allDataList.map((item, index) => {
                        return (
                            <CardList key={index} item={item} addToFavorites={this.addToFavorites} />
                        )
                    })}
                </div>
            </>
        )
    }
}

export default withAuth0(AllDataAPI);
