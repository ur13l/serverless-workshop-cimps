import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import awsconfig from '../aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsconfig);

export default function Test() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
       
        <main>
          <h1>Bienvenido {user.attributes.email}</h1>
          <button onClick={signOut}>Sign out</button>
          {console.log(user)}
        </main>

      )}

      
    </Authenticator>
  );
}