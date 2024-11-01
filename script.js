const courseFees = {
    "cse": 285000,  // replace with actual fee data from the image
    "civil": 300000,
    "eee": 310000,
    "bba": 250000,
    "eco": 230000
};

function calculateFee() {
    const course = document.getElementById("course").value;
    const ssc = parseFloat(document.getElementById("ssc").value);
    const hsc = parseFloat(document.getElementById("hsc").value);
    const avgGrade = (ssc + hsc) / 2;
    let totalFee = courseFees[course];

    // Applying scholarship based on GPA
    if (avgGrade >= 4.5) {
        totalFee *= 0.5;  // 50% scholarship
    } else if (avgGrade >= 4.0) {
        totalFee *= 0.75; // 25% scholarship
    } else if (avgGrade >= 3.5) {
        totalFee *= 0.9;  // 10% scholarship
    }

    document.getElementById("result").textContent = `Total Fee: ${totalFee.toFixed(2)} BDT`;
}
