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
  const { balance, hash, index, proposer, seconds } = proposal;
  const seconding = seconds.filter((_address, index) => index !== 0);

  // TODO: turns out this is for subsrate democracy, we need to redo it for edgeware
  // once we are able to submit proposals through UI
  // see: https://polkadot.js.org/api/substrate/storage.html
  // The following sections contain Storage methods are part of the default Substrate runtime. On the api, these are exposed via api.query.<module>.<method>.

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          balance: {`${balance}`}
        </Typography>
        <Typography variant="h5" component="h2">
          hash: {`${hash}`}
        </Typography>
        <Typography color="textSecondary">
          index: {`${index}`}
        </Typography>
        <Typography color="textSecondary">
          proposer: {`${proposer}`}
        </Typography>
        <br />
        {seconding.length !== 0 && (
          <>
            <Typography variant="h6">
              {`Seconds (${seconding.length})`}
            </Typography>
            <br />
            {seconding.map((address, count) => (
              <Typography color="textSecondary">
                count: {`${count}`}
                <br />
                address: {`${address}`}
              </Typography>
            ))}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default () => {
  const [proposals, setProposals] = useState([]);
  const [proposalCount, setProposalCount] = useState(-1);

  useEffect(() => {
    if (proposalCount === -1) {
      setProposalCount(proposals.length);
      substrateService.getProposals(list => {
        list.forEach(proposal => {
          proposals.push(proposal);
          setProposalCount(proposals.length);
        });
      });
    }
  }, [proposals]);


  return (
    <Container maxWidth="md">
      <Typography variant="h5">
        Proposals ({proposals.length})
      </Typography>
      <br />
      {proposals.map((proposal, index) => (
        <Proposal key={index} {...{proposal}} />
      ))}
    </Container>
  );
}
