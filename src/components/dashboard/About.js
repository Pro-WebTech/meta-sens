import '../../assets/css/dashboard/About.css';
import check from '../../assets/img/check.png';
import nba from '../../assets/img/NBA.png';
import jordan from '../../assets/img/jordan.png';
import kSwiss from '../../assets/img/k-swiss.png';
import puma from '../../assets/img/puma.png';

function About() {
  return(
    <div id="about" className="content-about">
      <p className="md-description" style={{textAlign:'center'}}>- About</p>
      <p className="lg-description-about">Nibh mauris, nec et vel nisi. A <span style={{color:'#00e4d1'}}>eget</span> leoaliquet.</p>
      <div className="row" style={{marginTop:'50px'}}>
        <div className="col-lg-6">
          <p className="sm-description">inBetweeners is an exclusive Gianpieto NFT collection of 10,777 hand-drawn characters living on the Ethereum blockchain.
              <br />
              <br />
             Each imBetweener is 10P1 based on a combination of randomized attributes, in Betweeners spread positivity in real life and in the metaverse.</p>
        </div>
        <div className="col-lg-6">
        <p className="sm-description">
          We uplift and encourade our commutity to be wholesome and healthy Our mission is simple, make the world a more loving place. We are a global crowdsourced community focused on spreading love and positivity. 
          <br />
          <br />
          A place where youll have tnousands of shoulders to lean on. As our identity rises up into to the cloud, in Betweeners Keep us grounded.
        </p>
        </div>
      </div>
      <div className="artist-part row">
        <div className="col-lg-5">
          <div className="photo-img">

          </div>
        </div>
        <div className="col-lg-7">
          <div className="vertical-center">
            <p className="lg-description about-lg">MCFLYY</p>
            <p className="md-description about-md">Artist</p>
            <div style={{display:'flex'}}>
              <img className="check-img" src={check} />
              <p className="sm-description about-sm">I Designed Snoop Dogg’s Merch</p>
            </div>
            <div style={{display:'flex'}}>
              <img className="check-img" src={check} />
              <p className="sm-description about-sm">Tall made a Cool Collabs with levi’s</p>
            </div>
            <div style={{display:'flex'}}>
              <img className="check-img" src={check} />
              <p className="sm-description about-sm">Played soccer with sergio ramos for nike</p>
            </div>
            <div style={{display:'flex'}}>
              <img className="check-img" src={check} />
              <p className="sm-description about-sm">designed justin bieber’s changes merch</p>
            </div>
            <div style={{display:'flex'}}>
              <img className="check-img" src={check} />
              <p className="sm-description about-sm">was selected as the artist of the launch of netflix italy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="previous-work-part">
        <p className="md-description">- My Previous Work</p>
          <div className="row logos-part">
            <img className="logo-imgs1" src={nba} />
            <img className="logo-imgs2" src={jordan} />
            <img className="logo-imgs3" src={kSwiss} />
            <img className="logo-imgs4" src={puma} />
          </div>
        <div className="row previous-name-part">
          <p className="previous-work-name">Chris Brown</p>
          <p className="previous-work-name">Lil Wayne</p>
          <p className="previous-work-name">Megan thee stallion</p>
        </div>
      </div>
    </div>
  )
}

export default About;