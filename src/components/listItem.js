import React, { Component } from 'react';
import { connect } from 'react-redux';
import { manage_menu,manage_active } from './../actions';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.ManageMenuReducer && nextProps.ManageMenuReducer.level[this.props.lvl].id === this.props.data.id && nextProps.ManageMenuReducer.level[this.props.lvl].id !== this.state.active ) {
      this.setState({active:true});
    }else{
      this.setState({active:false});
    }
  }
  
  

  handleClick() {
    this.props.manage_menu(this.props.lvl, this.props.data, this.props.data.id );
  }

  render() {
    const { data, lvl } = this.props;
    return (
      <li className={`child lvl-${lvl} ${this.state.active?'active':''}`} onClick={this.handleClick.bind(this)} >
        {data.title}
      </li>
    )
  }
}

const mapStateToProps = ({home,ManageMenuReducer,actives}) => {
  return {home,ManageMenuReducer,actives};
}

const mapDispatchToProps = dispatch => {
  return {
    manage_menu: (lvl, item,id) => dispatch(manage_menu(lvl, item,id)),
    manage_active:(lvl,id) => dispatch(manage_active(lvl,id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
