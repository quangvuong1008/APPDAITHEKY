import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
    Dimensions
} from 'react-native';



class MessageDialog extends PureComponent {
    render() {
        const { title, message, textButton } = this.props;
        return (
            <Modal
                animationType={'fade'}
                visible={this.props.visible}
                transparent={true}>
                <View style={styles.container}>
                    <View style={[styles.messageArea, { paddingVertical: 20, paddingHorizontal: 15 }]}>
                        <Text>Thông báo</Text>
                        <Text style={[{ marginVertical: 10 }]}>{message || ''}</Text>
                        <TouchableOpacity
                            onPress={() => this.props.close()}>

                            <Text style={[{ color: 'red' }]}>{textButton || 'OK'}</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
}
const containerW = Dimensions.get('window').width;
const containerH = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00000099",
        position: "absolute",
        width: containerW,
        height: containerH/10,
        elevation: 8,
        
    },
    messageArea: {
        backgroundColor: 'white',
        borderRadius: 5,
        width: '80%',
        marginTop:10
    },
    button: {
        backgroundColor: '#db49d1',
        borderRadius: 6,
        height: 38,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 8
    }
});

export default MessageDialog