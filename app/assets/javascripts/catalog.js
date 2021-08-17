"use strict";
// Called in the _index_default.html to populate the index partial with links of text searches
// If the matxhes are more than 3, it creates a button that triggers a modal with all the matches/links
function index_work_search(id, modal_selector, modal_body_selector, target_selector, text_label_id, q, match) {
    id = encodeURIComponent(id);
    if (!q.trim()) {
        $(text_label_id).hide();
        $(target_selector).hide();
    } else {
        $.ajax({
            type: 'GET',
//            url: '/text.json?search_field=leaf&rows=200&sort=position_isi+asc&q=' + q + '&workid=' + id + '&match=' + match,
	    url: '/text.json?search_field=leaf&rows=200&q=' + q + '&workid=' + id + '&match=' + match,
            datatype: 'json',
            success: function (data) {
                $(target_selector).empty();
                let docs = data.data;
                let hl_field = 'text_tsim';
                let matches_num = data.meta.pages.total_count;
                if (matches_num > 0) {
                    $(target_selector).append('<div id="results-header"><p>' + matches_num + ' forekomster</p></div>');
                    for (var i = 0; i in docs && i < 3; i++) {
                        if (typeof (docs[i].highlighting[docs[i].id][hl_field]) !== "undefined") {
                            $(target_selector).append('<p><a href="/text/' + id + '#' + docs[i].attributes.xmlid_ssi + '">' + docs[i].highlighting[docs[i].id][hl_field].join("...") + '</a></br>Side: ' + docs[i].attributes.page_ssi + '</p>');                        // }
                        }
                    }
                }
                if (matches_num > 3) {
                    var btn = document.createElement("BUTTON");
                    var t = document.createTextNode("Alle forekomster");
                    btn.appendChild(t);
                    btn.setAttribute("id", "modal-button-" + id);
                    btn.setAttribute("class", "all-matches");
                    $(target_selector).append(btn);
                    $("#modal-button-" + id).click(function () {
                        $(modal_selector).modal();
                    });
                    for (var i = 0; i in docs; i++) {
                        if (typeof (docs[i].highlighting[docs[i].id][hl_field]) !== "undefined") {
                            $(modal_body_selector).append('<a href="/text/' + id + '#' + docs[i].attributes.xmlid_ssi + '">' + docs[i].highlighting[docs[i].id][hl_field].join("...") + '</a></br>Side: ' + docs[i].attributes.page_ssi + '</p>');                        // }
                        }
                    }
                }
                if ((matches_num == 0)) {
                    $(text_label_id).hide();
                    $(target_selector).hide();
                } // If the number of matches is 0, or matches dosn't contain any highlight like in case of using 'NOT', hide the label
            }
        });
    }
    return false;
}
