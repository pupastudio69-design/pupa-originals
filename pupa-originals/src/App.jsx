import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import TopNavbar from './components/TopNavbar';
import BottomNavbar from './components/BottomNavbar';
import SearchOverlay from './components/SearchOverlay';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import WalletPage from './pages/WalletPage';
import DownloadsPage from './pages/DownloadsPage';
import ProfilePage from './pages/ProfilePage';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBack = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="relative min-h-screen bg-pupa-bg noise">
      {/* Search overlay */}
      {searchOpen && (
        <SearchOverlay
          onClose={() => setSearchOpen(false)}
          onMovieSelect={(m) => { setSelectedMovie(m); setSearchOpen(false); }}
        />
      )}

      {/* Movie detail page */}
      {selectedMovie && !searchOpen && (
        <>
          <TopNavbar onSearchOpen={() => setSearchOpen(true)} />
          <MovieDetailPage movie={selectedMovie} onBack={handleBack} />
          <BottomNavbar active={activeTab} onChange={setActiveTab} />
        </>
      )}

      {/* Main app */}
      {!selectedMovie && !searchOpen && (
        <>
          <TopNavbar onSearchOpen={() => setSearchOpen(true)} />

          <main>
            {activeTab === 'home' && <HomePage onMovieSelect={handleMovieSelect} />}
            {activeTab === 'wallet' && <WalletPage />}
            {activeTab === 'downloads' && <DownloadsPage />}
            {activeTab === 'me' && <ProfilePage />}
          </main>

          <BottomNavbar active={activeTab} onChange={setActiveTab} />
        </>
      )}
    </div>
  );
}
