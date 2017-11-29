Park.destroy_all
User.destroy_all
ParkComment.destroy_all
Trail.destroy_all
TrailComment.destroy_all



providence_canyon = Park.create({name: "Providence Canyon", 
description: "\tGeorgia’s “Little Grand Canyon” is a testament to the power of man’s influence on the land. Massive gullies as deep as 150 feet were caused simply by poor farming practices during the 1800s, yet today they make some of the prettiest photographs within the state. The rare Plumleaf Azalea grows only in this region and blooms during July and August when most azaleas have lost their color. The canyon soil’s pink, orange, red and purple hues make a beautiful natural painting at this quiet park.
\tVisitors can enjoy views of the canyons from the rim trail, taking care to stay behind fences and off the fragile canyon edge. Hikers who explore the deepest canyons will usually find a thin layer of water along the trail, indication of the water table below. Guests who hike to canyons 4 and 5 may want to join the Canyon Climbers Club. Backpackers can stay overnight along the backcountry trail which highlights portions of the canyon and winds through mixed forest. Camping, cottages and efficiency units are available nearby at Florence Marina State Park on 45,000 acre Lake Walter F. George.", 
image: "https://i.imgur.com/tLEc6Mx.jpg",
address: "8930 Canyon Rd, Lumpkin, GA 31815", 
lat: 32.0675, 
lon: -84.9037,
zipcode: 31815

})

sweetwater_creek = Park.create({name: "Sweetwater Creek", 
description: "Sweetwater Creek State Park is a 2,549 acre Georgia state park located in the New Manchester area of east Douglas County, 15 miles from downtown Atlanta. The park is named after Sweetwater Creek which runs through the park.", 
image: "https://i.imgur.com/wIsLO96.jpg",
address: "1750 Mt Vernon Rd, Lithia Springs, GA 30122", 
lat: 33.7525, 
lon: -84.6287,
zipcode: 30122
})


cloudland_canyon = Park.create({name: "Cloudland Canyon", 
description: "Cloudland Canyon State Park is in northwest Georgia, on the western edge of Lookout Mountain. Boulder-strewn Sitton Gulch Creek cuts a deep gorge into the mountain. Sitton's Gulch Trail runs parallel to the creek. The short, steep Waterfalls Trail, with stairs down into the canyon, leads to Cherokee Falls and Hemlock Falls, where water cascades down into pools. Nearby, Sitton’s Cave has mineral formations.", 
image: "https://i.imgur.com/Cg2cuDO.jpg",
address: "122 Cloudland Canyon Park Rd, Rising Fawn, GA 30738", 
lat: 34.8395, 
lon: -85.4840,
zipcode: 30738
})


panola_mountain = Park.create({name: "Panola Mountain", 
description: "\tJust 15 minutes from Atlanta is a recreational haven for all ages and interests. Visitors can picnic while children work off energy on the playground. The park offers archery, boat rental, geocaching, orienteering, birding and tree-climbing programs. A paved trail is open for biking, roller blading, jogging and dog-walking, while forested fitness trails are open for hiking and running.", 
image: "https://i.imgur.com/eaNYGU7.jpg",
address: "2620 Highway 155 SW
Stockbridge, GA 30281
Henry County", 
lat: 33.6250, 
lon: -84.1715,
zipcode: 30281
})


vogel = Park.create({name: "Vogel", 
description: "\tVogel State Park is a 233-acre or 94 hectares state park located at the base of Blood Mountain in the Chattahoochee National Forest. It became one of the first two parks in Georgia when it founded a state park system in 1931", 
image: "https://i.imgur.com/6ETCg1X.jpg",
address: "405 Vogel State Park Rd, Blairsville, GA 30512", 
lat: 34.7649, 
lon: -83.9255,
zipcode: 30512
})



tallulah_gorge = Park.create({name: "Tallulah Gorge", 
description: "One of the most spectacular canyons in the eastern U.S., Tallulah Gorge is two miles long and nearly 1,000 feet deep. Visitors can hike rim trails to several overlooks, or they can obtain a permit to hike to the gorge floor (100 per day, not available during water releases). A suspension bridge sways 80 feet above the rocky bottom, providing spectacular views of the river and waterfalls. Tightrope walkers have twice crossed the gorge, and visitors can still see towers used by Karl Wallenda. A paved path follows an on old railroad bed, perfect for strollers and bicycles, while mountain bikers can test their skills on a challenging 10 mile trail.", 
image: "http://gastateparks.org/sites/default/files/parks/TallulahGorge.jpg",
address: "338 Jane Hurt Yarn Drive
Tallulah Falls, GA 30573
Rabun County", 
lat: 34.7335, 
lon: -83.3715,
zipcode: 30573
})

skidaway_island = Park.create({name: "Skidaway Island", 
description: "\tThis popular park on Lake Allatoona is ideal for swimming, water skiing and fishing. Visitors can bring their own boats or rent from nearby marinas. A sand swimming beach is nestled in a cove and surrounded by trees, providing a great place to cool off during summer. Picnic shelters and group shelters may be rented for meetings, parties, reunions and other celebrations. Guests often stay overnight in rental cottages, a spacious campground, or the park’s lakeside yurt.

\tWhile best known for the 12,000 acre lake, Red Top Mountain is also a hiker’s haven. More than 15 miles of trails wind through the forested park, providing opportunities for exercise and nature photography. A short, paved trail behind the park office is suitable for wheelchairs and strollers, welcoming guests to explore a reconstructed 1860s homestead. The gravel-topped 4 mile Iron Hill Trail is open to both hikers and bikers, offering pretty views of the lake’s shoreline.", 
image: "https://i.imgur.com/p4QFU11.jpg",
address: "50 Lodge Road SE
Acworth, GA 30102
Bartow County", 
lat: 34.7335, 
lon: -83.3715,
zipcode: 30102
})

red_top_mountain = Park.create({name: "Red Top Mountain", 
description: "", 
image: "https://i.imgur.com/oH7FhCy.jpg",
address: "338 Jane Hurt Yarn Drive
Tallulah Falls, GA 30573
Rabun County", 
lat: 34.7335, 
lon: -83.3715,
zipcode: 30573
})


amicalola_falls = Park.create({name: "Amicalola Falls", 
description: "\tAmicalola Falls State Park is nestled in North Georgia’s mossy, waterfall-filled Chattahoochee National Forest, set in the rolling, vibrant-green southern Appalachian Mountains. It’s one of the most popular, and most visited, of Georgia’s State Parks – and for a good reason. At the heart of the park, the Georgia’s tallest waterfall spills down a towering bluff, falling 720 feet into a mossy, boulder-filled forest. It’s the highest cascading falls east of the Mississippi River.", 
image: "https://i.imgur.com/S5vV65x.jpg",
address: "280 Amicalola Falls State Park Rd, Dawsonville, GA 30534", 
lat: 34.7335, 
lon: -83.3715,
zipcode: 30534
})


stephen_c_foster = Park.create({name: "Stephen C Foster", 
description: "\tThis remote park is a primary entrance to the legendary Okefenokee Swamp—one of Georgia's seven natural wonders. Spanish moss-laced trees reflect off the black swamp waters, while cypress knees rise upward from the glass-like surface. Here, paddlers and photographers will enjoy breathtaking scenery and abundant wildlife. Alligators, turtles, raccoons, black bears, deer, ibis, herons, wood storks, red-cockaded woodpeckers and numerous other creatures make their homes in the 402,000 acre refuge. Stargazers will appreciate the particularly dark sky.

\tSame-day reservations are recommended for guided pontoon boat tours of the swamp. Sunset tours may be available. More adventurous visitors may wish to rent canoes, kayaks or jon boats for further exploration of the swamp, including a trip to historic Billy’s Island. Fishing in the lake is excellent, particularly for warmouth, bluegill, catfish, chain pickerel and bowfin. Boating is dependent upon water levels.",
image: "https://i.imgur.com/Th47a4a.jpg",
address: "17515 GA-177, Fargo, GA 31631", 
lat: 34.7335, 
lon: -83.3715,
zipcode: 31631
})


## Users 

tommy = User.create({
    email: "tommy_pickles@gmail.com",
    password: "blahblah1234",
    password_confirmation: "blahblah1234"
})

veronica = User.create({
    email: "veronica@people.com",
    password: "blahblah1234",
    password_confirmation: "blahblah1234"
})

## Park Comment 

tommy_comment = ParkComment.create({
    title: "What a hike!",
    content: "That was a insane amount of stairs!",
    user_id: tommy.id,
    park_id: tallulah_gorge.id
})


## Trails 

# # yes:
# pet_friendly: "https://i.imgur.com/vEB2ZHp.png"

# #no :
# pet_friendly: "https://i.imgur.com/kVYdbSU.png"



providence_canyon_loop_trail = Trail.create({
    difficulty: "https://i.imgur.com/K87he5Q.png",
    elevation_profile: "https://media4.trover.com/T/54fa3649ae8d8a0e88001865/fixedw_large_4x.jpg",
    image: "http://static.panoramio.com/photos/large/1867033.jpg",
    pet_friendly: "https://i.imgur.com/vEB2ZHp.png",
    distance: 4.85,
    park_id: providence_canyon.id,
    name: "Providence Canyon Loop Trail",
    description: "\tThe White Blaze Canyon Loop Trail circles nine of the canyons.
    To hike canyons 1-5 from the Visitor Center, hike ¼ of a mile
    down to the creek bed, and turn left, following the creek bed
    into the canyons. Hikers may reach canyons 6-9 by turning left
    into the second creek further down the Canyon Loop Trail. After
    arriving at the end of each canyon, backtrack out to return to the
    trail. Turn right on the Canyon Loop Trail to return to the Visitor
    Center, or turn left on the trail to continue the loop. While hiking
    through the day-use area, follow the fence line for the best
    overlooks. The soils are very fragile on the canyon walls, so no
    climbing is allowed from the canyon floor or rim. While hiking
    into the canyons, it is best to stay in the middle of the creek
    beds, because the soils on the side can be very muddy, similar
    to quicksand. The canyon floors are prone to be wet or muddy,
    so wear appropriate footwear."
})

homestead_trail = Trail.create({
    difficulty: "https://i.imgur.com/Pjy7TV9.png",
    elevation_profile: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Providence_Canyon_old_car.jpg",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Providence_canyon_car1.jpg/2560px-Providence_canyon_car1.jpg",
    pet_friendly: "https://i.imgur.com/vEB2ZHp.png",
    distance: 0.25,
    park_id: providence_canyon.id,
    name: "Homestead Trail",
    description: "Take a trek back to an abandoned homestead. One of the quirkier attractions of the state park is an abandoned homestead including nearly a dozen rusty, 1950s-era cars and trucks. Due to the environmental damage that removing the vehicles would cause, park officials have decided to leave them alone."
})


backcountry_red_blaze_trail = Trail.create({
    difficulty: "https://i.imgur.com/StjacU0.png",
    elevation_profile: "https://i.imgur.com/dm0xbJM.jpg",
    image: "https://i.imgur.com/y03TjAb.jpg",
    pet_friendly: "https://i.imgur.com/kVYdbSU.png",
    distance: 7.05,
    park_id: providence_canyon.id,
    name: "Back Country Red Blaze Trail",
    description: "The 7-mile Backcountry Trail leads into the forested area off of
    the White Blaze Canyon Loop Trail. The beginning of it is ¼ of
    a mile down the Loop Trail at the creek bed itself. Instead of
    turning left into the canyons, turn right on the creek bed. This
    is the beginning of the Backcountry Trail, which winds through
    some River Birch. After about two miles, it becomes rugged,
    ascending a steep grade. It follows an old logging road, where
    most of the primitive campsites are located. At site #2, a
    shortcut is available which will shorten the trail about ¾ of a
    mile. Further down the trail, as the trail becomes rugged again,
    six canyons may be viewed, but they are not accessible to the
    hikers. The Backcountry Trail will dead-end into the Loop Trail,
    where hikers will turn right. This will continue through the day
    use area. Follow the fence line through the picnic area for the
    best overlooks, returning to the Visitor Center."
})


sweetwater_creek_white_trail = Trail.create({
    difficulty: "moderate",
    elevation_profile: "https://i.imgur.com/EZXlKeN.png",
    image: "https://i.imgur.com/HAbIpYy.jpg",
    pet_friendly: "https://i.imgur.com/vEB2ZHp.png",
    distance: 4.1,
    park_id: sweetwater_creek.id,
    name: "Sweetwater Creek White Trail",
    description: "The White Trail begins at the front door of the visitor center. Turn right at the main trailhead to stay on the White Trail (the Red Trail descends to the left). After you enter the forest, the trail will fork. You can go either way, but going right allows you to get a good warm up with gentle inclines. It also allows you to get some of the less-scenic parts out of the way. 
    "

})


sweetwater_creek_brown_trail = Trail.create({
    difficulty: "https://i.imgur.com/StjacU0.png",
    elevation_profile: "https://i.imgur.com/JGDAiOv.jpg",
    image: "https://i.imgur.com/x3LX7z1.jpg",
    pet_friendly: "https://i.imgur.com/kVYdbSU.png",
    distance: 1.2,
    park_id: sweetwater_creek.id,
    name: "Sweetwater Creek Brown Trail",
    description: "The Brown Trail is a short connector trail that can be used to cut-off some mileage on the southern end of the White Trail. If taken from north to south, it is a gradual downhill with one steeper section before it rejoins with the White Trail. 
    
    From here, the Brown Trail continues another quarter mile or so until is dead-ends at private property. Unless you are looking to add mileage to your hike, you can probably skip this portion and head left of right on the White Trail to continue your hike."

})

hurricane_falls_trail = Trail.create({
    difficulty: "https://i.imgur.com/Pjy7TV9.png",
    elevation_profile: "https://photos.smugmug.com/Tallulah-Gorge-State-Park/i-mBv2JWt/0/650b28c9/X3/DSC_4823-X3.jpg",
    image: "https://photos.smugmug.com/Tallulah-Gorge-State-Park/i-F5pHcmT/0/cda326a7/X3/DSC_4681-X3.jpg",
    pet_friendly: "https://i.imgur.com/vEB2ZHp.png",
    distance: 2.0,
    park_id: tallulah_gorge.id,
    name: "Hurricane Falls Trail",
    description: "This hike offers incredible views of beautiful waterfalls roaring through a 1,000ft deep gorge. The hike consists of a grouping of stairs that take you down to Hurricane Falls which is located at the bottom of the gorge. Half way to the bottom, the hike crosses the gorge on a suspension providing a different perspective."

})



cloudland_canyon_west_rim_trail = Trail.create({
    difficulty: "https://i.imgur.com/StjacU0.png",
    elevation_profile: "https://i.imgur.com/4jGJcBy.jpg",
    image: "https://i.imgur.com/MTYzbb4.jpg",
    pet_friendly: "https://i.imgur.com/kVYdbSU.png",
    distance: 5,
    park_id: cloudland_canyon.id,
    name: "West Rim Loop Trail",
    description: "Formerly rated as one of the top ten hikes in the U.S. by
    Backpacker Magazine, the West Rim Loop Trail is a five-mile
    lollipop style hike provoding several overlooks that showcase
    the park’s rugged geology, deep canyons, dense woodland, and
    views beyond. From the Main Trailhead, hikers drop down to
    Daniel Creek and cross over it. The trail then proceed uphill to
    a rocky promontory. Just after one mile, the loop component
    of the hike begins. At about mile four, you complete the loop
    and then head back to the Main Trailhead, retracing your steps
    of the first mile. The West Rim Loop Trail is marked by yellow
    blazes and is most easily accessed from the Main Trailhead.
    Overnight guests can also access it from the Yurt Village,
    West Rim Campground, Walk-In Campground, and West Rim
    cottages. The trail is marked by yellow blazes and is rocky and
    rooty in several locations."
})



panola_lake_trail = Trail.create({
    difficulty: "https://i.imgur.com/StjacU0.png",
    elevation_profile: "https://i.imgur.com/K87he5Q.png",
    image: "https://photos.smugmug.com/Panola-Mountain-State-Park/i-hsG5FxL/0/006517b3/L/RonnieOwings03-L.jpg",
    pet_friendly: "https://i.imgur.com/vEB2ZHp.png",
    distance: 1.25,
    park_id: panola_mountain.id,
    name: "Panola Mountain Lake Trail",
    description: "Be sure to visit the other half of our park where you can
    soak up the sun by the lake, fish for bass and catfish,
    rent a boat to paddle around, or hike and bike the PATH
    Foundation trails surrounding Alexander Lake. On this
    side of the park, you will also find our archery range,
    primitive hike-in campsites, as well as the location of
    our Tree Top Excursions where you can harness-in and
    climb your way up a 100-foot tree. Parking is available
    at the intersection of Alexander Lake and Flatbridge
    Roads."
})



panola_lake_trail = Trail.create({
    difficulty: "https://i.imgur.com/StjacU0.png",
    elevation_profile: "https://i.imgur.com/K87he5Q.png",
    image: "https://photos.smugmug.com/Panola-Mountain-State-Park/i-hsG5FxL/0/006517b3/L/RonnieOwings03-L.jpg",
    pet_friendly: "https://i.imgur.com/vEB2ZHp.png",
    distance: 1.25,
    park_id: panola_mountain.id,
    name: "Panola Mountain Lake Trail",
    description: "Be sure to visit the other half of our park where you can
    soak up the sun by the lake, fish for bass and catfish,
    rent a boat to paddle around, or hike and bike the PATH
    Foundation trails surrounding Alexander Lake. On this
    side of the park, you will also find our archery range,
    primitive hike-in campsites, as well as the location of
    our Tree Top Excursions where you can harness-in and
    climb your way up a 100-foot tree. Parking is available
    at the intersection of Alexander Lake and Flatbridge
    Roads."
})


coosa_backcountry_trail = Trail.create({
    difficulty: "https://i.imgur.com/StjacU0.png",
    elevation_profile: "https://photos.smugmug.com/Vogel-State-Park/i-QKVsCtb/0/4cb0bf27/X3/_MG_9846-X3.jpg",
    image: "https://photos.smugmug.com/Vogel-State-Park/i-VRpxwkV/0/f6f78df5/X3/_MG_9878-X3.jpg",
    pet_friendly: "https://i.imgur.com/vEB2ZHp.png",
    distance: 12.9,
    park_id: vogel.id,
    name: "Coosa Backcountry Trail",
    description: "Beginning at the Backcountry
    Trailhead, follow the greenblazed
    access trail to where
    the green-blazed Coosa
    Backcountry Trail begins its
    loop up and over the summit of
    Duncan Ridge and connection
    can be made with several trails
    in the Chattahoochee National
    Forest. Hikers will climb and
    descend over 1 mile in elevation
    crossing 3 ridgelines. Please
    read the precautions for the
    Bear Gap Trail."
})


avian_loop_trail = Trail.create({
    difficulty: "https://i.imgur.com/K87he5Q.png",
    elevation_profile: "https://photos.smugmug.com/Skidaway-Island-State-Park/i-mS6Pr2x/0/de3cb9d8/X3/sip0907_122-X3.jpg",
    image: "https://photos.smugmug.com/Skidaway-Island-State-Park/i-nnt5HjV/0/0c3a5026/X3/sip0907_093-X3.jpg",
    pet_friendly: "https://i.imgur.com/vEB2ZHp.png",
    distance: 4.3,
    park_id: skidaway_island.id,
    name: "Avian Loop Trail",
    description: "This one-mile loop takes you to the intracoastal waterway where
    you may catch a glimpse of osprey hunting for fish or dolphin
    swimming down river. A sandy causeway crosses the largest
    tidal creek that flows into the park. This is a great place to see
    the force and speed of tides flowing in and out of the marsh
    every six hours. Hanging from the trees is Spanish Moss, an
    epiphyte once used to stuff mattresses. Look but don’t touch
    because red bugs (or chiggers) reside in this enchanting plant.
    That’s why some Georgians still say, 'Sleep tight; don’t let the
    bed bugs bite!'"
})

sweetgum_trail = Trail.create({
    difficulty: "https://i.imgur.com/K87he5Q.png",
    elevation_profile: "https://photos.smugmug.com/Red-Top-Mountain-State-Park/i-D3PVCm7/0/a1b42ec9/X3/DSC_0341-X3.jpg",
    image: "https://photos.smugmug.com/Red-Top-Mountain-State-Park/i-VdCd49z/0/ed04989f/X3/a%20DSC_0359-X3.jpg",
    pet_friendly: "https://i.imgur.com/vEB2ZHp.png",
    distance: 4.3,
    park_id: red_top_mountain.id,
    name: "Sweetgum Trail",
    description: "This trail begins at the Visitor Center parking area
    and also follows a route north. After 0.5 mile the trail
    then makes a loop through the Park Office area of
    the park and then back to the 0.5 mile section for a
    return to the Visitor Center. The Sweet Gum Trail also
    travels south from the Visitor Center and connects
    to the Campground Trail which connects to the
    campground, allowing campers to access the park
    trail without driving. There are sections of the trail
    where Homestead and Sweet Gum share the same
    pathway. These sections are marked with yellow and
    red blazes. Trail is not accessible to bicycles."
})

east_ridge_trail = Trail.create({
    difficulty: "https://i.imgur.com/StjacU0.png",
    elevation_profile: "https://media-cdn.tripadvisor.com/media/photo-s/06/ac/f1/10/amicalola-falls-state.jpg",
    image: "https://www.lillypadvillage.com/wp-content/uploads/2017/08/amicalola-falls.jpg",
    pet_friendly: "https://i.imgur.com/kVYdbSU.png",
    distance: 4.3,
    park_id: amicalola_falls.id,
    name: "East Ridge Trail ",
    description: "This trail is the start of the Springer Mountain approach trail, which marks the beginning of the Appalachian Trail. This very popular hiking route goes from the visitor center to the top of the falls. There are many photo opportunities along the way looking out along the mountain vistas.
    
    The first part of the trail is wooded and has several switchbacks to reduce the grade. About half way to the top the trail merges with a service road and continues along it for the remainder of the trail to the top.
    
    Once your reach the top of the falls, you can descend down the massive West Ridge staircase with over 400 stairs leading down to the base of the falls.
    
    This route is easier than hiking up the stairs from the West Ridge trail, there are warning signs stating that the stairs are strenuous."
})


swamp_trail = Trail.create({
    difficulty: "https://i.imgur.com/K87he5Q.png",
    elevation_profile: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Stephen_C._Foster_State_Park_Trembling_Earth_Nature_Trail_trailhead.JPG",
    image: "https://photos.smugmug.com/Stephen-C-Foster-State-Park/i-hqNLk7H/0/fee15f92/X3/Stephen_C_Foster-0511-X3.jpg",
    pet_friendly: "https://i.imgur.com/kVYdbSU.png",
    distance: 0.75,
    park_id: stephen_c_foster.id,
    name: "Trembling Earth Nature Trail",
    description: "The Okefenokee Swamp really is a land of 
    trembling earth. Peat deposits up to 15 feet 
    thick cover the floor of the swamp and often 
    towering trees grow from them. The peat 
    deposits are unstable in places, however, 
    and bushes and trees often tremble from the 
    footsteps of explorers.
    "
})

















veronica_comment = TrailComment.create({
    title: "He proposed here",
    content: "It was so romantic!",
    user_id: veronica.id,
    trail_id: providence_canyon_loop_trail.id 
})

veronica_comment = TrailComment.create({
    title: "Our Favorite",
    content: "We've been here about a zillion times and it's just one of the most magnificent!",
    user_id: veronica.id,
    trail_id: providence_canyon_loop_trail.id 
})

veronica_comment = TrailComment.create({
    title: "A Hit!",
    content: "The kids absolutely loved it!",
    user_id: veronica.id,
    trail_id: providence_canyon_loop_trail.id 
})




veronica_comment = ParkComment.create({
    title: "A Hit!",
    content: "The kids absolutely loved it!",
    user_id: veronica.id,
    park_id: providence_canyon.id 
})


veronica_comment = ParkComment.create({
    title: "Our Favorite",
    content: "We've been here about a zillion times and it's just one of the most magnificent!",
    user_id: veronica.id,
    park_id: providence_canyon.id 
})

