
//hooks
import { useState, useEffect } from 'react';
//css
import './App.css';
//User
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  //hooks
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([monsters]);

  //app mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, [])

  //monsters or searchfield changed 
  useEffect(() => {
    setFilteredMonsters(monsters.filter((monster) => {
      return (monster.name.toLocaleLowerCase().includes(searchField))
    }))
  }, [monsters, searchField])

  //events
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (<div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>
    <SearchBox
      onChangeHandler={onSearchChange}
      placeholder={'Type to Search Monster...'}
      className='monsters-search-box' />
    <CardList cards={filteredMonsters} />

  </div>)
}

// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//     console.log('constructor')
//   }

//   componentDidMount() {
//     
//     console.log('componentDidMount')
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(
//       () => {
//         return { searchField }
//       })
//   }

//   render() {
//     console.log('render appjs')

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = 

//     return (

//     );
//   }
// }

export default App;
