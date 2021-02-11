import React, { useEffect } from 'react';
import '../scss/style.scss';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import animation from '../svg/true.json';
import { ReactComponent as Logo } from '../svg/logo.svg';
import Animation from '../components/Animation';

// markup
const IndexPage = () => (
  <main className="container d-flex min-vh-100 align-items-center">
    <Helmet>
      <title>Home page</title>
    </Helmet>
    <Animation animationData={animation} />
    <div className="w-100 ">
      <div className="row">
        <div className="col-6 offset-3 py-4">
          <Logo />
        </div>
        <motion.p
          animate="visible"
          initial="hidden"
          variants={{
            hidden: {
              scale: 0,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
            },
          }}
          className="col-12 py-5"
        >
          You are about to test your knowledge of data collection through a reflective experience. This exercise will
          allow you to learn new things about data and discover what they can be used for. All of the interactions
          present are fictional. This is a project to raise awareness and understanding of the use of your data.
        </motion.p>
        <div className="col-12 text-center">
          <Link to="/quiz" className="btn btn-primary btn-lg">Start quiz</Link>
        </div>
      </div>
    </div>
  </main>
);

export default IndexPage;
