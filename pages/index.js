import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Layout from '../components/layout';

import substrateService from '../services/substrate';

const CustomCard = styled(Card)`
  margin-top: 20px;
`;

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Block = ({block}) => {
  const classes = useStyles();
  const hashHex = 'TODO: get hash';
  console.log(`Block`, block);
  return (
    <CustomCard className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {hashHex}
        </Typography>
        <Typography variant="h5" component="h2">
          {`${block.number}`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          parentHash: {`${block.parentHash}`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          stateRoot: {`${block.stateRoot}`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          extrinsicsRoot: {`${block.extrinsicsRoot}`}
        </Typography>
      </CardContent>
    </CustomCard>
  );
};

const Event = ({record}) => {
  const { event, phase } = record;
  const types = event.typeDef;
  const classes = useStyles();

  return (
    <CustomCard className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {`${event.section}:${event.method}:: (phase=${phase.toString()})`}
        </Typography>
        <Typography variant="h5" component="h2">
          {`${event.meta.documentation.toString()}`}
        </Typography>

        {event.data.map((data, index) => (
          <Typography className={classes.pos} color="textSecondary" key={index}>
            {`${types[index].type}: ${data.toString()}`}
          </Typography>
        ))}
      </CardContent>
    </CustomCard>
  );
};

const Index = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setConnected] = useState(false);
  const [blocks, setBlocks] = useState([]);
  const [events, setEvents] = useState([]);
  const [blockCount, setBlockCount] = useState(-1);
  const [eventCount, setEventCount] = useState(-1);

  async function getBlocks() {
    setBlockCount(0);
    const unsubscribe = await substrateService.subscribeNewHeads((header) => {
      blocks.push(header);
      setBlockCount(blocks.length);
    });
  }

  function getEvents() {
    substrateService.getEvents(record => {
      events.push(record);
      setEventCount(events.length);
      console.log('record', record);
    });
  }

  useEffect(() => {
    if (blockCount === -1) {
      getBlocks();
      getEvents();
    }
  });

  return (
    <Layout>
      <Grid container spacing={3}>
        {blocks && (
          <Grid item xs={6}>
            <Typography variant="h5">
              Blocks ({blocks.length})
            </Typography>
            {blocks.map((block, index) => (
              <Block block={block} key={index} />
            ))}
          </Grid>
        )}

        <Grid item xs={6}>
          <Typography variant="h5">
            Events ({events.length})
          </Typography>
          {events.map((event, index) => (
            <Event record={event} key={index} />
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Index;
