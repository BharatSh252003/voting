const users = [
    { id: 1, voter_id: "VOTER12345", password: "password123", name: "John Doe" },
    { id: 2, voter_id: "VOTER67890", password: "password456", name: "Jane Smith" }
];

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const voterId = document.getElementById('voterId').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.voter_id === voterId && u.password === password);
    if (user) {
        alert(`Welcome, ${user.name}!`);
        // Redirect to voting page
        window.location.href = 'voting.html';
    } else {
        document.getElementById('errorMessage').innerText = 'Invalid credentials. Please try again.';
    }
});

// Sample code to display bills on voting.html
const bills = [
    { id: 1, title: "Bill on Renewable Energy", description: "A bill to promote renewable energy sources in India.", status: "Ongoing" },
    { id: 2, title: "Bill on Data Protection", description: "A bill to ensure data privacy and protection for citizens.", status: "Upcoming" }
];

const billsContainer = document.getElementById('billsContainer');
bills.forEach(bill => {
    const billDiv = document.createElement('div');
    billDiv.innerHTML = `<h3>${bill.title}</h3><p>${bill.description}</p><button>Vote Support</button><button>Vote Dissent</button>`;
    billsContainer.appendChild(billDiv);
});