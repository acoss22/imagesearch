import React from 'react';

class SearchBar extends React.Component {
    state = {term : ''}
    // onInputChange(event){
    //     console.log(event.target.value);
    // }

    // onInputClick(){
    //     console.log("clicked!");
    // }

    onFormSubmit(event){
        event.preventDefault();
        console.log(this.state.term);
    }

    render(){
        return <div className="ui segment">
           
            <form className="ui form">
                <div className="field">
                    <label>Image Search</label>
                <input type="text" 
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value})} 
                //setState automatically re renders 
                // this is a controlled element
                // onChange={(event)=> console.log(event.target.value)}
                // onChange={this.onInputChange}
                />
                </div>
               
            </form>
        </div>
    }
}

export default SearchBar;