import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/projects",
    element: <Projects />,
  }
]);

function App() {
  return (
    <>
      <aside>
        <nav>
          <div className="avatar">
            <img src="/me.png" alt="hey it me" />
          </div>
          <div className="links">
            <a href="/" title="home">Home</a>
            <a href="/about" title="about">About</a>
            <a href="/experience" title="experience">Experience</a>
            <a href="/projects" title="projects">Projects</a>
          </div>
        </nav>
      </aside>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;