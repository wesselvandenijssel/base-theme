export default function (el) {
  function parseDMYDate(dateStr) {
    const parts = dateStr.split("-");
    if (parts.length !== 3) return null;
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const year = 2000 + parseInt(parts[2]); // Assuming the year is in YY format

    return new Date(year, month, day);
  }

  function formatDate(date) {
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear() % 100;
    return `${day}-${month}-${year}`;
  }

  const datePicker = document.getElementById("datepicker");

  datePicker.addEventListener("change", function () {
    const selectedDate = new Date(this.value);

    const gridItems = document.querySelectorAll(".grid .item-card");
    gridItems.forEach((item) => {
      const itemDateStr = item.getAttribute("data-date");
      const itemDate = parseDMYDate(itemDateStr);

      if (itemDate && selectedDate && itemDate > selectedDate) {
        item.style.display = "block"; // Or any other appropriate display property
      } else {
        item.style.display = "none"; // Or any other appropriate display property
      }
    });
  });
}
