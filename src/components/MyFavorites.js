// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '././MyFavorites.js';
// import { withAuth0 } from '@auth0/auth0-react';
// import Favcard from './Favcard'

// class MyFavorites extends React.Component {
// constructor() {
//   super();
//   this.state={
//     favList: [],
//     show: false,
//     selecteditem:{},
//   }
// }

// componentDidMount = async ()=> {
//   let favList = await axios.get (`${process.env.REACT_APP_SERVER_LINK}/getFav?email=${this.props.user.email}`)
//   this.setState({
//     favList:favList.data,
//   })
// }
// showModel= async (selecteditem)=>{
//   await this.setState({
//     show:true,
//     selecteditem:selecteditem,
//   })
// }

// handelUpdate= async (selecteditem)=>{
//   let favList = await axios.put(`${process.env.REACT_APP_SERVER_LINK}/updateFav/${selecteditem.idfromDb}`,selecteditem);
//   this.setState({
//     favList: favList.data,
//   })
// }

// deletFav= async (id) => {
//   let favList = await axios.delete(`${process.env.REACT_APP_SERVER_LINK}/deleteFav/${id}/email=${this.props.user.email}`)
//   this.setState({
//     favList: favList.data,
//   })
// }

// handelClose=async()=>{
//   await this.setState({
//     show:false,
//   })
// }

//   render() {
//     return(
//       <>
//         <h1>My Favorites</h1>
//         <p>
//           This is a collection of my favorites
//         </p>
//         return()
//       </>
//     )
//   }
// }

// export default withAuth0(MyFavorites);

