import React, { useState, useEffect } from 'react';

function OutputDb(props) {
  // console.log('props>>>>>>>>>>>>>..', props);
  const [output, setOutput] = useState([]);
  const [outputKeys, setOutputKeys] = useState([]);
  useEffect(() => {
    if (props.dataFetched && props.dataFetched.length > 0) {
      if (output.length <= 0) {
        setOutput(props.dataFetched);
        console.log('output set ??>>>>>>>>>>>>>>>>', output);
        setOutputKeys(Object.keys(props.dataFetched[0]));
      }
      console.log('props.dataFetched>>>>>>>>>>', props.dataFetched);
    }
  });
  function handleSetOutput() {
    setOutput('outputscreen');
  }
  return (
    <React.Fragment>
      <div>
        <textarea
          rows="12"
          cols="120"
          readOnly
          value={output.map((data) => {
            return outputKeys.map((key) => {
              <br />;
              return data[key];
            });
          })}
          placeholder="Wait for output here ..."
          style={{
            backgroundColor: '#000033',
            fontFamily: 'cursive',
            color: 'white',
            padding: '10px',
          }}
          onChange={handleSetOutput}
        ></textarea>
      </div>
    </React.Fragment>
  );
}

export default OutputDb;
