import * as React from 'react';
import '../scss/style.scss';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
// markup
const IndexPage = () => (
  <main className="container d-flex min-vh-100 align-items-center">
    <Helmet>
      <title>Home page</title>
    </Helmet>
    <div className="w-100 ">
      <div className="row border-4 border border-top-0 border-bottom-0">
        <div className="col-12">
          <Header />
        </div>
        <div className="col-12">
          Lorem ipsum
        </div>
        <div className="col-12">
          <Footer>
            <div className="col-12 text-end">
              <Link to="/quiz" className="text-dark">Start quiz</Link>
            </div>
          </Footer>
        </div>
      </div>
    </div>
  </main>
);

export default IndexPage;
