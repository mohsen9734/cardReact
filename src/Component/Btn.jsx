import "../Assets/btn.css";
function Btn({ btn, btn2 }) {
  return (
    <div>
      <button className="btn">{[btn, btn2]}</button>
    </div>
  );
}

export default Btn;
