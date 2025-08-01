const form = document.getElementById('registrationForm');
const progress = document.getElementById('progress');

form.addEventListener('input', () => {
    let filled = 0;
    let total = 12;

    if (form.fullname.value.trim() !== "") filled++;
                      if (form.email.value.trim() !== "") filled++;
                      if (form.password.value.trim() !== "") filled++;
                      if (form.phone.value.trim() !== "") filled++;
                      if (form.dob.value.trim() !== "") filled++;
                      if (form.age.value.trim() !== "") filled++;
                      if (form.search.value.trim() !== "") filled++;
                      if (form.fileupload.value.trim() !== "") filled++;
                      if (form.track.value) filled++;
                      if (
                          form.skill1.checked || form.skill2.checked ||
                              form.skill3.checked || form.skill4.checked
                      ) filled++;
                      if (form.experience.value !== "") filled++;
                      if (form.comments.value.trim() !== "") filled++;

                      const percent = Math.min(100, Math.round((filled / total) * 100));
    progress.value = percent;
});

form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent actual form submission

    const formData = new FormData(this);
    let content = 'Cybersecurity Basics Registration Data\n\n';

    for (const [key, value] of formData.entries()) {
        content += `${key}: ${value}\n`;
    }

    // Get the full name and format it for filename
    const rawName = form.fullname.value.trim();
    const safeName = rawName.replace(/\s+/g, '_'); // Replace spaces with underscores

    const fileName = safeName ? `${safeName}.txt` : 'registration_data.txt';

    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();

    alert(`✅ Form submitted and saved as ${fileName}`);
});
