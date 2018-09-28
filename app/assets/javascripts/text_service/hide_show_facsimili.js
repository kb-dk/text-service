/**
 * Created by bimo on 9/28/18.
 */

// Collapse/Expand facsimile column
    $('#hide_facsimile').click(function (e) {
        $('.lpTextContainer').removeClass('col-sm-6 border-right').addClass('col-sm-12');
        $(this).hide();
        $('#show_facsimile').show();
        $('.lpFacsContainer').hide();

    });
    $('#show_facsimile').click(function (e) {
        $('.lpTextContainer').addClass('col-sm-6 border-right').removeClass('col-sm-12');
        $(this).hide();
        $('#hide_facsimile').show();
        $('.lpFacsContainer').show();
    });

