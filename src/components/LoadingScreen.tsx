import { Search, Shield, Eye, AlertTriangle } from 'lucide-react';
import styles from '../../pages/trace-me-index.module.css';

interface LoadingScreenProps {
  query: string;
}

export const LoadingScreen = ({ query }: LoadingScreenProps) => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
      
      <div className={styles.loadingText}>
        <p className="mb-4">Tracing digital footprint...</p>
        <p className="text-sm opacity-75">Analyzing: <span className="font-mono text-primary">{query}</span></p>
        <p className="text-sm opacity-75">Scanning public databases and social platforms...</p>
      </div>

      <div className={styles.loadingProgress}>
        <div className={styles.loadingProgressFill}></div>
      </div>

      {/* Feature icons during loading */}
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
    </div>
  );
}; 