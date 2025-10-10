// =====================================================
// PROPRIETARY AND CONFIDENTIAL
// Copyright (c) 2025 Ranvijay Kumar
// All Rights Reserved
// 
// NOTICE: This code is the exclusive property of Ranvijay Kumar.
// Unauthorized copying, modification, distribution, or use of this
// code, via any medium, is strictly prohibited without explicit
// written permission from the copyright holder.
// 
// Project Fingerprint: RK-PORTFOLIO-2025-v1.0
// Owner: ranvijay-kumar4
// Contact: ranvijaykumar4405@gmail.com
// =====================================================

/**
 * Protection utilities to prevent unauthorized copying and usage
 * @author Ranvijay Kumar
 * @copyright 2025 Ranvijay Kumar. All rights reserved.
 */

// Unique fingerprint for this project
const PROJECT_SIGNATURE = btoa('RanvijayKumar-Portfolio-2025');
const OWNER_ID = 'ranvijay-kumar4';
const COPYRIGHT_YEAR = '2025';

// Console warning for developers
export const initializeProtection = () => {
  // Clear console and show copyright notice
  if (typeof window !== 'undefined') {
    console.clear();
    
    const styles = [
      'color: #ef4444',
      'background: #1e293b',
      'font-size: 20px',
      'font-weight: bold',
      'padding: 10px 20px',
      'border: 3px solid #ef4444',
      'border-radius: 5px'
    ].join(';');

    const infoStyles = [
      'color: #3b82f6',
      'font-size: 14px',
      'font-weight: normal',
      'padding: 5px'
    ].join(';');

    console.log('%c⚠️ COPYRIGHT NOTICE ⚠️', styles);
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', infoStyles);
    console.log('%c© ' + COPYRIGHT_YEAR + ' Ranvijay Kumar. All Rights Reserved.', infoStyles);
    console.log('%cThis code is protected by copyright law.', infoStyles);
    console.log('%cUnauthorized copying, modification, or distribution is prohibited.', infoStyles);
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', infoStyles);
    console.log('%cProject Owner: ' + OWNER_ID, infoStyles);
    console.log('%cFingerprint: ' + PROJECT_SIGNATURE, infoStyles);
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', infoStyles);
    
    // Additional warning
    setTimeout(() => {
      console.warn('🚨 DEVELOPER NOTICE: This portfolio is the intellectual property of Ranvijay Kumar. Any attempt to copy, modify, or redistribute this code without permission may result in legal action.');
    }, 1000);
  }
};

// Disable right-click context menu
export const disableRightClick = () => {
  if (typeof window !== 'undefined') {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      console.warn('⚠️ Right-click is disabled. © ' + COPYRIGHT_YEAR + ' Ranvijay Kumar');
      return false;
    });
  }
};

// Disable text selection on specific elements
export const protectContent = () => {
  if (typeof window !== 'undefined') {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    document.addEventListener('keydown', (e) => {
      // F12
      if (e.keyCode === 123) {
        e.preventDefault();
        console.warn('⚠️ Developer tools access detected. © ' + COPYRIGHT_YEAR + ' Ranvijay Kumar');
        return false;
      }
      // Ctrl+Shift+I or Ctrl+Shift+J or Ctrl+Shift+C
      if ((e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) ||
          // Ctrl+U (View Source)
          (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault();
        console.warn('⚠️ Source code access attempt detected. © ' + COPYRIGHT_YEAR + ' Ranvijay Kumar');
        return false;
      }
    });

    // Detect if DevTools is open
    let devtools = { open: false };
    const element = new Image();
    Object.defineProperty(element, 'id', {
      get: function() {
        devtools.open = true;
        console.warn('⚠️ Developer tools detected. This project is copyrighted by Ranvijay Kumar.');
      }
    });

    setInterval(() => {
      devtools.open = false;
      console.dir(element);
      if (devtools.open) {
        console.warn('🚨 NOTICE: You are viewing copyrighted code. © ' + COPYRIGHT_YEAR + ' Ranvijay Kumar. Unauthorized use is prohibited.');
      }
    }, 1000);
  }
};

// Add watermark to the page
export const addWatermark = () => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const watermark = document.createElement('div');
    watermark.innerHTML = '© 2025 Ranvijay Kumar';
    watermark.style.cssText = `
      position: fixed;
      bottom: 10px;
      right: 10px;
      font-size: 10px;
      color: rgba(255, 255, 255, 0.3);
      pointer-events: none;
      z-index: 9999;
      user-select: none;
      font-family: monospace;
    `;
    document.body.appendChild(watermark);
  }
};

// Hidden metadata in localStorage
export const setOwnershipMetadata = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const metadata = {
      owner: OWNER_ID,
      copyright: `© ${COPYRIGHT_YEAR} Ranvijay Kumar`,
      signature: PROJECT_SIGNATURE,
      created: new Date().toISOString(),
      notice: 'This portfolio is the exclusive property of Ranvijay Kumar. Unauthorized use is prohibited.'
    };
    localStorage.setItem('_portfolio_ownership', JSON.stringify(metadata));
  }
};

// Verify ownership
export const verifyOwnership = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const stored = localStorage.getItem('_portfolio_ownership');
    if (!stored) {
      setOwnershipMetadata();
    }
  }
};

// Track page views (can be used to detect unauthorized deployments)
export const trackDeployment = () => {
  if (typeof window !== 'undefined') {
    const deploymentData = {
      domain: window.location.hostname,
      timestamp: new Date().toISOString(),
      signature: PROJECT_SIGNATURE,
      owner: OWNER_ID
    };
    
    // Log deployment info (in production, this could send to an analytics endpoint)
    console.log('%c🔍 Deployment Tracking', 'color: #10b981; font-weight: bold;');
    console.log('Domain:', deploymentData.domain);
    console.log('Owner:', deploymentData.owner);
    
    // Check if deployed on unauthorized domain
    const authorizedDomains = [
      'localhost',
      '127.0.0.1',
      'ranvijay-portfolio.vercel.app',
      'ranvijay-kumar4.github.io'
    ];
    
    const isAuthorized = authorizedDomains.some(domain => 
      window.location.hostname.includes(domain)
    );
    
    if (!isAuthorized) {
      console.error('⛔ UNAUTHORIZED DEPLOYMENT DETECTED!');
      console.error('This portfolio belongs to Ranvijay Kumar and is being used without permission.');
      console.error('Contact: ranvijaykumar4405@gmail.com');
    }
  }
};

// Initialize all protections
export const initializeAllProtections = () => {
  if (typeof window !== 'undefined') {
    // Initialize core protection
    initializeProtection();
    
    // Set ownership metadata
    setOwnershipMetadata();
    verifyOwnership();
    
    // Track deployment
    trackDeployment();
    
    // Add watermark
    addWatermark();
    
    // Enable protection features (uncomment in production)
    // disableRightClick();
    // protectContent();
    
    console.log('%c✅ Protection systems initialized', 'color: #10b981; font-weight: bold;');
  }
};

// Export project signature for verification
export const getProjectSignature = () => PROJECT_SIGNATURE;
export const getOwnerId = () => OWNER_ID;

