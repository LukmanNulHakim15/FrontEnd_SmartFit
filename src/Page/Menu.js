import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LoginAction } from '../Redux/Action'


 export class Menu extends Component {

    constructor (props){
        super(props);
        }
    
    componentDidMount(){
            console.log(this.props.dataRedux)
        }

    handleSignOut(){
        this.props.LoginAction(false,"isLogin")
        this.props.navigation.navigate("Login")
        alert("Anda Berhasil Sign Out")
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.button} ><Text style={styles.title} onPress={()=>{this.handleSignOut()}}>Sign Out</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataRedux:state.LoginReducer
})

const mapDispatchToProps = {
    LoginAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
      },
});