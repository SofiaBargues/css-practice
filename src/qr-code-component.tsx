import "./qr-code-component.css";
import image from "/home/bargu/code/css-practice/images/image-qr-code.png";

export function QrComponent() {
  return (
    <div className="container">
      <div className="card">
        <img
          style={{ height: "300px", borderRadius: "15px" }}
          src={image}
          alt="image-qr-code"
        />
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default QrComponent;
