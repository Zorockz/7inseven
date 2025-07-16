import { useState } from 'react';
import { Search, User, Mail, Phone } from 'lucide-react';
import styles from '../../pages/trace-me-index.module.css';

interface SearchFormProps {
  onSearch: (query: string, queryType: 'email' | 'username' | 'name') => void;
  isLoading?: boolean;
}

export const SearchForm = ({ onSearch, isLoading = false }: SearchFormProps) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState<'email' | 'username' | 'name'>('username');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim(), searchType);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="searchType" className={styles.inputLabel}>
            Search Type
          </label>
          <select
            id="searchType"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value as 'email' | 'username' | 'name')}
            className={styles.inputField}
          >
            <option value="username">Username</option>
            <option value="email">Email</option>
            <option value="name">Name</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="query" className={styles.inputLabel}>
            {searchType === 'name' && 'Full Name'}
            {searchType === 'email' && 'Email Address'}
            {searchType === 'username' && 'Username or Handle'}
          </label>
          <input
            type="text"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              searchType === 'name' ? 'Enter full name...'
              : searchType === 'email' ? 'Enter email address...'
              : 'Enter username...'
            }
            className={styles.inputField}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className={styles.searchButton}
        >
          {isLoading ? (
            <>
              <div className={styles.loadingSpinner}></div>
              Searching...
            </>
          ) : (
            <>
              <Search className="w-4 h-4" />
              Trace Digital Footprint
            </>
          )}
        </button>
      </form>
    </div>
  );
}; 