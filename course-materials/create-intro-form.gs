/**
 * Creates the "Claude for Business Professionals — Introduce Yourself" Google Form,
 * with all questions and a linked responses spreadsheet, in one run.
 *
 * HOW TO RUN:
 *   1. Go to https://script.google.com  →  New project.
 *   2. Delete the sample code, paste this whole file in, and Save.
 *   3. Click Run (▶). First run asks you to authorize Forms + Sheets access — approve it.
 *   4. Open View → Logs (or Execution log) and copy the three URLs it prints:
 *        - the fill-in link to SEND TO STUDENTS
 *        - the edit link (to tweak the form)
 *        - the responses Sheet (your live record)
 *   5. In the form's Responses tab, turn on
 *        ⋮ → "Get email notifications for new responses" if you want a ping per submission.
 */
function createIntroForm() {
  var form = FormApp.create('Claude for Business Professionals — Introduce Yourself');
  form.setDescription(
    "Two minutes so I can teach to who's actually in the room. Your answers go straight to the trainer."
  );
  form.setCollectEmail(false);          // don't force Google sign-in (external students)
  form.setLimitOneResponsePerUser(false);

  // 1 - name
  form.addTextItem().setTitle('Your name').setRequired(true);

  // 2 - role
  form.addTextItem().setTitle('Role / function').setRequired(true);

  // 3 - AI comfort (1-4)
  form.addScaleItem()
    .setTitle('How comfortable are you with AI so far?')
    .setBounds(1, 4)
    .setLabels('brand new', 'use it daily')
    .setRequired(true);

  // 4 - tools tried (multi)
  form.addCheckboxItem()
    .setTitle('Which AI tools have you tried?')
    .setChoiceValues(['None yet', 'Claude', 'ChatGPT', 'Microsoft Copilot', 'Gemini', 'Several tools']);

  // 5 - Claude account (single) - the account census
  form.addMultipleChoiceItem()
    .setTitle('Which Claude account will you use in class?')
    .setChoiceValues(['Not sure', 'None yet', 'Free', 'Pro', 'Team (for Work)', 'Provided by my company'])
    .setRequired(true);

  // 6 - biggest concern (single)
  form.addMultipleChoiceItem()
    .setTitle('What is your biggest concern about using AI at work?')
    .setChoiceValues(['Privacy / security', 'Accuracy / trust', 'Governance / compliance',
                      'Cost / ROI', 'Impact on jobs', 'Not really concerned']);

  // 7 - real task (paragraph)
  form.addParagraphTextItem()
    .setTitle("A real task from your work you'd love AI to speed up")
    .setHelpText('A sentence is plenty. Think spreadsheets, reports, or presentations. ' +
                 '(In the labs we practice on fictional data, never your real files.)');

  // 8 - walk-away goal
  form.addTextItem().setTitle('One thing you want to walk away able to do');

  // 9 - anything to cover (optional)
  form.addTextItem().setTitle('Anything you especially want covered? (optional)');

  // 10 - non-technical (optional)
  form.addTextItem().setTitle('Something non-technical about you (optional)');

  // Responses -> a Sheet you own
  var ss = SpreadsheetApp.create('Claude for Business Professionals — Intro Responses');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  Logger.log('SEND THIS TO STUDENTS (fill-in link): ' + form.getPublishedUrl());
  Logger.log('EDIT the form here: ' + form.getEditUrl());
  Logger.log('RESPONSES sheet: ' + ss.getUrl());
}
