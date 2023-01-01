function TextGrid() {
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
      } else if (target.nextElementSibling) {
        target.nextElementSibling.focus();
      }
    } else if (e.target.previousElementSibling) {
      target.previousElementSibling.focus();
    }
  };
  return (
    <div id="textgrid" onKeyUp={handleInput}>
      <div className="row1 row">
        <input
          className="item1 item"
          type="text"
          autoFocus={true}
          maxLength={1}
        ></input>
        <input className="item2 item" type="text" maxLength={1}></input>
        <input className="item3 item" type="text" maxLength={1}></input>
        <input className="item4 item" type="text" maxLength={1}></input>
        <input className="item5 item" type="text" maxLength={1}></input>
      </div>
      <div className="row2 row">
        <input className="item1 item" type="text" maxLength={1}></input>
        <input className="item2 item" type="text" maxLength={1}></input>
        <input className="item3 item" type="text" maxLength={1}></input>
        <input className="item4 item" type="text" maxLength={1}></input>
        <input className="item5 item" type="text" maxLength={1}></input>
      </div>
      <div className="row3 row">
        <input className="item1 item" type="text" maxLength={1}></input>
        <input className="item2 item" type="text" maxLength={1}></input>
        <input className="item3 item" type="text" maxLength={1}></input>
        <input className="item4 item" type="text" maxLength={1}></input>
        <input className="item5 item" type="text" maxLength={1}></input>
      </div>
      <div className="row4 row">
        <input className="item1 item" type="text" maxLength={1}></input>
        <input className="item2 item" type="text" maxLength={1}></input>
        <input className="item3 item" type="text" maxLength={1}></input>
        <input className="item4 item" type="text" maxLength={1}></input>
        <input className="item5 item" type="text" maxLength={1}></input>
      </div>
      <div className="row5 row">
        <input className="item1 item" type="text" maxLength={1}></input>
        <input className="item2 item" type="text" maxLength={1}></input>
        <input className="item3 item" type="text" maxLength={1}></input>
        <input className="item4 item" type="text" maxLength={1}></input>
        <input className="item5 item" type="text" maxLength={1}></input>
      </div>
    </div>
  );
}

export default TextGrid;
