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

import substrateService from '../../services/substrate';

const Proposal = () => {
  const router = useRouter();
  const hash = router.query.id;
  const [proposal, setProposal] = useState();
  const [voteRecords, setVoteRecords] = useState();

  async function loadProposal() {
    const data = await substrateService.getProposal(hash);
    setProposal(data.toJSON());
    console.log('setProposal', data.toJSON())
    const voteRecords = await substrateService.getVoteRecords(data.toJSON().index);
    setVoteRecords(voteRecords.toJSON());
    console.log('voteRecords', voteRecords.toJSON())
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
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Outcomes: {voteRecords ? voteRecords.outcomes.length : 0}
            </Typography>
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
