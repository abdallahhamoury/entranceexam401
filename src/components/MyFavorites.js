import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFavorites.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import FavCard from './FavCard'
import UpdateModel from './UpdateModel'
class MyFavorites extends React.Component {
  constructor() {
    super();
    this.state = {
      favDataList: [],
      selectedItem: {},
      showUpdateFav: false,

    }
  }
  componentDidMount = async () => {

    let list = await axios.get(`${process.env.REACT_APP_SERVER}/getFav?email=${this.props.auth0.user.email}`);
    console.log(list.data);
    this.setState({
      favDataList: list.data,
    })
  }
  deleteFav = async (id) => {
    console.log(id);
    let list = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteFav/${id}?email=${this.props.auth0.user.email}`);
    this.setState({
      favDataList: list.data,
    })
  }

  showUpdateFav = async (item) => {
    console.log("sdfsadgdfhg");
    this.setState({
      showUpdateFav: true,
      selectedItem: item,
    })
  }

  handleClose = async () => {
    this.setState({
      showUpdateFav: false,
    })
  }
  update = async (selectedItem) => {
    let list = await axios.put(`${process.env.REACT_APP_SERVER}/updateFav/${selectedItem.id}?email=${this.props.auth0.user.email}`, selectedItem)
    this.setState({
      favDataList: list.data,
    })
  }


  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        <div className="container">
          {this.state.favDataList.map((item, index) => {
            return (
              <FavCard key={index} item={item} deleteFav={this.deleteFav} showUpdateFav={this.showUpdateFav} />
            )
          })}
        </div>

        {this.state.favDataList.length === 0 && <div style={{ backgroundColor: "yellow" }}>
          <h2>Your List is Empty ¯_(ツ)_/¯ </h2>
        </div>}

        <UpdateModel show={this.state.showUpdateFav} item={this.state.selectedItem} handleClose={this.handleClose} update={this.update} />
      </>
    )
  }
}

export default withAuth0(MyFavorites);

