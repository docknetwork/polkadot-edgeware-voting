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
  const [results, setResults] = useState();
  const [vote, setVote] = useState('');

  async function loadProposal() {
    const data = await substrateService.getProposal(hash);
    setProposal(data.toJSON());
    const voteRecords = await substrateService.getVoteRecords(data.toJSON().vote_id);
    const voteData = voteRecords.toJSON();
    setVoteRecords(voteData);
    console.log('setProposal', data.toJSON())
    console.log('voteRecords', voteData);

    if (voteData) {
      const voteResults = {};
      const revealsCount = voteData.reveals.length;
      for (let i = 0; i < revealsCount; i++) {
        const reveal = voteData.reveals[i];
        const voterAddress = reveal[0];
        const votedOptions = reveal[1];

        for (let c = 0; c < votedOptions.length; c++) {
          const option = votedOptions[c];
          if (voteResults[option]) {
            voteResults[option]++;
          } else {
            voteResults[option] = 1;
          }
        }
      }

      setResults(voteResults);
    }
  }

  const handleVoteChange = event => {
    setVote(event.target.value);
  };

  function hexToAscii(str) {
  	const hex = str.toString().substr(2, str.length);
  	let result = '';
  	for (var n = 0; n < hex.length; n += 2) {
      const intInput = parseInt(hex.substr(n, 2), 16);
      if (intInput !== 0) {
    		result += String.fromCharCode(intInput);
      }
  	}
  	return result;
  }

  function handleVote() {
    substrateService.vote(voteRecords.id, vote);
  }

  useEffect(() => {
    if (!proposal && hash) {
      loadProposal();
    }
  }, [proposal]);

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

            {voteRecords && (
              <>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Commitments: {voteRecords ? voteRecords.commitments.length : 0}
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Reveals: {voteRecords ? voteRecords.reveals.length : 0}
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Stage: {Object.keys(voteRecords.data.stage)[0]}
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Vote Type: {voteRecords.data.vote_type.binary === null ? 'Binary' : 'MultiOption'}
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Tally Type: {voteRecords.data.tally_type.oneperson === null ? 'OnePerson' : 'OneCoin'}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Is Commit/Reveal: {voteRecords.data.is_commit_reveal ? 'true' : 'false'}
                </Typography>

                <br />

                <FormControl component="fieldset">
                  <FormLabel component="legend">Votes</FormLabel>
                  <RadioGroup aria-label="vote" name="vote" value={vote} onChange={handleVoteChange}>
                    {voteRecords.outcomes.map((outcome, index) => (
                      <FormControlLabel key={index} value={outcome} control={<Radio />} label={`${hexToAscii(outcome)} - ${results ? (results[outcome] || 0) : 0}/${voteRecords ? voteRecords.reveals.length : 0} votes`} />
                    ))}
                  </RadioGroup>
                </FormControl>

                {Object.keys(voteRecords.data.stage)[0] === 'voting' && (
                  <>
                    <br /><br />
                    <Button
                      variant="contained"
                      type="button"
                      onClick={handleVote}
                      >
                      Submit Vote
                    </Button>
                  </>
                )}
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
