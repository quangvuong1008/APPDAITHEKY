import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    FlatList,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';


const itemWidth = Dimensions.get('window').width;
const itemHeigh = Dimensions.get('window').height / 6;

function pressFunction() {


}


class FormatDataSellScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const link = 'https://cdn1.daitheky.net';
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() =>  this.props.navigation.navigate('ClickSellScreen', {
                    data: this.props.data
                })}
            >
                <Image style={styles.image}
                    source={{ uri: link + this.props.data.images[1] }}

                />
                <View style={styles.viewData}>
                    <View style={styles.title}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{this.props.data.title}</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={{ color: 'gray' }} maxLength={15}>{this.props.data.location}</Text>
                    </View>
                    <View style={styles.title}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Lượt xem: {this.props.data.LuotXem}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: itemWidth,
        height: itemHeigh,
        alignItems: 'center',
        flexDirection: 'row',
        borderTopWidth: 0.3,
        borderTopColor: 'gray',
        backgroundColor: '#ede6e6'
    },
    image: {
        height: itemHeigh * 0.8,
        width: itemHeigh * 0.8,
        borderRadius: 8,
        marginLeft: 5,
    },
    viewData: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
    },
    title: {
        flex: 1,
        marginTop: 5,

    },
    description: {
        flex: 1,
        marginTop: 35,
    }
})
export default FormatDataSellScreen;