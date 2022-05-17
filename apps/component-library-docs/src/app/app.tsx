// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Sidenav from './components/sidenav/sidenav';
import routes from './routes';
import './app.scss';

export default function App() {
  return (
    <div id="doc-site">
      <Sidenav />
      <div className="documentation">{routes}</div>
    </div>
  );
}
