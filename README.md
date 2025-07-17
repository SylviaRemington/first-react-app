# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Set Up Information (initially provided to start app)
### Building Your First React App

### Setup
- Open your Terminal application and navigate to your ~/code/ga/lectures directory:
- cd ~/code/ga/lectures
- Next, run the following: npm create vite@latest

- You’ll be prompted to provide a project name. vite-project is the default but when you start typing that default will go away. Choose a name that makes sense for this project; in this case, we’ll call the app **first-react-app**.

- Next, you’ll select a framework. Use the arrow keys to choose the **React** option, and hit Enter.

- Again, use the arrow keys to choose the **JavaScript** variant and hit Enter.

- Move into the project you just created and run npm i to install the dependencies:
cd first-react-app, npm i
- I actually installed the following:   cd first-react-app, npm install, npm run dev

- Launch the app in VS Code: code .

- Open the App.jsx file in the src directory and replace the contents of it with the following:

- // src/App.jsx

- const App = () => {
  - return (
    - (for this put an h1 opening and closing tag around this) Hello, world!
  - );
- };

- export default App;

