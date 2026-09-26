this is my react application, note that l did not upload the node_modules because its too big about 85mb and the maximum size for github its 25mb per repisitory. Firstly i created this project by creating a folder then in the terminal i run (npm create vite@latest react -- --template react) for it to provide a project structure. after that i created components folder inside the src. the app include 3 sections: a greeting input, a counter and a task list. 
in my main.jsx is where the react attaches to the DOM node with id=root.
in the app.jsx in src holds the bshared state task, newtask and passes data and handlers as props.
My props and JSX are in he Header.jsx and in my Greeting.jsx is where the state and controlled input.

in my components i have Counter.jsx which counts, clicking + adds number to the counter and - subtract number from the counter. the other component file is greeting where it ask the user their name and give a message welcome{name} then i have the TaskItem.jsx which tells if the task is done or not, also when i want to delete a task in the TaskList.jsx file is responsible for listing the task name added by the user 

after editing the files and saving i ran the commands in the terminal:
cd react 
npm install 
npm run dev 

after that a local host is provided where l will see the output.
