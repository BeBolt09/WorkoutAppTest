const validExercises = [
//Stair Master
"Stair Master", "stair master", "Stair master", "stair Master",

//Stair Climber
"Stair Climber", "stair climber", "Stair climber", "stair Climber",

//Arc Trainer
"Arc Trainer", "arc trainer", "Arc trainer", "arc Trainer",

//Elliptical
"Elliptical", "elliptical",

//Treadmill
"Treadmill", "treadmill",

//Run
"Run", "Running", "run", "running",

//Jog
"Jog", "Jogging", "jog", "jogging",

//Walk
"Walk", "Walking", "walk", "walking",

//Sprint
"Sprint", "Sprints", "sprint", "sprints", "Sprinting", "sprinting",

//Swim
"Swim", "Swimming", "swim", "swimming",

//Climb
"Climb", "Climbing", "climb", "climbing",

//Skipping
"Skip", "skip", "Skipping", "skipping",

//Cycling
"Cycling", "cycling",

//Bike
"Bike", "bike", "Biking", "biking",

//Stationary Bike
"Stationary Bike", "stationary bike", "Stationary bike", "stationary Bike",

//Jump
"Jump", "Jumps", "jump", "jumps", "Jumping", "jumping",

//Push-Up
"Push-Up", "Push-up", "Push Up", "Push up", "push-up", "push up", "push Up", "push up","Push-Ups", "Push-ups", "Push Ups", "Push ups", "push-ups", "push ups", "push Ups", "push ups",

//Squat
"Squat", "squat", "Squats", "squats",

//Deadlift
"Deadlift", "deadlift", "Deadlifts", "deadlifts",

//Bench Press
"Bench Press", "bench press", "Bench press", "bench Press", "Bench Presses", "bench presses", "Bench presses", "bench Presses",

//Pull-Up
"Pull-Up", "pull-up", "Pull Up", "Pull up", "pull-up", "pull up", "pull Up", "pull up","Pull-Ups", "pull-ups", "Pull Ups", "Pull ups", "pull-ups", "pull ups", "pull Ups", "pull ups",

//Lunge
"Lunge", "lunge", "Lunges", "lunges",

//Plank
"Plank", "plank", "Planks", "planks",

//Row
"Row", "row", "Rows", "rows",

//Rowing
"Rowing", "rowing",

//Rowing Machine
"Rowing Machine", "rowing machine", "Rowing machine", "rowing Machine",

//Tire Flip
"Tire Flip", "tire flip", "Tire flip", "tire Flip", "Tire Flips", "tire flips", "Tire flips", "tire Flips",

//Sledgehammer Swing
"Sledgehammer", "sledgehammer", "Sledgehammer Swing", "sledgehammer swing", "Sledgehammer swing", "sledgehammer Swing", "Sledgehammer Swings", "sledgehammer swings", "Sledgehammer swings", "sledgehammer Swings",

//Ball Slam
"Ball Slam", "ball slam", "Ball slam", "ball Slam", "Ball Slams", "ball slams", "Ball slams", "ball Slams",

//Hiking
"Hike", "hike", "Hiking", "hiking",

//Curl
"Curl", "curl", "Curls", "curls",
 
//Snatch
"Snatch", "snatch", "Snatches", "snatches",

//Dumbbell Curl
"Dumbbell Curl", "dumbbell curl", "Dumbbell curl", "dumbbell Curl", "Dumbbell Curls", "dumbbell curls", "Dumbbell curls", "dumbbell Curls",

//Shoulder Press
"Shoulder Press", "shoulder press", "Shoulder press", "shoulder Press", "Shoulder Presses", "shoulder presses", "Shoulder presses", "shoulder Presses",

//Overhead Press
"Overhead Press", "overhead press", "Overhead press", "overhead Press", "Overhead Presses", "overhead presses", "Overhead presses", "overhead Presses",

//Tricep Dip
"Tricep Dip", "tricep dip", "Tricep dip", "tricep Dip", "Tricep Dips", "tricep dips", "Tricep dips", "tricep Dips",

//Pelvic Tilt
"Pelvic Tilt", "pelvic tilt", "Pelvic tilt", "pelvic Tilt", "Pelvic Tilts", "pelvic tilts", "Pelvic tilts", "pelvic Tilts",

//Muscle Up
"Muscle Up", "muscle up", "Muscle up", "muscle Up", "Muscle Ups", "muscle ups", "Muscle ups", "muscle Ups",

//High Knee
"High Knee", "high knee", "High knee", "high Knee", "High Knees", "high knees", "High knees", "high Knees",

//Russian Twist
"Russian Twist", "russian twist", "Russian twist", "russian Twist", "Russian Twists", "russian twists", "Russian twists", "russian Twists",

//Kettlebell Swing
"Kettlebell Swing", "kettlebell swing", "Kettlebell swing", "kettlebell Swing", "Kettlebell Swings", "kettlebell swings", "Kettlebell swings", "kettlebell Swings",

//Leg Press
"Leg Press", "leg press", "Leg press", "leg Press", "Leg Presses", "leg presses", "Leg presses", "leg Presses",

//Lat Pulldown
"Lat Pulldown", "lat pulldown", "Lat pulldown", "lat Pulldown", "Lat Pulldowns", "lat pulldowns", "Lat pulldowns", "lat Pulldowns",

//Calf Raise
"Calf Raise", "calf raise", "Calf raise", "calf Raise", "Calf Raises", "calf raises", "Calf raises", "calf Raises",

//Crunch
"Crunch", "crunch", "Crunches", "crunches",

//Split Squat
"Split Squat", "split squat", "Split squat", "split Squat", "Split Squats", "split squats", "Split squats", "split Squats",

//Bulgarian Split Squat
"Bulgarian Split Squat", "bulgarian split squat", "Bulgarian split squat", "bulgarian Split Squat", "Bulgarian Split Squats", "bulgarian split squats", "Bulgarian split squats", "bulgarian Split Squats",

//Burpee
"Burpee", "burpee", "Burpees", "burpees",

//Butt Kick
"Butt Kick", "butt kick", "Butt kick", "butt Kick", "Butt Kicks", "butt kicks", "Butt kicks", "butt Kicks",

//Boxing
"Box", "box", "Boxing", "boxing",

//Box Jump
"Box Jump", "box jump", "Box jump", "box Jump", "Box Jumps", "box jumps", "Box jumps", "box Jumps",

//Kickboxing
"Kickbox", "kickbox", "Kickboxing", "kickboxing", 

//Muay Thai
"Muay Thai", "muay thai", "Muay thai", "muay Thai",

//Judo
"Judo", "judo",

//Sled
"Sled", "sled",

//Prowler Push
"Prowler Push", "prowler push", "Prowler push", "prowler Push", "Prowler Pushes", "prowler pushes", "Prowler pushes", "prowler Pushes", 

//Prowler Sled
"Prowler Sled", "prowler sled", "Prowler sled", "prowler Sled",

//Taekwondo
"Taekwondo", "taekwondo",

//Karate
"Karate", "karate",

//Wrestling
"Wrestle", "wrestle", "Wrestling", "wrestling",

//Jiu Jitsu
"Jiu Jitsu", "jiu jitsu", "Jiu jitsu", "jiu Jitsu",

//Brazilian Jiu-Jitsu
"Brazilian Jiu-Jitsu", "brazilian jiu-jitsu", "brazilian Jiu-Jitsu", "Brazilian jiu-jitsu",

//Mixed Martial Arts
"Mixed Martial Arts", "mixed martial arts",

//Tai Chi
"Tai Chi", "tai chi", "Tai chi", "tai Chi",

//Yoga
"Yoga", "yoga",

//Pilates
"Pilates", "pilates",

//Zumba
"Zumba", "zumba",

//Mountain Climber
"Mountain Climber", "mountain climber", "Mountain climber", "mountain Climber", "Mountain Climbers", "mountain climbers", "Mountain climbers", "mountain Climbers",

//Bicycle Crunch
"Bicycle Crunch", "bicycle crunch", "Bicycle crunch", "bicycle Crunch", "Bicycle Crunches", "bicycle crunches", "Bicycle crunches", "bicycle Crunches",

//Jumping Jack
"Jumping Jack", "jumping jack", "Jumping jack", "jumping Jack", "Jumping Jacks", "jumping jacks", "Jumping jacks", "jumping Jacks",

//Wall Sit
"Wall Sit", "wall sit", "Wall sit", "wall Sit", "Wall Sits", "wall sits", "Wall sits", "wall Sits",

//Bird Dog
"Bird Dog", "bird dog", "Bird dog", "bird Dog", "Bird Dogs", "bird dogs", "Bird dogs", "bird Dogs",

//Sit-Ups
"Sit-Ups", "sit-ups", "Sit-Ups", "sit-ups", "Sit-Up", "sit-up", "Sit Ups", "sit ups", "Sit Ups", "sit ups", "Sit Up", "sit up",

//Chest Fly
"Chest Fly", "chest fly", "Chest fly", "chest Fly", "Chest Flies", "chest flies", "Chest flies", "chest Flies",

//Chest Dip
"Chest Dip", "chest dip", "Chest dip", "chest Dip", "Chest Dips", "chest dips", "Chest dips", "chest Dips",

//Bent-Over Row
"Bent-Over Row", "bent-over row", "Bent-Over Rows", "bent-over rows",

//Bent Over Row
"Bent Over Row", "bent over row", "Bent over row", "bent Over Row", "Bent Over Rows", "bent over rows", "Bent over rows", "bent Over Rows",

//Military Press
"Military Press", "military press", "Military press", "military Press", "Shoulder Press", "shoulder press", "Shoulder press", "shoulder Press",

//Front Squat
"Front Squat", "front squat", "Front squat", "front Squat", "Front Squats", "front squats", "Front squats", "front Squats",

//Superman
"Superman", "superman", "Supermans", "supermans",

//Ab Wheel
"Ab Wheel", "ab wheel", "Ab wheel", "ab Wheel",

//Ab Roller
"Ab Roller", "ab roller", "Ab roller", "ab Roller",

//Inverted Row
"Inverted Row", "inverted row", "Inverted row", "inverted Row", "Inverted Rows", "inverted rows", "Inverted rows", "inverted Rows",

//Romanian Deadlift
"Romanian Deadlift", "romanian deadlift", "Romanian deadlift", "romanian Deadlift", "Romanian Deadlifts", "romanian deadlifts", "Romanian deadlifts", "romanian Deadlifts",

//Incline Bench Press
"Incline Bench Press", "incline bench press", "Incline Bench Presses", "incline bench presses",

//Incline Dumbbell Press
"Incline Dumbbell Press", "incline dumbbell press", "Incline dumbbell press", "incline Dumbbell Press", "Incline Dumbbell Presses", "incline dumbbell presses", "Incline dumbbell presses", "incline Dumbbell Presses",

//Decline Bench Press
"Decline Bench Press", "decline bench press", "Decline bench press", "decline Bench Press", "Decline Bench Presses", "decline bench presses", "Decline bench presses", "decline Bench Presses",

//Decline Dumbbell Press
"Decline Dumbbell Press", "decline dumbbell press", "Decline dumbbell press", "decline Dumbbell Press", "Decline Dumbbell Presses", "decline dumbbell presses", "Decline dumbbell presses", "decline Dumbbell Presses",

//Goblet Squat
"Goblet Squat", "goblet squat", "Goblet squat", "goblet Squat", "Goblet Squats", "goblet squats", "Goblet squats", "goblet Squats",

//Chin-Up
"Chin-Up", "chin-up", "CHIN-UP", "Chin-Ups", "chin-ups", "CHIN-UPS", "chin-Up", "Chin-up",  "chin-Ups", "Chin-ups", "Chin Up", "chin up", "CHIN UP", "Chin Ups", "chin ups", "CHIN UPS", "chin Up", "Chin up",  "chin Ups", "Chin ups",

//Dumbbell Row
"Dumbbell Row", "dumbbell row", "Dumbbell row", "dumbbell Row", "Dumbbell Rows", "dumbbell rows", "Dumbbell rows", "dumbbell Rows",

//Hammer Curl
"Hammer Curl", "hammer curl", "Hammer curl", "hammer Curl", "Hammer Curls", "hammer curls", "Hammer curls", "hammer Curls",

//Hamstring Curl
"Hamstring Curl", "hamstring curl", "Hamstring curl", "hamstring Curl", "Hamstring Curls", "hamstring curls", "Hamstring curls", "hamstring Curls",

//Skull Crusher
"Skull Crusher", "skull crusher", "Skull crusher", "skull Crusher", "Skull Crushers", "skull crushers", "Skull crushers", "skull Crushers",

//Seated Shoulder Press
"Seated Shoulder Press", "seated shoulder press", "Seated Shoulder Presses", "seated shoulder presses",

//Leg Extension
"Leg Extension", "leg extension", "Leg extension", "leg Extension", "Leg Extensions", "leg extensions", "Leg extensions", "leg Extensions",

//Standing Calf
"Standing Calf", "standing calf", "Standing calf", "standing Calf", "Standing Calves", "standing calves", "Standing calves", "standing Calves",

//Standing Calf Raise
"Standing Calf Raise", "standing calf raise", "Standing Calf Raises", "standing calf raises",

//Leg Raise
"Leg Raise", "leg raise", "Leg raise", "leg Raise", "Leg Raises", "leg raises", "Leg raises", "leg Raises",

//Side Plank
"Side Plank", "side plank", "Side plank", "side Plank", "Side Planks", "side planks", "Side planks", "side Planks",

//Pulldown
"Pulldown", "pulldown", "Pulldowns", "pulldowns",

//Pull Down
"Pull Down", "pull down", "Pull down", "pull Down", "Pull Downs", "pull downs", "Pull downs", "pull Downs",

//Arnold Press
"Arnold Press", "arnold press", "Arnold press", "arnold Press", "Arnold Presses", "arnold presses", "Arnold presses", "arnold Presses",

//Hack Squat
"Hack Squat", "hack squat", "Hack squat", "hack Squat", "Hack Squats", "hack squats", "Hack squats", "hack Squats",

//Pullover
"Pullover", "pullover", "Pullovers", "pullovers",

//Dumbbell Pullover
"Dumbbell Pullover", "dumbbell pullover", "Dumbbell pullover", "dumbbell Pullover", "Dumbbell Pullovers", "dumbbell pullovers", "Dumbbell pullovers", "dumbbell Pullovers",

//Dumbbell Fly
"Dumbbell Fly", "dumbbell fly", "Dumbbell flies", "dumbbell flies", "Fly", "fly", "Flies", "flies", "Dumbbell flyes", "dumbbell flyes", "Flyes", "flyes", "Dumbbell flys", "dumbbell flys", "Flys", "flys",

//Barbell Curl
"Barbell Curl", "barbell curl", "Barbell curl", "barbell Curl", "Barbell Curls", "barbell curls", "Barbell curls", "barbell Curls",

//Sumo Deadlift
"Sumo Deadlift", "sumo deadlift", "Sumo deadlift", "sumo Deadlift", "Sumo Deadlifts", "sumo deadlifts", "Sumo deadlifts", "sumo Deadlifts",

//Back Squat
"Back Squat", "back squat", "Back squat", "back Squat", "Back Squats", "back squats", "Back squats", "back Squats",

//Clean and Jerk
"Clean and Jerk", "clean and jerk", "Clean and jerk", "clean and Jerk", "Clean and Jerks", "clean and jerks", "Clean and jerks", "clean and Jerks", "Clean And Jerk", "clean And jerk", "Clean And jerk", "clean And Jerk", "Clean And Jerks", "clean And jerks", "Clean And jerks", "clean And Jerks", "Clean & Jerk", "clean & jerk", "Clean & jerk", "clean & Jerk", "Clean & Jerks", "clean & jerks", "Clean & jerks", "clean & Jerks",

//Close-Grip Bench Press
"Close-Grip Bench Press", "close-grip bench press", "Close-Grip Bench Presses", "close-grip bench presses",

//Reverse Grip Bench Press
"Reverse Grip Bench Press", "reverse grip bench press", "Reverse grip bench press", "reverse Grip Bench Press", "Reverse Grip Bench Presses", "reverse grip bench presses", "Reverse grip bench presses", "reverse Grip Bench Presses",

//Reverse Curl
"Reverse Curl", "reverse curl", "Reverse curl", "reverse Curl", "Reverse Curls", "reverse curls", "Reverse curls", "reverse Curls",

//Front Raise
"Front Raise", "front raise", "Front raise", "front Raise", "Front Raises", "front raises", "Front raises", "front Raises",

//Reverse Fly
"Reverse Fly", "reverse fly", "Reverse fly", "reverse Fly", "Reverse Flies", "reverse flies", "Reverse flies", "reverse Flies",

//Step-Up
"Step-Up", "step-up", "Step-Ups", "step-ups", "Step-up", "step-Up", "Step-ups", "step-Ups", "Step Up", "step up", "Step Ups", "step ups", "Step up", "step Up", "Step ups", "step Ups",

//Good Morning
"Good Morning", "good morning", "Good morning", "good Morning", "Good Mornings", "good mornings", "Good mornings", "good Mornings",

//Dip
"Dip", "dip", "Dips", "dips",

//Side Lunge
"Side Lunge", "side lunge", "Side lunge", "side Lunge", "Side Lunges", "side lunges", "Side lunges", "side Lunges",

//Hyperextension
"Hyperextension", "hyperextension", "Hyperextensions", "hyperextensions","Hyper Extension", "hyper extension", "Hyper extension", "hyper Extension", "Hyper Extensions", "hyper extensions", "Hyper extensions", "hyper Extensions",

//Flutter Kick
"Flutter Kick", "flutter kick", "Flutter kick", "flutter Kick", "Flutter Kicks", "flutter kicks", "Flutter kicks", "flutter Kicks",

//V-Up
"V-Up", "v-up", "V-Ups", "v-ups", "V-up", "v-Up", "V-ups", "v-Ups", "V Up", "v-up", "V Ups", "v ups", "V up", "v Up", "V ups", "v Ups",

//Lateral Raise
"Lateral Raise", "lateral raise", "Lateral raise", "lateral Raise", "Lateral Raises", "lateral raises", "Lateral raises", "lateral Raises",

//Lateral Bound
"Lateral Bound", "lateral bound", "Lateral bound", "lateral Bound", "Lateral Bounds", "lateral bounds", "Lateral bounds", "lateral Bounds",

//Shrug
"Shrug", "shrug", "Shrugs", "shrugs",

//TRX Row
"TRX Row", "trx row", "TRX row", "trx Row", "TRX Rows", "trx rows", "TRX rows", "trx Rows",

//Machine Chest Press
"Machine Chest Press", "machine chest press", "Machine Chest Presses", "machine chest presses",

//Machine Shoulder Press
"Machine Shoulder Press", "machine shoulder press", "Machine Shoulder Presses", "machine shoulder presses",

//Machine Leg Press
"Machine Leg Press", "machine leg press", "Machine Leg Presses", "machine leg presses",

//Machine Leg Curl
"Machine Leg Curl", "machine leg curl", "Machine Leg Curls", "machine leg curls",

//Machine Leg Extension
"Machine Leg Extension", "machine leg extension", "Machine Leg Extensions", "machine leg extensions",

//Machine Bicep Curl
"Machine Bicep Curl", "machine bicep curl", "Machine Bicep Curls", "machine bicep curls",

//Machine Tricep Extension
"Machine Tricep Extension", "machine tricep extension", "Machine Tricep Extensions", "machine tricep extensions",

//Machine Lat Pulldown
"Machine Lat Pulldown", "machine lat pulldown", "Machine Lat Pulldowns", "machine lat pulldowns",

//Machine Row
"Machine Row", "machine row", "Machine Rows", "machine rows",

//Machine Fly
"Machine Fly", "machine fly", "Machine Flies", "machine flies",

//Machine Calf Raise
"Machine Calf Raise", "machine calf raise", "Machine Calf Raises", "machine calf raises",

//Machine Chest Fly
"Machine Chest Fly", "machine chest fly", "Machine Chest Flies", "machine chest flies",

//Machine Shoulder Fly
"Machine Shoulder Fly", "machine shoulder fly", "Machine Shoulder Flies", "machine shoulder flies",

//Machine Ab Crunch
"Machine Ab Crunch", "machine ab crunch", "Machine Ab Crunches", "machine ab crunches",

//Machine Ab Twist
"Machine Ab Twist", "machine ab twist", "Machine Ab Twists", "machine ab twists",

//Toe Tap
"Toe Tap", "toe tap", "Toe tap", "toe Tap", "Toe Taps", "toe taps", "Toe taps", "toe Taps",

//Leg Lift
"Leg Lift", "leg lift", "Leg lift", "leg Lift", "Leg Lifts", "leg lifts", "Leg lifts", "leg Lifts",

//Hanging Knee Raise
"Hanging Knee Raise", "hanging knee raise", "Hanging Knee Raises", "hanging knee raises",

//Tricep Extension
"Tricep Extension", "tricep extension", "Triceps Extension", "triceps extension", "Tricep Extensions", "tricep extensions", "Triceps Extensions", "triceps extensions",

//Battle Rope
"Battle Rope", "battle rope", "Battle rope", "battle Rope", "Battle Ropes", "battle ropes", "Battle ropes", "battle Ropes",

//Battling Rope
"Battling Rope", "battling rope", "Battling rope", "battling Rope", "Battling Ropes", "battling ropes", "Battling ropes", "battling Ropes",

//Clean
"Cleans", "cleans", "Clean", "clean",

//Power Clean
"Power Clean", "power clean", "Power clean", "power Clean", "Power Cleans", "power cleans", "Power cleans", "power Cleans",

//Cable Crunch
"Cable Crunch", "cable crunch", "Cable crunch", "cable Crunch", "Cable Crunches", "cable crunches", "Cable crunches", "cable Crunches",

//Cable Crossover
"Cable Crossover", "cable crossover", "Cable crossover", "cable Crossover", "Cable Crossovers", "cable crossovers", "Cable crossovers", "cable Crossovers",

//Seated Cable Row
"Seated Cable Row", "seated cable row", "Seated Cable Rows", "seated cable rows",

//Pushdown
"Pushdown", "pushdown", "Push down", "push down", "Pushdowns", "pushdowns", "Push downs", "push downs",

//Tricep Cable Pushdown
"Tricep Cable Pushdown", "tricep cable pushdown", "Tricep Cable Pushdowns", "tricep cable pushdowns",

//Cable Curls
"Cable Curls", "cable curls", "Cable curls", "cable Curls", "Cable Curl", "cable curl", "Cable curl", "cable Curl",

//Cable Fly
"Cable Fly", "cable fly", "Cable fly", "cable Fly", "Cable Flies", "cable flies", "Cable flies", "cable Flies",

//Cable Lateral Raise
"Cable Lateral Raise", "cable lateral raise", "Cable Lateral Raises", "cable lateral raises",

//Cable Front Raise
"Cable Front Raise", "cable front raise", "Cable Front Raises", "cable front raises",

//Cable Rear Delt Fly
"Cable Rear Delt Fly", "cable rear delt fly", "Cable Rear Delt Flies", "cable rear delt flies",

//Cable Face Pull
"Cable Face Pull", "cable face pull", "Cable Face Pulls", "cable face pulls",

//Farmers Walk
"Farmers Walk", "farmers walk", "Farmers walk", "farmers Walk", "Farmers Walks", "farmers walks", "Farmers walks", "farmers Walks", "Farmer Walk", "farmer walk", "Farmer walk", "farmer Walk", "Farmer Walks", "farmer walks", "Farmer walks", "farmer Walks",

//Face Pull
"Face Pull", "face pull", "Face pull", "face Pull", "Face Pulls", "face pulls", "Face pulls", "face Pulls",

//Woodchopper
"Woodchopper", "woodchopper", "Woodchoppers", "woodchoppers",

//Cable Woodchopper
"Cable Woodchopper", "cable woodchopper", "Cable Woodchoppers", "cable woodchoppers",

//Cable Oblique Twist
"Cable Oblique Twist", "cable oblique twist", "Cable Oblique Twists", "cable oblique twists",

//Cable Shoulder Press
"Cable Shoulder Press", "cable shoulder press", "Cable Shoulder Presses", "cable shoulder presses",

//Reverse Wrist Curl
"Reverse Wrist Curl", "reverse wrist curl", "Reverse wrist curl", "reverse Wrist Curl", "Reverse Wrist Curls", "reverse wrist curls", "Reverse wrist curls", "reverse Wrist Curls",

//Upright Row
"Upright Row", "upright row", "Upright row", "upright Row", "Upright Rows", "upright rows", "Upright rows", "upright Rows",

//Cable Upright Row
"Cable Upright Row", "cable upright row", "Cable Upright Rows", "cable upright rows",

//Cable Kickback
"Cable Kickback", "cable kickback", "Cable Kickbacks", "cable kickbacks",

//Cable Squat
"Cable Squat", "cable squat", "Cable squat", "cable Squat", "Cable Squats", "cable squats", "Cable squats", "cable Squats",

//Cable Deadlift
"Cable Deadlift", "cable deadlift", "Cable Deadlifts", "cable deadlifts",

//Cable Row
"Cable Row", "cable row", "Cable row", "cable Row", "Cable Rows", "cable rows", "Cable rows", "cable Rows",

//Cable Lat Pulldown
"Cable Lat Pulldown", "cable lat pulldown", "Cable Lat Pulldowns", "cable lat pulldowns",

//Cable Bicep Curl
"Cable Bicep Curl", "cable bicep curl", "Cable Bicep Curls", "cable bicep curls",

//Cable Tricep Extension
"Cable Tricep Extension", "cable tricep extension", "Cable Tricep Extensions", "cable tricep extensions",

//Side Lateral Raise
"Side Lateral Raise", "side lateral raise", "Side lateral raise", "side Lateral Raise", "Side Lateral Raises", "side lateral raises", "Side lateral raises", "side Lateral Raises",

//Cable Side Lateral Raise
"Cable Side Lateral Raise", "cable side lateral raise", "Cable Side Lateral Raises", "cable side lateral raises",

//Wrist Curl
"Wrist Curl", "wrist curl", "Wrist curl", "wrist Curl", "Wrist Curls", "wrist curls", "Wrist curls", "wrist Curls",

//Cable Wrist Curl
"Cable Wrist Curl", "cable wrist curl", "Cable Wrist Curls", "cable wrist curls",

//Cable Wrist Extension
"Cable Wrist Extension", "cable wrist extension", "Cable Wrist Extensions", "cable wrist extensions",

//Cable Wrist Rotation
"Cable Wrist Rotation", "cable wrist rotation", "Cable Wrist Rotations", "cable wrist rotations",

//Cable Toe Raise
"Cable Toe Raise", "cable toe raise", "Cable Toe Raises", "cable toe raises",

//Cable Pullover
"Cable Pullover", "cable pullover", "Cable Pullovers", "cable pullovers",

//Cable Hip Abduction
"Cable Hip Abduction", "cable hip abduction", "Cable Hip Abductions", "cable hip abductions",

//Cable Hip Adduction
"Cable Hip Adduction", "cable hip adduction", "Cable Hip Adductions", "cable hip adductions",

//Cable Leg Kickback
"Cable Leg Kickback", "cable leg kickback", "Cable Leg Kickbacks", "cable leg kickbacks",

//Cable Leg Curl
"Cable Leg Curl", "cable leg curl", "Cable Leg Curls", "cable leg curls",

//Cable Calf Raise
"Cable Calf Raise", "cable calf raise", "Cable Calf Raises", "cable calf raises",

//Cable Reverse Fly
"Cable Reverse Fly", "cable reverse fly", "Cable Reverse Flies", "cable reverse flies",

//Cable Lunge
"Cable Lunge", "cable lunge", "Cable Lunges", "cable lunges",

//Cable Shoulder Shrug
"Cable Shoulder Shrug", "cable shoulder shrug", "Cable Shoulder Shrugs", "cable shoulder shrugs",

//Cable Leg Press
"Cable Leg Press", "cable leg press", "Cable Leg Presses", "cable leg presses",

//Cable Step-Up
"Cable Step-Up", "cable step-up", "Cable Step-Ups", "cable step-ups",

//Cable Good Morning
"Cable Good Morning", "cable good morning", "Cable Good Mornings", "cable good mornings",

//Cable Preacher Curl
"Cable Preacher Curl", "cable preacher curl", "Cable Preacher Curls", "cable preacher curls",

//Preacher Curl
"Preacher Curl", "preacher curl", "Preacher curl", "preacher Curl", "Preacher Curls", "preacher curls", "Preacher curls", "preacher Curls",

//Concentration Curl
"Concentration Curl", "concentration curl", "Concentration curl", "concentration Curl", "Concentration Curls", "concentration curls", "Concentration curls", "concentration Curls",

//Cable Close-Grip Bench Press
"Cable Close-Grip Bench Press", "cable close-grip bench press", "Cable Close-Grip Bench Presses", "cable close-grip bench presses",

//Bear Crawl
"Bear Crawl", "bear crawl", "Bear crawl", "bear Crawl", "Bear Crawls", "bear crawls", "Bear crawls", "bear Crawls",

//Sled Pull
"Sled Pull", "sled pull", "Sled pull", "sled Pull", "Sled Pulls", "sled pulls", "Sled pulls", "sled Pulls",

//Cable Reverse Curl
"Cable Reverse Curl", "cable reverse curl", "Cable Reverse Curls", "cable reverse curls",

//Cable Twist
"Cable Twist", "cable twist", "Cable Twists", "cable twists",

//Cable External Rotation
"Cable External Rotation", "cable external rotation", "Cable External Rotations", "cable external rotations",

//Cable Internal Rotation
"Cable Internal Rotation", "cable internal rotation", "Cable Internal Rotations", "cable internal rotations",

//Leg Curl
"Leg Curl", "leg curl", "Leg Curls", "leg curls", "Leg curl", "leg Curl", "Leg curls", "leg Curls",

//Hip Thrust
"Hip Thrust", "hip thrust", "Hip thrust", "hip Thrust", "Hip Thrusts", "hip thrusts", "Hip thrusts", "hip Thrusts",

//Glute Bridge
"Glute Bridge", "glute bridge", "Glute bridge", "glute Bridge", "Glute Bridges", "glute bridges", "Glute bridges", "glute Bridges",


//Add more here...

];
  
  export default validExercises;
  