function TextGrid(props) {
  const handleInput = (e) => {
    let target = e.target;
    let key = e.key;
    if (key !== "Backspace") {
      if (key === "Enter") {
        if (!target.nextElementSibling && target.value.length === 1) {
          //evaluate word logic goes here
          if (target.parentNode.nextElementSibling)
            target.parentNode.nextElementSibling.firstChild.focus();
        }
      } else if (target.value.length === 1) {
        if (key === " ") {
          target.value = "";
        } else if (target.nextElementSibling) {
          target.nextElementSibling.focus();
        }
      }
    } else if (target.previousElementSibling) {
      if (target.nextElementSibling && target.value !== "") {
        target.previousElementSibling.value = "";
      }
      target.previousElementSibling.focus();
    }
  };
  const rows = [];
  rows.push(<TextRow autoFocus={true} key={1} rowNum={1} />);
  for (let i = 2; i <= props.nRows; i++) {
    rows.push(<TextRow autoFocus={false} key={i} rowNum={i} />);
  }
  return (
    <div id="textgrid" onKeyUp={handleInput}>
      {rows}
    </div>
  );
}
const TextRow = (props) => {
  return (
    <div className={"row row" + props.rowNum}>
      <input
        className="item1 item"
        type="text"
        maxLength={1}
        autoFocus={props.autoFocus}
      ></input>
      <input className="item2 item" type="text" maxLength={1}></input>
      <input className="item3 item" type="text" maxLength={1}></input>
      <input className="item4 item" type="text" maxLength={1}></input>
      <input className="item5 item" type="text" maxLength={1}></input>
    </div>
  );
};
export default TextGrid;
