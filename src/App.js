import "./App.css";
import img from "./image/Vector (14).png";
import img1 from "./image/Group.png";
import img2 from "./image/Group (1).png";
import img3 from "./image/Group.png";
import img4 from "./image/Group (5).png";
import img5 from "./image/Group (10).png";
import img6 from "./image/Group (6).png";
import img7 from "./image/Group 1000005615.png";
import img8 from "./image/Group (7).png";
import img9 from "./image/Group (8).png";
import img10 from "./image/Group (9).png";
function App() {
  return (
    <div>
      <div className="box1">
        <div className="oneline">
          <h3>OUR OFFERINGS</h3>
          <img src={img} />
        </div>
        <div className="paper_main">
          <div className="first1" id="enterprise">
            <img src={img1} className="startup" />
            <h5>Enterprise Software Development</h5>
          </div>
          <div className="first1" id="moblie">
            <img src={img2} className="startup" />
            <h5>Mobile App Development</h5>
          </div>
          <div className="first1" id="website">
            <img src={img3} className="startup" />
            <h5>Website Development</h5>
          </div>
          <div className="first1" id="Analytics">
            <img src={img4} className="startup" />
            <h5>Data Analytics </h5>
          </div>
          <div className="first1" id="it">
            <img src={img5} className="startup" />
            <h5>IT Consultancy</h5>
          </div>
          <div className="first1" id="Graphic">
            <img src={img6} className="startup" />
            <h5>Graphic Design</h5>
          </div>
          <div className="first1" id="Digital">
            <img src={img7} className="startup" />
            <h5>Digital Marketing</h5>
          </div>
          <div className="first1" id="ux">
            <img src={img8} className="startup" />
            <h5>UI/UX Designing</h5>
          </div>
          <div className="first1" id="video">
            <img src={img9} className="startup" />
            <h5>Video Marketing</h5>
          </div>
          <div className="first1" id="branding">
            <img src={img10} className="startup" />
            <h5>Branding Positioning Services</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
