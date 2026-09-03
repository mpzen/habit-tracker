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

function init() {
  const list = document.getElementById("habit-list");
  if (!list) return;
  renderHabits(list, habits);
}

document.addEventListener("DOMContentLoaded", init);
