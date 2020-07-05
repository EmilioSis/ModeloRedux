import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {set_email} from '../../redux/modules/user/actions';
const Home = () => {
  const dispathc = useDispatch();
  const [ee, setEmail] = useState('');
  const {name, email, idade} = useSelector((state) => state.user);
  return (
    <View>
      <Text>oiii</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>{idade}</Text>
      <TextInput style={{backgroundColor: '#f63'}} onChangeText={setEmail} />
      <TouchableOpacity onPress={() => dispathc(set_email(ee))}>
        <Text>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
