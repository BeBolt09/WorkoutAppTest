const validExercises = [
    "Run",
    "Running",
    "Walk",
    "Walking",
    "Swim",
    "Swimming",
    "Sprint",
    "Sprinting",
    "Jump",
    "Jumping",
    "Push-Up",
    "Push Up",
    "Push up",
    "Squat",
    "Deadlift",
    "Bench Press",
    "Bench press",
    "Pull-Up",
    "Pull Up",
    "Pull up",
    "Lunge",
    "Plank",
    "Row",
    "Rows",
    "Curl",
    "Curls",
    "Dumbbell Curl",
    "Dumbbell curl",
    "Shoulder Press",
    "Shoulder press",
    "Tricep Dip",
    "Tricep dip",
    "Russian Twist",
    "Russian twist",
    "Leg Press",
    "Leg press",
    "Lat Pulldown",
    "Lat pulldown",
    "Calf Raise",
    "Calf raise",
    "Crunch",
    "Burpee",
    "Mountain Climber",
    "Mountain climber",
    "Bicycle Crunch",
    "Bicycle crunch",
    "Jumping Jack",
    "Jumping jack",
    "Wall Sit",
    "Chest Fly",
    "Bent-Over Row",
    "Military Press",
    "Front Squat",
    "Romanian Deadlift",
    "Incline Bench Press",
    "Chin-Up",
    "Dumbbell Row",
    "Hammer Curl",
    "Skull Crusher",
    "Seated Shoulder Press",
    "Leg Curl",
    "Leg Extension",
    "Standing Calf Raise",
    "Hanging Leg Raise",
    "Side Plank",
    "Seated Cable Row",
    "Pulldown",
    "Arnold Press",
    "Hack Squat",
    "Dumbbell Pullover",
    "Barbell Curl",
    "Close-Grip Bench Press",
    "Reverse Curl",
    "Reverse Fly",
    "Step-Up",
    "Good Morning",
    "Dip",
    "Hyperextension",
    "Flutter Kick",
    "Russian Twist",
    "V-Up",
    "Lateral Raise",
    "Shrug",
    "Leg Raise",
    "Leg Press",
    "Machine Chest Press",
    "Machine Shoulder Press",
    "Machine Leg Press",
    "Machine Leg Curl",
    "Machine Leg Extension",
    "Machine Bicep Curl",
    "Machine Tricep Extension",
    "Machine Lat Pulldown",
    "Machine Row",
    "Machine Fly",
    "Machine Calf Raise",
    "Machine Chest Fly",
    "Machine Shoulder Fly",
    "Machine Ab Crunch",
    "Machine Ab Twist",

    // Variations and alternatives
    "Diamond Push-Up",
    "Wide-Grip Push-Up",
    "Close-Grip Push-Up",
    "Sumo Squat",
    "Split Squat",
    "Box Squat",
    "Hack Squat",
    "Bulgarian Split Squat",
    "Goblet Squat",
    "Kettlebell Squat",
    "Front Squat",
    "Back Squat",
    "Zercher Squat",
    "Pistol Squat",
    "Sumo Deadlift",
    "Romanian Deadlift",
    "Stiff-Leg Deadlift",
    "Sumo Stiff-Leg Deadlift",
    "Dumbbell Deadlift",
    "Trap Bar Deadlift",
    "Incline Bench Press",
    "Decline Bench Press",
    "Dumbbell Bench Press",
    "Machine Bench Press",
    "Close-Grip Bench Press",
    "Incline Dumbbell Press",
    "Decline Dumbbell Press",
    "Flat Dumbbell Press",
    "Incline Cable Fly",
    "Decline Cable Fly",
    "Flat Cable Fly",
    "Pull-Up",
    "Chin-Up",
    "Neutral-Grip Pull-Up",
    "Wide-Grip Pull-Up",
    "Close-Grip Pull-Up",
    "Assisted Pull-Up",
    "Lat Pulldown",
    "Reverse-Grip Lat Pulldown",
    "Wide-Grip Lat Pulldown",
    "Close-Grip Lat Pulldown",
    "Single-Arm Lat Pulldown",
    "Dumbbell Row",
    "Barbell Row",
    "T-Bar Row",
    "Seated Cable Row",
    "Bent-Over Row",
    "Pendlay Row",
    "Inverted Row",
    "Smith Machine Row",
    "Face Pull",
    "Dumbbell Curl",
    "Barbell Curl",
    "Preacher Curl",
    "Hammer Curl",
    "Concentration Curl",
    "Machine Curl",
    "Cable Curl",
    "Skull Crusher",
    "Tricep Dip",
    "Tricep Extension",
    "Close-Grip Tricep Extension",
    "Overhead Tricep Extension",
    "Tricep Pushdown",
    "Cable Overhead Tricep Extension",
    "Kickback",
    "Leg Press",
    "Hack Squat",
    "Lying Leg Curl",
    "Seated Leg Curl",
    "Standing Leg Curl",
    "Kettlebell Swing",
    "Good Morning",
    "Glute Bridge",
    "Hip Thrust",
    "Walking Lunge",
    "Reverse Lunge",
    "Curtsy Lunge",
    "Jump Lunge",
    "Bulgarian Split Squat",
    "Step-Up",
    "Calf Raise",
    "Seated Calf Raise",
    "Donkey Calf Raise",
    "Machine Calf Raise",
    "Standing Calf Raise",
    "Box Jump",
    "Burpee",
    "Mountain Climber",
    "Jumping Jack",
    "Plank",
    "Side Plank",
    "Spider Plank",
    "Plank with Leg Lift",
    "Plank with Shoulder Tap",
    "Russian Twist",
    "V-Up",
    "Crunch",
    "Sit-Up",
    "Sit Up",
    "Sit up",
    "Leg Raise",
    "Flutter Kick",
    "Reverse Crunch",
    "Cable Crunch",
    "Hanging Leg Raise",
    "Ab Wheel Rollout",
    "Russian Twist",
    "Woodchopper",
    "Oblique Crunch",
    "Hyperextension",
    "Back Extension",
    "Superman",
    "Reverse Hyperextension",
    "Pull-Up Bar Hang",
    "Dead Hang",
    "Farmer's Walk",
    "Kettlebell Carry",
    "Plank Drag",
    "Rope Climb",
    "Climb",
    "Climbing,",
    "Battle Rope Slam",
    "Sledgehammer Swing",
    "Medicine Ball Slam",
    "Boxing",
    "Jump Rope",
    "Boxing",
    "Kickboxing",
    "Muay Thai",
    "Judo",
    "Taekwondo",
    "Karate",
    "Wrestling",
    "Brazilian Jiu-Jitsu",
    "Mixed Martial Arts",
    "Tai Chi",
    "Yoga",
    "Pilates",
    "Zumba",

    //Plural--------------------------------------
    "Push-Ups",
    "Push-ups",
    "Push Ups",
    "Push ups",
    "Squats",
    "Deadlifts",
    "Bench Presses",
    "Pull-Ups",
    "Pull-ups",
    "Pull Ups",
    "Pull ups",
    "Lunges",
    "Planks",
    "Dumbbell Curls",
    "Shoulder Presses",
    "Tricep Dips",
    "Russian Twists",
    "Leg Presses",
    "Lat Pulldowns",
    "Calf Raises",
    "Crunches",
    "Burpees",
    "Mountain Climbers",
    "Bicycle Crunches",
    "Jumping Jacks",
    "Wall Sits",
    "Chest Flies",
    "Bent-Over Rows",
    "Military Presses",
    "Front Squats",
    "Romanian Deadlifts",
    "Incline Bench Presses",
    "Chin-Ups",
    "Dumbbell Rows",
    "Hammer Curls",
    "Skull Crushers",
    "Seated Shoulder Presses",
    "Leg Curls",
    "Leg Extensions",
    "Standing Calf Raises",
    "Hanging Leg Raises",
    "Side Planks",
    "Seated Cable Rows",
    "Pulldowns",
    "Arnold Presses",
    "Hack Squats",
    "Dumbbell Pullovers",
    "Barbell Curls",
    "Close-Grip Bench Presses",
    "Reverse Curls",
    "Reverse Flies",
    "Step-Ups",
    "Good Mornings",
    "Dips",
    "Hyperextensions",
    "Flutter Kicks",
    "Russian Twists",
    "V-Ups",
    "Lateral Raises",
    "Shrugs",
    "Leg Raises",
    "Leg Presses",
    "Machine Chest Presses",
    "Machine Shoulder Presses",
    "Machine Leg Presses",
    "Machine Leg Curls",
    "Machine Leg Extensions",
    "Machine Bicep Curls",
    "Machine Tricep Extensions",
    "Machine Lat Pulldowns",
    "Machine Rows",
    "Machine Flies",
    "Machine Calf Raises",
    "Machine Chest Flies",
    "Machine Shoulder Flies",
    "Machine Ab Crunches",
    "Machine Ab Twists",

    // Variations and alternatives------------------------
    "Diamond Push-Ups",
    "Wide-Grip Push-Ups",
    "Close-Grip Push-Ups",
    "Sumo Squats",
    "Split Squats",
    "Box Squats",
    "Hack Squats",
    "Bulgarian Split Squats",
    "Goblet Squats",
    "Kettlebell Squats",
    "Front Squats",
    "Back Squats",
    "Zercher Squats",
    "Pistol Squats",
    "Sumo Deadlifts",
    "Romanian Deadlifts",
    "Stiff-Leg Deadlifts",
    "Sumo Stiff-Leg Deadlifts",
    "Dumbbell Deadlifts",
    "Trap Bar Deadlifts",
    "Incline Bench Presses",
    "Decline Bench Presses",
    "Dumbbell Bench Presses",
    "Machine Bench Presses",
    "Close-Grip Bench Presses",
    "Incline Dumbbell Presses",
    "Decline Dumbbell Presses",
    "Flat Dumbbell Presses",
    "Incline Cable Flies",
    "Decline Cable Flies",
    "Flat Cable Flies",
    "Pull-Ups",
    "Pull Ups",
    "Chin-Ups",
    "Chin Ups",
    "Neutral-Grip Pull-Ups",
    "Wide-Grip Pull-Ups",
    "Close-Grip Pull-Ups",
    "Assisted Pull-Ups",
    "Lat Pulldowns",
    "Reverse-Grip Lat Pulldowns",
    "Wide-Grip Lat Pulldowns",
    "Close-Grip Lat Pulldowns",
    "Single-Arm Lat Pulldowns",
    "Dumbbell Rows",
    "Barbell Rows",
    "T-Bar Rows",
    "Seated Cable Rows",
    "Bent-Over Rows",
    "Pendlay Rows",
    "Inverted Rows",
    "Smith Machine Rows",
    "Face Pulls",
    "Dumbbell Curls",
    "Barbell Curls",
    "Preacher Curls",
    "Hammer Curls",
    "Concentration Curls",
    "Machine Curls",
    "Cable Curls",
    "Skull Crushers",
    "Tricep Dips",
    "Tricep Extensions",
    "Close-Grip Tricep Extensions",
    "Overhead Tricep Extensions",
    "Tricep Pushdowns",
    "Cable Overhead Tricep Extensions",
    "Kickbacks",
    "Leg Presses",
    "Hack Squats",
    "Lying Leg Curls",
    "Seated Leg Curls",
    "Standing Leg Curls",
    "Kettlebell Swings",
    "Good Mornings",
    "Glute Bridges",
    "Hip Thrusts",
    "Walking Lunges",
    "Reverse Lunges",
    "Curtsy Lunges",
    "Jump Lunges",
    "Bulgarian Split Squats",
    "Step-Ups",
    "Calf Raises",
    "Seated Calf Raises",
    "Donkey Calf Raises",
    "Machine Calf Raises",
    "Standing Calf Raises",
    "Box Jumps",
    "Burpees",
    "Mountain Climbers",
    "Jumping Jacks",
    "Planks",
    "Side Planks",
    "Spider Planks",
    "Planks with Leg Lifts",
    "Planks with Shoulder Taps",
    "Russian Twists",
    "V-Ups",
    "Crunches",
    "Sit-Ups",
    "Leg Raises",
    "Flutter Kicks",
    "Reverse Crunches",
    "Cable Crunches",
    "Hanging Leg Raises",
    "Ab Wheel Rollouts",
    "Russian Twists",
    "Woodchoppers",
    "Oblique Crunches",
    "Hyperextensions",
    "Back Extensions",
    "Supermans",
    "Reverse Hyperextensions",
    "Pull-Up Bar Hangs",
    "Dead Hangs",
    "Farmer's Walks",
    //Lowercase
    "push-ups",
    "squats",
    "deadlifts",
    "bench presses",
    "pull-ups",
    "lunges",
    "planks",
    "dumbbell curls",
    "shoulder presses",
    "tricep dips",
    "russian twists",
    "leg presses",
    "lat pulldowns",
    "calf raises",
    "crunches",
    "burpees",
    "mountain climbers",
    "bicycle crunches",
    "jumping jacks",
    "wall sits",
    "chest flies",
    "bent-over rows",
    "military presses",
    "front squats",
    "romanian deadlifts",
    "incline bench presses",
    "chin-ups",
    "dumbbell rows",
    "hammer curls",
    "skull crushers",
    "seated shoulder presses",
    "leg curls",
    "leg extensions",
    "standing calf raises",
    "hanging leg raises",
    "side planks",
    "seated cable rows",
    "pulldowns",
    "arnold presses",
    "hack squats",
    "dumbbell pullovers",
    "barbell curls",
    "close-grip bench presses",
    "reverse curls",
    "reverse flies",
    "step-ups",
    "good mornings",
    "dips",
    "hyperextensions",
    "flutter kicks",
    "v-ups",
    "lateral raises",
    "shrugs",
    "leg raises",
    "leg presses",
    "machine chest presses",
    "machine shoulder presses",
    "machine leg presses",
    "machine leg curls",
    "machine leg extensions",
    "machine bicep curls",
    "machine tricep extensions",
    "machine lat pulldowns",
    "machine rows",
    "machine flies",
    "machine calf raises",
    "machine chest flies",
    "machine shoulder flies",
    "machine ab crunches",
    "machine ab twists",

    // Variations and alternatives--------------
    "diamond push-ups",
    "wide-grip push-ups",
    "close-grip push-ups",
    "sumo squats",
    "split squats",
    "box squats",
    "hack squats",
    "bulgarian split squats",
    "goblet squats",
    "kettlebell squats",
    "front squats",
    "back squats",
    "zercher squats",
    "pistol squats",
    "sumo deadlifts",
    "romanian deadlifts",
    "stiff-leg deadlifts",
    "sumo stiff-leg deadlifts",
    "dumbbell deadlifts",
    "trap bar deadlifts",
    "incline bench presses",
    "decline bench presses",
    "dumbbell bench presses",
    "machine bench presses",
    "close-grip bench presses",
    "incline dumbbell presses",
    "decline dumbbell presses",
    "flat dumbbell presses",
    "incline cable flies",
    "decline cable flies",
    "flat cable flies",
    "pull-ups",
    "chin-ups",
    "neutral-grip pull-ups",
    "wide-grip pull-ups",
    "close-grip pull-ups",
    "assisted pull-ups",
    "lat pulldowns",
    "reverse-grip lat pulldowns",
    "wide-grip lat pulldowns",
    "close-grip lat pulldowns",
    "single-arm lat pulldowns",
    "dumbbell rows",
    "barbell rows",
    "t-bar rows",
    "seated cable rows",
    "bent-over rows",
    "pendlay rows",
    "inverted rows",
    "smith machine rows",
    "face pulls",
    "dumbbell curls",
    "barbell curls",
    "preacher curls",
    "hammer curls",
    "concentration curls",
    "machine curls",
    "cable curls",
    "skull crushers",
    "tricep dips",
    "tricep extensions",
    "close-grip tricep extensions",
    "overhead tricep extensions",
    "tricep pushdowns",
    "cable overhead tricep extensions",
    "kickbacks",
    "leg presses",
    "hack squats",
    "lying leg curls",
    "seated leg curls",
    "standing leg curls",
    "kettlebell swings",
    "good mornings",
    "glute bridges",
    "hip thrusts",
    "walking lunges",
    "reverse lunges",
    "curtsy lunges",
    "jump lunges",
    "bulgarian split squats",
    "step-ups",
    "calf raises",
    "seated calf raises",
    "donkey calf raises",
    "machine calf raises",
    "standing calf raises",
    "box jumps",
    "burpees",
    "mountain climbers",
    "jumping jacks",
    "planks",
    "side planks",
    "spider planks",
    "planks with leg lifts",
    "planks with shoulder taps",
    "russian twists",
    "v-ups",
    "crunches",
    "sit-ups",
    "leg raises",
    "flutter kicks",
    "reverse crunches",
    "cable crunches",
    "hanging leg raises",
    "ab wheel rollouts",
    "russian twists",
    "woodchoppers",
    "oblique crunches",
    "hyperextensions",
    "back extensions",
    "supermans",
    "reverse hyperextensions",
    "pull-up bar hangs",
    "dead hangs",
    "farmer's walks",
    "kettlebell carries",
    "plank drags",
    "rope climbs",
    "battle rope slams",
    "sledgehammer swings",
    "medicine ball slams",
    "boxing",
    "jump ropes",
    "boxing",
    "kickboxing",
    "muay thai",
    "judo",
    "taekwondo",
    "karate",
    "wrestling",
    "brazilian jiu-jitsu",
    "mixed martial arts",
    "tai chi",
    "yoga",
    "pilates",
    "zumba",
  ];
  
  export default validExercises;
  