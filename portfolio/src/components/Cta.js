import { Fade } from "react-awesome-reveal";

const Cta = ({ darkMode }) => (
  <div className={darkMode ? "cta dark" : "cta"}>
    <div className="call">
      <Fade cascade damping={0.2} duration={2500}>
        <h2 className="call-title">Contact</h2>

        <p className="call-content">
          Please feel free to contact me, I'd love to talk more.
        </p>
        <p className="call-content">jacob.templeton@gmail.com</p>
      </Fade>
    </div>
  </div>
);

export default Cta;
