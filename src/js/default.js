$(function() {
    setupVarsAndGameBar();

    $('#start-button').on('click', function () {
        $(this).parent().hide("slow");
        $('#character-select-screen').show("slow");
    });
    $('#dale, #triest').on('click', function () {
        var id = $(this).prop('id');
        switch (id) {
            case 'dale':
                console.log('You selected Dale!');
                break;
            case 'triest':
                console.log('You selected Triest!');
                break;
        }
        $('#character-select-screen').hide('slow');
        $('#game').show('slow');
        startGame()
    });
    $('#resume-pause').toggle(function () {
        pauseGame();
        $(this).text('Resume');
    }, function () {
        startGame();
        $(this).text('Pause');
    });
    $('body').keypress(function () {
        if (keydown.p) {
            var $el = $('#resume-pause');
            if ($el.text() === 'Resume') {
                startGame();
                $el.text('Pause');
            } else {
                pauseGame();
                $el.text('Resume');
            }
        }
    });
});