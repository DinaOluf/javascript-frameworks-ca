import React from "react";
import { BackLink } from "../styles/success.styles";

function SuccessPage() {

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