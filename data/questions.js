const questions = {
  roadRules: [
    {
      question: "You may...",
      options: [
        "Drive your vehicle on the sidewalk at night.",
        "Reverse your vehicle only if it is safe to do so.",
        "Leave the engine of your vehicle idling when you put petrol in it."
      ],
      answer: 1
    },
    {
      question: "When you want to change lanes and drive from one lane to the other you must...",
      options: [
        "Only do it when it is safe to do so and switch on your flickers.",
        "Use your mirrors only.",
        "Ignore mirrors and use hazards."
      ],
      answer: 0
    },
    {
      question: "When may you not overtake another vehicle?",
      options: [
        "When nearing the top of a hill.",
        "When nearing a curve.",
        "All of the above."
      ],
      answer: 2
    },
    {
      question: "When are you allowed to drive on the shoulder of a road?",
      options: [
        "In daytime when it's safe and to allow a vehicle to pass.",
        "Anytime on a freeway.",
        "At night."
      ],
      answer: 0
    },
    {
      question: "You may not obtain a learner's licence if...",
      options: [
        "You already have a licence for the same class.",
        "You are declared unfit to drive.",
        "All of the above."
      ],
      answer: 2
    },
    {
      question: "At an intersection...",
      options: [
        "Vehicles have the right of way over pedestrians.",
        "Yield to oncoming traffic when turning right.",
        "Stop signs are optional if no traffic."
      ],
      answer: 1
    },
    {
      question: "The licence for your vehicle (clearance certificate) is valid for...",
      options: [
        "12 months",
        "90 days",
        "21 days"
      ],
      answer: 0
    },
    {
      question: "General speed limit in an urban area is ...km/h.",
      options: [
        "60",
        "80",
        "100"
      ],
      answer: 0
    },
    {
      question: "The legal speed limit which you may drive is...",
      options: [
        "Always 120 km/h outside urban areas.",
        "Determined by road signs.",
        "Self-determined."
      ],
      answer: 1
    },
    {
      question: "You may...",
      options: [
        "Leave your engine running unattended.",
        "Allow passengers on the bumper.",
        "Put your arm out the window only to give hand signals."
      ],
      answer: 2
    },
    {
      question: "If you see that someone wants to overtake you, you must...",
      options: [
        "Not drive faster and keep to the left.",
        "Speed up.",
        "Honk and wave."
      ],
      answer: 0
    },
    {
      question: "The furthest that your vehicle's dim light may shine in front of you is...",
      options: [
        "45 m",
        "100 m",
        "150 m"
      ],
      answer: 0
    },
    {
      question: "What is the longest period that a vehicle may be parked on one place on a road outside urban areas?",
      options: [
        "7 days",
        "48 hours",
        "24 hours"
      ],
      answer: 1
    },
    {
      question: "At an intersection...",
      options: [
        "You can pass another vehicle waiting to turn right on his left side by going off the road.",
        "You can stop in it to offload passengers.",
        "Pedestrians already crossing have right of way."
      ],
      answer: 2
    },
    {
      question: "You are not allowed to stop...",
      options: [
        "On the pavement.",
        "Facing oncoming traffic.",
        "Next to any obstruction in the road."
      ],
      answer: 0
    },
    {
      question: "You are not allowed to stop...",
      options: [
        "Where you are also prohibited to park.",
        "5 m from a bridge.",
        "Opposite a vehicle, where the roadway is 10 m wide."
      ],
      answer: 0
    },
    {
      question: "You may pass another vehicle on the left-hand side if it...",
      options: [
        "Indicates it is turning right.",
        "Drives in a town in the right-hand lane with 2 lanes in the same direction.",
        "All of the above."
      ],
      answer: 2
    },
    {
      question: "You may overtake another vehicle on the left hand side...",
      options: [
        "When it is turning right and road is wide enough.",
        "Where road has 2 lanes in same direction.",
        "If instructed by police."
      ],
      answer: 2
    },
    {
      question: "You may on a public road...",
      options: [
        "Pass a vehicle turning right, on its left-hand side without driving on the shoulder.",
        "Pass a vehicle at any place on the left-hand side.",
        "Not pass any vehicle on the left-hand side."
      ],
      answer: 0
    },
    {
      question: "The last action that you must take before moving to another lane is to...",
      options: [
        "Switch on your flicker.",
        "Check the blind spot.",
        "Look in rear view mirror."
      ],
      answer: 1
    },
    // Remaining questions loaded from the Evolve Mock Test PDF
    {
      question: "When are you allowed to drive your vehicle on the right-hand side of a road with traffic in both directions?",
      options: [
        "When you switch on the emergency lights of your vehicle.",
        "When a traffic officer shows you to do so.",
        "Under no circumstances."
      ],
      answer: 1
    },
    {
      question: "If you come to a robot and the red light flashes, you must...",
      options: [
        "Stop and wait for the light to change to green before you go.",
        "Stop and go only if it is safe to do so.",
        "Look out for a road block as the light shows you a police stop."
      ],
      answer: 1
    },
    {
      question: "A vehicle of which the brakes are not good, must be towed...",
      options: [
        "With a rope.",
        "With a tow-bar.",
        "On a trailer."
      ],
      answer: 2
    },
    {
      question: "A safe following distance is, when the vehicle in front of you suddenly stops, you could...",
      options: [
        "Stop without swerving.",
        "Swerve and stop next to it.",
        "Swerve and pass."
      ],
      answer: 0
    },
    {
      question: "You may not...",
      options: [
        "Have passengers in the vehicle if you only have a learner's licence.",
        "Leave your vehicle unattended while the engine is running.",
        "Drive in reverse for more than 100m."
      ],
      answer: 1
    },
    {
      question: "If you want to change lanes you must...",
      options: [
        "Switch on your indicator and change lanes.",
        "Give the necessary signal and after looking for other traffic, change lanes.",
        "Apply the brakes lightly and then change lanes."
      ],
      answer: 1
    },
    {
      question: "The fastest speed at which you may tow a vehicle with a rope is...",
      options: [
        "60 km/h",
        "45 km/h",
        "30 km/h"
      ],
      answer: 2
    },
    {
      question: "You may cross or enter a public road...",
      options: [
        "If the road is clear of traffic for a short distance.",
        "If the road is clear of traffic for a long distance and it can be done without obstructing traffic.",
        "In any manner as long as you use your flickers in time."
      ],
      answer: 1
    },
    {
      question: "Your vehicle's headlights must be switched on...",
      options: [
        "At any time of the day when you cannot see persons and vehicles 150m in front of you.",
        "From sunset to sunrise.",
        "When it rains and you cannot see vehicles 100m in front of you."
      ],
      answer: 2
    },
    {
      question: "You may not drive into an intersection when...",
      options: [
        "The robot (traffic signal) is yellow and you are already in the intersection.",
        "The vehicle in front of you wants to turn right and the road is wide enough to pass on the left side.",
        "There is not enough space in the intersection to turn right without blocking other traffic."
      ],
      answer: 2
    },
    {
      question: "When you were involved in an accident you...",
      options: [
        "Must immediately stop your vehicle.",
        "Must determine the damage to the vehicles.",
        "May refuse to give your name and address to anyone except the police."
      ],
      answer: 0
    },
    {
      question: "When you were involved in an accident you...",
      options: [
        "Must immediately stop your vehicle.",
        "Must see if someone is injured.",
        "May use a bit of alcohol for the shock."
      ],
      answer: 0
    },
    {
      question: "When do you have the right of way?",
      options: [
        "When you are within a traffic circle.",
        "When you have stopped first at a four-way stop.",
        "All of the above."
      ],
      answer: 2
    },
    {
      question: "If you come across an emergency vehicle on the road sounding a siren you must...",
      options: [
        "Flash your headlights to warn other traffic.",
        "Give right of way to the emergency vehicle.",
        "Switch on your vehicle's emergency light and blow your hooter."
      ],
      answer: 1
    },
    {
      question: "If you want to turn left with your vehicle, you must...",
      options: [
        "Slow down completely, stop and then turn.",
        "First move to the right to enable you to turn left easily.",
        "Give the necessary signal in good time."
      ],
      answer: 2
    },
    {
      question: "When you drive...",
      options: [
        "You must have both hands on the steering wheel.",
        "Your vision of the road and the traffic must be unobstructed.",
        "You must wear shoes with rubber soles."
      ],
      answer: 1
    }
    // Continue from question 38 onward if needed

  ],
  roadSigns: [
    {
      question: "What does a red octagonal sign with a white border and letters mean?",
      options: ["Stop", "Yield", "No entry"],
      answer: 0
    },
    {
      question: "What must you do when approaching a yield sign?",
      options: ["Speed up and merge", "Stop regardless of traffic", "Give way to other traffic"],
      answer: 2
    },
    {
      question: "What does a triangular sign with a picture of a pedestrian mean?",
      options: ["Children crossing", "Pedestrian crossing", "Hospital zone"],
      answer: 1
    },
    {
      question: "What does a circular red sign with a line through it mean?",
      options: ["Information", "Mandatory instruction", "Prohibition"],
      answer: 2
    },
    {
      question: "What does a blue rectangular sign indicate?",
      options: ["Warning", "Direction or service", "Prohibition"],
      answer: 1
    },
    {
      question: "A red circle around a white background usually means...",
      options: ["Mandatory instruction", "Prohibition", "General warning"],
      answer: 1
    },
    {
      question: "What does a yellow diamond-shaped sign with black border represent?",
      options: ["Warning sign", "Temporary construction", "Prohibited area"],
      answer: 0
    },
    {
      question: "What color is typically used for road work signs?",
      options: ["Yellow and black", "Red and white", "Orange"],
      answer: 2
    },
    {
      question: "What sign warns of a railway crossing ahead?",
      options: ["A red triangle with train symbol", "A stop sign", "A yellow circle"],
      answer: 0
    },
    {
      question: "What does a sign with a red X on a lane mean?",
      options: ["Lane is open", "Lane is closed", "Caution required"],
      answer: 1
    },
    {
      question: "What shape are warning signs?",
      options: ["Circular", "Triangular", "Square"],
      answer: 1
    },
    {
      question: "What do brown signs indicate?",
      options: ["Tourist attractions", "Detours", "Medical help"],
      answer: 0
    },
    {
      question: "Which sign indicates a hospital ahead?",
      options: ["Blue square with white H", "Red cross", "Green cross"],
      answer: 0
    },
    {
      question: "What does a white arrow on a blue circular sign mean?",
      options: ["Direction that must be followed", "No entry", "Stop"],
      answer: 0
    },
    {
      question: "What shape are regulatory signs?",
      options: ["Circular", "Rectangular", "Hexagonal"],
      answer: 0
    },
    {
      question: "What does a red triangle with a car and squiggly lines indicate?",
      options: ["Slippery road ahead", "Speed bump", "Gravel road"],
      answer: 0
    },
    {
      question: "What does a red triangle with a cow mean?",
      options: ["Livestock area", "Zoo ahead", "Farm equipment crossing"],
      answer: 0
    },
    {
      question: "What does a red triangle with children running mean?",
      options: ["Playground", "School zone", "Children crossing"],
      answer: 2
    },
    {
      question: "A red triangle with an exclamation mark warns of...",
      options: ["Hazard ahead", "No parking", "Emergency services"],
      answer: 0
    },
    {
      question: "What does a red circle with a bicycle mean?",
      options: ["Cycle lane", "Bicycles prohibited", "Pedestrian path"],
      answer: 1
    },
    {
      question: "What does a blue sign with a wheelchair symbol indicate?",
      options: ["Hospital", "Handicap access or parking", "Stretcher access"],
      answer: 1
    },
    {
      question: "What does a white square with a black P and slash mean?",
      options: ["No parking", "Parking zone", "Permit required"],
      answer: 0
    },
    {
      question: "What does a blue circle with an upward arrow mean?",
      options: ["Go straight", "Do not enter", "U-turn allowed"],
      answer: 0
    },
    {
      question: "What sign means yield to buses?",
      options: ["Blue rectangle with bus", "Yellow diamond with bus", "Red triangle with bus"],
      answer: 2
    },
    {
      question: "What does a green circle with an arrow mean?",
      options: ["Optional direction", "Permitted movement", "No turns"],
      answer: 1
    },
    {
      question: "What does a red circle with a diagonal through a horn mean?",
      options: ["No entry", "No honking", "Sound horn"],
      answer: 1
    },
    {
      question: "What does a white sign with two arrows in opposite directions mean?",
      options: ["No overtaking", "Two-way traffic", "Divided highway begins"],
      answer: 1
    },
    {
      question: "What does a triangle with a traffic light symbol mean?",
      options: ["Traffic signal ahead", "Traffic light malfunction", "Green wave starts"],
      answer: 0
    },
    {
      question: "What does a sign with a car and rocks mean?",
      options: ["Landslide area", "Loose gravel", "Construction zone"],
      answer: 1
    },
    {
      question: "What sign means no U-turn?",
      options: ["Red circle with U and slash", "Yellow triangle with U", "Blue square with U"],
      answer: 0
    },
    {
      question: "What must you do when approaching a yield sign?",
      options: ["Speed up and merge", "Stop regardless of traffic", "Give way to other traffic"],
      answer: 2
    },
    {
      question: "What does a triangular sign with a picture of a pedestrian mean?",
      options: ["Children crossing", "Pedestrian crossing", "Hospital zone"],
      answer: 1
    },
    {
      question: "What does a circular red sign with a line through it mean?",
      options: ["Information", "Mandatory instruction", "Prohibition"],
      answer: 2
    },
    {
      question: "What does a blue rectangular sign indicate?",
      options: ["Warning", "Direction or service", "Prohibition"],
      answer: 1
    }
  ],
  vehicleControls: [
    {
      question: "What is the purpose of the clutch pedal in a manual vehicle?",
      options: ["To increase engine speed", "To change gears smoothly", "To brake more effectively"],
      answer: 1
    },
    {
      question: "Which control should you use to demist the front windscreen?",
      options: ["Air conditioning dial", "Rear window heater", "Heater and fan directed at the windscreen"],
      answer: 2
    },
    {
      question: "What does the temperature gauge indicate?",
      options: ["Fuel level", "Coolant temperature", "Battery charge"],
      answer: 1
    },
    {
      question: "Where is the hazard light switch usually located?",
      options: ["Next to the steering wheel", "On the driver door", "Beside the clutch"],
      answer: 0
    },
    {
      question: "What is the correct procedure before starting a vehicle?",
      options: ["Accelerate and release handbrake", "Check gear is in neutral and apply brakes", "Only use the key to start"],
      answer: 1
    },
    {
      question: "Which control activates the vehicle's wipers?",
      options: ["Ignition switch", "Lever on the steering column", "Air conditioning knob"],
      answer: 1
    },
    {
      question: "What does a flashing indicator signal?",
      options: ["Wiper malfunction", "Direction intention", "Emergency brake"],
      answer: 1
    },
    {
      question: "What does the fuel gauge indicate?",
      options: ["Engine temperature", "Oil level", "Fuel level"],
      answer: 2
    },
    {
      question: "How do you turn on the headlights?",
      options: ["Push hazard switch", "Use light switch on dashboard or stalk", "Press brake pedal"],
      answer: 1
    },
    {
      question: "What is the purpose of the rearview mirror?",
      options: ["To apply brakes", "To view road behind", "To check fuel level"],
      answer: 1
    },
    {
      question: "What does the ABS light indicate?",
      options: ["Headlight status", "Brake system status", "Airbag system"],
      answer: 1
    },
    {
      question: "What does a red oil light on the dashboard mean?",
      options: ["Battery low", "Oil pressure problem", "Engine overheated"],
      answer: 1
    },
    {
      question: "Which control is used to defog the rear window?",
      options: ["Air vent control", "Rear defrost button", "Front fan only"],
      answer: 1
    },
    {
      question: "Where is the handbrake usually located?",
      options: ["Left of the driver", "Center console", "Rear seat"],
      answer: 1
    },
    {
      question: "What does the horn do?",
      options: ["Warn other drivers", "Activate hazards", "Start the engine"],
      answer: 0
    },
    {
      question: "What does the gear lever do?",
      options: ["Control vehicle lighting", "Change gears", "Activate turn signals"],
      answer: 1
    },
    {
      question: "How do you activate high beam headlights?",
      options: ["Press horn", "Pull or push light control stalk", "Press brake pedal"],
      answer: 1
    },
    {
      question: "What does the battery light indicate?",
      options: ["Battery is charging normally", "Potential charging system fault", "Headlights on"],
      answer: 1
    },
    {
      question: "What does the speedometer show?",
      options: ["Distance traveled", "Fuel used", "Vehicle speed"],
      answer: 2
    },
    {
      question: "What is the use of cruise control?",
      options: ["Maintain constant speed", "Activate brakes", "Improve fuel quality"],
      answer: 0
    },
    {
      question: "Where is the fog light switch typically located?",
      options: ["Inside glove compartment", "On or near the light control switch", "Beside accelerator"],
      answer: 1
    },
    {
      question: "What is the purpose of side mirrors?",
      options: ["To apply brakes", "To see behind and sides", "To control temperature"],
      answer: 1
    },
    {
      question: "How do you activate the windscreen washer?",
      options: ["Turn on heater", "Pull wiper lever toward you", "Tap the brake pedal"],
      answer: 1
    },
    {
      question: "What does a blinking seatbelt icon mean?",
      options: ["Airbag error", "Buckle your seatbelt", "Low fuel"],
      answer: 1
    },
    {
      question: "How do you open the vehicle's bonnet?",
      options: ["Use button on key fob", "Pull latch near driver footwell", "Push dashboard"],
      answer: 1
    },
    {
      question: "Which control increases vehicle speed?",
      options: ["Clutch pedal", "Accelerator pedal", "Brake pedal"],
      answer: 1
    },
    {
      question: "Where is the odometer located?",
      options: ["In glovebox", "Within instrument cluster", "Near rearview mirror"],
      answer: 1
    },
    {
      question: "What is the function of the ignition switch?",
      options: ["Open boot", "Start engine", "Control AC"],
      answer: 1
    },
    {
      question: "What does the trip reset button do?",
      options: ["Clears fuel gauge", "Resets trip mileage", "Restarts engine"],
      answer: 1
    },
    {
      question: "What is the purpose of the choke in older vehicles?",
      options: ["Increase fuel for cold starts", "Activate AC", "Boost battery"],
      answer: 0,
    },
    {
      question: "Which control should you use to demist the front windscreen?",
      options: ["Air conditioning dial", "Rear window heater", "Heater and fan directed at the windscreen"],
      answer: 2
    },
    {
      question: "What does the temperature gauge indicate?",
      options: ["Fuel level", "Coolant temperature", "Battery charge"],
      answer: 1
    },
    {
      question: "Where is the hazard light switch usually located?",
      options: ["Next to the steering wheel", "On the driver door", "Beside the clutch"],
      answer: 0
    },
    {
      question: "What is the correct procedure before starting a vehicle?",
      options: ["Accelerate and release handbrake", "Check gear is in neutral and apply brakes", "Only use the key to start"],
      answer: 1
    }
  ]
};



/* === File: practice.js === */
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("questions-container");

  for (const [category, qs] of Object.entries(questions)) {
    const section = document.createElement("section");
    section.innerHTML = `<h2>${category.replace(/([A-Z])/g, ' $1')}</h2>`;

    qs.forEach((q, idx) => {
      const qDiv = document.createElement("div");
      qDiv.classList.add("question-block");
      qDiv.innerHTML = `<p><strong>Q${idx + 1}:</strong> ${q.question}</p>`;

      if (q.image) {
        qDiv.innerHTML += `<img src="${q.image}" alt="Question Image">`;
      }

      q.options.forEach((opt, i) => {
        const optDiv = document.createElement("div");
        optDiv.textContent = opt;
        if (i === q.answer) optDiv.classList.add("correct");
        qDiv.appendChild(optDiv);
      });

      section.appendChild(qDiv);
    });

    container.appendChild(section);
  }
});

/* === File: script.js === */
document.addEventListener("DOMContentLoaded", () => {
  const selected = {
    roadRules: getRandomSubset(questions.roadRules, 30),
    roadSigns: getRandomSubset(questions.roadSigns, 30),
    vehicleControls: getRandomSubset(questions.vehicleControls, 8),
  };

  sessionStorage.setItem("testQuestions", JSON.stringify(selected));
  renderTest(selected);
});

function getRandomSubset(arr, n) {
  return arr.sort(() => 0.5 - Math.random()).slice(0, n);
}

function renderTest(selected) {
  const container = document.getElementById("test-container");

  for (const [category, qs] of Object.entries(selected)) {
    const section = document.createElement("section");
    section.innerHTML = `<h2>${category.replace(/([A-Z])/g, ' $1')}</h2>`;

    qs.forEach((q, idx) => {
      const qDiv = document.createElement("div");
      qDiv.classList.add("question-block");
      qDiv.innerHTML = `<p><strong>Q${idx + 1}:</strong> ${q.question}</p>`;

      if (q.image) {
        qDiv.innerHTML += `<img src="${q.image}" alt="Question Image">`;
      }

      q.options.forEach((opt, i) => {
        const id = `${category}-${idx}-${i}`;
        qDiv.innerHTML += `<div><input type="radio" name="${category}-${idx}" value="${i}" id="${id}"><label for="${id}">${opt}</label></div>`;
      });

      section.appendChild(qDiv);
    });

    container.appendChild(section);
  }
}

function submitTest() {
  const selected = JSON.parse(sessionStorage.getItem("testQuestions"));
  const userAnswers = { roadRules: [], roadSigns: [], vehicleControls: [] };

  for (const [category, qs] of Object.entries(selected)) {
    qs.forEach((_, idx) => {
      const selectedOption = document.querySelector(`input[name='${category}-${idx}']:checked`);
      userAnswers[category].push(selectedOption ? parseInt(selectedOption.value) : null);
    });
  }

  const results = calculateResults(selected, userAnswers);
  displayResults(results);
}

function calculateResults(originalQs, userAnswers) {
  const scores = {
    roadRules: { correct: 0, passMark: 22 },
    roadSigns: { correct: 0, passMark: 23 },
    vehicleControls: { correct: 0, passMark: 6 },
  };

  for (let category in userAnswers) {
    userAnswers[category].forEach((ans, i) => {
      if (ans === originalQs[category][i].answer) scores[category].correct++;
    });
  }

  return scores;
}

function displayResults(scores) {
  const resDiv = document.getElementById("results");
  resDiv.innerHTML = '<h2>Results</h2>';

  let totalPass = true;
  for (let [cat, { correct, passMark }] of Object.entries(scores)) {
    const passed = correct >= passMark;
    totalPass = totalPass && passed;
    resDiv.innerHTML += `<p>${cat.replace(/([A-Z])/g, ' $1')}: ${correct} / ${passMark} - <strong>${passed ? 'PASS' : 'FAIL'}</strong></p>`;
  }

  resDiv.innerHTML += `<h3>Overall: <strong>${totalPass ? 'PASS' : 'FAIL'}</strong></h3>`;
}


