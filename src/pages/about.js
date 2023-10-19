import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import writingClub from "../images/writing-club.jpg";
import kumar from "../images/kumar.jpeg";
import twins from "../images/twins.jpg";
import wh from "../images/wh.jpg";
import oss from "../images/oss.png";
import solo from "../images/solo.jpg";
import formal from "../images/headshot1.jpeg";
import panel from "../images/thind.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="grid-container usa-section usa-prose">
  <h1 id="about">About Ashwin</h1><br /><br />
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
          My background and values<br /><br />

          <img src={twins} />
          <img src={wh} />
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
        <p>
          I was born and grew up in Johns Creek, GA, in Bridgestone Farms. Throughout my life, I've worked to make positive change through nonprofits, religious communities, Silicon Valley startups, lawyers and policy advocates, philanthropic foundations, and more. My life has been a series of instances of incredible opportunities that were only made possible through the education resources offered to me and my family when growing up: Chattahoochee High School, the dual enrollment program, and the HOPE and Zell Miller Scholarship. It's time for me to pay it forward and be an advocate for the futures of young people — and everyone — in our community.
        </p>
        <p>
        By running for office, I’d like to help others have the same, or better, opportunities than I have had. Everyone should have the opportunities and resources to succeed. My values come from my upbringing from the Dharmic traditions as a Hindu American:
        <ul>
          <li><strong>Listen to others' viewpoints.</strong> Each viewpoint has a person who holds it, and that person has a reason why they hold it: the values, circumstances and experiences unique to each of us. I accept and embrace the differences in our community.</li>
          <li><strong>Be an advocate for those who can't.</strong> Those in positions of privilege have the obligation to listen to others, and act to empower those who don't have the same voice.</li>
          <li><strong>Do the right thing.</strong> Regardless of political pressure or what donors say, I will stay honest with my consituents and do the right thing.</li>
        </ul>
        </p>
      </div>
    </div>
  </section>
  <hr />
  <section className="grid-container usa-section usa-prose">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-center">
          My experience<br /><br />

          <img src={writingClub} />
          <img src={kumar} />
          <img src={oss} />
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
        <p>
          My experience has ranged from technology, government, law, and philanthropy:
          <ul>
            <li><strong>Election Security:</strong> I worked under both President Trump and President Biden in the federal government; I was at the Cybersecurity and Infrastructure Security Agency, where I protected the nation's critical infrastructure — and election systems — from cyberattacks during the 2020 and 2022 elections.</li>
            <li><strong>State Government:</strong> I worked as a Janet D. Steiger Fellow in the Georgia Attorney General's Consumer Protection Division under Georgia Attorney General Chris Carr, where I worked to protect Georgians from business scams.</li>
            <li><strong>Philanthropy:</strong> While working at Schmidt Futures — a philanthropy led by Eric Schmidt, the first CEO of Google — I established $6 million in new initiatives around open source software, sustaining the digital infrastructure that powers our small businesses.</li>
            <li><strong>Venture Capital:</strong> I worked at Sequoia Capital as a Technology Law & Policy Fellow, where I helped inform their investment strategy.</li>
            <li><strong>Software:</strong> I studied computer science at Stanford University and now own a tech consulting business that works to support startups with new ideas around the world.</li>
            <li><strong>Religion: </strong>I helped run the Dharmic Life chaplaincy at <strong>Georgetown University</strong>, which supports Hindu, Buddhist, Jain, and Sikh students, and raised $100K to establish an endowment. I also worked on interreligious advocacy and understanding.</li>
          </ul>
           
        </p>
      </div>
    </div>
  </section>
  <hr />

  </Layout>
);

export default IndexPage;