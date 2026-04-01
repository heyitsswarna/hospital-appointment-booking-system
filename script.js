function bookAppointment() {

    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let service = document.getElementById("service").value;

    let error = document.getElementById("error");
    let confirmation = document.getElementById("confirmation");
    let loading = document.getElementById("loading");
    let summary = document.getElementById("summary");

    // Reset
    error.innerText = "";
    confirmation.innerText = "";
    summary.style.display = "none";

    // Validation
    if (name === "" || date === "" || time === "" || service === "") {
        error.innerText = "⚠ Please fill all fields!";
        return;
    }

    // Show loading
    loading.style.display = "block";

    setTimeout(() => {

        loading.style.display = "none";

        // Confirmation message
        confirmation.innerHTML = `
        🎉 Hello ${name}! <br>
        Your appointment is confirmed! <br>
        📅 ${date} ⏰ ${time}
        `;

        // Summary box
        summary.style.display = "block";
        summary.innerHTML = `
        <h3>📋 Appointment Summary</h3>
        👤 Name: ${name} <br>
        📅 Date: ${date} <br>
        ⏰ Time: ${time} <br>
        🩺 Service: ${service}
        `;

    }, 2000);
}