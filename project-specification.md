# Project Specification: To-Do List Application

## Objective

-   Create a simple web application that allows users to manage their daily tasks.

## Features

### Displaying Tasks

-   Users can view a list of their existing tasks. ✅
-   Tasks are sorted in chronological order (by date added). ❗

### Adding Tasks

-   Users can add a new task by entering a title and a description. ✅
-   The date of addition is automatically recorded. ✅

### Marking a Task as Completed

-   Users can mark a task as completed. ❗
-   Completed tasks are highlighted in the list. ❗

### Deleting Tasks

-   Users can delete a task from the list. ❗

### Data Persistence

-   Tasks are stored locally (`@/data/tasks.json`) so they remain available even after the application is closed. ❗

## Pages and Routes

### Home Page ✅

-   Displays the list of tasks.
-   Allows adding a new task.

### Task Details Page ❌

-   Displays the details of a specific task (title, description, date added, status).
-   Allows marking the task as completed or deleting it.

## Legends

-   ✅: Task completed
-   ❗: Task partially completed
-   ❌: Task not completed
