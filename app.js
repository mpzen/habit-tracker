"use strict";

// Habit Tracker — entry point.
// Chapter 03: click a habit to toggle it done for today.

const habits = [];

function renderHabits(list, items) {
  list.innerHTML = "";

  if (items.length === 0) {
    const li = document.createElement("li");
    li.className = "empty";
    li.textContent = "No habits yet — add one above.";
    list.appendChild(li);
    return;
  }

  for (const habit of items) {
    const li = document.createElement("li");
    li.className = habit.done ? "habit done" : "habit";
    li.textContent = habit.name;
    li.addEventListener("click", () => {
      habit.done = !habit.done;
      renderHabits(list, items);
    });
    list.appendChild(li);
  }
}

function addHabit(name) {
  habits.push({ name: name, done: false });
  renderHabits(document.getElementById("habit-list"), habits);
}

function init() {
  const list = document.getElementById("habit-list");
  if (!list) return;
  renderHabits(list, habits);

  const form = document.getElementById("add-form");
  const input = document.getElementById("habit-input");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = input.value.trim();
    if (name === "") return;
    addHabit(name);
    input.value = "";
    input.focus();
  });
}

document.addEventListener("DOMContentLoaded", init);
