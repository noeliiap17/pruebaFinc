import React from 'react';
import Table from "../components/Table";
import "../styles/Table.css";
import '../styles/Main.css';
import '../styles/Search.css';

const Search = ({ inputValue, onInputChange, onSearch, onReset }) => {
  return(
    <form className="search__container">
        <input value={inputValue} placeholder="Buscador" onChange={onInputChange}></input>
        <select name="searchSelect" >
            <option value="question">Question</option>
            <option value="user">User</option>
            <option value="category">Category</option>
        </select>
        <button onClick={onSearch}>
         <i class="fa fa-search"></i>
        </button>
        <button onClick={onReset}>Reset</button>
    </form>
)
}



  class Main extends React.Component {
    constructor() {
      super();
  
      this.state = {
        data: [],
        value: null,
        selectValue: null
      };
    };

    componentDidMount(){
        this.onFetchData()
    }

    onFetchData = () => {
      fetch('https://opentdb.com/api.php?amount=100')
        .then(response => response.json())
        .then(data => this.setState({data: data.results}));
    }

    handleInputChange = event => {
      const value = event.target.value;
      this.setState({ value })
    }

    handleSearch = (event) => {
      event.preventDefault();
      const data = this.state.data;
      const selectValue = document.getElementsByName("searchSelect")[0].value;
      const newData = data.filter(question => 
          question[selectValue].toLowerCase().includes(this.state.value.toLowerCase()))

      this.setState({
        value: null,
        data: newData
      })
    }
  

    processQuestions() {
        const questions = this.state.data || [];
        const proccessedQuestions = questions.map((question, index) => {
          return Object.assign({}, question, {
            id: <span className="table__header">{index +1}</span>,
            category:  <span className="table__header">{question.category}</span>,
            types:  <span className="table__header">{question.type}</span>,
            difficulty:  <span className="table__header">{question.difficulty}</span>,
            question: <span className="table__header">{question.question}</span>,
          });
        });
        return proccessedQuestions;
      }

      handleSelectChange = event => {
        this.setState({
          selectValue: event.target.value
        })
      }

      handleReset= () => {
        this.onFetchData();

        this.setState({
          value: null,
          selectValue: "question"
        });
      }
  
  
    render() {
        const data= this.processQuestions();
        console.log(this.state.data)
        console.log(this.state.selectValue)
        const columns = [
            {
              Header: <span className="table__header">"ID"</span>,
              accessor: "id",
              minWidth: 25
            },
            {
              Header:  <span className="table__header">"Category"</span>,
              accessor: "category",
              minWidth: 200
            },
            {
              Header:  <span className="table__header">"Types"</span>,
              accessor: "types",
              minWidth: 100
            },
            {
              Header:  <span className="table__header">"Difficulty"</span>,
              accessor: "difficulty",
              minWidth: 60
            },
            {
              Header:  <span className="table__header">"Question / Statement"</span>,
              accessor: "question",
              minWidth: 300
            }
          ];
      return (
        <main className="main">
                <div className="container">
                    <Search 
                      inputValue={this.state.value} 
                      onInputChange={this.handleInputChange} 
                      onSearch={this.handleSearch}
                      onReset={this.handleReset}
                      />
                    <h1>browser questions</h1>
                    <Table data={data} columns={columns} filterable={false} showPagination={true} className="my__table"  />
                </div>
            </main>
      );
    }
  }


export default Main;
