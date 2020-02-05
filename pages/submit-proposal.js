import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// pub enum VoteStage {
// 	// Before voting stage, no votes accepted
// 	PreVoting,
// 	// Commit stage, only for commit-reveal-type elections
// 	Commit,
// 	// Active voting stage, votes (reveals) allowed
// 	Voting,
// 	// Completed voting stage, no more votes allowed
// 	Completed,
// }

// pub struct VoteData<AccountId> {
// 	// creator of vote
// 	pub initiator: AccountId,
// 	// Stage of the vote
// 	pub stage: VoteStage,
// 	// Type of vote defined abovoe
// 	pub vote_type: VoteType,
// 	// Tally metric
// 	pub tally_type: TallyType,
// 	// Flag for commit/reveal voting scheme
// 	pub is_commit_reveal: bool,
// }

// pub enum VoteType {
// 	// Binary decision vote, i.e. 2 outcomes
// 	Binary,
// 	// Multi option decision vote, i.e. > 2 possible outcomes
// 	MultiOption,
// 	// Ranked choice voting
// 	RankedChoice,
// }

// pub struct VoteRecord<AccountId> {
// 	// Identifier of the vote
// 	pub id: u64,
// 	// Vote commitments
// 	pub commitments: Vec<(AccountId, VoteOutcome)>,
// 	// Vote reveals
// 	pub reveals: Vec<(AccountId, Vec<VoteOutcome>)>,
// 	// Vote data record
// 	pub data: VoteData<AccountId>,
// 	// Vote outcomes
// 	pub outcomes: Vec<VoteOutcome>,
// }



export default () => {
  // NOTES:
  // to submit a proposal we need to submit an extrinsic (see https://polkadot.js.org/apps/#/extrinsics connected to same node)
  // need to build proposal data for signalling.createProposal using sudo alice key
  // then we need to elevate proposal status with its hash

  return (
    <Container maxWidth="md">
      <Typography variant="h5">
        Submit Proposal
      </Typography>
      <br />
      <form noValidate>
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
