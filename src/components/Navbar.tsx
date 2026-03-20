import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, User, LogIn, LogOut } from 'lucide-react';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { UserProfile } from '../types';
import { THEME } from '../constants';

interface NavbarProps {
  user: UserProfile | null;
}

export default function Navbar({ user }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user') {
        // User closed the popup, no need to log as error
        console.log('Connexion annulée par l\'utilisateur');
      } else if (error.code === 'auth/cancelled-popup-request') {
        // Multiple popup requests, ignore
      } else {
        console.error('Login error:', error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Galerie', path: '/#galerie' },
    { name: 'Services', path: '/#services' },
    { name: 'Boutique', path: '/#boutique' },
    { name: 'Rendez-vous', path: '/#rendez-vous' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1A1A2E]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex flex-col items-start">
            <span className="text-2xl font-bold tracking-tighter text-white leading-none">TWINS</span>
            <span className="text-[10px] tracking-[0.3em] text-[#FF6B35] font-medium">PRODUCTION</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-sm font-medium hover:text-[#FF6B35] transition-colors"
              >
                {link.name}
              </a>
            ))}
            {user?.role === 'admin' && (
              <Link
                href="/admin"
                className="text-sm font-medium text-[#9B59B6] hover:text-[#FF6B35] transition-colors"
              >
                Admin
              </Link>
            )}
            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-sm font-medium hover:text-[#FF6B35] transition-colors"
              >
                <LogOut size={18} />
                <span>Déconnexion</span>
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="flex items-center space-x-2 text-sm font-medium hover:text-[#FF6B35] transition-colors"
              >
                <LogIn size={18} />
                <span>Connexion</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#FF6B35] transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1A1A2E] border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium hover:bg-white/5 hover:text-[#FF6B35] transition-all"
                >
                  {link.name}
                </a>
              ))}
              {user?.role === 'admin' && (
                <Link
                  href="/admin"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-[#9B59B6]"
                >
                  Admin
                </Link>
              )}
              <div className="pt-4 border-t border-white/10">
                {user ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="flex items-center space-x-2 w-full px-3 py-4 text-base font-medium hover:text-[#FF6B35]"
                  >
                    <LogOut size={20} />
                    <span>Déconnexion</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleLogin();
                      setIsOpen(false);
                    }}
                    className="flex items-center space-x-2 w-full px-3 py-4 text-base font-medium hover:text-[#FF6B35]"
                  >
                    <LogIn size={20} />
                    <span>Connexion</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
