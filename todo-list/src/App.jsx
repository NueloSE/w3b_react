function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1 hidden={false}>Todo-App</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="lable__lg">
            what needs to be done?
          </label>
        </h2>

        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>

      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>

        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>

        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input type="checkbox" defaultChecked id="todo-0" />
            <label htmlFor="todo-0" className="todo-label">
              Eat
            </label>
          </div>

          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>

            <button className="btn btn__danger" type="button">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>

		<li className="todo stack-small">
          <div className="c-cb">
            <input type="checkbox"  id="todo-1" />
            <label htmlFor="todo-1" className="todo-label">
              Sleep
            </label>
          </div>

          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>

            <button className="btn btn__danger" type="button">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>

		<li className="todo stack-small">
          <div className="c-cb">
            <input type="checkbox"  id="todo-2" />
            <label htmlFor="todo-2" className="todo-label">
              Repeat
            </label>
          </div>

          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>

            <button className="btn btn__danger" type="button">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>


      </ul>
    </div>
  );
}

export default App;
