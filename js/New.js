$(document).ready(function() {
    // Event listener for your portfolio items
    $('.ajax-load-page').on('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        var href = $(this).attr('href'); // Get the href (URL) of the clicked item

        // Perform the AJAX request
        $.ajax({
            url: href,
            success: function(data) {
                // Assuming you have a container to load your AJAX response into
                $('#portfolio-single-holder').html(data);

                // Reinitialize the Owl Carousel here, if the loaded content includes it
                $(".owl-carousel").owlCarousel({
                    loop:true,
                    margin:10,
                    nav:true,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:3
                        },
                        1000:{
                            items:5
                        }
                    }
                });
            },
            error: function() {
                console.log('Failed to load the content');
            }
        });
    });
});
