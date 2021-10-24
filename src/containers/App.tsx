import React, { Component } from 'react';
import MainPage from '../components/MainPage';
import { connect } from 'react-redux';
import { requestRobots, setSearchField } from '../actions';


const mapStateToProps = (store: any) => ({
    searchField: store.searchRobots.searchField,
    robots: store.requestRobots.robots,
    isPending: store.requestRobots.isPending,
    error: store.requestRobots.error
})

const mapDispatchToProps = (dispatch: any) => ({
    onSearchChange: (event: any) => dispatch(setSearchField(event.target.value)),
    onReqRobots: ()=> dispatch(requestRobots())
})

class App extends Component {

    render(){
        return <MainPage {...this.props} />
        }    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);