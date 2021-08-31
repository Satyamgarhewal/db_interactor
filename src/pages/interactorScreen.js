import React, { Component } from 'react';
import TextBox from '../components/textBox';
import OutputDb from '../components/outputBox';
import ConnectionModal from '../components/modal';

class Interactor extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      hostname: '',
      isModalOpen: false,
      response: '',
    };

    this.response = [];
    this.fetchGetCalls = this.fetchGetCalls.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  componentDidMount() {
    const { username, password, hostname } = this.state;
    if ((username || password || hostname) === '') {
      this.setState({
        isModalOpen: false,
      });
    }
    this.setUpResponse();
  }

  async handleQuery(query, method) {
    let url = 'http://localhost:9000/';
    let response;
    console.log('query fetched >>>', query);
    console.log('rest method', method);
    // this.fetchData(query, method);
    if (query.length > 0 && method === 'GET') {
      // url = `http://localhost:9000/get?query=${query}`;
      url = `http://localhost:9000/get`;
      // response = fetch(url, {
      //   method: 'GET',
      // })
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .catch((err) => {
      //     console.log('err fetched >>>>>>>>>>>>', err);
      //   });
      // console.log('response fetched >>>>>>>>>>>>', response);
      // this.setState({
      //   response: response,
      // });

      let comeback = await this.fetchGetCalls(query, url);
      console.log('comeback response >>>>>>>>', comeback);
      this.setState(
        {
          response: comeback,
        },
        () => {
          console.log('response set as>>>>>>>>>>', this.state.response);
        }
      );
    } else if (query.length > 0 && method === 'POST') {
    } else if (query.length > 0 && method === 'PUT') {
    } else if (query.length > 0 && method === 'DELETE') {
    }
    console.log('response >>>>>>>>>>>>', response);
  }

  async fetchGetCalls(query, url) {
    console.log('inside fetch get calls>>>>>>>>>>>>>');
    let response;
    url = `http://localhost:9000/get`;
    response = await fetch(url, {
      method: 'GET',
    })
      .then((res) => {
        // this.setUpResponse(res.json());
        return res.json();
      })
      .catch((err) => {
        console.log('err fetched >>>>>>>>>>>>', err);
      });
    console.log('response fetched >>>>>>>>>>>>', response);
    return response;
  }

  setUpResponse = () => {
    console.log('response fetched in function>>>>>>>>>>>>>>');
  };

  // async fetchData(query, method) {

  // }

  render() {
    this.setUpResponse();
    return (
      <React.Fragment>
        <div className="container">
          <div className="mt-2">
            <div>
              <TextBox handleQuery={this.handleQuery} />
              <br />
              <OutputDb dataFetched={this.state.response} />
              {this.state.isModalOpen ? <ConnectionModal /> : null}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Interactor;
