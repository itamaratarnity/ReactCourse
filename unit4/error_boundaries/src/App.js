import React, { useState } from 'react';
import BuggyComponent from './BuggyComponent';
import ErrorBoundary from './ErrorBoundary';

export default function App() {
  const [shouldCrash, setShouldCrash] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h1>🛠️ React Error Boundaries</h1>
      <button onClick={() => setShouldCrash(!shouldCrash)}>
        {shouldCrash ? '🔓 הפסק קריסה' : '💥 הפעל קריסה'}
      </button>

      <ErrorBoundary>
        <BuggyComponent shouldCrash={shouldCrash} />
      </ErrorBoundary>

      <p>אפליקציה ממשיכה לעבוד גם אם רכיב קרס.</p>
    </div>
  );
}
