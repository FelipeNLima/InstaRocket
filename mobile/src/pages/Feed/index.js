import React, { Component } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import io from 'socket.io-client';
import api from '../../services/api';

import More from 'react-native-vector-icons/MaterialIcons';
import Like from 'react-native-vector-icons/FontAwesome';
import Comment from 'react-native-vector-icons/Fontisto';
import Send from 'react-native-vector-icons/Feather';

import { 
  Container, 
  FeedItem, 
  Header, 
  Info, 
  Name, 
  Place, 
  FeedImage, 
  Footer, 
  Actions, 
  Action,
  Likes, 
  Description, 
  HashTags 
} from './styles';

export default class Feed extends Component {

    state = {
      feed: [],
  };

  async componentDidMount(){
      this.registerToSocket();
      const response = await api.get('posts');

      this.setState({ feed: response.data });
  }

  registerToSocket = () => {
    const socket = io('http://192.168.0.113:3333');

    socket.on('post', newPost => {
        this.setState({ feed: [newPost, ...this.state.feed] });
    })

    socket.on('like', likedPost => {
        this.setState({
            feed: this.state.feed.map(post =>
                post._id === likedPost._id ? likedPost : post
            )
        });
    })
  }

  handleLike = id =>  {
      api.post(`/posts/${id}/like`);
  }

  render() {
    return (
      <Container>
        <FlatList 
          data={this.state.feed}
          keyExtractor={post => post.id}
          renderItem={({ item }) => (
            <FeedItem>

              <Header>
                <Info>
                  <Name>{item.author}</Name>
                  <Place>{item.place}</Place>
                </Info>

                <More name="more-vert" size={20}/>
              </Header>

              <FeedImage source={{ uri: `http://192.168.0.113:3333/files/${item.image}` }}/>

              <Footer>
                <Actions>
                  <Action>
                    <TouchableOpacity onPress={() => this.handleLike(item._id)}>
                      <Like name="heart-o" size={25}/>
                    </TouchableOpacity>
                  </Action>
                  <Action>
                    <TouchableOpacity onPress={() => {}}>
                      <Comment name="comment" size={20}/>
                    </TouchableOpacity>
                  </Action>
                  <Action>
                    <TouchableOpacity onPress={() => {}}>
                      <Send name="send" size={25}/>
                    </TouchableOpacity>
                  </Action>
                </Actions>

                <Likes>{item.likes} curtidas</Likes>
                <Description>{item.description}</Description>
                <HashTags>{item.hashtags}</HashTags>
              </Footer>

            </FeedItem>
          )}
        />
      </Container>
    );
  }
}
