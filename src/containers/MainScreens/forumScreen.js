import React from 'react';
import { StyleSheet, TextInput, View, ScrollView, Image, Dimensions, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select'
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
class ForumScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LoaiTin: '',
      LoaiBds: '',
      mucgia: '',
      huongnhadat: '',

    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ flexDirection: 'row', }}>
          <Image style={styles.logoImage}
            source={require('AppDaiTheKy/image/logo.png')}
          />
          <Text
            style={styles.post}
          >Đăng bài</Text>
        </View>

        <Text style={styles.textspecial}>Cần điền đầy đủ thông tin vào những mục có dấu (*)</Text>
        <Text style={styles.textHeader}>THÔNG TIN CƠ BẢN</Text>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>LOẠI TIN(*)</Text>
          <RNPickerSelect
            style={{ ...pickerSelectStyles }}
            placeholder={{
              label: 'Nhà Đất Bán',
              value: 1,
              color: 'gray'
            }}

            onValueChange={(value) => {
              this.setState({
                LoaiTin: value,
              });

            }}
            items={[
              { label: 'Nhà Đất Bán', value: '1', color: 'green' },
              { label: 'Nhà Đất Cho Thuê', value: '2', color: 'green' },
            ]}
          />
        </View>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>LOẠI nhà đất(*)</Text>
          {
            this.state.LoaiTin == 2 ?
              <RNPickerSelect
                style={{ ...pickerSelectStyles }}
                placeholder={{
                  label: 'Cho thuê nhà mặt phố',
                  value: 1,
                  color: 'gray'
                }}

                onValueChange={(value) => {
                  this.setState({
                    LoaiBds: value,
                  });
                }}
                items={[
                  { label: 'Cho thuê nhà mặt phố', value: '1', color: 'green' },
                  { label: 'Cho thuê nhà trọ', value: '2', color: 'green' },
                  { label: 'Cho thuê văn phòng', value: '3', color: 'green' },
                  { label: 'Cho thuê cửa hàng', value: '4', color: 'green' },
                  { label: 'Cho thuê căn hộ, chung cư', value: '5', color: 'green' },
                  { label: 'Cho thuê loại BĐS khác', value: '6', color: 'green' },
                ]}
              />
              :
              <RNPickerSelect
                style={{ ...pickerSelectStyles }}
                placeholder={{
                  label: 'Bán nhà mặt phố',
                  value: 1,
                  color: 'gray'
                }}

                onValueChange={(value) => {
                  this.setState({
                    LoaiBds: value,
                  });
                }}
                items={
                  [
                    { label: 'Bán nhà mặt phố', value: '1', color: 'green' },
                    { label: 'Bán nhà trọ', value: '2', color: 'green' },
                    { label: 'Bán văn phòng', value: '3', color: 'green' },
                    { label: 'Bán cửa hàng', value: '4', color: 'green' },
                    { label: 'Bán căn hộ, chung cư', value: '5', color: 'green' },
                    { label: 'Bán loại BĐS khác', value: '6', color: 'green' },
                  ]}
              />
          }
        </View>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>Giá(*)</Text>
          <TextInput style={styles.button1}
            placeholder="giá tiền"
            placeholderTextColor="#D3D3D3">
          </TextInput>
        </View>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>Mức giá(*)</Text>
          <RNPickerSelect
            style={{ ...pickerSelectStyles }}
            placeholder={{
              label: 'tỷ',
              value: 1,
              color: 'gray',

            }}

            onValueChange={(value) => {
              this.setState({
                mucgia: value,
              });

            }}
            items={[
              { label: 'triệu', value: '1', color: 'green' },
              { label: 'tỷ', value: '2', color: 'green' },
              { label: 'thỏa thuận', value: '3', color: 'green' },
              { label: 'cây vàng', value: '4', color: 'green' },
              { label: 'USD', value: '5', color: 'green' },
              { label: 'triệu/m2', value: '6', color: 'green' },
              { label: 'trăm nghìn/m2', value: '7', color: 'green' },
              { label: 'USD/m2', value: '8', color: 'green' },
            ]}
          />
        </View>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>Diện tích(*)</Text>
          <TextInput style={styles.button1}
            placeholder="Diện tích(m2)"
            placeholderTextColor="#D3D3D3"
            keyboardType='numeric'>
          </TextInput>
        </View>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>Địa điểm(*)</Text>
          <TextInput style={styles.button1}
            placeholder="địa điểm"
            placeholderTextColor="#D3D3D3">
          </TextInput>
        </View>

        <Text style={styles.textHeader}>THÔNG TIN KHÁC</Text>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>Mặt tiền</Text>
          <TextInput style={styles.button1}
            placeholder="Mặt tiền(m)"
            placeholderTextColor="#D3D3D3">
          </TextInput>
        </View>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>Đường trước nhà</Text>
          <TextInput style={styles.button1}
            placeholder="Đường trước nhà(m)"
            placeholderTextColor="#D3D3D3">
          </TextInput>
        </View>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>Số tầng</Text>
          <TextInput style={styles.button1}
            placeholder="Số tầng"
            keyboardType='numeric'
            placeholderTextColor="#D3D3D3">
          </TextInput>
        </View>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>Số phòng</Text>
          <TextInput style={styles.button1}
            placeholder="Số phòng"
            keyboardType='numeric'
            placeholderTextColor="#D3D3D3">
          </TextInput>
        </View>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>Hướng nhà đất</Text>
          <RNPickerSelect
            style={{ ...pickerSelectStyles }}
            placeholder={{
              label: 'Chọn hướng nhà',
              value: 1,
              color: 'gray',

            }}

            onValueChange={(value) => {
              this.setState({
                huongnhadat: value,
              });

            }}
            items={[
              { label: 'không xác định', value: '1', color: 'green' },
              { label: 'đông', value: '2', color: 'green' },
              { label: 'tây', value: '3', color: 'green' },
              { label: 'nam', value: '4', color: 'green' },
              { label: 'bắc', value: '5', color: 'green' },
              { label: 'đông-bắc ', value: '6', color: 'green' },
              { label: 'tây-bắc', value: '7', color: 'green' },
              { label: 'tây-nam', value: '8', color: 'green' },
              { label: 'đông-nam', value: '9', color: 'green' },
            ]}
          />
        </View>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>Số toilet</Text>
          <TextInput style={styles.button1}
            placeholder="Số toilet"
            keyboardType='numeric'
            placeholderTextColor="#D3D3D3">
          </TextInput>
        </View>

        <Text style={styles.textHeader}>MÔ TẢ CHI TIẾT</Text>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>Tiêu đề(*)</Text>
          <TextInput style={styles.button1}
            placeholder="Vui lòng gõ tiếng Việt có dấukhông quá 50 kí tự"
            placeholderTextColor="#D3D3D3">
          </TextInput>
        </View>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>Nội dung mô tả(*)</Text>
          <TextInput style={styles.button1}
            placeholder="Nhập"
            placeholderTextColor="#D3D3D3">
          </TextInput>
        </View>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>Hình ảnh(*)</Text>
          <TextInput style={styles.button1}
            placeholder="Tải ảnh ở đây"
            placeholderTextColor="#D3D3D3">
          </TextInput>
        </View>

        <Text style={styles.textHeader}>THÔNG TIN LIÊN HỆ</Text>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>Họ tên(*)</Text>
          <TextInput style={styles.button1}
            placeholder="Nhập"
            placeholderTextColor="#D3D3D3">
          </TextInput>
        </View>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>Địa chỉ:</Text>
          <TextInput style={styles.button1}
            placeholder="Nhập"
            placeholderTextColor="#D3D3D3">
          </TextInput>
        </View>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>Điện thoại(*)</Text>
          <TextInput style={styles.button1}
            placeholder="Nhập"
            keyboardType='numeric'
            placeholderTextColor="#D3D3D3">
          </TextInput>
        </View>

        <View style={{ flexDirection: 'row', }}>
          <Text style={styles.text}>Email:</Text>
          <TextInput style={styles.button1}
            placeholder="Nhập"
            placeholderTextColor="#D3D3D3">
          </TextInput>
        </View>

      </ScrollView >

    );
  }
}
const pickerSelectStyles = StyleSheet.create({
  viewContainer: {
    marginTop: 10,
    backgroundColor: 'green',
    color: 'white',
    borderRadius: 11,
    width: width * 0.7,
    height: 25,
    justifyContent: 'center',
    paddingLeft: 10,
    marginLeft: 0,
    textAlign: 'center',

  },
  headlessAndroidContainer: {
    backgroundColor: 'black',
    flex: 1,

  }
});
let styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#fafafe',
  },
  post: {
    backgroundColor: '#00ffff',
    width: width * 0.7,
    height: 40,
    marginLeft: -15,
    borderRadius: 15,
    marginTop: 8,
    paddingVertical: 3,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 4,
    borderRadius: 5,
    fontSize: 25,
    fontWeight: 'bold'
  },
  logoImage: {
    width: 130,
    height: 40,
    marginLeft: -24,
    marginTop: 4,
    resizeMode: 'contain',
    // marginTop: '20%',
    // marginLeft: '25%',
    backgroundColor: '#fafafe'
  },
  textspecial: {
    width: width,
    height: 30,
    color: 'red',
    marginTop: 10,
    fontSize: 15,
  },
  textHeader: {
    width: width,
    height: 40,
    fontSize: 25,
    color: '#7fff00'
  },
  text: {
    width: width * 0.3,
    height: 30,
    marginTop: 5,
    fontSize: 15,
  },
  textInput: {
    width: width / 2,
    height: 30,
    marginTop: 5,
    fontSize: 15,
    backgroundColor: 'green'
  },
  button1: {
    width: width * 0.7,
    height: 30,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'green',
    marginTop: 8,
    textAlign: 'left',
    paddingTop: 4,
    borderRadius: 11,
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 16,
  },
  textMini: {
    height: 30,
    marginTop: 5,
    fontSize: 15,
  },

})
export default ForumScreen;