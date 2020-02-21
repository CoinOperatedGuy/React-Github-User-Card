import React, {Component} from 'react';
import axios from 'axios';


class Followers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            follower: {}
        }
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.props.follower.login}`)
          .then((res) => {
            console.log(res.data);
            this.setState({follower: res.data});
          })
          .catch((err) => {
            console.log(err);
          })
        console.log('componentDidMount running');
    }
    
    render() {
        console.log('App is rendering!');
        return (
          <div className='usercard'>
            <h2>{this.state.follower.login}</h2>
            <img src={this.state.follower.avatar_url} className='picture' alt='' />
            <p>Name: {this.state.follower.name}</p>
            <p>Location: {this.state.follower.location}</p>
          </div>
        );
    }  
}

export default Followers;