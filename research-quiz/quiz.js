const researchAreas = [
  { id: 'brain', name: 'The Brain Explorer', image: '../assets/fly_connectome.jpeg', imageAlt: 'Fruit fly brain connectome visualization', fields: ['Neuroscience', 'Psychology', 'Cognitive science', 'Psychiatry research'], description: 'Your curiosity goes straight to the mind: how we think, feel, remember, and behave.' },
  { id: 'disease', name: 'The Disease Detective', image: '../assets/virus.jpg', imageAlt: 'Colorful molecular model of a virus', fields: ['Cancer biology', 'Immunology', 'Infectious disease', 'Clinical research'], description: 'You want to understand what causes illness and how research can help prevent or treat it.' },
  { id: 'biology', name: 'The Biology Explorer', image: '../assets/cells.webp', imageAlt: 'Fluorescent microscopy image of cells', fields: ['Cell biology', 'Genetics', 'Developmental biology', 'Regenerative medicine'], description: 'You are drawn to how living systems work, develop, and repair themselves—from cells to whole organisms.' },
  { id: 'innovator', name: 'The Medical Innovator', image: '../assets/petscan.webp', imageAlt: 'Patient receiving a medical imaging scan', fields: ['Biomedical engineering', 'Medical devices', 'Imaging', 'Biomaterials'], description: 'You see a health challenge and start imagining something you could design, build, or improve.' },
  { id: 'community', name: 'The Community Changemaker', image: '../assets/Pop-Health.webp', imageAlt: 'Illustration of a diverse community', fields: ['Public health', 'Epidemiology', 'Health equity', 'Community-based research'], description: 'You wonder how places, policies, and access to resources shape health—and how communities can help guide solutions.' },
  { id: 'data', name: 'The Data Detective', image: '../assets/data.jpg', imageAlt: 'Laptop displaying research data visualizations', fields: ['Bioinformatics', 'Computational biology', 'Biostatistics', 'AI in medicine'], description: 'You are curious about the stories hidden in information—and how numbers, models, and code can reveal them.' },
];

// These examples paraphrase research descriptions from the listed OHSU source pages.
// Source URLs are kept for editorial review; the quiz does not link to individual researchers.
const examplesByArea = {
  brain: [
    { text: 'Use brain scans to learn how drug and alcohol use affect the brain.', source: 'https://www.ohsu.edu/school-of-medicine/psychiatry-research/biomedical-research-addiction-imaging-and-neuroscience-brain' },
    { text: 'Find ways to help the brain heal after injury, from babies to adults.', source: 'https://www.ohsu.edu/doernbecher/stephen-back-pediatric-research-lab' }
  ],
  disease: [
    { text: 'Study how cancer and the immune system affect each other, especially in lymphoma.', source: 'https://www.ohsu.edu/school-of-medicine/shree-lab' },
    { text: 'Find out why immune cells called T cells sometimes cannot stop tumors from growing.', source: 'https://www.ohsu.edu/school-of-medicine/moran-lab' }
  ],
  biology: [
    { text: 'Study how stem cells help the intestines grow, heal, and respond to disease.', source: 'https://www.ohsu.edu/stem-cell-center/melissa-wong-phd' },
    { text: 'Study how stem cells help regrow nerve cells after an injury.', source: 'https://www.ohsu.edu/doernbecher/pearson-lab' }
  ],
  innovator: [
    { text: 'Use lasers and light-based tools to study and treat eye diseases.', source: 'https://www.ohsu.edu/people/david-huang-md-phd' },
    { text: 'Use tiny particles to develop new cancer treatments that help the immune system.', source: 'https://www.ohsu.edu/school-of-medicine/yantasee-lab/research' }
  ],
  community: [
    { text: 'Work with patients and communities to improve health care in rural areas with fewer resources.', source: 'https://www.ohsu.edu/school-of-medicine/family-medicine/meet-our-researchers-0' },
    { text: 'Find ways to help people in rural and Latino communities be more physically active.', source: 'https://www.ohsu.edu/people/cindy-perry-phd-rn-faha' }
  ],
  data: [
    { text: 'Study large sets of DNA data to find changes that may cause rare diseases.', source: 'https://www.ohsu.edu/people/donald-f-conrad-phd' },
    { text: 'Build computer tools to study cell data and discover how cancer works.', source: 'https://www.ohsu.edu/people/zheng-xia-phd' }
  ]
};

// The text and answer order below follow the refined quiz supplied for this site.
// Some answers bridge two areas; each such answer splits one point between them.
const questions = [
  { prompt: 'If you could choose one question to answer, which would you choose?', options: [
    ['Why do people’s thoughts, feelings, and behaviours differ, and what influences those differences?', 'brain'],
    ['How can we develop better treatments and cures for disease?', 'disease'],
    ['How does the human body develop and regenerate when damaged?', 'biology'],
    ['How can technology help solve health problems?', 'innovator'],
    ['What drives differences in diseases across communities and what can we do about it?', 'community'],
    ['How do the individual cells of our body communicate with each other to organize our organs and their respective functions?', 'biology']
  ] },
  { prompt: 'Which of these scenarios most captures your interest?', options: [
    ['What happens inside your brain when you dream?', 'brain'],
    ['Scientists discover a new treatment for cancer', 'disease'],
    ['How do bones heal after they have been damaged?', 'biology'],
    ['A robot that helps people walk again', 'innovator'],
    ['The impact of where our community is located affects the length of our lives', 'community'],
    ['How does editing DNA affect cellular function?', 'biology']
  ] },
  { prompt: 'Which of these scenarios is most fun to you?', options: [
    ['Understanding people’s decision-making processes', 'brain'],
    ['Observing doctors diagnosing and treating patients', 'disease'],
    ['Watching cells under a microscope', 'biology'],
    ['Building and testing a new invention', 'innovator'],
    ['Learning about health challenges in different communities', 'community'],
    ['Solving a mystery using observations and data', 'data']
  ] },
  { prompt: 'Which of these projects would you most want to join?', options: [
    ['Lessening the burden for people with anxiety, depression, or memory loss', 'brain'],
    ['Finding better treatments for deadly diseases', 'disease'],
    ['Improving the healing process in injured tissues or organs', 'biology'],
    ['Creating affordable medical devices', 'innovator'],
    ['Making healthcare easier to access for more people', 'community'],
    ['Understanding what causes diseases in the first place', ['disease', 'biology']]
  ] },
  { prompt: 'Which group of school subjects do you enjoy most?', options: [
    ['Psychology (stories or understanding people)', 'brain'],
    ['Health, anatomy, or physiology', 'disease'],
    ['Biology and chemistry', 'biology'],
    ['Math, coding, and engineering', ['innovator', 'data']],
    ['History and social studies', 'community']
  ] },
  { prompt: 'Which task that you might encounter as a member of a research laboratory sounds most exciting?', options: [
    ['Interviewing people about their experiences', 'brain'],
    ['Observing healthcare professionals and learning about patients', 'disease'],
    ['Using experimental techniques to assess protein function', 'biology'],
    ['Designing a device and testing whether it works', 'innovator'],
    ['Working with communities to understand their needs', 'community'],
    ['Analyzing images, numbers, and large datasets to discover patterns', 'data']
  ] },
  { prompt: 'If you could have a superpower, what would it be?', options: [
    ['Read thoughts and understand emotions', 'brain'],
    ['Detect diseases before symptoms appear', 'disease'],
    ['See inside individual cells', 'biology'],
    ['Invent any tool you can imagine', 'innovator'],
    ['Make sure everyone has access to good healthcare', 'community'],
    ['Travel through DNA and discover what each gene does', 'biology']
  ] },
  { prompt: 'Which headline makes you the most curious?', options: [
    ['Scientists uncover how memories are formed', 'brain'],
    ['New treatment helps patients fight cancer', 'disease'],
    ['Researchers grow human tissue in a lab', 'biology'],
    ['Artificial intelligence helps detect diseases', ['innovator', 'data']],
    ['Study reveals why some neighborhoods have worse health outcomes', 'community'],
    ['Scientists discover a gene linked to a rare disease', ['disease', 'biology']]
  ] },
  { prompt: 'When you encounter a difficult problem, how do you approach it?', options: [
    ['Talk to people with different perspectives', 'brain'],
    ['Find out what others have done that has worked', 'disease'],
    ['Design a new experiment and analyze the results', 'biology'],
    ['Build a novel solution', 'innovator'],
    ['Think about who/what is affected and why', 'community'],
    ['Gather clues and look for patterns', 'data']
  ] },
  { prompt: 'Which research project would you be most proud of completing?', options: [
    ['Discovering a new tenet of human behaviour', 'brain'],
    ['Improving patient care', 'disease'],
    ['Discovering how something works in the body', 'biology'],
    ['Creating or improving a new technology', 'innovator'],
    ['Helping to address a community health issue', 'community'],
    ['A project with unexpected results', 'data']
  ] },
  { prompt: 'Which research environment sounds most interesting to you?', preference: true, options: [
    ["I'm not sure yet."],
    ["A community where researchers study people's health experiences"],
    ['A workshop where researchers design and build new tools'],
    ['A laboratory where scientists analyze data or create models using computers'],
    ['A hospital or clinic where researchers study patient care'],
    ['A laboratory where scientists perform experiments']
  ] },
  { prompt: 'Which project would you be most excited to try?', options: [
    ['Studying how genes affect the risk for developing disease', ['biology', 'disease']],
    ['Interviewing people to understand barriers to care', 'community'],
    ['Using computer programs to identify patterns in health data', 'data'],
    ['Designing a material that could help tissues heal', ['innovator', 'biology']],
    ['Testing whether a new treatment helps cells recover from injury', ['disease', 'biology']],
    ['Looking at brain scans to understand how the brain works', 'brain']
  ] },
  { prompt: 'What sounds most appealing about doing research?', preference: true, options: [
    ['Trying new things and discovering what I enjoy'],
    ['Solving problems that affect my community'],
    ['Understanding how the world works'],
    ['Creating something new'],
    ['Helping people live healthier lives'],
    ['Discovering something previously unknown']
  ] }
];

const app = document.getElementById('quiz-app');
const answers = Array(questions.length).fill(null);
let current = -1;

function el(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function resetView() {
  window.scrollTo(0, 0);
  const heading = app.querySelector('h1, h2');
  if (heading) {
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }
}

function showIntro() {
  current = -1;
  app.replaceChildren();
  const intro = el('section', 'quiz-intro');
  const copy = el('div', 'quiz-intro-copy');
  copy.append(el('p', 'quiz-eyebrow', 'Partnership for Scientific Inquiry'));
  copy.append(el('h1', '', 'Find your Biomedical Research Area'));
  copy.append(el('p', 'quiz-intro-text', 'Explore the biomedical research questions that spark your curiosity. Choose the answer that interests you most.'));
  const start = el('button', 'quiz-primary', 'Start quiz →');
  start.type = 'button';
  start.addEventListener('click', () => { current = 0; showQuestion(); });
  copy.append(start);
  const collage = el('div', 'quiz-collage');
  collage.setAttribute('aria-label', 'Biomedical research areas');
  const preview = el('dialog', 'quiz-preview');
  preview.addEventListener('click', event => {
    if (event.target === preview) preview.close();
  });
  researchAreas.forEach(area => {
    const tile = el('button', 'quiz-collage-tile');
    tile.type = 'button';
    tile.setAttribute('aria-label', `Preview ${area.name}`);
    const picture = el('img', 'quiz-collage-image');
    picture.src = area.image;
    picture.alt = area.imageAlt;
    picture.loading = 'lazy';
    tile.append(picture, el('strong', '', area.name));
    tile.addEventListener('click', () => {
      const close = el('button', 'quiz-preview-close', 'Close ×');
      close.type = 'button';
      close.addEventListener('click', () => preview.close());
      preview.setAttribute('aria-label', `${area.name} result preview`);
      preview.replaceChildren(close, createResultCard(area, 'Research area preview'));
      preview.showModal();
    });
    collage.append(tile);
  });
  intro.append(copy, collage);
  app.append(intro, preview);
  resetView();
}

function showQuestion() {
  const question = questions[current];
  app.replaceChildren();
  const section = el('section', 'quiz-question');
  section.append(el('p', 'quiz-progress-label', `Question ${current + 1} of ${questions.length}`));
  const progress = el('div', 'quiz-track');
  progress.setAttribute('role', 'progressbar');
  progress.setAttribute('aria-label', 'Quiz progress');
  progress.setAttribute('aria-valuemin', '0');
  progress.setAttribute('aria-valuemax', String(questions.length));
  progress.setAttribute('aria-valuenow', String(current + 1));
  const fill = el('div', 'quiz-track-fill');
  fill.style.width = `${(current + 1) / questions.length * 100}%`;
  progress.append(fill);
  section.append(progress);
  const heading = el('h2', '', question.prompt);
  heading.id = 'quiz-question-heading';
  section.append(heading);
  const options = el('div', 'quiz-options');
  options.setAttribute('role', 'group');
  options.setAttribute('aria-labelledby', heading.id);
  question.options.forEach(([text], optionIndex) => {
    const choice = el('button', 'quiz-option', '');
    choice.type = 'button';
    choice.setAttribute('aria-pressed', String(answers[current] === optionIndex));
    if (answers[current] === optionIndex) choice.classList.add('selected');
    choice.append(el('span', 'quiz-letter', String.fromCharCode(65 + optionIndex)), el('span', '', text));
    choice.addEventListener('click', () => {
      answers[current] = optionIndex;
      options.querySelectorAll('button').forEach((button, index) => {
        const selected = index === optionIndex;
        button.classList.toggle('selected', selected);
        button.setAttribute('aria-pressed', String(selected));
      });
      next.disabled = false;
    });
    options.append(choice);
  });
  section.append(options);
  const navigation = el('div', 'quiz-navigation');
  const back = el('button', 'quiz-secondary', current === 0 ? '← Introduction' : '← Back');
  back.type = 'button';
  back.addEventListener('click', () => {
    if (current === 0) showIntro();
    else { current -= 1; showQuestion(); }
  });
  const next = el('button', 'quiz-primary', current === questions.length - 1 ? 'See my research areas →' : 'Next →');
  next.type = 'button';
  next.disabled = answers[current] === null;
  next.addEventListener('click', () => {
    if (answers[current] === null) return;
    if (current === questions.length - 1) showResults();
    else { current += 1; showQuestion(); }
  });
  navigation.append(back, next);
  section.append(navigation);
  app.append(section);
  resetView();
}

function rankedAreas() {
  const scores = Object.fromEntries(researchAreas.map(area => [area.id, 0]));
  questions.forEach((question, questionIndex) => {
    if (question.preference || answers[questionIndex] === null) return;
    const mapped = question.options[answers[questionIndex]][1];
    const ids = Array.isArray(mapped) ? mapped : [mapped];
    ids.forEach(id => { scores[id] += 1 / ids.length; });
  });
  return researchAreas.map(area => ({ area, score: scores[area.id] }))
    .sort((a, b) => b.score - a.score);
}

function createResultCard(area, label) {
  const card = el('section', 'quiz-result-card');
  card.append(el('p', 'quiz-result-label', label));
  const picture = el('img', 'quiz-result-image');
  picture.src = area.image;
  picture.alt = area.imageAlt;
  card.append(picture);
  card.append(el('h2', '', area.name));
  card.append(el('p', 'quiz-area-description', area.description));
  const fields = el('div', 'quiz-fields');
  area.fields.forEach(field => fields.append(el('span', '', field)));
  card.append(fields);
  card.append(el('h3', '', 'Example research areas'));
  const examples = el('ul', 'quiz-example-areas');
  examplesByArea[area.id].forEach(example => examples.append(el('li', '', example.text)));
  card.append(examples);
  return card;
}

function showResults() {
  app.replaceChildren();
  const ranked = rankedAreas();
  const top = ranked[0].area;
  const second = ranked[1].score > 0 ? ranked[1].area : null;
  const intro = el('section', 'quiz-result-intro');
  intro.append(el('p', 'quiz-eyebrow', 'Find your Biomedical Research Area'));
  intro.append(el('h1', '', top.name));
  app.append(intro);

  const cards = el('div', 'quiz-results');
  if (!second) cards.classList.add('single');
  [top, ...(second ? [second] : [])].forEach((area, index) => {
    const isTie = ranked[0].score === ranked[1].score;
    cards.append(createResultCard(area, index === 0 ? 'Your top research area' : isTie ? 'Another top research area' : 'Another area to explore'));
  });
  app.append(cards);

  const ending = el('section', 'quiz-ending');
  const again = el('button', 'quiz-primary', 'Try again');
  again.type = 'button';
  again.addEventListener('click', () => { answers.fill(null); showIntro(); });
  ending.append(again);
  app.append(ending);
  resetView();
}

showIntro();
