import React from 'react';

class TodoSearch extends React.Component {

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch () {
    let showCompleted = this.refs.showCompletedCheckbox.checked;
    let searchText = this.refs.searchTextInput.value;

    this.props.onSearch(showCompleted, searchText);
  }

  render() {
    return (
      <div className="container__header">
        <div>
          <input type="text" ref="searchTextInput" placeholder="Search todos..." onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompletedCheckbox" onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }

}

export default TodoSearch;
