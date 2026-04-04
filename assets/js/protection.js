/**
 * CalJin AI - Source Protection Script
 * This script implements common deterrence measures to prevent easy viewing of the source code.
 * Note: No client-side protection is absolute, but this provides a strong layer of deterrence.
 */

// 1. Disable Right Click (Context Menu)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);

// 2. Disable Common Keyboard Shortcuts for DevTools and View Source
document.addEventListener('keydown', function(e) {
    // Disable F12
    if (e.keyCode === 123) {
        e.preventDefault();
        return false;
    }

    // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (Inspect/Console/Elements)
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
        e.preventDefault();
        return false;
    }

    // Disable Cmd+Opt+I, Cmd+Opt+J, Cmd+Opt+C (Mac equivalents)
    if (e.metaKey && e.altKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
        e.preventDefault();
        return false;
    }

    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
    }

    // Disable Cmd+Opt+U (Mac View Source)
    if (e.metaKey && e.altKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
    }

    // Disable Ctrl+S (Save Page)
    if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        return false;
    }

    // Disable Cmd+S (Mac Save Page)
    if (e.metaKey && e.keyCode === 83) {
        e.preventDefault();
        return false;
    }
}, false);

// 3. Simple Anti-Debugger Trap
// This will pause execution if DevTools is opened, making it annoying to inspect.
(function() {
    const checkDebugger = function() {
        const start = new Date();
        debugger;
        const end = new Date();
        if (end - start > 100) {
            // DevTools might be open
            console.clear();
            console.log("%cStop!", "color: red; font-size: 40px; font-weight: bold; -webkit-text-stroke: 1px black;");
            console.log("%cThis area is for authorized developers only.", "font-size: 18px;");
        }
    };
    
    // Periodically check
    setInterval(checkDebugger, 2000);
})();

// 4. Clear Console on Load
console.clear();
console.log("%cCalJin AI", "color: white; font-size: 30px; font-weight: bold; background: black; padding: 10px; border-radius: 5px;");
console.log("%cSource code protection is active.", "color: #333; font-style: italic;");
