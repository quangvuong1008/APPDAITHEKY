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
export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            HoVaTen: '',
            DienThoai: '',
            DiaChi: '',
            TinhThanh: '',
            //isLoading: false,
            errorCode: ''
        }
    }
    async _onPressLogin() {
        let db = null
        //this.setState({ isLoading: true })
        console.log('loading')

        axios.post(link + '/user', {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            HoVaTen: this.state.HoVaTen,
            DienThoai: this.state.DienThoai,
            DiaChi: this.state.DiaChi,
            TinhThanh: this.state.TinhThanh,
        })
            .then(function (response) {
                // console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        this.setState({ isLoading: false })
        this.setState({ errorCode: 'Đăng ký thành công' })
        this.props.navigation.navigate('Login')
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
                    <TextInput
                        style={[styles.textinput, { marginTop: '5%', }]}
                        placeholder="Email"
                        keyboardType='email-address'
                        placeholderTextColor="gray"
                        onChangeText={(email) => this.setState({ email })}
                    />
                    <TextInput
                        style={[styles.textinput, { marginTop: '5%', }]}
                        placeholder="Họ và Tên"
                        placeholderTextColor="gray"
                        onChangeText={(HoVaTen) => this.setState({ HoVaTen })}
                    />
                    <TextInput
                        style={[styles.textinput, { marginTop: '5%', }]}
                        placeholder="Điện Thoại"
                        keyboardType='phone-pad'
                        placeholderTextColor="gray"
                        onChangeText={(DienThoai) => this.setState({ DienThoai })}
                    />
                    <TextInput
                        style={[styles.textinput, { marginTop: '5%', }]}
                        placeholder="Địa chỉ"
                        placeholderTextColor="gray"
                        onChangeText={(DiaChi) => this.setState({ DiaChi })}
                    />
                    <TextInput
                        style={[styles.textinput, { marginTop: '5%', }]}
                        placeholder="Tỉnh Thành"
                        placeholderTextColor="gray"
                        onChangeText={(TinhThanh) => this.setState({ TinhThanh })}
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
                            DONE
                     </Text>
                    </TouchableOpacity>

                </View>
                {
                    this.state.isLoading ? <Loading></Loading> : null
                }
                {
                    this.state.errorCode ? <MessageDialog
                        message={this.state.errorCode}
                        textinput = 'SUCCESS'
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
        height: '20%',
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