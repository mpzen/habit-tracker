"use strict";

// Habit Tracker — entry point.
// Chapter 01: render a static starter list. Adding, checking off, and
// persistence arrive in later chapters.

const habits = [
  { name: "Drink a glass of water" },
  { name: "Read for 20 minutes" },
  { name: "Walk outside" },
];

function renderHabits(list, items) {
  list.innerHTML = "";
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
