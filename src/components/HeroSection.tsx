import { Shield, Search, Eye, AlertTriangle } from 'lucide-react';
import styles from '../../pages/trace-me-index.module.css';

export const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      {/* Background with scan lines effect */}
      <div className={styles.scanLines}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroOverlay}></div>
      </div>

      {/* Hero content */}
      <div className={styles.heroContent}>
        {/* Logo/Brand */}
        <div className={styles.logoContainer}>
          <div className="relative">
            <div className={styles.logoGlow}></div>
            <div className={styles.logoIcon}>
              <Search className="w-8 h-8" style={{ color: 'hsl(var(--primary))' }} />
            </div>
          </div>
          <h1 className={styles.logoText}>
            Trace<span className={styles.logoText}>.</span>Me
          </h1>
        </div>

        {/* Main tagline */}
        <div className={styles.tagline}>
          <p className={styles.taglineIntro}>
            "What can the internet find about you…
          </p>
          <p className={styles.taglineHighlight}>
            with just crumbs?"
          </p>
        </div>

        {/* Description */}
        <p className={styles.description}>
          A clean, sharable OSINT-style tool that pulls together public data trails 
          to show users what's out there — across platforms, leaks, and web footprints.
        </p>

        {/* Feature icons */}
        <div className={styles.featureGrid}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Shield className="w-6 h-6" style={{ color: 'hsl(var(--cyber-green))' }} />
            </div>
            <p className={styles.featureText}>Security checkup</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Eye className="w-6 h-6" style={{ color: 'hsl(var(--cyber-blue))' }} />
            </div>
            <p className={styles.featureText}>Digital wake-up call</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <AlertTriangle className="w-6 h-6" style={{ color: 'hsl(var(--cyber-yellow))' }} />
            </div>
            <p className={styles.featureText}>Exposure analysis</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Search className="w-6 h-6" style={{ color: 'hsl(var(--cyber-purple))' }} />
            </div>
            <p className={styles.featureText}>Cross-platform tracing</p>
          </div>
        </div>

        {/* Terminal cursor effect */}
        <div className={styles.terminalPrompt}>
          <span>Ready to trace your digital footprint?</span>
          <span className={styles.terminalCursor}></span>
        </div>
      </div>
    </div>
  );
}; 