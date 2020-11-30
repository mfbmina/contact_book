/* eslint-disable react/jsx-props-no-spreading, react/forbid-prop-types */

import PropTypes from 'prop-types';

import '../style/index.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.object.isRequired,
};
