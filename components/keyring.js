import React, {useState, useEffect} from 'react';
import keyring from '@polkadot/keyring';

export default function KeyringTest() {
  // useEffect(() => {
  //   keyring.loadAll({
  //     isDevelopment: true
  //   });
  //   console.log('keyring', keyring)
  // }, []);

  return (
    <>
      Accounts: 0
    </>
  );
}
