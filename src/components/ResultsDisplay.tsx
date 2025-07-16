import { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, Info, ExternalLink, Search, Eye, TrendingUp, Network } from 'lucide-react';
import styles from '../../pages/trace-me-index.module.css';

interface SearchResult {
  digitalProfile: {
    ageRange: string;
    firstTrace: string;
    persona: string;
    traceScore: number;
  };
  platforms: Array<{
    name: string;
    confidence: number;
    snippet: string;
    lastActive: string;
    risk: 'low' | 'medium' | 'high';
  }>;
  breaches: Array<{
    source: string;
    date: string;
    data: string[];
    severity: 'low' | 'medium' | 'high';
  }>;
  networkConnections: Array<{
    platform: string;
    connectedTo: string;
    confidence: number;
  }>;
}

interface ResultsDisplayProps {
  results: SearchResult;
  query: string;
  onNewSearch: () => void;
}

export const ResultsDisplay = ({ results, query, onNewSearch }: ResultsDisplayProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'hsl(var(--cyber-green))';
      case 'medium':
        return 'hsl(var(--cyber-yellow))';
      case 'high':
        return 'hsl(var(--cyber-orange))';
      default:
        return 'hsl(var(--muted-foreground))';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'hsl(var(--cyber-red))';
    if (score >= 50) return 'hsl(var(--cyber-yellow))';
    return 'hsl(var(--cyber-green))';
  };

  const getPlatformUrl = (platformName: string) => {
    const platformUrls: { [key: string]: string } = {
      'GitHub': 'https://github.com',
      'LinkedIn': 'https://linkedin.com',
      'Twitter': 'https://twitter.com',
      'Reddit': 'https://reddit.com',
      'Instagram': 'https://instagram.com',
      'TikTok': 'https://tiktok.com',
      'Facebook': 'https://facebook.com',
      'YouTube': 'https://youtube.com',
      'Twitch': 'https://twitch.tv',
      'Discord': 'https://discord.com',
      'Snapchat': 'https://snapchat.com',
      'Pinterest': 'https://pinterest.com'
    };
    return platformUrls[platformName] || `https://google.com/search?q=${platformName}`;
  };

  const handleShare = () => {
    const shareText = `Trace Score: ${results.digitalProfile.traceScore}/100. Found on ${results.platforms.length} platforms. ${results.breaches.length} breaches detected. Check your digital footprint at Trace.Me`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My Digital Trace Report',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText);
    }
  };

  return (
    <div className={styles.resultsContainer}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">
          Digital Footprint Results
        </h2>
        <p className="text-muted-foreground mb-4">
          Found {results.platforms.length} platforms and {results.breaches.length} breaches for: <span className="font-mono text-primary">{query}</span>
        </p>
        <div className="flex justify-center gap-2">
          <button
            onClick={onNewSearch}
            className={styles.searchButton}
          >
            <Search className="w-4 h-4" />
            New Search
          </button>
          <button
            onClick={handleShare}
            className={styles.searchButton}
            style={{ background: 'var(--gradient-secondary)' }}
          >
            <ExternalLink className="w-4 h-4" />
            Share Results
          </button>
        </div>
      </div>

      {/* Trace Score Card */}
      <div className={`${styles.resultCard} ${styles.cardCyber} mb-8`}>
        <div className={styles.resultHeader}>
          <div className={styles.resultIcon} style={{ color: getScoreColor(results.digitalProfile.traceScore) }}>
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h3 className={styles.resultTitle}>Digital Trace Score</h3>
            <p className="text-sm text-muted-foreground">How traceable you are across the internet</p>
          </div>
        </div>
        <div className={styles.resultContent}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-4xl font-bold" style={{ color: getScoreColor(results.digitalProfile.traceScore) }}>
                {results.digitalProfile.traceScore}
                <span className="text-lg text-muted-foreground">/100</span>
              </div>
            </div>
            <div className={styles.progressBar} style={{ width: '200px' }}>
              <div 
                className={styles.progressFill}
                style={{ width: `${results.digitalProfile.traceScore}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-border mb-6">
        {['overview', 'platforms', 'breaches', 'network'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === tab 
                ? 'border-b-2 border-primary text-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Digital Profile */}
          <div className={`${styles.resultCard} ${styles.cardCyber}`}>
            <div className={styles.resultHeader}>
              <div className={styles.resultIcon} style={{ color: 'hsl(var(--cyber-blue))' }}>
                <Eye className="w-5 h-5" />
              </div>
              <h3 className={styles.resultTitle}>Digital Profile</h3>
            </div>
            <div className={styles.resultContent}>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Age Range</p>
                  <p className="font-semibold">{results.digitalProfile.ageRange}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">First Digital Trace</p>
                  <p className="font-semibold">{results.digitalProfile.firstTrace}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Digital Persona</p>
                  <p className="font-semibold">{results.digitalProfile.persona}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className={`${styles.resultCard} ${styles.cardCyber}`}>
            <div className={styles.resultHeader}>
              <div className={styles.resultIcon} style={{ color: 'hsl(var(--cyber-purple))' }}>
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className={styles.resultTitle}>Quick Stats</h3>
            </div>
            <div className={styles.resultContent}>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Platforms Found</span>
                  <span className="font-semibold">{results.platforms.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Data Breaches</span>
                  <span className="font-semibold" style={{ color: 'hsl(var(--cyber-red))' }}>{results.breaches.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Network Connections</span>
                  <span className="font-semibold">{results.networkConnections.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">High Risk Platforms</span>
                  <span className="font-semibold" style={{ color: 'hsl(var(--cyber-red))' }}>
                    {results.platforms.filter(p => p.risk === 'high').length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'platforms' && (
        <div className="space-y-4">
          {results.platforms.map((platform, index) => (
            <div key={index} className={`${styles.resultCard} ${styles.cardCyber}`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={styles.platformIcon}>
                      <span className="text-xs font-bold text-white">
                        {platform.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-semibold">{platform.name}</h3>
                    <span 
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{ 
                        backgroundColor: `${getRiskColor(platform.risk)}20`,
                        color: getRiskColor(platform.risk)
                      }}
                    >
                      {platform.risk}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {platform.snippet}
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>Last active: {platform.lastActive}</span>
                    <span>Match: {platform.confidence}%</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={styles.progressBar} style={{ width: '60px' }}>
                    <div 
                      className={styles.progressFill}
                      style={{ width: `${platform.confidence}%` }}
                    ></div>
                  </div>
                  <button 
                    onClick={() => window.open(getPlatformUrl(platform.name), '_blank')}
                    className="p-1 hover:bg-primary/20 rounded"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'breaches' && (
        <div className="space-y-4">
          {results.breaches.length === 0 ? (
            <div className={`${styles.resultCard} ${styles.cardSuccess}`}>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5" style={{ color: 'hsl(var(--cyber-green))' }} />
                <span className="font-semibold">No breaches found!</span>
              </div>
            </div>
          ) : (
            results.breaches.map((breach, index) => (
              <div key={index} className={`${styles.resultCard} ${
                breach.severity === 'high' ? styles.cardDanger : 
                breach.severity === 'medium' ? styles.cardWarning : 
                styles.cardSuccess
              }`}>
                <div className={styles.resultHeader}>
                  <div className={styles.resultIcon} style={{ color: 'hsl(var(--cyber-red))' }}>
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={styles.resultTitle}>{breach.source}</h3>
                    <p className="text-sm text-muted-foreground">{breach.date}</p>
                  </div>
                </div>
                <div className={styles.resultContent}>
                  <div className="mb-2">
                    <span className="font-semibold">Data Exposed:</span>
                    <ul className="list-disc list-inside ml-4 mt-2">
                      {breach.data.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <span 
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={{ 
                      backgroundColor: `${getRiskColor(breach.severity)}20`,
                      color: getRiskColor(breach.severity)
                    }}
                  >
                    {breach.severity} risk
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {activeTab === 'network' && (
        <div className="space-y-4">
          {results.networkConnections.length === 0 ? (
            <div className={`${styles.resultCard} ${styles.cardSuccess}`}>
              <div className="flex items-center space-x-3">
                <Network className="w-5 h-5" style={{ color: 'hsl(var(--cyber-green))' }} />
                <span className="font-semibold">No network connections found!</span>
              </div>
            </div>
          ) : (
            results.networkConnections.map((conn, index) => (
              <div key={index} className={`${styles.resultCard} ${styles.cardCyber}`}>
                <div className="flex items-center space-x-3">
                  <Network className="w-5 h-5" style={{ color: 'hsl(var(--cyber-blue))' }} />
                  <span className="font-semibold">{conn.platform}</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="font-semibold">{conn.connectedTo}</span>
                  <span 
                    className="px-2 py-1 rounded text-xs font-medium ml-auto"
                    style={{ 
                      backgroundColor: 'hsl(var(--cyber-blue) / 0.2)',
                      color: 'hsl(var(--cyber-blue))'
                    }}
                  >
                    {conn.confidence}% match
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}; 