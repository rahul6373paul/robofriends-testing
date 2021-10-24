import React, { Component } from 'react';
import { CardList } from '../components/CardList';
import SearchBox from '../components/SeachBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';

import './MainPage.css';

class MainPage extends Component {

    componentDidMount(){
      this.props.onReqRobots();
    }

    filteredRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()) ;
        })        
    }

    render(){

        return (this.props.isPending?         
                    <h1>Loading ...</h1> :        
                        (<div>
                            <div className="tc">
                                <Header />
                                <SearchBox searchChange={this.props.onSearchChange} />
                                <Scroll>
                                    <CardList robots={this.filteredRobots(this.props.robots)} />
                                </Scroll>
                            </div>
                        </div>)
        );
    
        }
    
    
}

export default MainPage;