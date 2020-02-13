import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Skeleton from '@material-ui/lab/Skeleton';

import substrateService from '../services/substrate';

const Proposal = ({proposal}) => {
  let stage = 'prevoting';
  if (proposal.data) {
    const stageKeys = Object.keys(proposal.data.stage);
    stage = stageKeys[0];
  }

  return (
    <Link href="/proposal/[id]" as={`/proposal/${proposal.hash}`}>
      <a>
        <Card>
          {proposal.data ? (
            <>
              <CardActionArea>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {proposal.data.transition_time} seconds left
                  </Typography>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {`${proposal.data.title}`}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {`${proposal.data.contents}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {stage === 'voting' ? (
                  <Button size="small">Vote</Button>
                ) : (
                  <Button size="small">View Results</Button>
                )}
              </CardActions>
            </>
          ) : (
            <>
              <CardActionArea>
                <CardContent>
                  <Skeleton variant="text" height={20} />
                  <Skeleton variant="text" height={20} />
                  <br />
                  <Skeleton variant="rect" height={80} />
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Skeleton variant="rect" height={30} width={64} />
              </CardActions>
            </>
          )}
        </Card>
        <br />
      </a>
    </Link>
  );
};

export default Proposal;
