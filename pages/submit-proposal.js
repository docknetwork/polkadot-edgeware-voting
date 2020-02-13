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
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import substrateService from '../services/substrate';

const voteTypes = [
  'Binary',
  'MultiOption',
];

const tallyTypes = [
  'OnePerson',
  'OneCoin',
];

export default () => {
  const [isSubmitting, setIsSubmitting] = useState();
  const [newHash, setNewHash] = useState();
  const [hash, setHash] = useState();
  const [outcomeStrs, setOutcomeStrs] = useState(['', '']);
  const [state, setState] = useState({
    voteType: 0,
    tallyType: 0,
  });
  const inputLabel = useRef(null);

  const handleChange = event => {
    const newState = {};
    newState[event.target.name] = event.target.value;
    setState({
      ...state,
      ...newState,
    });
  };

  function handleCreateProposal(e) {
    e.preventDefault();
    setIsSubmitting(true);

    const outcomes = [];
    const enc = new TextEncoder();
    for (let i = 0; i < outcomeStrs.length; i++) {
      const encodedOutcome = enc.encode(outcomeStrs[i]);
      const resultArray = new Uint8Array(new ArrayBuffer(32));
      resultArray.set(encodedOutcome);
      outcomes.push(resultArray);
    }

    const data = {
      ...state,
      outcomes,
    };

    return substrateService.createProposal(data, (status, events) => {
      events.forEach(({ phase, event: { data, method, section } }) => {
        if (method === 'NewProposal') {
          setNewHash(temp1.toJSON()[1]);
        }
      });

      setIsSubmitting(false);
    }, error => {
      setIsSubmitting(false);
    });
  }

  function handleAddOutcome() {
    outcomeStrs.push('');
    setOutcomeStrs([
      ...outcomeStrs,
    ]);
  }

  return (
    <>
      <Typography variant="h5">
        Submit Proposal
      </Typography>
      <br />
      <form onSubmit={handleCreateProposal}>
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          onChange={handleChange}
          disabled={isSubmitting}
          fullWidth
          required />
        <br /><br />
        <TextField
          name="contents"
          label="Description"
          variant="outlined"
          onChange={handleChange}
          disabled={isSubmitting}
          fullWidth
          multiline
          required />
        <br /><br />

        <FormControl variant="outlined" fullWidth>
          <InputLabel ref={inputLabel}>
            Vote Type
          </InputLabel>
          <Select
            name="voteType"
            value={state.voteType}
            onChange={handleChange}
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          >
            {tallyTypes.map((type, index) => (
              <MenuItem value={index} key={index}>{type}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <br /><br />

        <div>
          {outcomeStrs.map((outcome, index) => {
            function onOutcomeChange(e) {
              outcomeStrs[index] = e.target.value;
              setOutcomeStrs([
                ...outcomeStrs
              ]);
            }

            return (
              <>
                <TextField
                  name={`outcome-${index}`}
                  label={`Outcome ${index}`}
                  variant="outlined"
                  value={outcome}
                  onChange={onOutcomeChange}
                  fullWidth
                  disabled={isSubmitting}
                  inputProps={{ maxLength: 32 }}
                  multiline
                  required />
                <br /><br />
              </>
            );
          })}

          <Button
            variant="contained"
            color="secondary"
            type="button"
            onClick={handleAddOutcome}
            disabled={isSubmitting}
            >
            Add Outcome
          </Button>
        </div>

        <br />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={isSubmitting}
          >
          Submit
        </Button>
      </form>

      <Snackbar open={isSubmitting}>
        <Alert severity="info">
          Submitting transaction, please wait...
        </Alert>
      </Snackbar>

      <Snackbar open={!!newHash}>
        <Alert severity="success">
          Proposal created with hash {newHash}
        </Alert>
      </Snackbar>
    </>
  );
}
