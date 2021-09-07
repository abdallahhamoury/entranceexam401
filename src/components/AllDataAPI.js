import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './CardList';



class AllDataAPI extends React.Component {
    constructor() {
        super();
        this.state = {
            cList: [],
            favList: []
        }
    }

    componentDidMount = async () => {
        let list = await axios.get('https://ltuc-asac-api.herokuapp.com/allChocolateData/')
        console.log(list.data);
        this.setState({
            cList: list.data,
        })
    }

    addToFav = async (item) => {
        await axios.post(`${process.env.REACT_APP_SERVER_LINK}/addToFav?email=${this.props.auth0.user.email}`, item)
    }



    render() {
        return (
            <>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>
                {this.state.cList.map((item, index) => {
                    console.log(item);
                    return (
                        <CardList key={index} item={item} addToFav={this.addToFav} />
                    )
                })}
            </>
        )
    }
}

export default withAuth0(AllDataAPI);
