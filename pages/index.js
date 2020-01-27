import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout';

const Index = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setConnected] = useState(false);

  return (
    <Layout>
      <Typography paragraph>
        need something here :)
      </Typography>
    </Layout>
  );
};

export default Index;
