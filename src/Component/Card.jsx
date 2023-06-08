import Image from "./Image";
import Title from "./Title";
import Text from "./Text";
import Btn from "./Btn";
import "../Assets/card.css";
import "../Assets/image.css";
import "../Assets/btn.css";

function Card({ image, title, text, btn, btn2 }) {
  return (
    <div className="card">
      <Image image={image} />
      <Title title={title} />
      <Text text={text} />
      <div className="btn-container">
        <div className="btn-display">
          <Btn btn={btn} />
          <Btn btn={btn2} />
        </div>
      </div>
    </div>
  );
}
export default Card;
