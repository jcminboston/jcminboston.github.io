// Display the login message
displayOutput("Welcome to Jacob Murphy's resume. Please feel free to check out the files in resume_data. If you need more help, use the help command.<br>");

// Event listener for input
document.getElementById('commandInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const command = this.value.trim();
        displayOutput(`<span class="prompt">guest@jacob-resume</span> &gt; ${command}<br>`);
        executeCommand(command);
        this.value = ''; // Clear input field
    }
});

function executeCommand(command) {
    switch (command) {
        case 'ls':
            listFiles();
            break;
        case 'cat work_experience.txt':
            fetchAndDisplayContent('resume_data/work_experience.txt');
            break;
        case 'cat education.txt':
            fetchAndDisplayContent('resume_data/education.txt');
            break;
        case 'cat projects.txt':
            fetchAndDisplayContent('resume_data/projects.txt');
            break;
        case 'cat skills.txt':
            fetchAndDisplayContent('resume_data/skills.txt');
            break;
        case 'cat summary.txt':
            fetchAndDisplayContent('resume_data/summary.txt');
            break;
        case 'pwd':
            displayOutput('/home/guest/resume<br>');
            break;
        case 'whoami':
            displayOutput('guest<br>');
            break;
        case 'clear':
            clearTerminal();
            break;
        case 'help':
            displayOutput('Available commands:<br>' +
                'ls - List files<br>' +
                'cat [file_name] - Display content of a file<br>' +
                'pwd - Print working directory<br>' +
                'whoami - Print current user<br>' +
                'clear - Clear the terminal<br>' +
                'help - Display this help message<br>');
            break;
        default:
            displayOutput('Command not found<br>');
    }
}

function listFiles() {
    const files = ['work_experience.txt', 'education.txt', 'projects.txt', 'skills.txt', 'summary.txt'];
    displayOutput(files.join('<br>') + '<br>');
}

function fetchAndDisplayContent(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            // Replace line breaks with <br> tags
            data = data.replace(/\n/g, '<br>');
            displayOutput(data + '<br>');
        })
        .catch(error => displayOutput('Error fetching content<br>'));
}

function displayOutput(content) {
    document.querySelector('.output').innerHTML += `<div>${content}</div>`;
}

function clearTerminal() {
    document.querySelector('.output').innerHTML = '';
}