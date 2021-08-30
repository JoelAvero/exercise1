import FormRegister from "./FormRegister";
import "./styles.scss";

const Register = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="description-card">
          <div className="description-card-container">
            <h1 className="description-card-title">Learn to code by watching others</h1>
            <p className="description-card-text">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>
        </div>
        <div className="register-form-container">
          <div className="try-it-free">
            <strong>Try it free 7 days</strong> then $20/mo. thereafter
          </div>
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default Register;
