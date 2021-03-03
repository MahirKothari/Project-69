import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-component' ;
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned:false,
            scannedData:'',
            buttonState: 'normal'
        }
    }
    getCameraPermissions=async()=>{
        const {status}=await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            scanned:false
        })
        }
    handledBarcodeScanned=async({type,data})=>{
        const buttonState = this.state.buttonState
        if(buttonState == "clicked"){
        this.setState({
            scanned:true,
        })
    }
    render(){
        return(
            <View>
            <TouchableOpacity 
            onPress={this.getCameraPermissions}
            style={StyleSheet.scanButton}
            title = "Bar Code Scanner">
            </TouchableOpacity>
            </View>
        )
    }

    }
}