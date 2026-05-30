import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import TopNavbar from './components/TopNavbar';
import BottomNavbar from './components/BottomNavbar';
import SearchOverlay from './components/SearchOverlay';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import WalletPage from './pages/WalletPage';
import DownloadsPage from './pages/DownloadsPage';
import ProfilePage from './pages/ProfilePage';
import SignUp from './pages/SignUp';

export default function App() {
    console.log('=== APP RENDERING ===');
  console.log('showSplash:', showSplash);
  console.log('signedUp:', signedUp);
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Small delay to ensure splash screen renders first
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }
  if (showSplash) {
    console.log('SHOWING SPLASH SCREEN');
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }
  
  console.log('SPLASH DONE - checking signedUp:', signedUp);
  
  if (!signedUp) {
    console.log('SHOWING SIGNUP PAGE');
    return <SignUp onSignUp={() => setSignedUp(true)} />;
  }
  
  console.log('SHOWING HOMEPAGE');
  // Show loading until ready
  if (!isReady) {
    return <div style={{ background: '#041b11', minHeight: '100vh' }} />;
  }

  // If not signed up, show SignUp page
  if (!signedUp) {
    return <SignUp onSignUp={() => setSignedUp(true)} />;
  }
  console.log('Splash done:', !showSplash, 'SignedUp:', signedUp);
  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBack = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="relative min-h-screen bg-pupa-bg noise">
      {searchOpen && (
        <SearchOverlay
          onClose={() => setSearchOpen(false)}
          onMovieSelect={(m) => { setSelectedMovie(m); setSearchOpen(false); }}
        />
      )}

      {selectedMovie && !searchOpen && (
        <>
          <TopNavbar onSearchOpen={() => setSearchOpen(true)} />
          <MovieDetailPage movie={selectedMovie} onBack={handleBack} />
          <BottomNavbar active={activeTab} onChange={setActiveTab} />
        </>
      )}

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