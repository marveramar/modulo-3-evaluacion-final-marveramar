import React from 'react';
class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(e) {
        let searching = e.target.value
        this.props.handleOnChange(searching)

    }
    render() {
        return (
            <form className="form" >
                <label className="form__label" htmlFor="inputSearch">Search</label>
                <input className="form__input" name="inputSearch" type="text" value={this.props.value} onChange={this.handleOnChange} />

            </form>
        )
    }
}

export default Filter;