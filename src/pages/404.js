import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components";

const style = {
  display: `flex`,
  flexDirection: 'column',
  justifyContent: `center`,
  fontFamily: `Bebas Neue`,
  margin: '1rem 0'
}

const NotFoundPage = () => (
  <Layout pageTitle="404">
    <h3 style={{...style, color: '#fff' }}>
     You've lost your way
    </h3>
    <Link to='home' className='link'>
      <h1 id="lost" style={style} className="enlarge">Home</h1>
    </Link>
  </Layout>
);

export default NotFoundPage;
