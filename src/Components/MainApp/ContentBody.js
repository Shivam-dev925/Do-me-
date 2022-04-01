import React from "react";
import "../MainApp/ContentBody.css";
import SelectedContent from "./SelectedContent";
function ContentBody({
  showCBut,
  Extend,
  TaskValue,
  AddedTasks,
  setShowCBut,
  setAddedTasks,
  setTaskValue,
  setExtend,
  AddTasks,
  CancelAddTasks,
  HandleAddTaskInput,
}) {
  return (
    <div id="ContentBody" className="ContentBody">
      <SelectedContent
        AddTasks={AddTasks}
        showCBut={showCBut}
        Extend={Extend}
        TaskValue={TaskValue}
        AddedTasks={AddedTasks}
        setAddedTasks={setAddedTasks}
        setTaskValue={setTaskValue}
        setShowCBut={setShowCBut}
        setExtend={setExtend}
        CancelAddTasks={CancelAddTasks}
        HandleAddTaskInput={HandleAddTaskInput}
      />
    </div>
  );
}

export default ContentBody;
