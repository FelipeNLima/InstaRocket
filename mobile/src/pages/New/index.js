import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import api from '../../services/api';

import { Container, SelectButton, ButtonText, TextInput, ShareButton, ShareText, Preview } from './styles';

export default class New extends Component {
  
  state = {
    preview: null,
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  };

  handleSelectImage = () => {
    ImagePicker.showImagePicker({
      title: 'Selecionar imagem',
    }, upload => {
      if (upload.error){
        console.log('Error');
      } else if (upload.didCancel) {
        console.log('Used canceled');
      } else {
        const preview ={
          uri: `data:image/jpge;base64,${upload.data}`,
        }

        let prefix;
        let ext;

        if (upload.fileName) {
          [prefix, ext] = upload.fileName.split('.')
          ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext;
        } else {
          prefix = new Date().getTime();
          ext = 'jpg';
        }

        const image ={
          uri: upload.uri,
          type: upload.type,
          name:  `${prefix}.${ext}`
        };

        this.setState({ preview, image });
      }   
    });
  }

  handleSubmit = async () => {
    const navigation = useNavigation();
    const data = new FormData();
        
    data.append('image', this.state.image);
    data.append('author', this.state.author);
    data.append('place', this.state.place);
    data.append('description', this.state.description);
    data.append('hashtags', this.state.hashtags);

    await api.post('posts', data)
    console.log(data);
    navigation.navigate('Feed');
  }

  render() {
    return (
      <Container>
        <SelectButton>
          <TouchableOpacity onPress={this.handleSelectImage}>
            <ButtonText>Selecionar imagem</ButtonText>
          </TouchableOpacity>
        </SelectButton>

        { this.state.preview && <Preview source={this.state.preview} />}

        <TextInput 
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome do autor"
          placeholderTextColor="#999"
          value={this.state.author}
          onChangeText={author => this.setState({ author })}
        />

        <TextInput 
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Local da foto"
          placeholderTextColor="#999"
          value={this.state.place}
          onChangeText={place => this.setState({ place })}
        />

        <TextInput 
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Descrição"
          placeholderTextColor="#999"
          value={this.state.description}
          onChangeText={description => this.setState({ description })}
        />

        <TextInput 
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Hashtags"
          placeholderTextColor="#999"
          value={this.state.hashtags}
          onChangeText={hashtags => this.setState({ hashtags })}
        />

        <ShareButton>
          <TouchableOpacity onPress={this.handleSubmit}>
            <ShareText>Compartilhar</ShareText>
          </TouchableOpacity>
        </ShareButton> 

      </Container>
    );
  }
}
