import { useState } from 'react';
import './App.css';
import Display from './Display';

function Form() {
  const [name, setName] = useState('');
  const [loc, setloc] = useState('');
  const [rating, setrating] = useState('');
  const [text, settext] = useState('')
  const [btn, setbtn] = useState({})
  const [show, setshow] = useState(false)
  const [array, setarray] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);

    setbtn({
      display: 'block'
    });
  }

  const handleSubmit = (e) => {
    setshow(true);
    e.preventDefault();
    setName("")
    setloc("")
    setrating("")
    setbtn({
      display: 'none'
    })
    settext("")
  }

  const handleMessageChange = event => {
    setarray((message) => [...message, { id: message.length, Name: name, Location: loc, Review: text, Rating: rating }])
    settext("")
  };
  const options = ['Chennai', 'Hyderabad', 'Bengaluru', 'Vijayawada', 'Kerala'];
  const onOptionChangeHandler = (event) => {
    setloc(event.target.value);
  }
  const options1 = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'];
  const onOptionChangeHandlerRating = (event) => {
    setrating(event.target.value)
  }
  const changeHandler = (event) => {
    settext(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h2> Sign-up Form </h2>
          <div className='details'>
            <label className='lab'>
              Name:
            </label>
            <input className='name' type="text" value={name} required onChange={(e) => { handleChange(e) }} /><br />
            <center>
              <label >Location:</label>
              <select onChange={onOptionChangeHandler} className='location' value={loc}>
                <option>choose Location</option>
                {options.map((option, index) => {
                  return <option key={index} >
                    {option}
                  </option>
                })}
              </select>
            </center>
            <center>
              <label className='lab'>Rating:</label>
              <select onChange={onOptionChangeHandlerRating} value={rating} className='rating'>
                <option>Please give rating</option>
                {options1.map((option, index) => {
                  return <option key={index} >
                    {option}
                  </option>
                })}
              </select>
            </center>
          </div>
          <textarea
            rows="6"
            cols="30"
            value={text}
            onChange={(event) => changeHandler(event)}
            placeholder="type your comment here" /><br />
          <input type="submit" value="Submit" id="sub" style={btn} onClick={() => handleMessageChange()} />
        </form>
        {console.log(array)}
        {show && array.map((data, index) => <Display props={data} />)}
      </header>
    </div>
  );
}
export default Form;