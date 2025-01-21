document.getElementById('userForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());
  
    try {
      const response = await fetch('http://localhost:7000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      const result = await response.json();
      const feedback = document.getElementById('feedback');
      feedback.textContent = result.message;
      feedback.style.color = result.success ? 'green' : 'red';
      if (result.success) e.target.reset();
    } catch (error) {
      alert('Error: ' + error.message);
    }
  });
  
  document.getElementById('fetchData').addEventListener('click', async function () {
    try {
      const response = await fetch('http://localhost:7000/api/users');
      const result = await response.json();
  
      const userDataDiv = document.getElementById('userData');
      if (result.success) {
        userDataDiv.innerHTML = result.data
          .map(user => `<p>${user.firstName} ${user.lastName} (${user.email})</p>`)
          .join('');
      } else {
        userDataDiv.textContent = 'No data found.';
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  });
  