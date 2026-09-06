"use strict";

// Habit Tracker — entry point.
// Chapter 05: delete a habit; unfinished habits sort above done ones.

const STORAGE_KEY = "habit-tracker.habits.v1";
const habits = [];

function saveHabits() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
}

function loadHabits() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      habits.push(...parsed);
    }
  } catch (err) {
    console.warn("Ignoring unreadable saved habits:", err);
  }
}

function renderHabits(list, items) {
  list.innerHTML = "";

  if (items.length === 0) {
    const li = document.createElement("li");
    li.className = "empty";
    li.textContent = "No habits yet — add one above.";
    list.appendChild(li);
    return;
  }

  const ordered = [...items].sort((a, b) => Number(a.done) - Number(b.done));
  for (const habit of ordered) {
    const li = document.createElement("li");
    li.className = habit.done ? "habit done" : "habit";

    const label = document.createElement("span");
    label.className = "habit-name";
    label.textContent = habit.name;
    label.addEventListener("click", () => {
      habit.done = !habit.done;
      saveHabits();
      renderHabits(list, items);
    });

    const del = document.createElement("button");
    del.className = "delete";
    del.textContent = "×";
    del.setAttribute("aria-label", `Delete ${habit.name}`);
    del.addEventListener("click", () => {
      const at = items.indexOf(habit);
      if (at !== -1) items.splice(at, 1);
      saveHabits();
      renderHabits(list, items);
    });

    li.append(label, del);
    list.appendChild(li);
  }
}

function addHabit(name) {
  habits.push({ name: name, done: false });
  saveHabits();
  renderHabits(document.getElementById("habit-list"), habits);
}

function init() {
  const list = document.getElementById("habit-list");
  if (!list) return;
  loadHabits();
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
