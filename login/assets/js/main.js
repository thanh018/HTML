jQuery(function($) {
    "use strict";
    var lema = window.lema || {};

    // Dropdown list

    lema.changeTab = function() {
        $('.btn-register').on('click', function(){
            $('.tab-content #login').removeClass('in').removeClass('active');
            $('.tab-content #register').addClass('in').addClass('active');
            $('.nav-tabs .tab-login').removeClass('active');
            $('.nav-tabs .tab-register').addClass('active');
        });

        $('.btn-login').on('click', function(){
            $('.tab-content #register').removeClass('in').removeClass('active');
            $('.tab-content #login').addClass('in').addClass('active');
            $('.nav-tabs .tab-register').removeClass('active');
            $('.nav-tabs .tab-login').addClass('active');
        });
    };

    $(document).ready(function() {
        lema.changeTab();
    });
});