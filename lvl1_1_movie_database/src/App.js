import logo from './logo.svg';
import './App.css';
import Movies from './data/Movielist'
import Movieitem from './components/Movieitem';

function App() {
  return (
    <div className="App">
      <section>
        {Movies.map((elt, i) =>
          <Movieitem
            key={i}
            title={elt.title}
            year={elt.year}
            director={elt.director}
            duration={elt.duration}
            genre={elt.genre}
            rate={elt.rate}
          />
        )}
      </section>
    </div>
  );
}

export default App;
