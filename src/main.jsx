import React, { Component } from 'react';
import firebase from 'firebase'
// import firebase from './firebase.js'
import './styles/main.scss';

class Main extends Component {

  constructor(props) {
    super(props);
    /*
    this.state = {

    }
    */
  }

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

  listData() {

    var marcas = firebase.database().ref("marcas");

    //Adicionando listener -> https://firebase.google.com/docs/database/web/lists-of-data
    marcas.on('value', (snapshot) => {
      alert(snapshot.val());
    });


  }


  saveData() {
    var marcas = firebase.database().ref("marcas");

    //Gera estaticamente o nó
    //marcas.child('001').child('nome').set('Liquidação');

    //Gera dinamicamente um identificador unico para cada nó
    //marcas.push().child('nome').set('Liquidação');

    //Criando com objetos literais

    marcas.push().set(
      {
        nome: 'Liquidaçao',
        url: 'https://www.usereserva.com/usereserva/home',
        title: 'Liquidaçao',
        marca: 'reserva',
        categoryid: '254898A1278946E325F84904BC6922C8'
      }
    )



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

                <button
                onClick={()=> this.listData()}
                >Mostrar</button>

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

