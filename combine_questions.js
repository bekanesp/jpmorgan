// Combine all question files into a single comprehensive question bank
const fs = require('fs');
const path = require('path');

// Directory containing all question files
const questionDir = '/home/ubuntu/jp_morgan_study_tool';

// Output file for combined questions
const outputFile = path.join(questionDir, 'combined_questions.json');

// Get all JSON files that contain questions
const questionFiles = [
  'question_bank.json',
  'additional_questions_1.json',
  'additional_questions_2.json',
  'additional_questions_3.json',
  'additional_questions_4.json',
  'additional_questions_5.json',
  'additional_questions_6.json',
  'additional_questions_7.json',
  'additional_questions_8.json',
  'additional_questions_9.json',
  'additional_questions_10.json',
  'interview_ninja_questions_1.json',
  'interview_ninja_questions_2.json',
  'interview_ninja_questions_3.json',
  'interview_ninja_questions_4.json'
];

// Array to hold all questions
let allQuestions = [];

// Read and combine all question files
questionFiles.forEach(file => {
  try {
    const filePath = path.join(questionDir, file);
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const questionData = JSON.parse(fileContent);
      
      // If the file contains an array of questions
      if (Array.isArray(questionData)) {
        allQuestions = allQuestions.concat(questionData);
      } 
      // If the file contains a single question
      else {
        allQuestions.push(questionData);
      }
      
      console.log(`Successfully processed ${file}`);
    } else {
      console.log(`File not found: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}: ${error.message}`);
  }
});

// Write the combined questions to the output file
fs.writeFileSync(outputFile, JSON.stringify(allQuestions, null, 2));
console.log(`Combined ${allQuestions.length} questions into ${outputFile}`);
