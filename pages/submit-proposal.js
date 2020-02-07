import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import substrateService from '../services/substrate';

// TODO: finish ui for submtiting and selecting various options

const voteTypes = [
  'Binary',
  'MultiOption',
  'RankedChoice'
];

const tallyTypes = [
  'OnePerson',
  'OneCoin'
];

export default () => {
  const [hash, setHash] = useState();
  const [state, setState] = useState({
    voteType: 0,
    tallyType: 0,
  });
  const inputLabel = useRef(null);
  const handleHashChange = event => {
    setHash(event.target.value);
  };

  const handleChange = event => {
    const newState = {};
    newState[event.target.name] = event.target.value;
    setState({
      ...state,
      ...newState,
    });
  };

  function handleAdvanceProposal(e) {
    e.preventDefault();
    substrateService.advanceProposal(hash);
  }

  function handleCreateProposal(e) {
    e.preventDefault();

    // fixed size 32 length array of u8
    const YES_VOTE = new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
    const NO_VOTE = new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const outcomes = [YES_VOTE, NO_VOTE];

    const contents = JSON.stringify({
      description: state.description
    });

    console.log('state', state)
    substrateService.createProposal(state.title, contents, outcomes, state.voteType, state.tallyType);
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h5">
        Submit Proposal
      </Typography>
      <br />
      <form noValidate onSubmit={handleCreateProposal}>
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          onChange={handleChange}
          fullWidth />
        <br /><br />
        <TextField
          name="description"
          label="Description"
          variant="outlined"
          onChange={handleChange}
          fullWidth
          multiline />
        <br /><br />

        <FormControl variant="outlined" fullWidth>
          <InputLabel ref={inputLabel}>
            Vote Type
          </InputLabel>
          <Select
            name="voteType"
            value={state.voteType}
            onChange={handleChange}
          >
            {voteTypes.map((type, index) => (
              <MenuItem value={index} key={index}>{type}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <br /><br />

        <FormControl variant="outlined" fullWidth>
          <InputLabel ref={inputLabel}>
            Vote Type
          </InputLabel>
          <Select
            name="tallyType"
            value={state.tallyType}
            onChange={handleChange}
          >
            {tallyTypes.map((type, index) => (
              <MenuItem value={index} key={index}>{type}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <br /><br />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          >
          Submit
        </Button>
      </form>

      <br /><br />
      <Typography variant="h5">
        Advance Proposal
      </Typography>
      <br />
      <form noValidate onSubmit={handleAdvanceProposal}>
        <TextField
          name="hash"
          label="Proposal Hash"
          variant="outlined"
          onChange={handleHashChange}
          fullWidth />
        <br /><br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          >
          Submit
        </Button>
      </form>
    </Container>
  );
}
