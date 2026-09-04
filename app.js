"use strict";

// Habit Tracker — entry point.
// Chapter 02: add habits through a form.

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
    li.className = "habit";
    li.textContent = habit.name;
    list.appendChild(li);
  }
}

function addHabit(name) {
  habits.push({ name: name });
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
