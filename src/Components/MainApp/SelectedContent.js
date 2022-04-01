import React from "react";
import "../MainApp/SelectedContent.css";

import { Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faAngleDown,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../Styles/Button";
function SelectedContent({
  showCBut,
  Extend,
  TaskValue,
  AddedTasks,

  setTaskValue,
  HandleAddTaskInput,
  AddTasks,
  CancelAddTasks,
}) {
  /* const HandleEnterPress = (e) => {
    if (e.key === "Enter") {
      if (TaskValue !== "") {
        setAddedTasks((oldVal) => [...oldVal, TaskValue]);
      }
    }
  };
*/

  return (
    <div className="   Selected__Content">
      <Navbar>
        <Container fluid>
          <Navbar.Brand
            style={{ fontWeight: "400", fontFamily: "Playfair Display, serif" }}
            className="  text-white"
          >
            Tag 1
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <FontAwesomeIcon className="mx-5" icon={faEllipsis} />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="add__tasks">
        {!Extend ? <FontAwesomeIcon className="plus add" icon={faAdd} /> : null}
        {!Extend ? <p>Add tasks</p> : null}
        <input
          /*  onKeyPress={HandleEnterPress}*/
          onClick={HandleAddTaskInput}
          id={Extend ? "input" : null}
          type="text"
          value={TaskValue}
          onChange={(e) => setTaskValue(e.target.value)}
        />
      </div>
      <Button
        onClick={(event) => AddTasks(event, "First")}
        pd="0.4rem 1.7rem"
        bg="rgb(247,160,0)"
        style={{ float: "right", marginRight: "3rem", marginTop: "2rem" }}
        bgHover="rgb(247,127,0)"
      >
        Add
      </Button>
      {showCBut ? (
        <Button
          onClick={() => CancelAddTasks("first")}
          id="cancel"
          pd="0.4rem 1.3rem"
          bg="rgb(247,160,0)"
          style={{
            float: "right",
            marginRight: "1rem",
            marginTop: "2rem",
          }}
          bgHover="rgb(247,127,0)"
        >
          Cancel
        </Button>
      ) : null}

      <div className="   addedTasks__Wrapper   ">
        <ul>
          {AddedTasks?.length > 0
            ? AddedTasks.map((item, idx) => {
                return (
                  <li key={idx}>
                    <span> {item}</span>
                    <FontAwesomeIcon
                      className="float-right"
                      icon={faAngleDown}
                    />
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
}

export default SelectedContent;
