import React from 'react';
import Ballpit from '../components/Ballpit';

export default function About() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%' }}>
      <Ballpit
        count={200}
        gravity={0.7}
        friction={0.8}
        wallBounce={0.95}
        followCursor={true}
        colors={[[1, 0.647, 0]]} // Normalized RGB for orange
        ambientColor={0.1} // Adjust as needed to complement the orange color
      />
    </div>
  );
}
