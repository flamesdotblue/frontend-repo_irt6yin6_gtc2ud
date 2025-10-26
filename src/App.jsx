import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import ServiceDetail from './components/ServiceDetail.jsx';

function App() {
  const [hash, setHash] = React.useState(typeof window !== 'undefined' ? window.location.hash : '');

  React.useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const match = hash.match(/^#\/services\/([a-z0-9-]+)$/);
  const isService = Boolean(match);
  const slug = match ? match[1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      {isService ? <ServiceDetail slug={slug} /> : <Home />}
    </div>
  );
}

export default App;
