import React, { useEffect } from 'react';
import '../scss/style.scss';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import lottie from 'bodymovin';
import Header from '../components/Header';
import Footer from '../components/Footer';
import animation from '../svg/data.json';

function Animation() {
  const container = React.createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      animationData: animation,
      autoplay: true,
      prerender: true,
    });
  }, []);

  return (
    <div id="true" ref={container} className="position-fixed top-0 bottom-0 start-0 end-0 bg-primary" style={{ zIndex: 999 }} />
  );
}
// markup
const IndexPage = () => (
  <main className="container d-flex min-vh-100 align-items-center">
    <Helmet>
      <title>Home page</title>
    </Helmet>
    <Animation />
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
