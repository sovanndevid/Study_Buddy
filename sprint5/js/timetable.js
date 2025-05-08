(function() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const startHour = 8;
    const endHour = 18;
    const timetableBody = document.getElementById('timetable-body');
    const storageKey = 'student-timetable-data';

    // Times formatted to 12-hour clock e.g. "8 AM", "9 AM" ...
    function formatTime(hour) {
      const suffix = hour >= 12 ? 'PM' : 'AM';
      const h12 = hour % 12 === 0 ? 12 : hour % 12;
      return `${h12} ${suffix}`;
    }

    // Load saved timetable from localStorage
    function loadData() {
      try {
        const data = JSON.parse(localStorage.getItem(storageKey));
        if (data && typeof data === 'object') return data;
      } catch (_) {}
      return {};
    }

    // Save timetable to localStorage
    function saveData(data) {
      localStorage.setItem(storageKey, JSON.stringify(data));
    }

    // Create table rows
    function createRows() {
      const data = loadData();
      for (let hour = startHour; hour < endHour; hour++) {
        const tr = document.createElement('tr');
        tr.setAttribute('role', 'row');

        // Time column
        const timeCell = document.createElement('td');
        timeCell.textContent = `${formatTime(hour)} - ${formatTime(hour+1)}`;
        timeCell.style.fontWeight = '600';
        timeCell.style.backgroundColor = '#f0f4ff';
        timeCell.style.cursor = 'default';
        timeCell.setAttribute('aria-rowspan', '1');
        timeCell.setAttribute('aria-colindex', '1');
        timeCell.setAttribute('tabindex', '-1');
        tr.appendChild(timeCell);

        // Day cells
        for (let d=0; d<days.length; d++) {
          const day = days[d];
          const td = document.createElement('td');
          td.setAttribute('role', 'gridcell');
          td.setAttribute('tabindex', '0');
          td.setAttribute('aria-label', `${day} ${formatTime(hour)} to ${formatTime(hour+1)}`);
          const key = `${day}-${hour}`;
          td.textContent = data[key] || '';
          td.addEventListener('click', () => editCell(td, key));
          td.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              editCell(td, key);
            }
          });
          tr.appendChild(td);
        }
        timetableBody.appendChild(tr);
      }
    }

    // Edit cell function
    function editCell(td, key) {
      // Already editing?
      if (td.classList.contains('editing')) return;

      td.classList.add('editing');
      const oldVal = td.textContent;
      td.textContent = '';

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'timetable-input';
      input.value = oldVal;
      td.appendChild(input);
      input.focus();
      input.select();

      // Save changes and cleanup
      function saveEdit() {
        const val = input.value.trim();
        td.removeChild(input);
        td.classList.remove('editing');
        td.textContent = val;

        const data = loadData();

        if (val) data[key] = val;
        else delete data[key];

        saveData(data);
      }

      // Handle losing focus or pressing enter to save
      input.addEventListener('blur', () => {
        saveEdit();
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          input.blur();
        }
        else if (e.key === 'Escape') {
          e.preventDefault();
          td.removeChild(input);
          td.classList.remove('editing');
          td.textContent = oldVal;
        }
      });
    }

    createRows();
  })();

