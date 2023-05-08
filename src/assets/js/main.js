const capitalize = text => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const getYearMonthMS = (dateText = null) => {
  let newDate;

  if (dateText) {
    newDate = new Date(dateText);
  } else {
    newDate = new Date();
  }

  const yearMonth = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
  const yearMonthMs = yearMonth.getTime();

  return yearMonthMs;
};

const indexFormat = index => {
  return index < 10 ? `0${index}` : `${index}`;
};

const displayData = (data, element) => {
  if (data.length === 0) {
    return;
  }

  let listItems = '';
  const currentDateMS = getYearMonthMS();
  console.log('currentDateMS:', currentDateMS);

  for (let i = data.length - 1; i >= 0; i--) {
    const item = data[i];
    const index = indexFormat(i + 1);
    const cardDateMS = getYearMonthMS(item.date);
    isSame = currentDateMS === cardDateMS;

    const listItem = `
      <li>
        <div>
          <h4 class="title">
            {${capitalize(item.type)}}(${index})
            <br>
            ${item.title}
          </h4>
          <span class="date ${isSame && 'this-month'}">${item.date} ${isSame ? `(this month)` : ''}</span>
          <a href="${item.url}" target="_blank">
            <span>Open Link</span>
          </a>
        </div>
      </li>
    `;

    listItems += listItem;
  }

  const html = `
    <ol>
      ${listItems}
      <li></li>
    </ol>
  `;

  document.getElementById(element).innerHTML = html;
};

// Display data for different categories in the DOM.
displayData(frontEndData, 'frontend');
displayData(backEndData, 'backend');
displayData(fullStackData, 'fullstack');
displayData(flutterData, 'flutter');
displayData(coursesData, 'courses');

// Initializes click-and-scroll functionality.
clickAndScroll();
