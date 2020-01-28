import React from 'react';
import App from 'next/app';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {withStyles} from '@material-ui/core/styles';
import {PageTransition} from 'next-page-transitions';

import {createMuiTheme} from '@material-ui/core/styles';

import Layout from '../components/layout';

const TIMEOUT = 250;

const materialTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  breakpoints: {
    keys: ['sm', 'md', 'lg'],
    values: {
      sm: 0,
      md: 768,
      lg: 1024,
    },
  },
});

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // TODO: connect to node here
  }

  render() {
    const {Component, pageProps, classes} = this.props;

    return (
      <>
        <MuiThemeProvider theme={materialTheme}>
          <Layout>
            <PageTransition
              timeout={TIMEOUT}
              classNames="page-transition"
              loadingDelay={250}
              loadingTimeout={{
                enter: TIMEOUT,
                exit: 0,
              }}
              loadingClassNames="loading-indicator"
            >
              <Component {...pageProps} />
            </PageTransition>
          </Layout>
        </MuiThemeProvider>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity ${TIMEOUT}ms;
          }
          .loading-indicator-appear,
          .loading-indicator-enter {
            opacity: 0;
          }
          .loading-indicator-appear-active,
          .loading-indicator-enter-active {
            opacity: 1;
            transition: opacity ${TIMEOUT}ms;
          }
        `}</style>
      </>
    );
  }
}

export default MyApp;
