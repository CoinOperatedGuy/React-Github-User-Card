import React from 'react';
import axios from 'axios';
import './App.css';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            login: ''
        };
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/CoinOperatedGuy/followers')
          .then((res) => {
            console.log(res.data);
            this.setState(res.data);
          })
          .catch((err) => {
            console.log(err);
          })
        console.log('componentDidMount running');
    }
    handleChanges = e => {
        this.setState(e.target.value);
      };
    
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate is getting called!');
        console.log('prevProps: ', prevProps);
        console.log('prevState: ', prevState);
    
        if (prevProps.userID !== this.props.userID) {
          console.log('If this runs, we are in trouble');
        }
    
        if (prevState.name !== this.state.name) {
          console.log('There are new users on the state!');
        }
    }
    
    componentWillUnmount() {
        console.log('This will not run because App is still on screen');
    }
    
    render() {
        console.log('App is rendering!');
        console.log('this.state.name', this.state.name);
        return (
          <div className='usercard'>
            <h2>{this.state.name}</h2>
            <img src={this.state.avatar_url} className='picture' alt='' />
            <p>{this.state.login}</p>
          </div>
        );
    }  
}

export default Followers;