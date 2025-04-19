// Update the index.html file to incorporate the expanded content and Interview Ninja difficulty level
const fs = require('fs');
const path = require('path');

// Paths
const questionBankPath = path.join('/home/ubuntu/jp_morgan_study_tool', 'combined_questions.json');
const indexHtmlPath = path.join('/home/ubuntu/jp_morgan_study_tool', 'index.html');
const updatedIndexHtmlPath = path.join('/home/ubuntu/jp_morgan_study_tool', 'index_updated.html');

// Read the question bank
const questionBank = JSON.parse(fs.readFileSync(questionBankPath, 'utf8'));

// Read the current index.html
const currentIndexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Create updated HTML with the expanded content and Interview Ninja difficulty level
let updatedHtml = currentIndexHtml;

// Update the difficulty filter to include Interview Ninja level
const difficultyFilterRegex = /<div class="filter-group">[\s\S]*?<h3>Difficulty<\/h3>[\s\S]*?<div class="filter-options">[\s\S]*?<\/div>[\s\S]*?<\/div>/;
const difficultyFilterMatch = updatedHtml.match(difficultyFilterRegex);

if (difficultyFilterMatch) {
  const difficultyFilterHtml = difficultyFilterMatch[0];
  const updatedDifficultyFilterHtml = difficultyFilterHtml.replace(
    /<div class="filter-options">([\s\S]*?)<\/div>/,
    `<div class="filter-options">$1
        <div class="filter-option">
          <input type="checkbox" id="difficulty-interview-ninja" value="Interview Ninja">
          <label for="difficulty-interview-ninja">Interview Ninja <span class="super-hard-tag">SUPER HARD</span></label>
        </div>
    </div>`
  );
  updatedHtml = updatedHtml.replace(difficultyFilterRegex, updatedDifficultyFilterHtml);
}

// Add CSS for the super-hard tag
const styleRegex = /<style>([\s\S]*?)<\/style>/;
const styleMatch = updatedHtml.match(styleRegex);

if (styleMatch) {
  const styleHtml = styleMatch[0];
  const updatedStyleHtml = styleHtml.replace(
    /<\/style>/,
    `
  .super-hard-tag {
    background-color: #ff3b30;
    color: white;
    font-size: 0.7em;
    padding: 2px 5px;
    border-radius: 3px;
    margin-left: 5px;
    font-weight: bold;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.7; }
    100% { opacity: 1; }
  }
  
  .difficulty-interview-ninja {
    border-left: 5px solid #ff3b30 !important;
    background-color: rgba(255, 59, 48, 0.05);
  }
  
  .interview-ninja-banner {
    background: linear-gradient(135deg, #ff3b30, #8a0900);
    color: white;
    padding: 15px;
    margin: 20px 0;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
</style>`
  );
  updatedHtml = updatedHtml.replace(styleRegex, updatedStyleHtml);
}

// Add Interview Ninja banner to the dashboard
const dashboardRegex = /<div class="dashboard-section">/;
const dashboardMatch = updatedHtml.match(dashboardRegex);

if (dashboardMatch) {
  const dashboardHtml = dashboardMatch[0];
  const updatedDashboardHtml = `<div class="interview-ninja-banner">
    🔥 NEW: "Interview Ninja" difficulty level with SUPER HARD questions to test your ultimate preparation! 🔥
  </div>
  ${dashboardHtml}`;
  updatedHtml = updatedHtml.replace(dashboardRegex, updatedDashboardHtml);
}

// Update the question count in the stats section
const statsRegex = /<div class="stat">[\s\S]*?<div class="stat-value" id="total-questions">[\s\S]*?<\/div>[\s\S]*?<\/div>/;
const statsMatch = updatedHtml.match(statsRegex);

if (statsMatch) {
  const statsHtml = statsMatch[0];
  const updatedStatsHtml = statsHtml.replace(
    /<div class="stat-value" id="total-questions">[\s\S]*?<\/div>/,
    `<div class="stat-value" id="total-questions">${questionBank.length}</div>`
  );
  updatedHtml = updatedHtml.replace(statsRegex, updatedStatsHtml);
}

// Update the JavaScript to load the combined questions
const loadQuestionsRegex = /const loadQuestions = \(\) => \{[\s\S]*?fetch\('.*?'\)[\s\S]*?\};/;
const loadQuestionsMatch = updatedHtml.match(loadQuestionsRegex);

if (loadQuestionsMatch) {
  const loadQuestionsHtml = loadQuestionsMatch[0];
  const updatedLoadQuestionsHtml = `const loadQuestions = () => {
    // Load questions from the combined JSON file
    return fetch('combined_questions.json')
      .then(response => response.json())
      .then(data => {
        questions = data;
        updateStats();
        return questions;
      });
  };`;
  updatedHtml = updatedHtml.replace(loadQuestionsRegex, updatedLoadQuestionsHtml);
}

// Add handling for Interview Ninja difficulty in the filter function
const filterQuestionsRegex = /const filterQuestions = \(\) => \{[\s\S]*?return filteredQuestions;[\s\S]*?\};/;
const filterQuestionsMatch = updatedHtml.match(filterQuestionsRegex);

if (filterQuestionsMatch) {
  const filterQuestionsHtml = filterQuestionsMatch[0];
  const updatedFilterQuestionsHtml = filterQuestionsHtml.replace(
    /const selectedDifficulties = \[\];[\s\S]*?if \(selectedDifficulties\.length > 0\) \{[\s\S]*?\}/,
    `const selectedDifficulties = [];
    document.querySelectorAll('input[id^="difficulty-"]:checked').forEach(checkbox => {
      selectedDifficulties.push(checkbox.value);
    });
    if (selectedDifficulties.length > 0) {
      filteredQuestions = filteredQuestions.filter(question => selectedDifficulties.includes(question.difficulty));
    }`
  );
  updatedHtml = updatedHtml.replace(filterQuestionsRegex, updatedFilterQuestionsHtml);
}

// Add handling for Interview Ninja difficulty in the display function
const displayQuestionRegex = /const displayQuestion = \(question\) => \{[\s\S]*?questionElement\.innerHTML = html;[\s\S]*?\};/;
const displayQuestionMatch = updatedHtml.match(displayQuestionRegex);

if (displayQuestionMatch) {
  const displayQuestionHtml = displayQuestionMatch[0];
  const updatedDisplayQuestionHtml = displayQuestionHtml.replace(
    /const difficultyClass = `difficulty-\${question\.difficulty\.toLowerCase\(\)\.replace\(' ', '-'\)}`;/,
    `const difficultyClass = \`difficulty-\${question.difficulty.toLowerCase().replace(/ /g, '-')}\`;
    const superHardTag = question.tags && question.tags.includes('super hard') ? '<span class="super-hard-tag">SUPER HARD</span>' : '';`
  ).replace(
    /<div class="question-difficulty">\${question\.difficulty}<\/div>/,
    `<div class="question-difficulty">\${question.difficulty} \${superHardTag}</div>`
  );
  updatedHtml = updatedHtml.replace(displayQuestionRegex, updatedDisplayQuestionHtml);
}

// Write the updated HTML to a new file
fs.writeFileSync(updatedIndexHtmlPath, updatedHtml);
console.log(`Updated index.html with expanded content and Interview Ninja difficulty level`);
