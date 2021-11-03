import { useState } from 'react';
import './App.css';

import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {

  let listOfTask = ['Study', 'Rich'];
  const [initList, getList] = useState(listOfTask);
  const [initTask, getTask] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [initid, getId] = useState('');
  const [initUpdate, getUpdate] = useState('')


  function toggleModal(params) {
    setIsOpen(!isOpen);
    const indexNumber = Number(params.target.id);
    getId(indexNumber);
    if (isOpen !== false) {
      initList[indexNumber] = initUpdate;
    }
  }

  function getIdOfTaskList(params) {
    const itemid = params.target.id;
    let afterDelNewTask = initList.filter(e => e !== initList[itemid]);
    console.log(afterDelNewTask)
    getList(afterDelNewTask)
  }
  async function getApiValue() {
    const value = await fetch('https://reqres.in/api/users?page=2');
    const valueResolved = await value.json();
    console.log(valueResolved)
  }

  return (
    <div className="App">
      <button onClick={getApiValue}>click</button>
      <div>
        {/* head */}
        <div>
          <div>Todo App</div>
          <input value={initTask} onChange={((e) => getTask(e.target.value))} />
          <button onClick={() => {
            const newList = initList.concat(initTask)
            getList(newList)
            getTask('')
          }}>Add</button>

        </div>
        {/* body */}
        <div>
          <div>
            <div>Task Body</div>
            <li>
              {
                initList.map((task, i) =>
                  <ul key={i} id={i}>

                    <span id={i} onClick={toggleModal}>
                      {task}
                    </span>

                    <span style={{ margin: '1rem' }}>
                      <i id={i} onClick={getIdOfTaskList} className="fas fa-minus-circle"></i>
                    </span>

                  </ul>)
              }
            </li>
            <Modal isOpen={isOpen} onRequestClose={toggleModal}
              contentLabel="My dialog"
              className="mymodal"
              overlayClassName="myoverlay"
              closeTimeoutMS={100}>
              {/* {<input value="hello" onChange={updateValueInList} />} */}
              {<input value={initList[initid]} onChange={((e) => getUpdate(e.target.value))} />}
              <button onClick={toggleModal}>Close modal</button>
            </Modal>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default App;
