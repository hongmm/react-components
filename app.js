// TODO
var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList list={["Toilet Paper", "Hand Sanitizer"]}/>
  </div>
)

var GroceryList = (props) => (
  <ul>
    {props.list.map(item =>
      <GroceryListItem item={item}/>
    )}
  </ul>
)

// var GroceryListItem = (props) => (
//   // var test = props.list.forEach(item => <li>{item}</li>)
//   <ul>
//     <li>{props.list[0]}</li>
//     <li>{props.list[1]}</li>
//   </ul>
// )

// var ToiletPapers = () => (<ul>Toilet Paper</ul>)
// var HandSanitizers = () => (<ul>Hand Sanitizer</ul>)

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: true
    });
  }

  onListItemLeave() {
    this.setState({
      done: false
    });
  }

  // test() {
  //   this.props.list.forEach((item) => {
  //     return (<li>{item}</li>);
  //   })
  // }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : ''
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemLeave.bind(this)}>{this.props.item}</li>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("app"));