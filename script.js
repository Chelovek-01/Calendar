document.addEventListener('DOMContentLoaded', () => {
    const monthYear = document.getElementById('month-year');
    const daysContainer = document.getElementById('days');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var currentDate = new Date();
    var today = new Date();

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // Количество дней в текущем месяце

        monthYear.textContent = `${months[month]} ${year}`;
        daysContainer.innerHTML = '';

        const prevMonthLastDay = new Date(year, month, 0).getDate();

        for(let i = firstDay; i > 0; i--) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = prevMonthLastDay - i + 1;
            dayDiv.classList.add('fade');
            daysContainer.appendChild(dayDiv);
        }

        for(let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;

            if(i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayDiv.classList.add('today');
            }

            daysContainer.appendChild(dayDiv);
        }

        const nextMonthStartDay = (7 - new Date(year, month + 1, 0).getDay() - 1) % 7;

        for(let i = 1; i <= nextMonthStartDay; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;
            dayDiv.classList.add('fade');
            daysContainer.appendChild(dayDiv);
        }
    }

    prevBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});
