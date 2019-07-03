/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AcyncStorage, StyleSheet, Text, View,TextInput,TouchableOpacity,KeyBoardAvoidingView} from 'react-native';




export default class App extends Component {
constructor(){
  super();
  this.state ={
    email:'',
    username:'', 
    password:'',
    confirmPassword:''
  };
};  




registerAccount =() =>{
  if(!this.state.username){

    alert("Please enter a username");
  }
  else if(this.state.password !==this.state.confirmPassword){
    alert("Password  mismatch");
   // return(<Text>password mismatch</Text>);
  }


}

  /* state= {
    username:"",
    password:'',
    confirmPassword:''
  };  */
  passwordMismatch(){
   // const {username,password,confirmPassword}=this.state
      alert(this.state.username);
      if(this.state.username!=='' ){
        console.warn("username in the correct format.");
        ////////======== write the code to check whether the inserted email is already taken.=====/////
             if((this.state.password!==this.state.confirmPassword)){
              
             }
      }
      else{
        alert("please enter a valid username");

      }
      

  }

  sendData(){
    return dispatch =>{
      const signUp={
        username:username,
        password:password

      }
      console.log(signUp)
      fetch("http://localhost:3000/api/auth/register",{
        method:POST,
        body:JSON.stringify(signUp)
      })
      .catch(err=>console.log(err))
      .then(res=>res.json())
    };
  };

  passwordMatch(){
    if(this.state.password!==this.state.confirmPassword){
      return(<Text style={{color:"#aa0000",marginTop:'1px'}}>password doesn't match...</Text>)
    }
  }
  render() {
    return (
      <View style={styles.container }>
      {/* <View style={{flex:1,flexDirection:'row', marginTop:'30%',marginBottom:"3%",padding:0,height:'30%'}}>
          <Text style={{color:"#aaaaaa", fontSize:20}}>Sign </Text>
          <Text style={{color:"#c62828", fontSize:20}}> up</Text>
        
      </View> */}
        
        <TextInput style={styles.in}
          placeholder="user name"
          placholderColor="#111111"
          onChangeText={text=>this.setState({username :text})}
        />
        <TextInput style={styles.in}
          placeholder="password"
          placholderColor="#ffffff"
          //secureTextEntry={true}
          onChangeText={text=>this.setState({password:text})}
        />
        <TextInput style={styles.in}
          placeholder="confirm password"
          placholderColor="#ffffff"
          //secureTextEntry={true}
          onChangeText={text=>this.setState({confirmPassword :text})}
        />
        {this.passwordMatch()}
          <TouchableOpacity style={{backgroundColor:"#c62828",width:"70%",height:"6%",textAlign:"center"}}
          onPress={_=>this.passwordMismatch()}>
          <Text style={{textAlign:'center',color:"#ffffff",justifyContent:'center',alignItems:'center'}}>
            Sign up
          </Text>
          
          </TouchableOpacity>

        
        </View>
        
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#010101',
  },
  button:{
    width:"70%",
    height:"10%",
    backgroundColor:'#c62828' ,
  },
  in:{
    width:"70%",
    height:"7%",
    borderBottomColor:'#ffffff',
    backgroundColor:"#fefefe",
    marginBottom:"5%",
    color:"#000000"
  },
  /*signupScreen:{
    flex:1,
  
    justifyContent:'center',

  },*/
    welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
