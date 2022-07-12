const capitalize = text => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const indexFormat = index => {
  if (index < 10) {
    return `0${index}`;
  }
  return index;
};

function displayData(data, element) {
  if (data.length === 0) {
    return;
  }

  let stash = ``;

  data.reverse().forEach(function (item, index) {
    stash += `
        <li>
        <div>
          <h4 class="title">
            {${capitalize(item.type)}}(${indexFormat(data.length - index)})
            <br>
            ${item.title}
          </h4>
          <span class="date">${item.date}</span>
          <a href="${item.url}" target="_blank">
            <span>Show project</span>
          </a>
        </div>
      </li>
        `;
  });

  document.getElementById(element).innerHTML = `
  <ol>
   ${stash}
   <li></li>
  </ol>
`;
}

displayData(frontEndData, 'frontend');
displayData(backEndData, 'backend');
