
import React from 'react';
import { ApiFetch } from '../services/Api';
import CharacterList from './CharacterList';
import Filter from './Filter';
import { Switch, Route } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import Header from './Header';






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

        const routeId = props.match.params.id;
        const characters = this.state.allCharacters
        for (let character of characters) {

            if (character.id == routeId) {
                return (
                    <CharacterDetail character={character} />)
            }

            else {
                console.log('nosedequemehablas')
            }
        }
    }



    render() {
        return (
            <div className="main">
                <Header />
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
                    <Route path="/character/:id" render={this.renderDetail} />
                </Switch>
            </div >
        )
    }
}
export default App;