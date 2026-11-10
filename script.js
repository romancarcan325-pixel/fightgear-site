// Ждем, пока полностью загрузится вся DOM-структура страницы
document.addEventListener("DOMContentLoaded", function() {
    
    // Находим кнопку, элемент для вывода суммы и контейнер результата
    const button = document.getElementById("calcBtn");
    const totalDisplay = document.getElementById("totalPrice");
    const resultContainer = document.querySelector(".result-container");

    // Добавляем событие клика на кнопку «Рассчитать стоимость»
    button.addEventListener("click", function() {
        let total = 0;

        // Находим элементы чекбоксов товаров
        const gloves = document.getElementById("gloves");
        const helmet = document.getElementById("helmet");
        const shin = document.getElementById("shin");
        const bandages = document.getElementById("bandages");
        
        // Находим элемент выпадающего списка скидки
        const discountSelect = document.getElementById("discount");

        // Если галочка установлена, переводим значение в число и прибавляем к стоимости
        if (gloves.checked) total += Number(gloves.value);
        if (helmet.checked) total += Number(helmet.value);
        if (shin.checked) total += Number(shin.value);
        if (bandages.checked) total += Number(bandages.value);

        // Получаем величину скидки в процентах из выпадающего списка
        const discountPercent = Number(discountSelect.value);

        // Рассчитываем итоговую сумму с учетом процента скидки
        if (discountPercent > 0) {
            total = total - (total * (discountPercent / 100));
        }

        // Выводим полученный результат на экран
        totalDisplay.textContent = total;

        // --- ЗАПУСК АНИМАЦИИ ВСПЫШКИ ЦИФР ---
        // Сначала удаляем класс анимации (если расчет нажимается не в первый раз)
        resultContainer.classList.remove("flash-animation");
        
        // Трюк для принудительного пересчета стилей браузером, чтобы сбросить анимацию
        void resultContainer.offsetWidth; 
        
        // Добавляем класс анимации заново, запуская эффект неонового пульса
        resultContainer.classList.add("flash-animation");
    });
});
