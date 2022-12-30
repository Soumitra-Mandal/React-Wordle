function TextGrid() {
  const handleInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <div id="textgrid" onKeyUp={handleInput}>
      <div className="row1 row">
        <input className="item1 item" type="text" maxLength={1}></input>
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
