import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="wrap">
      <p className="eyebrow">One9x Pages · template</p>
      <h1>Create React App </h1>
      <p className="lede">
        This page is the live output of a template repository. Copy it and you
        have a Create React App site that deploys itself to a URL of your own on every
        push.
      </p>

      <div className="row">
        <a className="btn btn-1" href="https://github.com/one9x/template-create-react-app/generate">
          Use this template &rarr;
        </a>
        <a className="btn btn-2" href="https://github.com/one9x/template-create-react-app">
          View the repo
        </a>
      </div>

      <h2>Start from it</h2>
      <ol>
        <li><strong>Use this template</strong> on GitHub to get your own copy.</li>
        <li>
          Create a site and a token:
          <pre>
            <span className="p">$ </span>one9x pages create mysite

            <span className="p">$ </span>one9x tokens create "github actions"
          </pre>
        </li>
        <li>
          In the new repo, under <strong>Settings → Secrets and variables →
          Actions</strong>, add the variable <code>ONE9X_SITE</code> (
          <code>mysite</code>) and the secret <code>ONE9X_TOKEN</code>.
        </li>
        <li>Push. A pull request gets a preview URL; <code>main</code> goes live.</li>
      </ol>

      <h2>Or deploy what you already have</h2>
      <pre>
        <span className="p">$ </span>npm run build

        <span className="p">$ </span>one9x pages release ./build --site mysite --spa --deploy
      </pre>

      <h2>What this template sets up</h2>
      <table className="facts">
        <tbody>
          <tr><th>Build command</th><td><code>npm run build</code></td></tr>
          <tr><th>Output folder</th><td><code>build</code></td></tr>
          <tr><th>SPA fallback</th><td><code>--spa</code> — routing happens in the browser</td></tr>
          <tr><th>CI</th><td>preview URL on every pull request, publish on <code>main</code></td></tr>
        </tbody>
      </table>

      <nav className="local">
        <Link to="/about">A second page &rarr;</Link>
        <span style={{ color: 'var(--wire)' }}> — proof routing works.</span>
      </nav>

      <footer>
        Hosted on <a href="https://one9x.com">One9x Pages</a> ·{' '}
        <a href="https://one9x.com/docs/frameworks/create-react-app">Create React App guide</a> ·{' '}
        <a href="https://one9x.com/docs">Docs</a>
      </footer>
    </div>
  );
}
