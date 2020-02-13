import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Autocomplete from '@material-ui/lab/Autocomplete';

import substrateService from '../services/substrate';

const AdvanceProposal = () => {
  const [proposal, setProposal] = useState();
  const [proposals, setProposals] = useState();
  const [proposalCount, setProposalCount] = useState(-1);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (proposalCount === -1) {
      setProposalCount(0);
      substrateService.getActiveProposals(activeProposals => {
        substrateService.getInactiveProposals(inactiveProposals => {
          setProposals([...activeProposals, ...inactiveProposals]);
        });
      });
    }
  }, [proposals]);

  function handleProposalChange(event, proposal) {
    setProposal(proposal);
  }

  function handleAdvanceProposal(e) {
    e.preventDefault();
    setIsSubmitting(true);
    substrateService.advanceProposal(
      proposal.hash,
      () => {
        setIsSubmitting(false);
        setHasSubmitted(true);
      },
      () => {
        setIsSubmitting(false);
      }
    );
  }

  let proposalStage = proposal ? Object.keys(proposal.data.stage)[0] : null;

  return (
    <>
      <Typography variant="h5">Advance Proposal</Typography>
      <br />
      <form noValidate onSubmit={handleAdvanceProposal}>
        <Autocomplete
          fullWidth
          options={proposals}
          onChange={handleProposalChange}
          getOptionLabel={option => {
            return option.data ? option.data.title : option.hash;
          }}
          renderInput={params => (
            <TextField
              {...params}
              label="Select Proposal"
              variant="outlined"
              fullWidth
            />
          )}
        />

        <br />

        {proposal && (
          <Alert severity="info">
            This will change proposal {proposal.hash} from {proposalStage} to{' '}
            {proposalStage === 'prevoting' ? 'voting' : 'complete'}.
          </Alert>
        )}

        <br />

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>

      <Snackbar open={isSubmitting}>
        <Alert severity="info">Submitting transaction, please wait...</Alert>
      </Snackbar>

      <Snackbar open={hasSubmitted}>
        <Alert severity="success">Proposal stage has been advanced</Alert>
      </Snackbar>
    </>
  );
};

export default AdvanceProposal;
