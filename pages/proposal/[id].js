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
  const [isConnecting, setIsConnecting] = useState(false);

  return (
    <Grid container spacing={3}>
      hello world {router.query.id}
    </Grid>
  );
};

export default Proposal;
