$(document).ready(function () {
    var $sidebarMenuItem = $(".sidebar ul.sidebar-menu li.menu-item > a");

    
    $sidebarMenuItem.click(function() {
        $(".sidebar ul.sidebar-menu li.menu-item ul.child-menu").not($(this).next()).slideUp();
        $(this).parent().toggleClass("open");
        $(this).next().slideToggle(200);
    });
});