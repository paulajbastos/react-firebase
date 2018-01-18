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

  createUser() {
    var email = "paulajbastos@gmail.com";
    var senha = "admin123";

    const user = firebase.auth();

    user.createUserWithEmailAndPassword(
      email,
      senha
    ).catch(
      (error) => {
        //error.code, error.message
        var msgErro = '';
        if(error.code == 'auth/weak-password') {
          msgErro = 'A senha precisa ter no mínimo 6 caracteres';
        }
        alert(msgErro);
      }
    )
  }

  verifyUser() {

    const user = firebase.auth();

    //Criando um listener
    user.onAuthStateChanged(
      (userLogged) => {
        if(userLogged) {
          alert('Usuário está logado');
        }else {
          alert('Usuário não está logado');
        }
      }
    );

    // const userLogged = user.currentUser;
    // if(userLogged) {
    //   alert('Usuário está logado');
    // }else {
    //   alert('Usuário não está logado');
    // }

  }

  logOffUser() {

    const user = firebase.auth();
    user.signOut();

  }

  logInUser() {

    //https://firebase.google.com/docs/reference/js/firebase.auth.Auth?authuser=0#signInWithEmailAndPassword

    var email = "paulajbastos@gmail.com";
    var senha = "admin123";

    const user = firebase.auth();

    user.signInWithEmailAndPassword(
      email,
      senha
    ).catch(
      (error) => {
        //error.code, error.message
         alert(error.message);
        // var msgErro = '';
        // if(error.code == 'auth/weak-password') {
        //   msgErro = 'A senha precisa ter no mínimo 6 caracteres';
        // }
        // alert(msgErro);
      }
    )

  }

  // listData() {

  //   var marcas = firebase.database().ref("marcas");

  //   //Adicionando listener -> https://firebase.google.com/docs/database/web/lists-of-data
  //   marcas.on('value', (snapshot) => {
  //     alert(snapshot.val());
  //   });


  // }


  // saveData() {
  //   var marcas = firebase.database().ref("marcas");

  //   //Gera estaticamente o nó
  //   //marcas.child('001').child('nome').set('Liquidação');

  //   //Gera dinamicamente um identificador unico para cada nó
  //   //marcas.push().child('nome').set('Liquidação');

  //   //Criando com objetos literais

  //   marcas.push().set(
  //     {
  //       nome: 'Liquidaçao',
  //       url: 'https://www.usereserva.com/usereserva/home',
  //       title: 'Liquidaçao',
  //       marca: 'reserva',
  //       categoryid: '254898A1278946E325F84904BC6922C8'
  //     }
  //   )



  // }

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
                onClick={()=> this.createUser()}
                >Cadastrar Usuario</button>

                <button
                onClick={()=> this.verifyUser()}
                >Verificar Usuario Logado</button>

                <button
                onClick={()=> this.logOffUser()}
                >Deslogar Usuario</button>

                <button
                onClick={()=> this.logInUser()}
                >Logar Usuario</button>

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

