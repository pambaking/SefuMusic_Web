"use client";

import { useState, useEffect } from "react";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import Antigravity from "@/components/antigravity";

// Social media icons as SVGs
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
  </svg>
);

// Waveform visualization component
const Waveform = ({ isPlaying }: { isPlaying: boolean }) => (
  <div className="flex items-center justify-center gap-[2px] h-8">
    {[...Array(40)].map((_, i) => {
      const height = Math.sin((i / 40) * Math.PI * 3) * 0.5 + 0.5;
      return (
        <div
          key={`wave-${i}`}
          className={`w-1 bg-primary/60 rounded-full transition-all duration-150 ${isPlaying ? 'animate-pulse' : ''}`}
          style={{
            height: `${height * 100}%`,
            opacity: isPlaying ? 0.8 : 0.4,
            animationDelay: `${i * 50}ms`,
          }}
        />
      );
    })}
  </div>
);

// Sample data - Replace with your own
const artistName = "SEFU MUSIC";
const tagline = "Rhythm-Driven. Soul-Powered. Sound-Forward.";
const featuredSingle = "New Single 'Echoes' Out Now";

const albums = [
  {
    id: 1,
    title: "Nocturnal",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    year: "2024"
  },
  {
    id: 2,
    title: "Horizons",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop",
    year: "2023"
  },
  {
    id: 3,
    title: "Solstice",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
    year: "2022"
  },
];

const tracks = [
  { id: 1, title: "Echoes", duration: "4:32", plays: "125K" },
  { id: 2, title: "Desert Wind", duration: "5:17", plays: "98K" },
  { id: 3, title: "Golden Hour", duration: "3:45", plays: "87K" },
  { id: 4, title: "Midnight Sun", duration: "6:02", plays: "76K" },
];

const pressPhotos = [
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
];

const supportedArtists = [
  "Artist One", "Artist Two", "Artist Three", "Artist Four",
  "Artist Five", "Artist Six", "Artist Seven", "Artist Eight",
  "Artist Nine", "Artist Ten", "Artist Eleven", "Artist Twelve"
];

const quotes = [
  {
    text: "Exotic and electronic, the music is a mosaic of sophisticated compositions characterized by progressive rhythms, peppered with elements of Jazz, Funk, and World Bass. Every live set is a living prayer to the dance floor.",
    source: "Music Magazine"
  },
  {
    text: "With each successive listen, I find myself falling deeper and deeper. The ecstasy builds as the night draws to a close but not before a second drop takes us exactly where we need to be for full rapture and transformation.",
    author: "Jane Doe",
    source: "Indie Shuffle"
  }
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    alert(`Thanks for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        {isClient ? (
          <Antigravity
            count={200}
            magnetRadius={3}
            ringRadius={4}
            waveSpeed={0.5}
            waveAmplitude={1}
            particleSize={0.5}
            lerpSpeed={0.08}
            particleColors={['#FF0000', '#FFFFFF']} // Red and White
            autoAnimate={true}
            particleVariance={1.2}
            rotationSpeed={0.1}
            depthFactor={1}
            pulseSpeed={2.5}
            particleShape="sphere"
            fieldStrength={12}
          />
        ) : null}
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto my-8 p-4 sm:p-8 rounded-lg shadow-2xl overflow-y-auto">
        <img src="/naipic.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative min-h-screen flex flex-col">


          {/* Social Icons - Top */}
          <div className="relative z-10 flex justify-center gap-6 pt-8">
            <a href="#" className="text-black hover:text-primary transition-colors duration-300">
              <FacebookIcon />
            </a>
            <a href="#" className="text-black hover:text-primary transition-colors duration-300">
              <SpotifyIcon />
            </a>
            <a href="#" className="text-black hover:text-primary transition-colors duration-300">
              <YoutubeIcon />
            </a>
          </div>

          {/* Logo */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
            <img src="/sefumusiclogo.png" alt="SEFU MUSIC" className="w-3/4 md:w-1/2 lg:w-2/5 mb-12 animate-fade-in-up" />

            {/* Navigation */}
            <nav className="flex gap-8 md:gap-16 text-sm md:text-base tracking-[0.2em] uppercase mb-12 animate-fade-in-up delay-200">
              <a href="#" className="hover:text-primary transition-colors">Home</a>
              <a href="#music" className="hover:text-primary transition-colors">Music</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </nav>

            {/* Tagline */}
            <p className="text-lg md:text-xl tracking-[0.15em] text-center opacity-90 animate-fade-in-up delay-300">
              {tagline}
            </p>

            <p className="mt-6 text-sm italic text-primary animate-fade-in-up delay-400">
              {featuredSingle}
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="relative z-10 flex justify-center pb-8 animate-bounce">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Featured Track Player */}
        <section className="bg-secondary/50 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-card rounded-lg overflow-hidden border border-border">
              <div
                className="h-48 md:h-64 bg-black relative"
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all duration-300 animate-pulse-glow"
                  >
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-black">Now Playing</p>
                    <h3 className="text-xl font-semibold">{tracks[currentTrack].title}</h3>
                  </div>
                  <span className="text-black">{tracks[currentTrack].duration}</span>
                </div>
                {/* Waveform visualization */}
                <Waveform isPlaying={isPlaying} />

                {/* Progress bar */}
                <div className="h-1 bg-border rounded-full overflow-hidden mt-4">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: isPlaying ? "45%" : "0%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Quote Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl leading-relaxed italic text-black">
              "{quotes[0].text}"
            </blockquote>
          </div>
        </section>

        {/* SEFU MUSIC * MAKOMANDA BAND Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <img src="/SE.png" alt="MAKOMANDA BAND" className="w-1/4 mx-auto mb-8" />
            <h2 className="text-3xl font-semibold mb-8 tracking-wide">SEFU MUSIC * MAKOMANDA BAND</h2>
            <p className="text-lg text-black mb-8">
              A unique collaboration blending electronic soundscapes with the vibrant rhythms of Makomanda Band.
            </p>
            <Button
              size="lg"
              className="uppercase tracking-[0.2em] px-12 py-6 text-lg border-2 border-primary bg-primary hover:bg-transparent transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-2 tracking-wide">Join the community</h3>
            <p className="text-black mb-6">Free download upon signup</p>

            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-card border-border"
                required
              />
              <Button type="submit" className="uppercase tracking-wider px-8">
                Sign Up
              </Button>
            </form>
          </div>
        </section>

        {/* Music Section */}
        <section id="music" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12 tracking-wide">Latest Releases</h2>

            {/* Albums Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {albums.map((album) => (
                <div key={album.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={album.image}
                      alt={album.title}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button type="button" className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                        <PlayIcon />
                      </button>
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg">{album.title}</h4>
                  <p className="text-black text-sm">{album.year}</p>
                </div>
              ))}
            </div>

            {/* Track List */}
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="p-4 border-b border-border">
                <h3 className="font-semibold">Popular Tracks</h3>
              </div>
              {tracks.map((track, index) => (
                <div
                  key={track.id}
                  className={`flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors cursor-pointer ${
                    index !== tracks.length - 1 ? "border-b border-border" : ""
                  }`}
                  onClick={() => {
                    setCurrentTrack(index);
                    setIsPlaying(true);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setCurrentTrack(index);
                      setIsPlaying(true);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-black w-6">{index + 1}</span>
                    <span className="font-medium">{track.title}</span>
                  </div>
                  <div className="flex items-center gap-6 text-black text-sm">
                    <span>{track.plays} plays</span>
                    <span>{track.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12 tracking-wide">Live Sessions</h2>

            {/* Video placeholder */}
            <div className="relative aspect-video bg-card rounded-lg overflow-hidden border border-border">
              <img
                src="https://images.unsplash.com/photo-1501612780327-45045538702b?w=1200&q=80"
                alt="Live Performance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button type="button" className="w-20 h-20 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors">
                  <PlayIcon />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-black">Live Session</p>
                  <h4 className="text-white font-semibold">Desert Sunrise Performance</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press Quote */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl leading-relaxed italic text-black mb-6">
              "{quotes[1].text}"
            </blockquote>
            <p className="text-black">
              - {quotes[1].author}, <span className="text-primary">{quotes[1].source}</span>
            </p>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12 tracking-wide">Press Photos</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {pressPhotos.map((photo, index) => (
                <div key={`photo-${index + 1}`} className="group relative overflow-hidden rounded-lg cursor-pointer">
                  <img
                    src={photo}
                    alt={`Press photo ${index + 1}`}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button type="button" className="text-sm uppercase tracking-wider text-black hover:text-primary transition-colors">
                Share Photo Gallery
              </button>
            </div>
          </div>
        </section>

        {/* Supported Artists */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-8 tracking-wide">Supported:</h2>

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-black">
              {supportedArtists.map((artist, index) => (
                <span key={`artist-${index + 1}`} className="hover:text-primary transition-colors cursor-pointer">
                  {artist}{index < supportedArtists.length - 1 && <span className="mx-2">|</span>}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-secondary/30">
          <div className="max-w-xl mx-auto text-center">
            <Button
              size="lg"
              className="uppercase tracking-[0.2em] px-12 py-6 text-lg border-2 border-primary bg-transparent hover:bg-primary transition-all duration-300"
            >
              Contact {artistName}
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <a href="#" className="text-black hover:text-primary transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" className="text-black hover:text-primary transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="text-black hover:text-primary transition-colors">
                <SpotifyIcon />
              </a>
            </div>

            <p className="text-sm text-black">
              © {isClient ? new Date().getFullYear() : '2026'} {artistName}. All rights reserved.
            </p>
          </div>
        </footer>
        </div>
      </div>
    </div>
  );
}