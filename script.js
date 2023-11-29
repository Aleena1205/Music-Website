function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value;

    // check mail id nme,emaile etcl.....
    if (name === "" || email === "" || feedback === "") {
        alert("Please fill in all fields.");
        return;
    }

    // popbox afte submiting
    alert("Feedback submitted!\n\nName: " + name + "\nEmail: " + email + "\nFeedback: " + feedback);

    // clear the page afte submiting
    
    document.getElementById("feedbackForm").reset();
}
