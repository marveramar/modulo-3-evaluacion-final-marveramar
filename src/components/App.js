
import React from 'react';
import { ApiFetch } from '../services/Api';
import CharacterList from './CharacterList';
import Filter from './Filter';
import { Switch, Route } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCharacters: [],
            value: '',
            id: '',
        }

        this.handleOnChange = this.handleOnChange.bind(this);
        this.renderDetail = this.renderDetail.bind(this);



    }
    componentDidMount() {
        ApiFetch()
            .then(data => {
                console.log(data)
                this.setState({ allCharacters: data.results })
            })
    }

    handleOnChange(searching) {
        this.setState({ value: searching })

    }
    renderDetail(props) {
        console.log(props)
        console.log(props.match.params.id)
        console.log(this.state.allCharacters)
        const routeId = props.match.params.id;
        const character = this.state.allCharacters.find(character => character.id === routeId);
        console.log(character)
        {
            character === undefined ? 'Loading' : <CharacterDetail character={character} />
        }
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/">
                        <Filter
                            handleOnChange={this.handleOnChange}
                            value={this.state.value}
                        />
                        <CharacterList
                            characters={this.state.allCharacters}
                            searching={this.state.value} />
                    </Route>
                    <Route path="/characterList/:id" render={this.renderDetail} />
                </Switch>
            </div>
        )
    }
}
export default App;