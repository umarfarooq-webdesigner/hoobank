import React from 'react'
import './style.css';

import {
  Business, Billing, Button, CardDeal, Clients, CTA, FeedBackCard, Footer, GetStarted, Hero, NavBar, Stats, Testimonials
} from './components';



const App = () => (
    <>
      <div className="bg-black text-white">
        <div>
          <NavBar />
        </div>
      </div>

      <div className="bg-black text-white">
        <div>
          <Hero />
        </div>
      </div>

      <div className="bg-black text-white">
        <div>
          <Stats />
        </div>
      </div>

      <div className="bg-black text-white">
        <div>
          <Business />
        </div>
      </div>

      <div className="bg-black text-white">
        <div>
          <Billing />
        </div>
      </div>

      <div className="bg-black text-white">
        <div>
          <CardDeal />
        </div>
      </div>

      <div className="bg-black text-white">
        <div>
          <Testimonials />
        </div>
      </div>

      <div className="bg-black text-white">
        <div>
          < FeedBackCard/>
        </div>
      </div>

      <div className="bg-black text-white">
        <div>
          <Clients />
        </div>
      </div>

      <div className="bg-black text-white">
        <div>
          <CTA />
        </div>
      </div>

      <div className="bg-black text-white">
        <div>
          <Footer />
        </div>
      </div>




    </>
);
export default App