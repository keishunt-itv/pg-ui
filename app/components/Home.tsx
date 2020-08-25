import React from 'react';
import styles from './Home.css';
import Sidebar from './Sidebar/Sidebar';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <Sidebar />
    </div>
  );
}
