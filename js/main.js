AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});




// time------------

    function updateIST() {
      const now = new Date();
      // Convert to IST (UTC +5:30)
      const istOffset = 5.5 * 60 * 60 * 1000; 
      const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utcTime + istOffset);
      
      const timeString = istTime.toLocaleTimeString('en-IN', { hour12: true });
      document.getElementById('istTime').textContent = timeString;
    }

    // Update every second
    updateIST();
    setInterval(updateIST, 1000);
