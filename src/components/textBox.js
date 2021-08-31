import React, { useState } from 'react';

function TextBox(props) {
  const [query, setQuery] = useState('');
  const [restMethod, setRestMethod] = useState('GET');
  let details = props.details;
  let apiMethods = ['GET', 'POST', 'PUT', 'DELETE'];
  function handleQueryChange(e) {
    setQuery(e.target.value);
    // setQuery(query);
  }
  function handleQuerySubmit(e) {
    e.preventDefault();
    console.log('query >>>>>>>>>>>', query);
    props.handleQuery(query, restMethod);
  }

  function handleMethodChange(e) {
    console.log(e.target.value);
    setRestMethod(e.target.value);
  }
  return (
    <React.Fragment>
      <div>
        <form onSubmit={handleQuerySubmit}>
          <select
            style={{
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
            }}
            onChange={handleMethodChange}
          >
            {/* <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option> */}
            {apiMethods.map((e, i) => {
              return (
                <option name={e} value={e} key={i}>
                  {e}
                </option>
              );
            })}
          </select>
          <div>
            <textarea
              rows="12"
              cols="120"
              autoFocus
              value={query}
              name="query"
              color="white"
              placeholder="Enter your query here..."
              style={{
                backgroundColor: 'white',
                fontFamily: 'cursive',
                padding: '10px',
              }}
              onChange={handleQueryChange}
              onSubmit={handleQuerySubmit}
            />
          </div>

          <div
            className="btn btn-success mb-3 mt-2"
            onClick={handleQuerySubmit}
            style={{ float: 'left' }}
          >
            Run Query
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default TextBox;
