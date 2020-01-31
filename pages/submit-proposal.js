import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default () => {
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
