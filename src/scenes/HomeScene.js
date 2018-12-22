import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './../components/listItem'
import { reset_menu } from './../actions';

class HomeScene extends Component {
  constructor(props) {
    super(props)
    this.myScript = this.myScript.bind(this);
  }

  componentWillMount() {
    console.log('props', this.props);
    let a = document.getElementById('root');
    a.addEventListener("click",this.myScript);
  }

  myScript(e) {
    console.log('reset');
    // this.props.reset_menu();
  }

  render() {
    const { menus } = this.props.home;
    const { parent2, parent2Data, parent3, parent3Data, parent4, parent4Data } = this.props.ManageMenuReducer;
    if (menus && menus.items) {
      return (
        <span style={{display:'flex',width:'100%',height:'100%'}}>
          <nav id="navigation">
            <ul className="parent" id="parent1">
              {menus.items.map((item, index) => <List key={index + 1000} data={item} lvl={1} />)}
            </ul>
            <ul className="parent child-parent" style={{ display: parent2 ? 'grid' : 'none' }} id="parent2">
              {parent2Data.map((item, index) => <List key={index + 2000} data={item} lvl={2} />)}
            </ul>
            <ul className="parent child-parent" style={{ display: parent3 ? 'grid' : 'none' }} id="parent3">
              {parent3Data.map((item, index) => <List key={index + 3000} data={item} lvl={3} />)}
            </ul>
            <ul className="parent child-parent" style={{ display: parent4 ? 'grid' : 'none' }} id="parent4">
              {parent4Data.map((item, index) => <List key={index + 4000} data={item} lvl={4} />)}
            </ul>
          </nav>
          <span style={{width:'100%'}}>

          </span>
        </span>
      );
    } else {
      return (
        <div>loading</div>
      );
    }
  }
}

const mapStateToProps = ({ home, ManageMenuReducer, actives }) => {
  return { home, ManageMenuReducer, actives };
}

const mapDispatchToProps = dispatch => {
  return {
    reset_menu: () => dispatch(reset_menu()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScene);
