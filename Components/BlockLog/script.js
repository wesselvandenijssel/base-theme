export default function (el) {
  function parseDMYDate(dateStr) {
    const parts = dateStr.split("-");
    if (parts.length !== 3) return null;
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = 2000 + parseInt(parts[2], 10); // Assuming the year is in YY format

    return new Date(year, month, day);
  }

  function formatDate(date) {
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear() % 100;
    return `${day}-${month}-${year}`;
  }

  const datePicker = document.getElementById("datepicker");
  const searchInput = document.getElementById("search");
  const gridItems = document.querySelectorAll(".grid .item-card");

  function filterItems() {
    const selectedDate = datePicker.value ? new Date(datePicker.value) : null;
    const searchQuery = searchInput.value.toLowerCase().trim();

    gridItems.forEach((item) => {
      const itemDateStr = item.getAttribute("data-date");
      const itemDate = parseDMYDate(itemDateStr);
      const itemTitle = item
        .querySelector(".item-card__title")
        .textContent.toLowerCase();

      const matchesDate =
        !selectedDate || (itemDate && itemDate >= selectedDate);
      const matchesSearch = !searchQuery || itemTitle.includes(searchQuery);

      if (matchesDate && matchesSearch) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  datePicker.addEventListener("change", filterItems);
  searchInput.addEventListener("input", filterItems);
}
