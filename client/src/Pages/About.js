import Hero from "../components/Hero";
const About = () => {
  return (
      <>
      <Hero/>
      <div className="container">
        <div className="row justify-content-evenly">
          <div className="col-lg-5 col-sm-12">
            <h1 className="about-header">About the Family</h1>
            <p>
              The Gaudlap Family consists of George (dad), Alex (mom), Raymond,
              Ryan and Isabel. The family resides in Pemberton, NJ where George
              finished out his contract with the United States Marine Corps.
              Alex is a homemaker and a part-time writer of articles to help
              raise awareness in the Special Needs community. She gained
              interest in this after Raymond’s diagnosis. Raymond known as Mr.
              Smiley is the happiest kid you will ever meet with a smile that
              lights up any room. He was diagnosed with Cerebral Palsy at age 2
              and a VAMP2 Gene Mutation in 2020. 
            </p>

            <p>
              Despite his challenges he
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
          <div className="col-lg-1"></div>
          <div className="col-lg-5 col-sm-12">
            <h1 className="about-header">About VAMP2</h1>
            <p>
              VAMP2 was first found in 2018 with currently, 10 cases worldwide.
              Currently there is no active treatment for this mutation due to
              the variety of mutations that have taken place with the gene.
              Treatment is symptomatic only. However, there is active research
              going on in the Gold lab in Australia.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Eget egestas purus viverra accumsan. 
              Tempor id eu nisl nunc mi ipsum faucibus. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. 
              Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Morbi non arcu risus quis varius. Aliquam eleifend mi in nulla posuere. 
              Quam id leo in vitae turpis massa sed elementum. Lacus sed viverra tellus in hac. Ante metus dictum at tempor commodo. 
              In fermentum posuere urna nec tincidunt. Cras fermentum odio eu feugiat pretium nibh. Eget lorem dolor sed viverra.
            </p>
          </div>
        </div>
      </div>
      </>
  );
};

export default About;
