const About = () => {
  return (
    <div id="about-container">
      <section id="hero-section">
        <div id="hero-section-text">
          <h2 id="header-text">Raging Raymond's Fluke Fight!</h2>
          <h5 className="subhead">The Fishing Tournament for a Cause!</h5>
        </div>
      </section>

      <div className="container">
        <div className="row justify-content-evenly">
          <div className="col-lg-5 col-sm-12">
            <h1>About the Family</h1>
            <p>
              The Gaudlap Family consists of George (dad), Alex (mom), Raymond,
              Ryan and Isabel. The family resides in Pemberton, NJ where George
              finished out his contract with the United States Marine Corps.
              Alex is a homemaker and a part-time writer of articles to help
              raise awareness in the Special Needs community. She gained
              interest in this after Raymond’s diagnosis. Raymond known as Mr.
              Smiley is the happiest kid you will ever meet with a smile that
              lights up any room. He was diagnosed with Cerebral Palsy at age 2
              and a VAMP2 Gene Mutation in 2020. Despite his challenges he
              continues to beat the odds. Ryan, who is 18 months younger than
              Raymond is the typical boy; full of energy. However, he is an
              amazing little brother who continues to help Raymond meet his full
              potential. They have learned to do so many things together.
              Isabel, the baby of the family is a go with the flow and relaxed
              girl who adores her big brothers. Our family has had many changes
              over the years but the one thing that remains the same is making a
              difference. We have used Raymond’s story to show that even in the
              worst of times, you can be happy and you can make a difference in
              this world.
            </p>
          </div>

          <div className="col-lg-2 col-sm-12"></div>

          <div className="col-lg-5 col-sm-12">
            <h1>About VAMP2</h1>
            <p>
              VAMP2 was first found in 2018 with currently, 10 cases worldwide.
              Currently there is no active treatment for this mutation due to
              the variety of mutations that have taken place with the gene.
              Treatment is symptomatic only. However, there is active research
              going on in the Gold lab in Australia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
