// src/components/LookerStudioEmbed.tsx
import React from 'react';
import { Box } from '@mui/material';

const LookerStudioEmbed: React.FC = () => {
  return (
    <Box style={{ height: '100vh' }}>
      <iframe
        src="https://lookerstudio.google.com/embed/reporting/a200899e-910f-49c4-9ad6-abba13e5ed9f/page/WF3wD"
        frameBorder="0"
        width="100%"
        height="100%"
        allowFullScreen
        title="Looker Studio Report"
        style={{ border: 'none' }}
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-popups-to-escape-sandbox"
      />
    </Box>
  );
};

export default LookerStudioEmbed;