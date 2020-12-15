import "./App.css";
import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import axios from 'axios';
import firebase from 'firebase';

// if (!firebase.apps.length) {
      
//   firebase.initializeApp(
//     {
//       apiKey: "AIzaSyAueJ31CeQdQJ-NruvLl2qN2wY0xTqXkXQ",
//       authDomain: "images-storage",
//       databaseURL: "https://image-search-storage-app-default-rtdb.europe-west1.firebasedatabase.app/",
//       storageBucket: "gs://image-search-storage-app.appspot.com",
//       messagingSenderId: "221007279638"   });
       

// // Find all the prefixes and items.
// listRef.listAll().then(function(res) {
//   res.prefixes.forEach(function(folderRef) {
//     // All the prefixes under listRef.
//     // You may call listAll() recursively on them.
//   }
//      //initialize firebase  
 

 
// }else {
//   firebase.app('images-storage'); // if already initialized, use that one
// }

// var storage = firebase.storage();
// var storageRef = storage.ref('imagesGI');
// var listRef = storageRef.child('files/uid');
// );
//   res.items.forEach(function(itemRef) {
//     // All the items under listRef.
//   });
// }).catch(function(error) {
//   // Uh-oh, an error occurred!
// });

// storageRef.child('imagesGI');


class App extends React.Component {
  state = {
    imgs: []
  }

 api = "https://storage.googleapis.com/storage/v1/b/image-search-storage-app.appspot.com/o";


 componentDidMount() {
  axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const imgs = res.data;
      this.setState({ imgs });
    })
}

  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
   
  
    return (
      
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
