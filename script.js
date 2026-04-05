/* script.js */

// Login Function
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'admin@123') {
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid credentials');
  }
}

// Show Current Time
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const el = document.getElementById('currentTime');
  if (el) el.innerText = 'Current Time: ' + timeString;
}
setInterval(updateTime, 1000);
// Bell Scheduler
let bellTime = null;

function setBellTime() {
  const hour = document.getElementById('hour').value;
  const minute = document.getElementById('minute').value;

  if (hour === '' || minute === '') {
    alert('Enter valid time');
    return;
  }

  bellTime = `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
  alert('Bell set for ' + bellTime);
}

// Ring Bell
function ringBell() {
  alert('Bell Ringing 🔔');
}

// Auto Check Bell Time
setInterval(() => {
  if (!bellTime) return;

  const now = new Date();
  const current = now.toTimeString().slice(0,5);

  if (current === bellTime) {
    alert('Bell Ringing 🔔 (Scheduled)');
    bellTime = null;
  }
}, 1000);
