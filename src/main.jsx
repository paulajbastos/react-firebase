import React, { Component } from 'react';
import firebase from 'firebase'
// import firebase from './firebase.js'
import './styles/main.scss';

class Main extends Component {

  componentWillMount() {

    var config = {
      apiKey: "AIzaSyD_TaOAofKtIQdOod43t1zEruvSk55IU4c",
      authDomain: "react-firebase-63b17.firebaseapp.com",
      databaseURL: "https://react-firebase-63b17.firebaseio.com",
      projectId: "react-firebase-63b17",
      storageBucket: "react-firebase-63b17.appspot.com",
      messagingSenderId: "882835269354"
    };

    firebase.initializeApp(config);

  }

  saveData() {
    console.log('saveData');
    var database = firebase.database();
    database.ref("pontuacao").set("100");
  }

  render() {
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Fun Food Friends</h1>

            </div>
        </header>
        <div className='container'>
          <section className='add-item'>

                <input type="text" name="username" placeholder="What's your name?" />
                <input type="text" name="currentItem" placeholder="What are you bringing?" />
                <button
                onClick={()=> this.saveData()}
                >Add Item</button>

          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Main;

