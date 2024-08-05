$(document).ready(function () {
    // Переключение между вкладками
    $('.nav-link').click(function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');

        let targetId = $(this).attr('href');
        $('.content-section').hide();
        $(targetId).show();
    });


    // Обработка клика по кнопке "Скачать"
    $('.download-button').click(function () {
        let platform = $(this).parent().data('platform');
        if (platform === 'Chrome') {
            // Отображение модального окна для других платформ
            $('#downloadModal').fadeIn();
            $('#downloadModal').data('platform', platform); // Сохранение информации о платформе
        }
    });

    // Закрытие модального окна
    $('#closeModal').click(function () {
        $('#downloadModal').fadeOut();
    });
});