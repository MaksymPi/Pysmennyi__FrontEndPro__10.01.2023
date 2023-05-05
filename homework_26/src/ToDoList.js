import React, { useState } from "react";
import MyInput from "./ components/UI/input/MyInput";
import MyButton from "./ components/UI/button/MyButton";

function TodoList() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Купити молоко", completed: false },
    { id: 2, title: "Прибрати в кімнаті", completed: true },
    { id: 3, title: "Погуляти з собакою", completed: false },
  ]);
  const [newPostTitle, setNewPostTitle] = useState("");

  const handleToggle = (id) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, completed: !post.completed };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newPostTitle.trim() === "") return;
    const newPost = { id: Date.now(), title: newPostTitle, completed: false };
    setPosts([...posts, newPost]);
    setNewPostTitle("");
  };

  return (
    <div>
      <h1>Список заміток</h1>
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              color: post.completed ? "green" : "black",
              textDecoration: post.completed ? "line-through" : "none",
            }}
            onClick={() => handleToggle(post.id)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddTodo}>
        <MyInput
          type="text"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
        />
        <MyButton type="submit">Додати</MyButton>
      </form>
    </div>
  );
}

export default TodoList;
