import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NoteCard from "./components/NoteCard";

const App = () => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [allNotesData, setAllNotesData] = useState([]);
  const [updateNote, setUpdateNote] = useState(null);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (updateNote) {
      const res = await axios.put(
        `http://localhost:3000/notes/${updateNote}`,
        formData,
      );

      setUpdateNote(null);
    } else {
      const res = await axios.post(
        "http://localhost:3000/notes/createNote",
        formData,
      );

      setFormData({
        title: "",
        description: "",
      });
      allNotes();
    }
  };

  //api

  const allNotes = async () => {
    try {
      const res = await axios.get("http://localhost:3000/notes/getNotes");
      setAllNotesData(res.data.data);
    } catch (error) {
      console.log("error occur in all notes api", error);
    }
  };
  useEffect(() => {
    allNotes();
  }, []);

  const onDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/notes/${id}`);
      console.log("delete response", res);
      allNotes();
    } catch (error) {
      console.log("error occur in delete api", error);
    }
  };
  const onUpdate = (note) => {
    setUpdateNote(note._id);
    setFormData({
      title: note.title,
      description: note.description,
    });
  };

  return (
    <div className="h-screen p-10 align-center text-black flex flex-col  ">
      <h1>Notes App</h1>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-2 w-100 border  p-5 rounded-md"
      >
        <input
          onChange={onChangeHandler}
          name="title"
          value={formData.title}
          className="border p-2 rounded-md"
          type="text"
          placeholder="Enter note title"
        />
        <input
          onChange={onChangeHandler}
          name="description"
          required
          minLength={10}
          value={formData.description}
          className="border p-2 rounded-md"
          type="text"
          placeholder="Enter note description"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          type="submit"
        >
          Add Note
        </button>
      </form>
      <div className="flex flex-wrap gap-5 mt-5">
        {allNotesData.map((note) => (
          <NoteCard
            key={note._id}
            title={note.title}
            description={note.description}
            note={note}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
