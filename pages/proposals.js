import React, {useState, useEffect} from 'react';
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

import substrateService from '../services/substrate';

const Proposal = ({proposal}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          {`${proposal.hash}`}
        </Typography>
        {proposal.data && (
          <>
            <Typography variant="h5" component="h2">
              {`${proposal.data.title}`}
            </Typography>
            <Typography color="textSecondary">
              {`${proposal.data.contents}`}
            </Typography>
            <Typography color="textSecondary">
              author: {`${proposal.data.author}`}
            </Typography>
            <Typography color="textSecondary">
              stage: {JSON.stringify(proposal.data.stage)}
            </Typography>
            <Typography color="textSecondary">
              index: {`${proposal.data.index}`}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default () => {
  const [proposals, setProposals] = useState([]);
  const [inactiveProposals, setInactiveProposals] = useState([]);
  const [proposalCount, setProposalCount] = useState(-1);

  useEffect(() => {
    if (proposalCount === -1) {
      setProposalCount(0);
      substrateService.getActiveProposals(setProposals);
      substrateService.getInactiveProposals(setInactiveProposals);
    }
  }, [proposals]);


  return (
    <Container maxWidth="md">
      <Typography variant="h5">
        Active Proposals ({proposals.length})
      </Typography>
      <br />
      {proposals.map((proposal, index) => (
        <Proposal key={index} {...{proposal}} />
      ))}

      <br /><br />

      <Typography variant="h5">
        Inactive Proposals ({inactiveProposals.length})
      </Typography>
      <br />
      {inactiveProposals.map((proposal, index) => (
        <Proposal key={index} {...{proposal}} />
      ))}
    </Container>
  );
}
