// Step-1 :- First make your Script.js as an IIFE...
(function () {
  // Step-2 :- Then define and initialize some of the constants to manipulate DOM...
  let tasks = [];
  const addTaskInput = document.getElementById("add");
  const taskList = document.getElementById("list");
  const taskCount = document.getElementById("task-counter");

  // Step-6 :- Define 'showNotification()' function to alert the user for success/unsuccess works...

  function showNotification(text) {
    alert(text);
  }

  // Step-7 :- Define the 'renderList()' and 'addTaskToDom()' function for rendering the todo task lists...

  function addTaskToDom(task) {
    const li = document.createElement("li");
    li.innerHTML = ` <div class="list-data">
    <input
      type="checkbox"
      id="${task.id}" ${task.completed ? "checked" : ""} class="custom-checkbox"
    />
    <label for="${task.id}">${task.data}</label>
  </div>
  <img src="/bin.png" class="delete" data-id="${task.id}" />`;

    taskList.append(li);
  }

  function renderList() {
    taskList.innerHTML = "";
    taskCount.innerText = tasks.length;
    if (tasks.length > 0) {
      document.querySelector("#tasks-title").style.visibility = "visible";
      for (let i = 0; i < tasks.length; i++) {
        addTaskToDom(tasks[i]);
      }
      return;
    } else {
      document.querySelector("#tasks-title").style.visibility = "hidden";
      return;
    }
  }

  // Step-6 :- Define the 'addTask()' function for handling the task to be added...
  function addInputTask(task) {
    if (task) {
      tasks.push(task);
      renderList();
      showNotification("Your task has been successfully added to the list...");
    } else {
      showNotification("Your task hasn't been added....");
    }
  }

  // Step-10 :- Define 'toogleTask()' function for toggling the tasks after its been done...
  function toggleTask(taskId) {
    console.log("its been toggled...");
    const task = tasks.filter(function (task) {
      return task.id === taskId;
    });
    if (task.length > 0) {
      const currentTask = task[0];
      currentTask.completed = !currentTask.completed;
      showNotification("Your task has been toggled successfully...");
      renderList();
      return;
    }
    showNotification("your task hasn't been toggled successfully...");
  }

  // Step-9 :- Define 'delete()' function for deleting certain task from list...
  function deleteTask(taskId) {
    const newTasks = tasks.filter(function (task) {
      return task.id !== Number(taskId);
    });
    tasks = newTasks;
    renderList();
    showNotification("Your task has been successfully deleted...");
    return;
  }

  // Step-5 :- Define 'handleInputKeyPress()' function for handling the tasks input...
  function handleInputKeyPress(e) {
    if (e.key === "Enter") {
      const text = e.target.value;
      if (!text) {
        showNotification("Empty Tasks Can't be added...");
        return;
      }

      const task = {
        data: text,
        id: Date.now(),
        completed: false,
      };

      e.target.value = "";
      addInputTask(task);
    }
  }

  // Step-8 :- Define the 'handleClickEvent()' function for better functionality feature...

  function handleClickEvent(e) {
    if (e.target.classList.contains("add-btn")) {
      console.log("ADD btn has been pressed...");
      let extractdata = addTaskInput.value;
      if (!extractdata) {
        showNotification("Empty Tasks Can't be added...");
        return;
      }

      const task = {
        data: extractdata,
        id: Date.now(),
        completed: false,
      };

      addTaskInput.value = "";
      addInputTask(task);
      return;
    } else if (e.target.classList.contains("delete")) {
      const taskId = e.target.dataset.id;
      deleteTask(taskId);
      return;
    } else if (e.target.classList.contains("custom-checkbox")) {
      const taskId = e.target.dataset.id;
      toggleTask(taskId);
      return;
    }
  }

  // Step-3 :- Define the Initializer App to launch the app...
  function initializeApp() {
    console.log("Your app has been launched successfully...");
    addTaskInput.addEventListener("keyup", handleInputKeyPress);
    document.addEventListener("click", handleClickEvent);
  }
  //   Step-4 :- Initialize or launch the app by calling it...
  initializeApp();
})();
