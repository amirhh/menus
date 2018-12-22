import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './../components/listItem'
import { reset_menu } from './../actions';
import ScrollArea from 'react-scrollbar'

class HomeScene extends Component {
  constructor(props) {
    super(props)
    this.state = {
      islvl1: false
    }
  }

  componentDidMount() {
    console.log('props',this.props);
  }
  

  componentWillReceiveProps(nextProps) {
    if (nextProps.ManageMenuReducer.level[1].id) {
      this.setState({ islvl1: true });
    } else {
      this.setState({ islvl1: false });
    }
  }


  handleReset() {
    this.setState({ islvl1: false },()=>{
      this.props.reset_menu();
    });
  }

  render() {
    const { menus } = this.props.home;
    const { parent2, parent2Data, parent3, parent3Data, parent4, parent4Data } = this.props.ManageMenuReducer;
    if (menus && menus.items) {
      return (
        <span style={{ display: 'flex', width: '100%', height: '100%' }}>
          <nav id="navigation">
            <ScrollArea speed={0.8} className="area" contentClassName="content" horizontal={false} >
              <ul className="parent" id="parent1">
                {menus.items.map((item, index) => <List key={index + 1000} data={item} lvl={1} />)}
              </ul>
            </ScrollArea>
            <ScrollArea speed={0.8} className="area" contentClassName="content" horizontal={false} >
              <ul className="parent child-parent" style={{ display: parent2 ? 'grid' : 'none' }} id="parent2">
                {parent2Data.map((item, index) => <List key={index + 2000} data={item} lvl={2} />)}
              </ul>
            </ScrollArea>
            <ScrollArea speed={0.8} className="area" contentClassName="content" horizontal={false} >
            <ul className="parent child-parent" style={{ display: parent3 ? 'grid' : 'none' }} id="parent3">
              {parent3Data.map((item, index) => <List key={index + 3000} data={item} lvl={3} />)}
            </ul>
            </ScrollArea>
            <ScrollArea speed={0.8} className="area" contentClassName="content" horizontal={false} >
            <ul className="parent child-parent" style={{ display: parent4 ? 'grid' : 'none' }} id="parent4">
              {parent4Data.map((item, index) => <List key={index + 4000} data={item} lvl={4} />)}
            </ul>
            </ScrollArea>

          </nav>
          <span
            id="spanMouseOut"
            style={{ display: this.state.islvl1 ? 'block' : 'none', width: '100%', position: 'fixed', zIndex: '99', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={this.handleReset.bind(this)}
          >
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
