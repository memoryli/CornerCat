import React, { Component, PropTypes } from 'react'
import './TimeBox.less'

export default class TimeBox extends Component {

  static propTypes = {
    time: React.PropTypes.number
  }

  static defaultProps = {
    time: 1483200000000
  }

  constructor(props) {
    super(props);
    this.state = {
      month:"",
      day:0,
      year:0
    };

  }

  componentDidMount(){
    if (this.props.time) {
      let date = new Date(this.props.time);
      let m = this.getMonthStr(date.getMonth() + 1);
      let d = date.getDate();
      let y = date.getFullYear();
      this.setState({
        month:m,
        day:d,
        year:y
      });
    }
  }

  getMonthStr(str){
    let Month = "";
    switch(str){
      case 1 :
        Month =  "Jan";
        break;
      case 2 :
        Month =  "Feb";
        break;
      case 3 :
        Month =  "Mar";
        break;
      case 4 :
        Month =  "Apr";
        break;
      case 5 :
        Month =  "May";
        break;
      case 6 :
        Month =  "Jun";
        break;
      case 7 :
        Month =  "Jul";
        break;
      case 8 :
        Month =  "Aug";
        break;
      case 9 :
        Month =  "Sept";
        break;
      case 10 :
        Month =  "Oct";
        break;
      case 11 :
        Month =  "Nov";
        break;
      case 12 :
        Month =  "Dec";
        break;
      default:
        Month = "";
    }
    return Month;
  }

  render() {
    return (
      <div className="time">
          <div className="day">{this.state.month}.{this.state.day>9 ? this.state.day : '0'+ this.state.day}</div>
          <div className="year">{this.state.year}</div>
          <div className="plus">+</div>
      </div>
    );
  }
}
