import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import substrateService from '../services/substrate';
import Proposal from '../components/proposal';

export default () => {
  const [proposals, setProposals] = useState();
  const [inactiveProposals, setInactiveProposals] = useState();
  const [completedProposals, setCompletedProposals] = useState();
  const [proposalCount, setProposalCount] = useState(-1);

  useEffect(() => {
    if (proposalCount === -1) {
      setProposalCount(0);
      substrateService.getActiveProposals(value => {
        setProposals(value);
        substrateService.getInactiveProposals(value => {
          setInactiveProposals(value);
          substrateService.getCompletedProposals(setCompletedProposals);
        });
      });
    }
  }, [proposals]);


  return (
    <>
      <Typography variant="h5">
        Active Proposals ({proposals ? proposals.length : 0})
      </Typography>
      <br />
      {proposals ? (
        proposals.map((proposal, index) => (
          <Proposal key={index} {...{proposal}} />
        ))
      ) : (
        <CircularProgress />
      )}

      <br /><br />

      <Typography variant="h5">
        Completed Proposals ({completedProposals ? completedProposals.length : 0})
      </Typography>
      <br />
      {completedProposals ? (
        completedProposals.map((proposal, index) => (
          <Proposal key={index} {...{proposal}} />
        ))
      ) : (
        <CircularProgress />
      )}

      <br /><br />

      <Typography variant="h5">
        Inactive Proposals ({inactiveProposals ? inactiveProposals.length : 0})
      </Typography>
      <br />
      {inactiveProposals ? (
        inactiveProposals.map((proposal, index) => (
          <Proposal key={index} {...{proposal}} />
        ))
      ) : (
        <CircularProgress />
      )}
    </>
  );
}
