import React, { Component } from 'react';
import {Menu} from './components/Menu';
import {Article} from './components/Article';
import {Post} from './components/Post';
import {Post2} from './components/Post2';
import './styles.css';

class App extends Component {
  render() {
    return (
<div id='container'>
  <Menu />
  <Article/>
  <Post />
  <Post2 />
</div>

    );
  }
}


export default App;

