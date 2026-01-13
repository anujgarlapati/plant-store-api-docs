// Plant Store API - Custom JavaScript

(function() {
  'use strict';

  // ============================================
  // SUPPORT FOOTER BAR - Shows only at bottom of page
  // ============================================
  let supportFooterEl = null;
  let supportBarVisible = false;
  
  function injectSupportFooter() {
    if (document.getElementById('fern-support-footer')) return;

    supportFooterEl = document.createElement('div');
    supportFooterEl.id = 'fern-support-footer';
    supportFooterEl.innerHTML = `
      <div class="support-gradient">
        <div class="support-gradient__text">
          <strong>Need help?</strong> We're here for you.
        </div>
        <div class="support-gradient__actions">
          <a class="support-button secondary" href="mailto:support@plantstore.com">Email Support</a>
          <a class="support-button primary" href="/api-reference">API Reference</a>
        </div>
      </div>
    `;

    document.body.appendChild(supportFooterEl);
  }

  function getScrollInfo() {
    // Try to find the main scrollable container (Fern uses different containers)
    const scrollContainers = [
      document.querySelector('main'),
      document.querySelector('[class*="content"]'),
      document.querySelector('[class*="Content"]'),
      document.querySelector('[class*="scroll"]'),
      document.documentElement
    ];
    
    for (const container of scrollContainers) {
      if (container && container.scrollHeight > container.clientHeight) {
        return {
          scrollTop: container.scrollTop || window.scrollY,
          scrollHeight: container.scrollHeight,
          clientHeight: container.clientHeight || window.innerHeight
        };
      }
    }
    
    // Fallback to window
    return {
      scrollTop: window.scrollY,
      scrollHeight: document.documentElement.scrollHeight,
      clientHeight: window.innerHeight
    };
  }

  function handleSupportBarScroll() {
    const footer = document.getElementById('fern-support-footer');
    if (!footer) return;
    
    const { scrollTop, scrollHeight, clientHeight } = getScrollInfo();
    const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);
    
    // Show bar only when near the bottom of the page (within 200px)
    if (distanceFromBottom < 200) {
      if (!supportBarVisible) {
        footer.style.transform = 'translateY(0)';
        supportBarVisible = true;
      }
    } else {
      if (supportBarVisible) {
        footer.style.transform = 'translateY(100%)';
        supportBarVisible = false;
      }
    }
  }

  // Run support footer
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSupportFooter);
  } else {
    injectSupportFooter();
  }
  
  setTimeout(injectSupportFooter, 500);
  setTimeout(injectSupportFooter, 1000);

  // Add scroll listener for support bar - listen on window and capture phase for nested scrollers
  window.addEventListener('scroll', handleSupportBarScroll, { passive: true, capture: true });
  document.addEventListener('scroll', handleSupportBarScroll, { passive: true, capture: true });
  
  // Also check on page load and after delays (for short pages)
  setTimeout(handleSupportBarScroll, 600);
  setTimeout(handleSupportBarScroll, 1500);
  setTimeout(handleSupportBarScroll, 3000);

  // Re-inject if removed (SPA navigation)
  const supportObserver = new MutationObserver(function() {
    if (!document.getElementById('fern-support-footer')) {
      supportBarVisible = false;
      injectSupportFooter();
    }
    // Re-check scroll position after content changes
    setTimeout(handleSupportBarScroll, 100);
    setTimeout(handleSupportBarScroll, 500);
  });
  supportObserver.observe(document.body, { childList: true, subtree: true });
  
  // ============================================
  // FLOATING ACTION BUTTON - Opens buildwithfern.com
  // Shows at bottom, slides up from below when scrolling to bottom
  // ============================================
  let fabVisible = false;
  
  function createFloatingActionButton() {
    if (document.getElementById('fern-fab')) return;

    const fab = document.createElement('a');
    fab.id = 'fern-fab';
    fab.href = 'https://buildwithfern.com';
    fab.setAttribute('aria-label', 'Visit Fern');
    fab.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22V12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M12 12C12 12 12 8 8 5C8 5 8 10 12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 12C12 12 12 7 17 4C17 4 18 10 12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 8C12 8 13 5 16 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M12 9C12 9 10 6 7 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    `;
    
    Object.assign(fab.style, {
      position: 'fixed',
      bottom: '100px',
      right: '24px',
      transform: 'translateX(100px)', // Start hidden to the right
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      backgroundColor: '#1a1a1a',
      color: '#e5e5e5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
      cursor: 'pointer',
      zIndex: '9999',
      textDecoration: 'none',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.2s ease, background-color 0.2s ease'
    });

    fab.addEventListener('mouseenter', function() {
      if (fabVisible) {
        this.style.transform = 'translateX(0) scale(1.1)';
        this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
        this.style.backgroundColor = '#2a2a2a';
      }
    });

    fab.addEventListener('mouseleave', function() {
      if (fabVisible) {
        this.style.transform = 'translateX(0) scale(1)';
        this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
        this.style.backgroundColor = '#1a1a1a';
      }
    });

    document.body.appendChild(fab);
  }

  function handleFabScroll() {
    const fab = document.getElementById('fern-fab');
    if (!fab) return;
    
    const { scrollTop, scrollHeight, clientHeight } = getScrollInfo();
    const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);
    
    // Show FAB only when near the bottom of the page (within 200px)
    if (distanceFromBottom < 200) {
      if (!fabVisible) {
        fab.style.transform = 'translateX(0)';
        fabVisible = true;
      }
    } else {
      // Hide when not near bottom
      if (fabVisible) {
        fab.style.transform = 'translateX(100px)';
        fabVisible = false;
      }
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createFloatingActionButton);
  } else {
    createFloatingActionButton();
  }

  // Add scroll listener for FAB - listen on window and capture phase for nested scrollers
  window.addEventListener('scroll', handleFabScroll, { passive: true, capture: true });
  document.addEventListener('scroll', handleFabScroll, { passive: true, capture: true });
  
  // Also check on page load and after delays (for short pages)
  setTimeout(handleFabScroll, 600);
  setTimeout(handleFabScroll, 1500);
  setTimeout(handleFabScroll, 3000);

  // Re-create FAB if it gets removed (SPA navigation)
  const fabObserver = new MutationObserver(function() {
    if (!document.getElementById('fern-fab')) {
      fabVisible = false;
      createFloatingActionButton();
    }
    // Re-check scroll position after content changes
    setTimeout(handleFabScroll, 100);
    setTimeout(handleFabScroll, 500);
  });

  fabObserver.observe(document.body, {
    childList: true,
    subtree: true
  });

  // ============================================
  // CENTER BOTTOM NAVIGATION BAR
  // ============================================
  function centerBottomNavigation() {
    // Find all links with "Previous" or "Next" text
    const allLinks = document.querySelectorAll('a[href]');
    let navPill = null;
    
    allLinks.forEach(link => {
      const text = link.textContent || '';
      // Look for links that contain ONLY "Previous" or "Next" (navigation links)
      if ((text.trim() === 'Previous' || text.trim().startsWith('Previous') || 
           text.trim() === 'Next' || text.trim().endsWith('Next')) &&
          !text.includes('helpful')) {
        
        // Find the rounded pill container (the one with border-radius)
        let el = link;
        for (let i = 0; i < 8; i++) {
          if (el && el.parentElement) {
            el = el.parentElement;
            const style = window.getComputedStyle(el);
            const borderRadius = parseInt(style.borderRadius) || 0;
            const hasBorder = style.border && style.border !== 'none';
            
            // Look for the pill container (has rounded corners and border)
            if (borderRadius >= 8 && (hasBorder || el.className.includes('border') || el.className.includes('rounded'))) {
              navPill = el;
              break;
            }
          }
        }
      }
    });
    
    // If we found the navigation pill, stack everything vertically
    if (navPill) {
      // Find the parent container that holds feedback + nav + footer
      let parent = navPill.parentElement;
      
      // Go up to find the main flex container
      for (let i = 0; i < 5; i++) {
        if (parent) {
          const style = window.getComputedStyle(parent);
          // Look for the container with multiple children (feedback, nav, footer)
          if (parent.children.length >= 2 && 
              (style.display === 'flex' || style.display === 'grid')) {
            // Stack items vertically and center them
            parent.style.setProperty('display', 'flex', 'important');
            parent.style.setProperty('flex-direction', 'column', 'important');
            parent.style.setProperty('align-items', 'center', 'important');
            parent.style.setProperty('gap', '16px', 'important');
            parent.style.setProperty('width', '100%', 'important');
            break;
          }
          parent = parent.parentElement;
        }
      }
      
      // Center the pill itself on the page
      navPill.style.setProperty('margin-left', 'auto', 'important');
      navPill.style.setProperty('margin-right', 'auto', 'important');
    }
    
    // Also center the fern-footer-nav elements
    const footerNav = document.querySelector('.fern-footer-nav');
    if (footerNav) {
      footerNav.style.setProperty('justify-content', 'center', 'important');
      
      // Center h4 titles inside footer nav links
      const titles = footerNav.querySelectorAll('h4');
      titles.forEach(title => {
        title.style.setProperty('text-align', 'center', 'important');
      });
      
      // Center the content in footer links using flexbox
      const nextLink = footerNav.querySelector('.fern-footer-next');
      if (nextLink) {
        nextLink.style.setProperty('justify-content', 'center', 'important');
        // Remove padding that pushes text to one side
        const titleDiv = nextLink.querySelector('div.relative, div:first-child');
        if (titleDiv) {
          titleDiv.style.setProperty('padding-left', '0', 'important');
          titleDiv.style.setProperty('padding-right', '0', 'important');
        }
      }
      
      const prevLink = footerNav.querySelector('.fern-footer-prev');
      if (prevLink) {
        prevLink.style.setProperty('justify-content', 'center', 'important');
      }
    }
  }

  // Run centering on load and after navigation
  setTimeout(centerBottomNavigation, 500);
  setTimeout(centerBottomNavigation, 1500);
  setTimeout(centerBottomNavigation, 3000);

  // Re-apply on DOM changes (SPA navigation)  
  let navDebounce = null;
  const navObserver = new MutationObserver(function() {
    if (navDebounce) clearTimeout(navDebounce);
    navDebounce = setTimeout(centerBottomNavigation, 200);
  });
  navObserver.observe(document.body, { childList: true, subtree: true });

  // ============================================
  // RENAME "PAYLOAD" TO "REQUEST" ON WEBHOOK PAGES
  // ============================================
  function renamePayloadToRequest() {
    // Only run on webhook pages
    if (!window.location.pathname.includes('webhook')) return;
    
    // Find all text nodes and elements containing "Payload"
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    
    const textNodes = [];
    while (walker.nextNode()) {
      if (walker.currentNode.textContent.includes('Payload')) {
        textNodes.push(walker.currentNode);
      }
    }
    
    // Replace "Payload" with "Request" in text nodes
    textNodes.forEach(node => {
      node.textContent = node.textContent.replace(/Payload/g, 'Request');
    });
    
    // Also check for elements with Payload in their content
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, span, p, div, button').forEach(el => {
      if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
        if (el.textContent === 'Payload') {
          el.textContent = 'Request';
        }
      }
    });
  }

  // Run on load and after navigation
  setTimeout(renamePayloadToRequest, 500);
  setTimeout(renamePayloadToRequest, 1500);
  setTimeout(renamePayloadToRequest, 3000);

  // Re-apply on DOM changes (SPA navigation)
  let payloadDebounce = null;
  const payloadObserver = new MutationObserver(function() {
    if (payloadDebounce) clearTimeout(payloadDebounce);
    payloadDebounce = setTimeout(renamePayloadToRequest, 200);
  });
  payloadObserver.observe(document.body, { childList: true, subtree: true });

})();
