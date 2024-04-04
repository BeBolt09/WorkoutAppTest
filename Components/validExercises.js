const validExercises = [
//Stair Master
"Stair Master", "stair master", "Stair master", "stair Master", "STAIR MASTER",

//Stair Climber
"Stair Climber", "stair climber", "Stair climber", "stair Climber", "STAIR CLIMBER", 

//Arc Trainer
"Arc Trainer", "arc trainer", "Arc trainer", "arc Trainer", "ARC TRAINER",

//Elliptical
"Elliptical", "elliptical", "ELLIPTICAL",

//Treadmill
"Treadmill", "treadmill", "TREADMILL",

//Run
"Run", "Running", "run", "running", "RUN",

//Jog
"Jog", "Jogging", "jog", "jogging", "JOG",

//Walk
"Walk", "Walking", "walk", "walking", "WALK",

//Sprint
"Sprint", "Sprints", "sprint", "sprints", "Sprinting", "sprinting", "SPRINT", "SPRINTS", "SPRINTING",

//Swim
"Swim", "Swimming", "swim", "swimming", "SWIM", "SWIMMING",

//Climb
"Climb", "Climbing", "climb", "climbing", "CLIMB", "CLIMBING",

//Skipping
"Skip", "skip", "Skips", "Skipping", "skipping", "SKIP", "SKIPPING", "SKIPS",

//Cycling
"Cycling", "cycling", "CYCLING",

//Bike
"Bike", "bike", "Biking", "biking", "BIKE", "BIKING",

//Stationary Bike
"Stationary Bike", "stationary bike", "Stationary bike", "stationary Bike", "STATIONARY BIKE",

//Jump
"Jump", "Jumps", "jump", "jumps", "Jumping", "jumping", "JUMP", "JUMPS", "JUMPING",

//Jump Rope
"Jump Rope", "Jump rope", "jump rope", "Jump ropes", "jump ropes", "JUMP ROPE", "Jump ropes", "JUMP ROPES", "Jump Ropes", "jump Ropes",

//Push-Up
"Push-Up", "Push-up", "Push Up", "Push up", "push-up", "push up", "push Up", "push up", "Push-Ups", "Push-ups", "Push Ups", "Push ups", "push-ups", "push ups", "push Ups", "PUSH-UP", "PUSH-UPS",  "PUSH UP", "PUSH UPS",

//Squat
"Squat", "squat", "Squats", "squats", "SQUAT", "SQUATS",

//Deadlift
"Deadlift", "deadlift", "Deadlifts", "deadlifts", "DEADLIFT", "DEADLIFTS",

//Pull-Up
"Pull-Up", "pull-up", "Pull Up", "Pull up", "pull up", "pull Up", "Pull-Ups", "pull-ups", "Pull Ups", "Pull ups", "pull ups", "pull Ups", "PULL-UPS", "PULL UPS", "PULL-UP", "PULL UP",

//Lunge
"Lunge", "lunge", "Lunges", "lunges", "LUNGES", "LUNGES",

//Bench Press
"Bench Press", "bench press", "Bench press", "bench Press", "Bench Presses", "bench presses", "Bench presses", "bench Presses", "BENCH PRESS", "BENCH PRESSES",

//Plank
"Plank", "plank", "Planks", "planks", "PLANK", "PLANKS",

//Row
"Row", "row", "Rows", "rows", "ROW", "ROWS",

//Rowing
"Rowing", "rowing", "ROWING",

//Rowing Machine
"Rowing Machine", "rowing machine", "Rowing machine", "rowing Machine", "ROWING MACHINE", "ROWING MACHINES",

//Tire Flip
"Tire Flip", "tire flip", "Tire flip", "tire Flip", "Tire Flips", "tire flips", "Tire flips", "tire Flips", "TIRE FLIP", "TIRE FLIPS",

//Sledgehammer Swing
"Sledgehammer", "sledgehammer", "Sledgehammer Swing", "sledgehammer swing", "Sledgehammer swing", "sledgehammer Swing", "Sledgehammer Swings", "sledgehammer swings", "Sledgehammer swings", "sledgehammer Swings", "SLEDGEHAMMER", "SLEDGEHAMMER SWING", "SLEDGEHAMMER SWINGS",

//Ball Slam
"Ball Slam", "ball slam", "Ball slam", "ball Slam", "Ball Slams", "ball slams", "Ball slams", "ball Slams", "BALL SLAM", "BALL SLAMS",

//Hiking
"Hike", "hike", "Hiking", "hiking", "HIKE", "HIKING",

//Curl
"Curl", "curl", "Curls", "curls", "CURL", "CURLS",

//Snatch
"Snatch", "snatch", "Snatches", "snatches", "SNATCH", "SNATCHES",

//Dumbbell Curl
"Dumbbell Curl", "dumbbell curl", "Dumbbell curl", "dumbbell Curl", "Dumbbell Curls", "dumbbell curls", "Dumbbell curls", "dumbbell Curls", "DUMBBELL CURL", "DUMBBELL CURLS",

//Shoulder Press
"Shoulder Press", "shoulder press", "Shoulder press", "shoulder Press", "Shoulder Presses", "shoulder presses", "Shoulder presses", "shoulder Presses", "SHOULDER PRESS", "SHOULDER PRESSES",

//Overhead Press
"Overhead Press", "overhead press", "Overhead press", "overhead Press", "Overhead Presses", "overhead presses", "Overhead presses", "overhead Presses", "OVERHEAD PRESS", "OVERHEAD PRESSES",

//Tricep Dip
"Tricep Dip", "tricep dip", "Tricep dip", "tricep Dip", "Tricep Dips", "tricep dips", "Tricep dips", "tricep Dips", "TRICEP DIP", "TRICEP DIPS",

//Pelvic Tilt
"Pelvic Tilt", "pelvic tilt", "Pelvic tilt", "pelvic Tilt", "Pelvic Tilts", "pelvic tilts", "Pelvic tilts", "pelvic Tilts", "PELVIC TILT", "PELVIC TILTS",

//Muscle Up
"Muscle Up", "muscle up", "Muscle up", "muscle Up", "Muscle Ups", "muscle ups", "Muscle ups", "muscle Ups", "MUSCLE UP", "MUSCLE UPS",

//High Knee
"High Knee", "high knee", "High knee", "high Knee", "High Knees", "high knees", "High knees", "high Knees", "HIGH KNEE", "HIGH KNEES",

//Russian Twist
"Russian Twist", "russian twist", "Russian twist", "russian Twist", "Russian Twists", "russian twists", "Russian twists", "russian Twists", "RUSSIAN TWIST", "RUSSIAN TWISTS",

//Kettlebell Swing
"Kettlebell Swing", "kettlebell swing", "Kettlebell swing", "kettlebell Swing", "Kettlebell Swings", "kettlebell swings", "Kettlebell swings", "kettlebell Swings", "KETTLEBELL SWING", "KETTLEBELL SWINGS",

//Leg Press
"Leg Press", "leg press", "Leg press", "leg Press", "Leg Presses", "leg presses", "Leg presses", "leg Presses", "LEG PRESS", "LEG PRESSES",

//Lat Pulldown
"Lat Pulldown", "lat pulldown", "Lat pulldown", "lat Pulldown", "Lat Pulldowns", "lat pulldowns", "Lat pulldowns", "lat Pulldowns", "LAT PULLDOWN", "LAT PULLDOWNS",

//Calf Raise
"Calf Raise", "calf raise", "Calf raise", "calf Raise", "Calf Raises", "calf raises", "Calf raises", "calf Raises", "CALF RAISE", "CALF RAISES",

//Crunch
"Crunch", "crunch", "Crunches", "crunches", "CRUNCH", "CRUNCHES",

//Split Squat
"Split Squat", "split squat", "Split squat", "split Squat", "Split Squats", "split squats", "Split squats", "split Squats", "SPLIT SQUAT", "SPLIT SQUATS",

//Bulgarian Split Squat
"Bulgarian Split Squat", "bulgarian split squat", "Bulgarian split squat", "bulgarian Split Squat", "Bulgarian Split Squats", "bulgarian split squats", "Bulgarian split squats", "bulgarian Split Squats", "BULGARIAN SPLIT SQUAT", "BULGARIAN SPLIT SQUATS",

//Burpee
"Burpee", "burpee", "Burpees", "burpees", "BURPEE", "BURPEES",

//Butt Kick
"Butt Kick", "butt kick", "Butt kick", "butt Kick", "Butt Kicks", "butt kicks", "Butt kicks", "butt Kicks", "BUTT KICK", "BUTT KICKS",

//Boxing
"Box", "box", "Boxing", "boxing", "BOX", "BOXING",

//Box Jump
"Box Jump", "box jump", "Box jump", "box Jump", "Box Jumps", "box jumps", "Box jumps", "box Jumps", "BOX JUMP", "BOX JUMPS",

//Kickboxing
"Kickbox", "kickbox", "Kickboxing", "kickboxing", "KICKBOX", "KICKBOXING",

//Muay Thai
"Muay Thai", "muay thai", "Muay thai", "muay Thai", "MUAY THAI",

//Judo
"Judo", "judo", "JUDO",

//Sled
"Sled", "sled", "SLED",

//Prowler Push
"Prowler Push", "prowler push", "Prowler push", "prowler Push", "Prowler Pushes", "prowler pushes", "Prowler pushes", "prowler Pushes", "PROWLER PUSH", "PROWLER PUSHES", 

//Prowler Sled
"Prowler Sled", "prowler sled", "Prowler sled", "prowler Sled", "PROWLER SLED", "PROWLER SLED",

//Taekwondo
"Taekwondo", "taekwondo", "TAEKWONDO", "TAEKWONDO",

//Karate
"Karate", "karate", "KARATE", "KARATE",

//Wrestling
"Wrestle", "wrestle", "Wrestling", "wrestling", "WRESTLE", "WRESTLING",

//Jiu Jitsu
"Jiu Jitsu", "jiu jitsu", "Jiu jitsu", "jiu Jitsu", "JIU JITSU",

//Brazilian Jiu-Jitsu
"Brazilian Jiu-Jitsu", "brazilian jiu-jitsu", "brazilian Jiu-Jitsu", "Brazilian jiu-jitsu", "BRAZILIAN JIU-JITSU",

//Mixed Martial Arts
"Mixed Martial Arts", "mixed martial arts", "MIXED MARTIAL ARTS",

//Tai Chi
"Tai Chi", "tai chi", "Tai chi", "tai Chi", "TAI CHI",

//Yoga
"Yoga", "yoga", "YOGA",

//Pilates
"Pilates", "pilates", "PILATES",

//Zumba
"Zumba", "zumba", "ZUMBA",

//Mountain Climber
"Mountain Climber", "mountain climber", "Mountain climber", "mountain Climber", "Mountain Climbers", "mountain climbers", "Mountain climbers", "mountain Climbers", "MOUNTAIN CLIMBER", "MOUNTAIN CLIMBERS",

//Bicycle Crunch
"Bicycle Crunch", "bicycle crunch", "Bicycle crunch", "bicycle Crunch", "Bicycle Crunches", "bicycle crunches", "Bicycle crunches", "bicycle Crunches", "BICYCLE CRUNCH", "BICYCLE CRUNCHES",

//Jumping Jack
"Jumping Jack", "jumping jack", "Jumping jack", "jumping Jack", "Jumping Jacks", "jumping jacks", "Jumping jacks", "jumping Jacks", "JUMPING JACK", "JUMPING JACKS",

//Wall Sit
"Wall Sit", "wall sit", "Wall sit", "wall Sit", "Wall Sits", "wall sits", "Wall sits", "wall Sits", "WALL SIT", "WALL SITS",

//Bird Dog
"Bird Dog", "bird dog", "Bird dog", "bird Dog", "Bird Dogs", "bird dogs", "Bird dogs", "bird Dogs", "BIRD DOG", "BIRD DOGS",

//Sit-Ups
"Sit-Ups", "sit-ups", "Sit-Ups", "sit-ups", "Sit-Up", "sit-up", "Sit Ups", "sit ups", "Sit Ups", "sit ups", "Sit Up", "sit up", "SIT-UPS",  "SIT-UP","SIT UP", "SIT-UP", 

//Chest Fly
"Chest Fly", "chest fly", "Chest fly", "chest Fly", "Chest Flies", "chest flies", "Chest flies", "chest Flies", "CHEST FLY", "CHEST FLIES",

//Chest Dip
"Chest Dip", "chest dip", "Chest dip", "chest Dip", "Chest Dips", "chest dips", "Chest dips", "chest Dips", "CHEST DIP", "CHEST DIPS",

//Bent-Over Row
"Bent-Over Row", "bent-over row", "Bent-Over Rows", "bent-over rows", "BENT-OVER ROW", "BENT-OVER ROWS",

//Bent Over Row
"Bent Over Row", "bent over row", "Bent over row", "bent Over Row", "Bent Over Rows", "bent over rows", "Bent over rows", "bent Over Rows", "BENT OVER ROW", "BENT OVER ROWS",

//Military Press
"Military Press", "military press", "Military press", "military Press", "Shoulder Press", "shoulder press", "Shoulder press", "shoulder Press", "MILITARY PRESS", "MILITARY PRESS", "MILITARY PRESS", "MILITARY PRESS", 

//Shoulder Press
"Shoulder Press", "shoulder press", "Shoulder press", "shoulder Press", "Shoulder Presses", "shoulder presses", "Shoulder presses", "shoulder Presses", "SHOULDER PRESS", "SHOULDER PRESSES",

//Front Squat
"Front Squat", "front squat", "Front squat", "front Squat", "Front Squats", "front squats", "Front squats", "front Squats", "FRONT SQUAT", "FRONT SQUATS",

//Superman
"Superman", "superman", "Supermans", "supermans", "SUPERMAN","SUPERMANS",

//Ab Wheel
"Ab Wheel", "ab wheel", "Ab wheel", "ab Wheel", "AB WHEEL",

//Ab Roller
"Ab Roller", "ab roller", "Ab roller", "ab Roller", "AB ROLLER",

//Inverted Row
"Inverted Row", "inverted row", "Inverted row", "inverted Row", "Inverted Rows", "inverted rows", "Inverted rows", "inverted Rows", "INVERTED ROW", "INVERTED ROWS",

//Romanian Deadlift
"Romanian Deadlift", "romanian deadlift", "Romanian deadlift", "romanian Deadlift", "Romanian Deadlifts", "romanian deadlifts", "Romanian deadlifts", "romanian Deadlifts", "ROMANIAN DEADLIFT", "ROMANIAN DEADLIFTS",

//Incline Bench Press
"Incline Bench Press", "incline bench press", "Incline Bench Presses", "incline bench presses", "INCLINE BENCH PRESS", "INCLINE BENCH PRESSES",

//Incline Dumbbell Press
"Incline Dumbbell Press", "incline dumbbell press", "Incline dumbbell press", "incline Dumbbell Press", "Incline Dumbbell Presses", "incline dumbbell presses", "Incline dumbbell presses", "incline Dumbbell Presses", "INCLINE DUMBBELL PRESS", "INCLINE DUMBBELL PRESSES",

//Decline Bench Press
"Decline Bench Press", "decline bench press", "Decline bench press", "decline Bench Press", "Decline Bench Presses", "decline bench presses", "Decline bench presses", "decline Bench Presses", "DECLINE BENCH PRESS", "DECLINE BENCH PRESSES",

//Decline Dumbbell Press
"Decline Dumbbell Press", "decline dumbbell press", "Decline dumbbell press", "decline Dumbbell Press", "Decline Dumbbell Presses", "decline dumbbell presses", "Decline dumbbell presses", "decline Dumbbell Presses", "DECLINE DUMBBELL PRESS", "DECLINE DUMBBELL PRESSES",

//Goblet Squat
"Goblet Squat", "goblet squat", "Goblet squat", "goblet Squat", "Goblet Squats", "goblet squats", "Goblet squats", "goblet Squats", "GOBLET SQUAT", "GOBLET SQUATS",

//Chin-Up
"Chin-Up", "chin-up", "CHIN-UP", "Chin-Ups", "chin-ups", "CHIN-UPS", "Chin-Up", "Chin-up",  "CHIN-UP", "Chin-Ups", "Chin-ups", "CHIN-UPS", "Chin Up", "chin up", "CHIN UP", "Chin Ups", "chin ups", "CHIN UPS", "Chin Up", "Chin up",  "CHIN UP", "Chin Ups", "chin ups", "CHIN UPS",

//Dumbbell Row
"Dumbbell Row", "dumbbell row", "Dumbbell row", "dumbbell Row", "Dumbbell Rows", "dumbbell rows", "Dumbbell rows", "dumbbell Rows", "DUMBBELL ROW", "DUMBBELL ROWS", "Dumbbell Row", "Dumbbell Rows", "Dumbbell row", "Dumbbell rows", "dumbbell Row", "dumbbell rows",

//Hammer Curl
"Hammer Curl", "hammer curl", "Hammer curl", "hammer Curl", "Hammer Curls", "hammer curls", "Hammer curls", "hammer Curls", "HAMMER CURLS", "Hammer Curl", "Hammer Curls", "Hammer curl", "Hammer curls", "hammer Curl", "hammer curls", "HAMMER CURL",

//Hamstring Curl
"Hamstring Curl", "hamstring curl", "Hamstring curl", "hamstring Curl", "Hamstring Curls", "hamstring curls", "Hamstring curls", "hamstring Curls", "HAMSTRING CURL", "HAMSTRING CURLS", "Hamstring Curl", "Hamstring Curls", "Hamstring curl", "Hamstring curls", "hamstring Curl", "hamstring curls",

//Skull Crusher
"Skull Crusher", "skull crusher", "Skull crusher", "skull Crusher", "Skull Crushers", "skull crushers", "Skull crushers", "skull Crushers", "SKULL CRUSHER", "SKULL CRUSHERS", "Skull Crusher", "Skull Crushers", "Skull crusher", "Skull crushers", "skull Crusher", "skull crushers", 

//Seated Shoulder Press
"Seated Shoulder Press", "seated shoulder press", "Seated Shoulder Presses", "seated shoulder presses", "SEATED SHOULDER PRESS", "SEATED SHOULDER PRESSES",

//Leg Extension
"Leg Extension", "leg extension", "Leg extension", "leg Extension", "Leg Extensions", "leg extensions", "Leg extensions", "leg Extensions", "LEG EXTENSION", "LEG EXTENSIONS",

//Standing Calf
"Standing Calf", "standing calf", "Standing calf", "standing Calf", "Standing Calves", "standing calves", "Standing calves", "standing Calves", "STANDING CALF", "STANDING CALVES",

//Standing Calf Raise
"Standing Calf Raise", "standing calf raise", "Standing Calf Raises", "standing calf raises", "STANDING CALF RAISE", "STANDING CALF RAISES",

//Leg Raise
"Leg Raise", "leg raise", "Leg raise", "leg Raise", "Leg Raises", "leg raises", "Leg raises", "leg Raises", "LEG RAISE", "LEG RAISES",

//Side Plank
"Side Plank", "side plank", "Side plank", "side Plank", "Side Planks", "side planks", "Side planks", "side Planks", "SIDE PLANK", "SIDE PLANKS",

//Pulldown
"Pulldown", "pulldown", "Pulldowns", "pulldowns", "PULLDOWN", "PULLDOWNS",

//Pull Down
"Pull Down", "pull down", "Pull down", "pull Down", "Pull Downs", "pull downs", "Pull downs", "pull Downs", "PULL DOWN", "PULL DOWNS",

//Arnold Press
"Arnold Press", "arnold press", "Arnold press", "arnold Press", "Arnold Presses", "arnold presses", "Arnold presses", "arnold Presses", "ARNOLD PRESS", "ARNOLD PRESSES",

//Hack Squat
"Hack Squat", "hack squat", "Hack squat", "hack Squat", "Hack Squats", "hack squats", "Hack squats", "hack Squats", "HACK SQUAT", "HACK SQUATS",

//Pullover
"Pullover", "pullover", "Pullovers", "pullovers", "PULLOVER", "PULLOVERS",

//Dumbbell Pullover
"Dumbbell Pullover", "dumbbell pullover", "Dumbbell pullover", "dumbbell Pullover", "Dumbbell Pullovers", "dumbbell pullovers", "Dumbbell pullovers", "dumbbell Pullovers", "DUMBBELL PULLOVER", "DUMBBELL PULLOVERS",

//Dumbbell Fly
"Dumbbell Fly", "dumbbell fly", "Dumbbell flies", "dumbbell flies", "Dumbbell FLY", "dumbbell FLY", "Dumbbell Flies", "dumbbell Flies", "Fly", "fly", "FLY", "FLY", "Flies", "flies", "FLIES", "FLIES", "Dumbbell flyes", "dumbbell flyes", "Dumbbell FLYES", "dumbbell FLYES", "Flyes", "flyes", "FLYES", "FLYES", "Dumbbell flys", "dumbbell flys", "Dumbbell FLYS", "dumbbell FLYS", "Flys", "flys", "FLYS", "FLYS",

//Barbell Curl
"Barbell Curl", "barbell curl", "Barbell curl", "barbell Curl", "Barbell Curls", "barbell Curls", "Barbell curls", "barbell curls", "BARBELL CURL", "BARBELL CURL", "Barbell Curls", "barbell Curls",

//Sumo Deadlift
"Sumo Deadlift", "sumo deadlift", "Sumo deadlift", "sumo Deadlift", "Sumo Deadlifts", "sumo Deadlifts", "Sumo deadlifts", "sumo deadlifts", "SUMO DEADLIFT", "SUMO DEADLIFT", "Sumo Deadlifts", "sumo Deadlifts",

//Back Squat
"Back Squat", "back squat", "Back squat", "back Squat", "Back Squats", "back Squats", "Back squats", "back squats", "BACK SQUAT", "BACK SQUAT", "Back Squats", "back Squats",

//Clean and Jerk
"Clean and Jerk", "clean and jerk", "Clean and jerk", "clean and Jerk", "Clean and Jerks", "clean and Jerks", "Clean and jerks", "clean and jerks", "CLEAN AND JERK", "CLEAN AND JERKS", "Clean and Jerks", "clean and Jerks", "Clean And Jerk", "clean And jerk", "Clean And jerk", "clean And Jerk", "Clean And Jerks", "clean And jerks", "Clean And jerks", "clean And Jerks", "CLEAN & JERK", "CLEAN & JERKS", "Clean & jerk", "clean & jerk", "Clean & Jerk", "clean & Jerk", "Clean & Jerks", "clean & Jerks", "Clean & jerks", "clean & jerk",

//Close-Grip Bench Press
"Close-Grip Bench Press", "close-grip bench press", "Close-Grip Bench Presses", "close-grip bench presses", "CLOSE-GRIP BENCH PRESS", "CLOSE-GRIP BENCH PRESSES",

//Reverse Grip Bench Press
"Reverse Grip Bench Press", "reverse grip bench press", "Reverse grip bench press", "reverse Grip Bench Press", "Reverse Grip Bench Presses", "reverse grip bench presses", "Reverse grip bench presses", "reverse Grip Bench Presses", "REVERSE GRIP BENCH PRESS", "REVERSE GRIP BENCH PRESSES",

//Reverse Curl
"Reverse Curl", "reverse curl", "Reverse curl", "reverse Curl", "Reverse Curls", "reverse curls", "Reverse curls", "reverse Curls", "REVERSE CURL", "REVERSE CURLS",

//Front Raise
"Front Raise", "front raise", "Front raise", "front Raise", "Front Raises", "front raises", "Front raises", "front Raises", "FRONT RAISE", "FRONT RAISES",

//Reverse Fly
"Reverse Fly", "reverse fly", "Reverse fly", "reverse Fly", "Reverse Flies", "reverse flies", "Reverse flies", "reverse Flies", "REVERSE FLY", "REVERSE FLIES",

//Step-Up
"Step-Up", "step-up", "Step-Ups", "step-ups", "Step-up", "step-Up", "Step-ups", "step-Ups", "Step Up", "step up", "Step Ups", "step ups", "Step up", "step Up", "Step ups", "step Ups", "STEP-UP", "STEP-UPS", "STEP UP", "STEP UPS",

//Good Morning
"Good Morning", "good morning", "Good morning", "good Morning", "Good Mornings", "good mornings", "Good mornings", "good Mornings", "GOOD MORNING", "GOOD MORNINGS",

//Dip
"Dip", "dip", "Dips", "dips", "DIP", "DIPS",

//Side Lunge
"Side Lunge", "side lunge", "Side lunge", "side Lunge", "Side Lunges", "side lunges", "Side lunges", "side Lunges", "SIDE LUNGE", "SIDE LUNGES",

//Hyperextension
"Hyperextension", "hyperextension", "Hyperextensions", "hyperextensions", "HYPEREXTENSION", "HYPEREXTENSIONS", "HYPER EXTENSION", "HYPER EXTENSIONS", "Hyper Extension", "hyper extension", "Hyper extension", "hyper Extension", "Hyper Extensions", "hyper extensions", "Hyper extensions", "hyper Extensions",

//Flutter Kick
"Flutter Kick", "flutter kick", "Flutter kick", "flutter Kick", "Flutter Kicks", "flutter kicks", "Flutter kicks", "flutter Kicks", "FLUTTER KICK", "FLUTTER KICKS", "Flutter Kicks", "flutter kicks", "Flutter kicks", "flutter Kicks",

//V-Up
"V-Up", "v-up", "V-Ups", "v-ups", "V-up", "v-Up", "V-ups", "v-Ups", "V Up", "v up", "V Ups", "v ups", "V up", "v Up", "V ups", "v Ups", "V-UP", "V UP", "V-UPS", "V UPS",

//Lateral Raise
"Lateral Raise", "lateral raise", "Lateral raise", "lateral Raise", "Lateral Raises", "lateral raises", "Lateral raises", "lateral Raises", "LATERAL RAISE", "LATERAL RAISES", "Lateral Raises", "lateral raises", "Lateral raises", "lateral Raises",

//Lateral Bound
"Lateral Bound", "lateral bound", "Lateral bound", "lateral Bound", "Lateral Bounds", "lateral bounds", "Lateral bounds", "lateral Bounds", "LATERAL BOUND", "LATERAL BOUNDS", "Lateral Bounds", "lateral bounds", "Lateral bounds", "lateral Bounds",

//Shrug
"Shrug", "shrug", "Shrugs", "shrugs", "SHRUG", "SHRUGS",

//TRX Row
"TRX Row", "trx row", "TRX row", "trx Row", "TRX Rows", "trx rows", "TRX rows", "trx Rows", "TRX ROW", "TRX ROWS",

//Machine Chest Press
"Machine Chest Press", "machine chest press", "Machine Chest Presses", "machine chest presses", "MACHINE CHEST PRESS", "MACHINE CHEST PRESSES",

//Machine Shoulder Press
"Machine Shoulder Press", "machine shoulder press", "Machine Shoulder Presses", "machine shoulder presses", "MACHINE SHOULDER PRESS", "MACHINE SHOULDER PRESSES",

//Machine Leg Press
"Machine Leg Press", "machine leg press", "Machine Leg Presses", "machine leg presses", "MACHINE LEG PRESS", "MACHINE LEG PRESSES",

//Machine Leg Curl
"Machine Leg Curl", "machine leg curl", "Machine Leg Curls", "machine leg curls", "MACHINE LEG CURL", "MACHINE LEG CURLS",

//Machine Leg Extension
"Machine Leg Extension", "machine leg extension", "Machine Leg Extensions", "machine leg extensions", "MACHINE LEG EXTENSION", "MACHINE LEG EXTENSIONS",

//Machine Bicep Curl
"Machine Bicep Curl", "machine bicep curl", "Machine Bicep Curls", "machine bicep curls", "MACHINE BICEP CURL", "MACHINE BICEP CURLS",

//Machine Tricep Extension
"Machine Tricep Extension", "machine tricep extension", "Machine Tricep Extensions", "machine tricep extensions", "MACHINE TRICEP EXTENSION", "MACHINE TRICEP EXTENSIONS",

//Machine Lat Pulldown
"Machine Lat Pulldown", "machine lat pulldown", "Machine Lat Pulldowns", "machine lat pulldowns", "MACHINE LAT PULLDOWN", "MACHINE LAT PULLDOWNS",

//Machine Row
"Machine Row", "machine row", "Machine Rows", "machine rows", "MACHINE ROW", "MACHINE ROWS",

//Machine Fly
"Machine Fly", "machine fly", "Machine Flies", "machine flies", "MACHINE FLY", "MACHINE FLIES",

//Machine Calf Raise
"Machine Calf Raise", "machine calf raise", "Machine Calf Raises", "machine calf raises", "MACHINE CALF RAISE", "MACHINE CALF RAISES",

//Machine Chest Fly
"Machine Chest Fly", "machine chest fly", "Machine Chest Flies", "machine chest flies", "MACHINE CHEST FLY", "MACHINE CHEST FLIES",

//Machine Shoulder Fly
"Machine Shoulder Fly", "machine shoulder fly", "Machine Shoulder Flies", "machine shoulder flies", "MACHINE SHOULDER FLY", "MACHINE SHOULDER FLIES",

//Machine Ab Crunch
"Machine Ab Crunch", "machine ab crunch", "Machine Ab Crunches", "machine ab crunches", "MACHINE AB CRUNCH", "MACHINE AB CRUNCHES",

//Machine Ab Twist
"Machine Ab Twist", "machine ab twist", "Machine Ab Twists", "machine ab twists", "MACHINE AB TWIST", "MACHINE AB TWISTS",

//Toe Tap
"Toe Tap", "toe tap", "TOE TAP", "Toe tap", "Toe Taps", "toe taps", "TOE TAPS", "Toe taps",

//Leg Lift
"Leg Lift", "leg lift", "LEG LIFT", "Leg lift", "Leg Lifts", "leg lifts", "LEG LIFTS", "Leg lifts",

//Hanging Knee Raise
"Hanging Knee Raise", "hanging knee raise", "HANGING KNEE RAISE", "Hanging Knee Raises", "hanging knee raises", "HANGING KNEE RAISES",

//Tricep Extension
"Tricep Extension", "tricep extension", "TRICEP EXTENSION", "Triceps Extension", "triceps extension", "TRICEPS EXTENSION", "Tricep Extensions", "tricep extensions", "TRICEP EXTENSIONS", "Triceps Extensions", "triceps extensions", "TRICEPS EXTENSIONS",

//Battle Rope
"Battle Rope", "battle rope", "BATTLE ROPE", "Battle rope", "Battle Ropes", "battle ropes", "BATTLE ROPES", "Battle ropes",

//Battling Rope
"Battling Rope", "battling rope", "BATTLING ROPE", "Battling rope", "Battling Ropes", "battling ropes", "BATTLING ROPES", "Battling ropes",

//Clean
"Cleans", "cleans", "CLEANS", "Clean", "clean", "CLEAN",

//Power Clean
"Power Clean", "power clean", "Power clean", "power Clean", "Power Cleans", "power cleans", "Power cleans", "power Cleans", "POWER CLEAN", "POWER CLEANS",

//Cable Crunch
"Cable Crunch", "cable crunch", "Cable crunch", "cable Crunch", "Cable Crunches", "cable crunches", "Cable crunches", "cable Crunches", "CABLE CRUNCH", "CABLE CRUNCHES",

//Cable Crossover
"Cable Crossover", "cable crossover", "Cable crossover", "cable Crossover", "Cable Crossovers", "cable crossovers", "Cable crossovers", "cable Crossovers", "CABLE CROSSOVER", "CABLE CROSSOVERS",

//Seated Cable Row
"Seated Cable Row", "seated cable row", "Seated Cable Rows", "seated cable rows", "SEATED CABLE ROW", "SEATED CABLE ROWS",

//Pushdown
"Pushdown", "pushdown", "Push down", "push down", "Pushdowns", "pushdowns", "Push downs", "push downs", "PUSHDOWN", "PUSH DOWN", "PUSHDOWNS", "PUSH DOWNS",

//Tricep Cable Pushdown
"Tricep Cable Pushdown", "tricep cable pushdown", "Tricep Cable Pushdowns", "tricep cable pushdowns", "TRICEP CABLE PUSHDOWN", "TRICEP CABLE PUSHDOWNS",

//Cable Curls
"Cable Curls", "cable curls", "Cable curls", "cable Curls", "Cable Curl", "cable curl", "Cable curl", "cable Curl", "CABLE CURLS", "CABLE CURL",

//Cable Fly
"Cable Fly", "cable fly", "Cable fly", "cable Fly", "Cable Flies", "cable flies", "Cable flies", "cable Flies", "CABLE FLY", "CABLE FLIES",

//Cable Lateral Raise
"Cable Lateral Raise", "cable lateral raise", "Cable Lateral Raises", "cable lateral raises", "CABLE LATERAL RAISE", "CABLE LATERAL RAISES",

//Cable Front Raise
"Cable Front Raise", "cable front raise", "Cable Front Raises", "cable front raises", "CABLE FRONT RAISE", "CABLE FRONT RAISES",

//Cable Rear Delt Fly
"Cable Rear Delt Fly", "cable rear delt fly", "Cable Rear Delt Flies", "cable rear delt flies", "CABLE REAR DELT FLY", "CABLE REAR DELT FLIES",

//Cable Face Pull
"Cable Face Pull", "cable face pull", "Cable Face Pulls", "cable face pulls", "CABLE FACE PULL", "CABLE FACE PULLS",

//Farmers Walk
"Farmers Walk", "farmers walk", "Farmers walk", "farmers Walk", "Farmers Walks", "farmers walks", "Farmers walks", "farmers Walks", "Farmer Walk", "farmer walk", "Farmer walk", "farmer Walk", "Farmer Walks", "farmer walks", "Farmer walks", "farmer Walks", "FARMER WALK", "FARMER WALKS",

//Face Pull
"Face Pull", "face pull", "Face pull", "face Pull", "Face Pulls", "face pulls", "Face pulls", "face Pulls", "FACE PULL", "FACE PULLS",

//Woodchopper
"Woodchopper", "woodchopper", "Woodchoppers", "woodchoppers", "WOODCHOPPER", "WOODCHOPPERS",

//Cable Woodchopper
"Cable Woodchopper", "cable woodchopper", "Cable Woodchoppers", "cable woodchoppers", "CABLE WOODCHOPPER", "CABLE WOODCHOPPERS",

//Cable Oblique Twist
"Cable Oblique Twist", "cable oblique twist", "Cable Oblique Twists", "cable oblique twists", "CABLE OBLIQUE TWIST", "CABLE OBLIQUE TWISTS",

//Cable Shoulder Press
"Cable Shoulder Press", "cable shoulder press", "Cable Shoulder Presses", "cable shoulder presses", "CABLE SHOULDER PRESS", "CABLE SHOULDER PRESSES",

//Reverse Wrist Curl
"Reverse Wrist Curl", "reverse wrist curl", "Reverse wrist curl", "reverse Wrist Curl", "Reverse Wrist Curls", "reverse wrist curls", "Reverse wrist curls", "reverse Wrist Curls", "REVERSE WRIST CURL", "REVERSE WRIST CURLS",

//Upright Row
"Upright Row", "upright row", "Upright row", "upright Row", "UPRIGHT ROW", "UPRIGHT ROW", "UPRIGHT ROW", "UPRIGHT ROW", "Upright Rows", "upright rows", "Upright rows", "upright Rows", "UPRIGHT ROWS", "UPRIGHT ROWS", "UPRIGHT ROWS", "UPRIGHT ROWS",

//Cable Upright Row
"Cable Upright Row", "cable upright row", "Cable upright row", "cable Upright row", "CABLE UPRIGHT ROW", "CABLE UPRIGHT ROW", "CABLE UPRIGHT ROW", "CABLE UPRIGHT ROW", "Cable Upright Rows", "cable upright rows", "Cable upright rows", "cable Upright rows", "CABLE UPRIGHT ROWS", "CABLE UPRIGHT ROWS", "CABLE UPRIGHT ROWS", "CABLE UPRIGHT ROWS",

//Cable Kickback
"Cable Kickback", "cable kickback", "Cable kickback", "cable Kickback", "CABLE KICKBACK", "CABLE KICKBACK", "CABLE KICKBACK", "CABLE KICKBACK", "Cable Kickbacks", "cable kickbacks", "Cable kickbacks", "cable Kickbacks", "CABLE KICKBACKS", "CABLE KICKBACKS", "CABLE KICKBACKS", "CABLE KICKBACKS",

//Cable Squat
"Cable Squat", "cable squat", "Cable squat", "cable Squat", "CABLE SQUAT", "CABLE SQUAT", "CABLE SQUAT", "CABLE SQUAT", "Cable Squats", "cable squats", "Cable squats", "cable Squats", "CABLE SQUATS", "CABLE SQUATS", "CABLE SQUATS", "CABLE SQUATS",

//Cable Deadlift
"Cable Deadlift", "cable deadlift", "Cable deadlift", "cable Deadlift", "CABLE DEADLIFT", "CABLE DEADLIFT", "CABLE DEADLIFT", "CABLE DEADLIFT", "Cable Deadlifts", "cable deadlifts", "Cable deadlifts", "cable Deadlifts", "CABLE DEADLIFTS", "CABLE DEADLIFTS", "CABLE DEADLIFTS", "CABLE DEADLIFTS",

//Cable Row
"Cable Row", "cable row", "Cable row", "cable Row", "CABLE ROW", "CABLE ROW", "CABLE ROW", "CABLE ROW", "Cable Rows", "cable rows", "Cable rows", "cable Rows", "CABLE ROWS", "CABLE ROWS", "CABLE ROWS", "CABLE ROWS",

//Cable Lat Pulldown
"Cable Lat Pulldown", "cable lat pulldown", "Cable lat pulldown", "cable Lat Pulldown", "CABLE LAT PULLDOWN", "CABLE LAT PULLDOWN", "CABLE LAT PULLDOWN", "CABLE LAT PULLDOWN", "Cable Lat Pulldowns", "cable lat pulldowns", "Cable lat pulldowns", "cable Lat Pulldowns", "CABLE LAT PULLDOWNS", "CABLE LAT PULLDOWNS", "CABLE LAT PULLDOWNS", "CABLE LAT PULLDOWNS",

//Cable Bicep Curl
"Cable Bicep Curl", "cable bicep curl", "Cable bicep curl", "cable Bicep Curl", "CABLE BICEP CURL", "CABLE BICEP CURL", "CABLE BICEP CURL", "CABLE BICEP CURL", "Cable Bicep Curls", "cable bicep curls", "Cable bicep curls", "cable Bicep Curls", "CABLE BICEP CURLS", "CABLE BICEP CURLS", "CABLE BICEP CURLS", "CABLE BICEP CURLS",

//Cable Tricep Extension
"Cable Tricep Extension", "cable tricep extension", "Cable tricep extension", "cable Tricep Extension", "CABLE TRICEP EXTENSION", "CABLE TRICEP EXTENSION", "CABLE TRICEP EXTENSION", "CABLE TRICEP EXTENSION", "Cable Tricep Extensions", "cable tricep extensions", "Cable tricep extensions", "cable Tricep Extensions", "CABLE TRICEP EXTENSIONS", "CABLE TRICEP EXTENSIONS", "CABLE TRICEP EXTENSIONS", "CABLE TRICEP EXTENSIONS",

//Side Lateral Raise
"Side Lateral Raise", "side lateral raise", "Side lateral raise", "side Lateral Raise", "Side Lateral Raises", "side lateral raises", "Side lateral raises", "side Lateral Raises", "SIDE LATERAL RAISE", "SIDE LATERAL RAISES",

//Cable Side Lateral Raise
"Cable Side Lateral Raise", "cable side lateral raise", "Cable Side Lateral Raises", "cable side lateral raises", "CABLE SIDE LATERAL RAISE", "CABLE SIDE LATERAL RAISES",

//Wrist Curl
"Wrist Curl", "wrist curl", "Wrist curl", "wrist Curl", "Wrist Curls", "wrist curls", "Wrist curls", "wrist Curls", "WRIST CURL", "WRIST CURLS",

//Cable Wrist Curl
"Cable Wrist Curl", "cable wrist curl", "Cable Wrist Curls", "cable wrist curls", "CABLE WRIST CURL", "CABLE WRIST CURLS",

//Cable Wrist Extension
"Cable Wrist Extension", "cable wrist extension", "Cable Wrist Extensions", "cable wrist extensions", "CABLE WRIST EXTENSION", "CABLE WRIST EXTENSIONS",

//Cable Wrist Rotation
"Cable Wrist Rotation", "cable wrist rotation", "Cable Wrist Rotations", "cable wrist rotations", "CABLE WRIST ROTATION", "CABLE WRIST ROTATIONS",

//Cable Toe Raise
"Cable Toe Raise", "cable toe raise", "Cable Toe Raises", "cable toe raises", "CABLE TOE RAISE", "CABLE TOE RAISES",

//Cable Pullover
"Cable Pullover", "cable pullover", "Cable Pullovers", "cable pullovers", "CABLE PULLOVER", "CABLE PULLOVERS",

//Cable Hip Abduction
"Cable Hip Abduction", "cable hip abduction", "Cable Hip Abductions", "cable hip abductions", "CABLE HIP ABDUCTION", "CABLE HIP ABDUCTIONS",

//Cable Hip Adduction
"Cable Hip Adduction", "cable hip adduction", "Cable Hip Adductions", "cable hip adductions", "CABLE HIP ADDUCTION", "CABLE HIP ADDUCTIONS",

//Cable Leg Kickback
"Cable Leg Kickback", "cable leg kickback", "Cable Leg Kickbacks", "cable leg kickbacks", "CABLE LEG KICKBACK", "CABLE LEG KICKBACKS",

//Cable Leg Curl
"Cable Leg Curl", "cable leg curl", "Cable Leg Curls", "cable leg curls", "CABLE LEG CURL", "CABLE LEG CURLS",

//Cable Calf Raise
"Cable Calf Raise", "cable calf raise", "Cable Calf Raises", "cable calf raises", "CABLE CALF RAISE", "CABLE CALF RAISES",

//Cable Reverse Fly
"Cable Reverse Fly", "cable reverse fly", "Cable Reverse Flies", "cable reverse flies", "CABLE REVERSE FLY", "CABLE REVERSE FLIES",

//Cable Lunge
"Cable Lunge", "cable lunge", "Cable Lunges", "cable lunges", "CABLE LUNGE", "CABLE LUNGES",

//Cable Shoulder Shrug
"Cable Shoulder Shrug", "cable shoulder shrug", "Cable Shoulder Shrugs", "cable shoulder shrugs", "CABLE SHOULDER SHRUG", "CABLE SHOULDER SHRUGS",

//Cable Leg Press
"Cable Leg Press", "cable leg press", "Cable Leg Presses", "cable leg presses", "CABLE LEG PRESS", "CABLE LEG PRESSES",

//Cable Step-Up
"Cable Step-Up", "cable step-up", "Cable Step-Ups", "cable step-ups", "CABLE STEP-UP", "CABLE STEP-UPS",

//Cable Good Morning
"Cable Good Morning", "cable good morning", "Cable Good Mornings", "cable good mornings", "CABLE GOOD MORNING", "CABLE GOOD MORNINGS",

//Cable Preacher Curl
"Cable Preacher Curl", "cable preacher curl", "Cable Preacher Curls", "cable preacher curls", "CABLE PREACHER CURL", "CABLE PREACHER CURLS",

//Preacher Curl
"Preacher Curl", "preacher curl", "Preacher curl", "preacher Curl", "Preacher Curls", "preacher curls", "Preacher curls", "preacher Curls", "PREACHER CURL", "PREACHER CURLS",

//Concentration Curl
"Concentration Curl", "concentration curl", "Concentration curl", "concentration Curl", "Concentration Curls", "concentration curls", "Concentration curls", "concentration Curls", "CONCENTRATION CURL", "CONCENTRATION CURLS",

//Cable Close-Grip Bench Press
"Cable Close-Grip Bench Press", "cable close-grip bench press", "Cable Close-Grip Bench Presses", "cable close-grip bench presses", "CABLE CLOSE-GRIP BENCH PRESS", "CABLE CLOSE-GRIP BENCH PRESSES",

//Bear Crawl
"Bear Crawl", "bear crawl", "Bear crawl", "bear Crawl", "Bear Crawls", "bear crawls", "Bear crawls", "bear Crawls", "BEAR CRAWL", "BEAR CRAWLS",

//Sled Pull
"Sled Pull", "sled pull", "Sled pull", "sled Pull", "Sled Pulls", "sled pulls", "Sled pulls", "sled Pulls", "SLED PULL", "SLED PULLS",

//Cable Reverse Curl
"Cable Reverse Curl", "cable reverse curl", "Cable Reverse Curls", "cable reverse curls", "CABLE REVERSE CURL", "CABLE REVERSE CURLS",

//Cable Twist
"Cable Twist", "cable twist", "Cable Twists", "cable twists", "CABLE TWIST", "CABLE TWISTS",

//Cable External Rotation
"Cable External Rotation", "cable external rotation", "Cable External Rotations", "cable external rotations", "CABLE EXTERNAL ROTATION", "CABLE EXTERNAL ROTATIONS",

//Cable Internal Rotation
"Cable Internal Rotation", "cable internal rotation", "Cable Internal Rotations", "cable internal rotations", "CABLE INTERNAL ROTATION", "CABLE INTERNAL ROTATIONS",

//Leg Curl
"Leg Curl", "leg curl", "Leg Curls", "leg curls", "Leg curl", "leg Curl", "Leg curls", "leg Curls", "LEG CURL", "LEG CURLS",

//Hip Thrust
"Hip Thrust", "hip thrust", "Hip thrust", "hip Thrust", "Hip Thrusts", "hip thrusts", "Hip thrusts", "hip Thrusts", "HIP THRUST", "HIP THRUSTS",

//Glute Bridge
"Glute Bridge", "glute bridge", "Glute bridge", "glute Bridge", "Glute Bridges", "glute bridges", "Glute bridges", "glute Bridges", "GLUTE BRIDGE", "GLUTE BRIDGES",


//Add more here...

];
  
  export default validExercises;
  