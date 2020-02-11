import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import substrateService from '../../services/substrate';

const Proposal = () => {
  const router = useRouter();
  const hash = router.query.id;
  const [proposal, setProposal] = useState();
  const [voteRecords, setVoteRecords] = useState();
  const [vote, setVote] = React.useState('female');

  async function loadProposal() {
    const data = await substrateService.getProposal(hash);
    setProposal(data.toJSON());
    console.log('setProposal', data.toJSON())
    const voteRecords = await substrateService.getVoteRecords(data.toJSON().index);
    setVoteRecords(voteRecords.toJSON());
    console.log('voteRecords', voteRecords.toJSON())
  }

  const handleVoteChange = event => {
    setVote(event.target.value);
  };

  function handleVote() {
    substrateService.vote(voteRecords.id, vote);
  }

  useEffect(() => {
    if (!proposal && hash) {
      loadProposal();
    }
  }, [proposal]);

  // TODO: list otucomes, allow to select them, then on submit vote call extrinsic voting.commit or voting.reveal with hash of vote outcome

  if (proposal) {
    return (
      <Container maxWidth="md">
        <Typography variant="h4">
          {proposal.title}
        </Typography>
        <br />
        <Card>
          <CardContent>
            <Typography variant="h5">
              {proposal.contents}
            </Typography>
            <br />
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Hash: {hash}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Commitments: {voteRecords ? voteRecords.commitments.length : 0}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Reveals: {voteRecords ? voteRecords.reveals.length : 0}
            </Typography>

            <br /><br />

            {voteRecords && (
              <>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Your Vote</FormLabel>
                  <RadioGroup aria-label="vote" name="vote" value={vote} onChange={handleVoteChange}>
                    {voteRecords.outcomes.map((outcome, index) => (
                      <FormControlLabel key={index} value={outcome} control={<Radio />} label={outcome} />
                    ))}
                  </RadioGroup>
                </FormControl>

                <br /><br />

                <Button
                  variant="contained"
                  color="secondary"
                  type="button"
                  onClick={handleVote}
                  >
                  Submit Vote
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </Container>
    );
  } else {
    return (
      <Typography variant="h4">
        Loading...
      </Typography>
    );
  }
};

export default Proposal;
