import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

function SuccessPage() {
  const BackLink = styled(Link)`
    color: #5B7A70;
  `;

    return (<main id='success'>
      <div className='container'>
        <h1>
          Success!
        </h1>
        <p>Your order was successful.</p>
        <BackLink to='/'>Back to store</BackLink>
      </div>
    </main>);
}

export default SuccessPage;