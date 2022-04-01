import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../Styles/Button";
import React from "react";
import "../MainApp/SidebarVertical.css";
function Sidebar2({
  CancelAddTasks,
  AddTags,
  TagsList,
  TagsValue,
  setTagsValue,
  AddTasks,
  setAddTags,
}) {
  return (
    <div id="sidebar" className="sidebar__vertical">
      <h3>Collections</h3>

      <div>
        <FontAwesomeIcon
          onClick={() => {
            setAddTags(true);
          }}
          className="addTags"
          icon={faFolderPlus}
        />
      </div>
      {AddTags ? (
        <>
          <input
            value={TagsValue}
            onChange={(e) => setTagsValue(e.target.value)}
            className="mt-3 text-white"
            type="text"
            placeholder="eg. Favorite.."
          />
          <Button
            onClick={() => CancelAddTasks("second")}
            color="white"
            pd="0.2rem 0.8rem "
            bg="#36455f"
            bgHover="#36414c"
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => AddTasks(e, "second")}
            color="white"
            pd="0.2rem 0.8rem "
            bg="#36455f"
            bgHover="#36414c"
          >
            Add
          </Button>
        </>
      ) : null}
      <ul>
        {TagsList?.length > 0
          ? TagsList.map((Tag, idx) => {
              return (
                <li key={idx}>
                  <div className="div">{Tag.split("")[0]}</div> {Tag}
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default Sidebar2;
