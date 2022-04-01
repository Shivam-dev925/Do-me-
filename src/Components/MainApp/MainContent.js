import "../MainApp/MainApp.css";
import React, { useState } from "react";
import Sidebar2 from "../../Components/MainApp/Sidebar2";
import ContentBody from "./ContentBody";
function MainContent() {
  const [showCancelButton, setShowCancelButton] = useState(false);
  const [ExtendInput, setExtendInput] = useState(false);
  const [TaskValue, setTaskValue] = useState("");

  const [AddedTasks, setAddedTasks] = useState([]);
  const [AddTags, setAddTags] = useState(false);
  const [TagsValue, setTagsValue] = useState("");
  const [TagsList, setTagsList] = useState([]);

  const AddTasks = (e, params) => {
    e.preventDefault();
    if ((params === "First") & (TaskValue !== "")) {
      setAddedTasks((oldVal) => [...oldVal, TaskValue]);
    } else if ((params === "second") & (TagsValue !== "")) {
      setTagsList((oldVal) => [...oldVal, TagsValue]);
    }
    setTaskValue("");
    setTagsValue("");
  };
  const CancelAddTasks = (params) => {
    if (params === "first") {
      setShowCancelButton(false);
      setExtendInput(false);
      setTaskValue("");
    } else if (params === "second") {
      setTagsValue("");
      setAddTags(false);
    }
  };
  const HandleAddTaskInput = () => {
    setExtendInput(true);
    setShowCancelButton(true);
  };

  return (
    <div className=" Main__Content ">
      <Sidebar2
        AddTags={AddTags}
        setAddTags={setAddTags}
        TagsList={TagsList}
        TagsValue={TagsValue}
        setTagsValue={setTagsValue}
        AddTasks={AddTasks}
        CancelAddTasks={CancelAddTasks}
      />
      <ContentBody
        showCBut={showCancelButton}
        setShowCBut={setShowCancelButton}
        Extend={ExtendInput}
        setExtend={setExtendInput}
        TaskValue={TaskValue}
        setTaskValue={setTaskValue}
        AddedTasks={AddedTasks}
        setAddedTasks={setAddedTasks}
        AddTasks={AddTasks}
        CancelAddTasks={CancelAddTasks}
        HandleAddTaskInput={HandleAddTaskInput}
      />
    </div>
  );
}

export default MainContent;
