# -VocalBasedTechQuizz


 ##### Introduction

The Engineering Basics Quiz App is designed to help students test their knowledge in various fundamental engineering concepts through an interactive and engaging platform. Developed using Visual Studio, this application leverages browser-based speech recognition and synthesis APIs to enhance the user experience. The quiz presents multiple-choice questions, records user responses, provides immediate feedback on the correctness of answers, and displays the final score after the completion of ten questions.


##### Objectives
The primary objectives of the Engineering Basics Quiz App are:
To provide an interactive learning tool for engineering students.
To utilize speech recognition for ease of use and accessibility.
To offer immediate feedback on answers to facilitate learning.
To track and display the user’s performance after each quiz.

#### Technologies Used
Visual Studio: The integrated development environment (IDE) used for developing the application.
HTML/CSS: For creating the front-end layout and styling of the app.
JavaScript: For implementing the app’s logic and interactivity.
Web Speech API:
SpeechRecognition API: Converts spoken words into text, allowing for voice input.
SpeechSynthesis API: Converts text into spoken words, providing auditory feedback.

#### Implementation
The application was implemented in several stages, focusing on user interface design, functionality development, and integration of speech technologies.

##### User Interface Design:
HTML/CSS: The user interface was designed using HTML for the structure and CSS for styling. The layout includes sections for displaying questions, answer options, user input, and feedback.
JavaScript: JavaScript was used to add interactivity, such as displaying new questions, capturing user input, and providing feedback.

##### Speech Recognition Integration:
The app uses the SpeechRecognition API to capture spoken responses from the user. This allows users to interact with the quiz hands-free.
Speech recognition is initiated when the user starts the quiz, and the recognized text is matched against the answer options.

##### Question Handling and Display:
A set of ten questions covering basic engineering topics is stored in an array.
Each question is displayed sequentially with four multiple-choice options.
Users can select an answer by speaking or clicking on an option.
##### Answer Validation and Feedback:
Once an answer is submitted, the app checks its correctness against the stored correct answer.
Feedback is provided immediately: correct answers are highlighted in green, and incorrect answers in red.
The user’s score is updated based on the correctness of their answers.
##### Final Score Display:
After all five questions are answered, the app displays the total score.








