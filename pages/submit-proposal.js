import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import substrateService from '../services/substrate';

export default () => {
  // NOTES:
  // to submit a proposal we need to submit an extrinsic (see https://polkadot.js.org/apps/#/extrinsics connected to same node)
  // need to build proposal data for signalling.createProposal using sudo alice key
  // then we need to elevate proposal status with its hash

  function handleCreateProposal(e) {
    e.preventDefault();

    const title = 'My Proposal';
    const contents = JSON.stringify({
      description: 'test'
    });

    // fixed size 32 length array of u8
    const YES_VOTE = new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
    const NO_VOTE = new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

    const outcomes = [YES_VOTE, NO_VOTE];
    const voteType = 0; // Binary, MultiOption, RankedChoice
    const tallyType = 0; // OnePerson, OneCoin

    substrateService.createProposal(title, contents, outcomes, voteType, tallyType);
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
          fullWidth />
        <br /><br />
        <TextField
          name="description"
          label="Description"
          variant="outlined"
          fullWidth
          multiline />
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
