import "../../assets/css/dashboard/Proprity.css";
import earth from "../../assets/img/earth.png";
import gigaaa from "../../assets/img/gigaaa.png";
import keyEnable from "../../assets/img/keyEnable.png";
import ammbr from "../../assets/img/ammbr.png";
import headerImg from "../../assets/img/header-img.mp4";

function Proprity() {
  return (
    <div id="meta">
      <div>
        <video
          muted
          src={headerImg}
          className="header-video"
          autoPlay
          loop
          preload="auto"
        >
          <source src={headerImg} type="video/mp4" />
        </video>
      </div>
      <div className="content-meta row">
        <div className="col-lg-6">
          <div className="description-part">
            <p className="proprity-title">
              World first Real Estate’s NFTs Meta-Marketplace
            </p>
            <p className="proprity-description">
              <span style={{ fontWeight: "500" }}>
                Own, discover, collect & sell{" "}
              </span>
              non fungible property in the most realistic metaverse ever.
            </p>
            <p className="proprity-description">
              Metasense is a startup that aims to build an inclusive metaverse.
              Inclusive of people with disabilities, especially gross motor
              (like cerebral palsey) and cognitive disabilities (like dyslexia
              and autism spectrum disorders) that would normally restrict or
              prevent their use of computer equipment. Inclusive of people that
              are geographically or socio-economically excluded. Metasense
              believes in data privacy and sovereignty. GDPR and personal
              protections will be enshrined. Metasense will build on multiple
              Digital Ledger Technologies, and Unity 3D as its immersive
              platform. Semantic data and Artificial Intelligence will be built
              into the fabric of the Metasense metaverse.
            </p>
            <button className="join-btn">Join PinkSale IDO</button>
          </div>
        </div>
        <div className="col-lg-6 nft-img-part">
          <img className="earth-img" src={earth} />
        </div>
      </div>
      <div className="row ">
        <div className="model col-lg-12">
          <model-viewer
            id="mv-demo"
            shadow-intensity="0"
            src="/model/map.gltf"
            alt="A 3D model of an astronaut"
            auto-rotate
            // camera-controls
          ></model-viewer>
        </div>
      </div>

      <div className="pro-logos-part">
        <p className="lg-title-partner">Our Partners</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "70px",
          }}
        >
          <div>
            <img className="logo-imgs-first" src={gigaaa} />
          </div>
          <div>
            <img className="logo-imgs" src={keyEnable} />
          </div>
          <div>
            <img className="logo-imgs" src={ammbr} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proprity;
