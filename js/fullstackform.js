$(document).ready(function () {
  // Handle form submission
  $("#EnquireForm").submit(function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Perform form validation using Bootstrap
    if (this.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Get form data
      var enquireName = $("#enquireName").val();
      var enquireMobile = $("#enquireMobile").val();
      var enquireEmail = $("#enquireEmail").val();
      var enquireCity = $("#enquireCity").val();
      var enquireCourse = $("#enquireCourse").val();

      // Prepare data for AJAX request
      var formData = new FormData();
      formData.append("enquireName", enquireName);
      formData.append("enquireMobile", enquireMobile);
      formData.append("enquireEmail", enquireEmail);
      formData.append("enquireCity", enquireCity);
      formData.append("enquireCourse", enquireCourse);

      // Submit form data using AJAX
      $.ajax({
        type: "POST",
        url: "enquireformpost.php", // Replace with your server-side script URL
        data: formData,
        // data:("#EnquireForm").serialize(),
        processData: false,
        contentType: false,
        success: function (response) {
          // Handle success response
          console.log(response);
          // Add your own logic here
          var form = $("#EnquireForm")[0];
          $(form).removeClass("was-validated");
          form.reset();
          // $("#download").show();
          // $('#download').html('Thank You !');
          // swal("Thank You", "We Have Recived Your Enquiry!", "success");
          window.location = "fullstack-thankyou";
        },
        error: function (jqXHR, textStatus, errorThrown) {
          // Handle error response
          console.log(textStatus, errorThrown);
          // Add your own logic here
        },
      });
    }

    $(this).addClass("was-validated");
  });
});
