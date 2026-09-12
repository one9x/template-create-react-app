import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="wrap">
      <p className="eyebrow">One9x Pages · template</p>
      <h1>It routes</h1>
      <p className="lede">
        You reached this page without the server knowing the route exists. That
        is what <code>--spa</code> buys — every unmatched path is served
        <code> /index.html</code> and the router takes it from there.
      </p>
      <div className="row">
        <a className="btn btn-1" href="https://github.com/one9x/template-create-react-app/generate">
          Use this template &rarr;
        </a>
        <Link className="btn btn-2" to="/">Back</Link>
      </div>
      <footer>
        Hosted on <a href="https://one9x.com">One9x Pages</a> ·{' '}
        <a href="https://one9x.com/docs/frameworks/create-react-app">Create React App guide</a>
      </footer>
    </div>
  );
}
