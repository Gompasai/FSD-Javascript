const batteryStatusElem = document.querySelector('.battery-status');
const batteryLevelElem = document.querySelector('.battery-level');
const chargingStatusElem = document.querySelector('.charging-status');

navigator.getBattery().then(battery => {
  function updateBatteryStatus() {
    batteryStatusElem.style.height = (battery.level * 100) + '%';
    batteryLevelElem.textContent = Math.round(battery.level * 100) + '%';
    chargingStatusElem.textContent = battery.charging ? 'Charging' : 'Not Charging';
  }

  battery.addEventListener('levelchange', updateBatteryStatus);
  battery.addEventListener('chargingchange', updateBatteryStatus);

  updateBatteryStatus();
});
