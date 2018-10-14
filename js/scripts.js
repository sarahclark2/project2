
$(function() {

  console.log("scripts loaded");

});

	  
    $('#quiz').quiz({
        //resultsScreen: '#results-screen',
        //counter: false,
        //homeButton: '#custom-home',
        counterFormat: 'Question %current of %total',
        questions: [
          {
            'q': 'When was the first NC Pride Parade',
            'options': [
              '1984',
              '2000',
              '1977',
              '1981'
            ],
            'correctIndex': 3,
            'correctResponse': 'Yup, that is correct!',
            'incorrectResponse': 'Nope, it was in 1981!'
          },
          {
            'q': 'There was a Durham Pride Parade last year',
            'options': [
              'True',
              'False'
            ],
            'correctIndex': 1,
            'correctResponse': 'That is correct!',
            'incorrectResponse': 'Nope, there was no parade last year.'
          },
          {
            'q': 'What group is featured in this photo-story?',
            'options': [
              'The Fighting Crickets',
              'GLOW',
              'The Dancing Quakers',
              'A pack of lizards'
            ],
            'correctIndex': 1,
            'correctResponse': 'Yes, the group is called GLOW!',
            'incorrectResponse': 'Sorry, that is not correct!'
          },
          {
            'q': 'GLOW is a middle school group',
            'options': [
              'True',
              'False'
            ],
            'correctIndex': 0,
            'correctResponse': 'Yes!',
            'incorrectResponse': 'No, they really are middle school kids!'
          },
          {
            'q': 'What school is GLOW from?',
            'options': [
              'Hogwarts',
              'Monster/s High',
              'Rosewood High School',
              'Carolina Friends School'
            ],
            'correctIndex': 3,
            'correctResponse': 'That is correct!',
            'incorrectResponse': 'Nope, they went to Carolina Friends School.'
          }
        ]
      });

      $('.parallax-window').parallax({
    naturalWidth: 600,
    naturalHeight: 400
  });
  $(document).ready(function() {
              $('.tooltip').tooltipster();
          });

          $('.demo').infiniteslide();
          $('.demo').infiniteslide({
            'speed': 100
          });
          $('.demo').infiniteslide({

  // up/down/left/right
  'direction': 'left'

});
$('.demo').infiniteslide({
  'pauseonhover': true
});
$('.demo').infiniteslide({
  'responsive': true // default: false
});
