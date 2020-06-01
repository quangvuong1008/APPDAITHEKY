import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
const axios = require('axios');
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Button,
    Image,
    Keyboard,
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { link } from '../configs/ngrokConfig';
import Loading from '../component/Loading';
import MessageDialog from '../component/MessageDialog';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            checkLogin: 0,
            isLoading: false,
            errorCode: ''
        }
    }
    async _onPressLogin() {
        let data = null;
        this.setState({ isLoading: true })
        console.log('loading')
        let username = this.state.username;
        let password = this.state.password;
        await axios.get(link + '/user?username=' + username + '&&password=' + password)
            .then(function (response) {
                // handle success
                data = response.data[0]
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed

            });
        this.setState({ isLoading: false })
        if (!data) {
            //sai
            this.setState({ errorCode: 'Sai tên tài khoản hoặc mật khẩu' })
        } else {
            //dung
            this.props.navigation.navigate('Main')
           await AsyncStorage.setItem('data',JSON.stringify(data))
        }
    }
    render() {
        return (
            <>
                <View style={styles.container}>
                    <Image style={styles.image}
                        source={require('AppDaiTheKy/image/logo.png')}
                    />
                    <TextInput
                        style={[styles.textinput, { marginTop: '10%' }]}
                        placeholder="Tài khoản"
                        placeholderTextColor="gray"
                        onChangeText={(username) => this.setState({ username })}
                    />
                    <TextInput
                        style={[styles.textinput, { marginTop: '5%', }]}
                        placeholder="Mật khẩu"
                        secureTextEntry={true}
                        placeholderTextColor="gray"
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <TouchableOpacity style={{ backgroundColor: '#faffe9' }}
                        disabled={this.state.username && this.state.password ? false : true}
                        onPress={() => this._onPressLogin()}
                    >
                        <Text style={{
                            width: '85%',
                            height: 30,
                            borderWidth: 1,
                            marginLeft: '8%',
                            borderColor: 'gray',
                            backgroundColor: '#4fa3fd',
                            marginTop: 8,
                            textAlign: 'center',
                            paddingTop: 4,
                            borderRadius: 5,
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: this.state.username && this.state.password ? 'white' : '#616161',

                        }}
                        >
                            Đăng nhập
                     </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#faffe9' }}>
                        <Text style={styles.button2}>
                            Quên mật khẩu?
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#faffe9' }}
                        onPress={() => this.props.navigation.navigate('Register')}
                    >
                        <Text style={styles.button3}>
                            Tạo tài khoản mới
                    </Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.isLoading ? <Loading></Loading> : null
                }
                {
                    this.state.errorCode ? <MessageDialog
                        message={this.state.errorCode}
                        close={
                            () => {
                                this.setState({
                                    errorCode: null
                                })
                            }
                        }

                    /> : null
                }
            </>
        );
    }
}
let styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#faffe9',
    },
    image: {
        width: '70%',
        height: '30%',
        marginTop: '8%',
        marginLeft: '15%',
        resizeMode: 'contain',
        backgroundColor: '#faffe9'
    },
    textinput: {
        width: '70%',
        height: 30,
        marginLeft: '15%',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderRadius: 9,
        paddingVertical: 3,
    },
    button1: {
        width: '85%',
        height: 30,
        borderWidth: 1,
        marginLeft: '8%',
        borderColor: 'gray',
        backgroundColor: '#4fa3fd',
        marginTop: 8,
        textAlign: 'center',
        paddingTop: 4,
        borderRadius: 5,
        fontSize: 15,
        fontWeight: 'bold'
    },
    button2: {
        width: '85%',
        height: 30,
        marginLeft: '8%',
        backgroundColor: '#faffe9',
        marginTop: 8,
        textAlign: 'center',
        paddingTop: 4,
        borderRadius: 5,
        fontSize: 15,
        color: '#4fa3fd',
        fontWeight: 'bold'
    },
    button3: {
        width: '95%',
        height: 30,
        marginLeft: '2%',
        backgroundColor: '#d3d9da',
        marginTop: Dimensions.get('window').height / 4.4,
        textAlign: 'center',
        paddingTop: 4,
        borderRadius: 5,
        fontSize: 15,
        color: '#4fa3fd',
        fontWeight: 'bold'
    },
})