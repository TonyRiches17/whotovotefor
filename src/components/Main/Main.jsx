import "./Main.css";

function Main() {
  return(
    <div className="main">
      <div className="main__search-container">
      <label htmlFor="zip" name="zip" className="main__search-label">Zip Code:
      <input placeholder="30303" type="text" className="main__search-input" />
      </label>
      <button type="submit" className="main__search-button">Search</button>
      </div>

    </div>
  )
}

export default Main;