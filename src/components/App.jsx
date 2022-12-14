import React from "react";
import Entry from "./Entry";
import emojipediaIcons from "../emojipedia";

function createEntry(emojipediaIcon) {
  return (
    <Entry
      key={emojipediaIcon.id}
      emojImg={emojipediaIcon.emoji}
      emojName={emojipediaIcon.name}
      emojMeaning={emojipediaIcon.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipediaIcons.map(createEntry)}</dl>
    </div>
  );
}

export default App;
